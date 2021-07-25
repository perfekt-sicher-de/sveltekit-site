<?php


//passthru("svelte-kit build");
$min = false;
if ($min) {
     passthru("html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --use-short-doctype --minify-css true --input-dir build --output-dir build  --file-ext html");
}
$firebase = json_decode(file_get_contents(__DIR__.'/firebase.json'), true);
$headersSection = &$firebase['hosting']['headers'];
$cspHeaderLocation = &$headersSection[0]['headers'];


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
        $content = preg_replace_callback('#<([^>]*?)(class="(([^"]*?))")([^>]*?)(style="([^>"]*)")([^>]*?)(class="([^"]*)")?([^>]*)>#si', function($matches){
            $className = substr(md5($matches[7]),0,6);
            //print ".$className"."{"."$matches[7]}\n";
            if($matches[3]) {
                $className .= ' '.$matches[3];
            }
            if($matches[10]) {
                $className .= ' '.$matches[10];
            }
            return "<$matches[1]class=\"$className\"$matches[4]$matches[5]$matches[8]$matches[11]>";
        }, $content);
        file_put_contents($file, $content);
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


$svelte_animation_style_hash = "'unsafe-hashes' 'unsafe-inline'";

$csph = [
    "key"=> "content-security-policy",
    "value"=> "default-src 'self'; connect-src https://xn--it-sicherheit-fr-unternehmen-g7c.de/; img-src 'self' data:; script-src 'self' $scriptHashes; style-src 'self' $svelte_animation_style_hash "
];

$cspHeaderLocation[0] = $csph;

file_put_contents(__DIR__.'/firebase.json', json_encode($firebase, JSON_PRETTY_PRINT));
