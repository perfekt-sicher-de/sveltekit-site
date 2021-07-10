<?php

passthru("svelte-kit build");
passthru("html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --use-short-doctype --minify-css true --input-dir build --output-dir build  --file-ext html");

$firebase = json_decode(file_get_contents(__DIR__.'/firebase.json'), true);
$headersSection = &$firebase['hosting']['headers'];
function setHeader(&$headersSection, $source, $header) {
    foreach ($headersSection as &$def) {
        if ($def['source'] == $source) {
            $def['headers'][0]=$header;
            return;
        }
    }
    $headersSection[] = [ 'source' => $source, 'headers' => [$header] ];
}


// Construct the iterator
$buildDir = __DIR__ . '/build';
$it = new RecursiveDirectoryIterator($buildDir);

// Loop through files
$list = [];

foreach(new RecursiveIteratorIterator($it) as $file) {
    if ($file->getExtension() == 'html') {
        $content = file_get_contents($file);
        $key = substr("$file", strlen($buildDir));
        if ($file->getFileName() == 'index.html') {
            $key = substr($key, 0, -10);
        }
        //flag s= multiline
        preg_match_all('#<[^>]*? style=([^>]*)>#si', $content, $matches);
        foreach ($matches[1] as $inlinestyle) {
            die("$file: inline style found, not yet supported: $inlinestyle[0]");
        }
        preg_match_all('#<script[^>]*>(.*?)</script>#si', $content, $matches);
        foreach ($matches[1] as $js) {
            $hash = "sha256-" . base64_encode(hash('sha256', $js, true));
            //print "$file: $hash:\n$js\n";
            $list[$hash] = $file;
        }

        preg_match_all('#<link rel="modulepreload" href="([^>"]+)">#si', $content, $matches);
        //$content = preg_replace('#<link rel="modulepreload" href="([^>]+)">#si','',$content);
        foreach ($matches[1] as $resource) {
            //Header add Link "</css/styles.css>; rel=preload; as=style"
        }
    }
}
$hashes = array_keys($list);
$scriptHashes = "'" . implode("' '", $hashes) . "'";


$svelte_animation_style_hash = 'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=';

$csph = [
    "key"=> "content-security-policy",
    "value"=> "default-src 'self'; connect-src https://xn--it-sicherheit-fr-unternehmen-g7c.de/; img-src 'self' data:; script-src 'self' $scriptHashes; style-src 'self' '$svelte_animation_style_hash' "
];

setHeader($headersSection, '*', ['key'=>'X-Frame-Options', 'value'=>'DENY']);

setHeader($headersSection, '*', $csph);

file_put_contents(__DIR__.'/firebase.json', json_encode($firebase, JSON_PRETTY_PRINT));
