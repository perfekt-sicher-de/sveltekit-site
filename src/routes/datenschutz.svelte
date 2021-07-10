<script>
	import { fade } from 'svelte/transition';
	import stringResources from '../stringResources';
</script>

<svelte:head>
	<title>{stringResources.datenPage.titleTag} - {stringResources.appName}</title>
</svelte:head>

<div class="columns m-4" in:fade>
	<div class=" column is-10 is-offset-1 p-4">
		<article class="message">
			<div class="message-header">
				<span class="icon">
					<i class="fas fa-lock" />
				</span> Datenschutz
			</div>
			<div class="message-body content has-text-left">
				<h1>Datenschutzerklärung</h1>
				<h2>Datenschutz</h2>
				<p>
					Wir haben diese Datenschutzerklärung (Fassung 06.02.2021-311259165) verfasst, um zu
					erklären, welche Informationen wir sammeln, wie wir Daten verwenden und welche
					Entscheidungsmöglichkeiten Sie als Besucher dieser Webseite haben.
				</p>
				<p>
					Diese Erklärung soll Ihnen hingegen die wichtigsten Dinge so einfach und klar wie möglich
					beschreiben. Soweit es möglich ist, werden technische Begriffe leserfreundlich erklärt.
					Außerdem möchten wir vermitteln, dass wir mit dieser Website nur dann Informationen
					sammeln und verwenden, wenn es notwendig ist.
				</p>
				<h2>Automatische Datenspeicherung</h2>
				<p>
					Wenn Sie heutzutage Websites besuchen, werden gewisse Informationen automatisch erstellt
					und gespeichert, so auch auf dieser Website. Diese gesammelten Daten sollten möglichst
					sparsam und nur mit Begründung gesammelt werden werden. Mit Website meinen wir übrigens
					die Gesamtheit aller Webseiten auf dieser Domain, d.h. alles von der Startseite (Homepage)
					bis hin zur aller letzten Unterseite (wie dieser hier). Mit Domain meinen wir zum Beispiel
					beispiel.de oder musterbeispiel.com.
				</p>
				<p>
					Auch während Sie unsere Website jetzt gerade besuchen, speichert die Google Cloud auf der
					diese Webseite gespeichert ist –&nbsp; aus Gründen der Betriebssicherheit, zur Erstellung
					von Zugriffsstatistik usw. in der Regel automatisch Daten wie
				</p>
				<ul>
					<li>
						die komplette Internetadresse (URL) der aufgerufenen Webseite (z. B.
						https://www.my-security-check.com/Impressum/)
					</li>
					<li>Browser und Browserversion (z. B. Chrome 87)</li>
					<li>das verwendete Betriebssystem (z. B. Windows 10)</li>
					<li>
						die Adresse (URL) der zuvor besuchten Seite (Referrer URL) (z. B.
						https://www.beispielquellsite.de/vondabinichgekommen.html/)
					</li>
					<li>
						den Hostname und die IP-Adresse des Geräts von welchem aus zugegriffen wird (z. B.
						COMPUTERNAME und 194.23.43.121)
					</li>
					<li>Datum und Uhrzeit</li>
				</ul>
				<p>in Dateien, den sogenannten Logfiles.</p>
				<p>
					In der Regel werden diese Dateien zwei Wochen gespeichert und danach automatisch gelöscht.
					Wir geben diese Daten nicht weiter, können jedoch nicht ausschließen, dass diese Daten
					beim Vorliegen von rechtswidrigem Verhalten von Behörden eingesehen werden.
				</p>
				<p>
					Kurz gesagt: Ihr Besuch wird durch Google (genauer gesagt Google LLC, Google Ireland
					Limited, Google Asia Pacific Pte. Ltd., oder jede andere Einrichtung die direkt or
					indirect von Google gesteuert wird), protokolliert
				</p>
				<p>
					Um Ihre Daten bestmöglich zu schützen verzichten wir auf zusätzlichen Dienste zur
					Erfassung von Besuchen wie z.B. Google Analytics.
				</p>
				<h2>Cookies</h2>
				<p>
					Unsere Website verwendet nur einen technischen notwendigen HTTP-Cookie um
					nutzerspezifische Daten zu speichern. Dieser Cookie besagte Cookie dient der Sicherheit
					und wird automatisch von Cloudflare gesetzt. Mehr zu Claudflare und diesem Cookie finden
					Sie weiter unten im Abschnitt "Cloudflare Datenschutzerklärung".
				</p>
				<h3>Wie kann ich Cookies löschen?</h3>
				<p>
					Wie und ob Sie Cookies verwenden wollen, entscheiden Sie selbst. Unabhängig von welchem
					Service oder welcher Website die Cookies stammen, haben Sie immer die
					Möglichkeit&nbsp;Cookies zu löschen, nur teilweise zuzulassen oder zu deaktivieren. Zum
					Beispiel können Sie Cookies von Drittanbietern blockieren, aber alle anderen Cookies
					zulassen.
				</p>
				<p>
					Wenn Sie feststellen möchten, welche Cookies in Ihrem Browser gespeichert wurden, wenn Sie
					Cookie-Einstellungen ändern oder löschen wollen, können Sie dies in Ihren
					Browser-Einstellungen finden:
				</p>
				<p>
					<a
						href="https://support.google.com/chrome/answer/95647?tid=311259165"
						target="_blank"
						rel="noopener">Chrome: Cookies in Chrome löschen, aktivieren und verwalten</a
					>
				</p>
				<p>
					<a
						href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=311259165"
						target="_blank"
						rel="noopener">Safari: Verwalten von Cookies und Websitedaten mit Safari</a
					>
				</p>
				<p>
					<a
						href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=311259165"
						target="_blank"
						rel="noopener"
						>Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem Computer
						abgelegt haben</a
					>
				</p>
				<p>
					<a
						href="https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=311259165"
						target="_blank"
						rel="noopener">Internet Explorer: Löschen und Verwalten von Cookies</a
					>
				</p>
				<p>
					<a
						href="https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=311259165"
						target="_blank"
						rel="noopener">Microsoft Edge: Löschen und Verwalten von Cookies</a
					>
				</p>
				<p>
					Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so
					einrichten, dass er Sie immer informiert, wenn ein Cookie gesetzt werden soll. So können
					Sie bei jedem einzelnen Cookie entscheiden, ob Sie das Cookie erlauben oder nicht. Die
					Vorgangsweise ist je nach Browser verschieden. Am besten ist es Sie suchen die Anleitung
					in Google mit dem Suchbegriff “Cookies löschen Chrome” oder “Cookies deaktivieren Chrome”
					im Falle eines Chrome Browsers oder tauschen das Wort “Chrome” gegen den Namen Ihres
					Browsers, z.B. Edge, Firefox, Safari aus.
				</p>
				<h2>Cloudflare Datenschutzerklärung</h2>
				<p>
					Wir verwenden auf dieser Webseite Cloudflare der Firma Cloudflare, Inc. (101 Townsend St.,
					San Francisco, CA 94107, USA), um unsere Webseite schneller und sicherer zu machen. Dabei
					verwendet Cloudflare Cookies und verarbeitet User-Daten. Cloudflare, Inc. ist eine
					amerikanische Firma, die ein Content Delivery Network und diverse Sicherheitsdienste
					bereitstellt. Diese Dienste befinden sich zwischen dem User und unserem Hosting-Anbieter
					und fungieren als <a
						href="https://de.wikipedia.org/wiki/Reverse_Proxy"
						target="_blank"
						rel="noopener">Reverse Proxy</a
					>&nbsp;für Webseiten. Was das alles genau bedeutet, versuchen wir im Folgenden genauer zu
					erläutern.
				</p>
				<h3>Was ist Cloudflare?</h3>
				<p>
					Ein Content Delivery Network (CDN), wie es die Firma Cloudflare bereitstellt, ist nichts
					anderes als ein Netzwerk aus über das Internet verbundenen Servern. Cloudflare hat auf der
					ganzen Welt solche Server verteilt, um Webseiten schneller auf Ihren Bildschirm zu
					bringen. Ganz einfach gesagt, legt Cloudflare Kopien unserer Website an und platziert sie
					auf ihren eigenen Servern. Wenn Sie jetzt unsere Webseite besuchen, stellt ein System der
					Lastenverteilung sicher, dass die größten Teile unserer Webseite von jenem Server
					ausgeliefert werden, der Ihnen unsere Webseite am schnellsten anzeigen kann. Die Strecke
					der Datenübertragung zu Ihrem Browser wird durch ein CDN deutlich verkürzt. Somit wird
					Ihnen der Content unserer Webseite durch Cloudflare nicht nur von unserem Hosting-Server
					geliefert, sondern von Servern aus der ganzen Welt. Besonders hilfreich wird der Einsatz
					von Cloudflare für User aus dem Ausland, da hier die Seite von einem Server in der Nähe
					ausgeliefert werden kann. Neben dem schnellen Ausliefern von Webseiten bietet Cloudflare
					auch diverse Sicherheitsdienste, wie den DDoS-Schutz oder die Web Application Firewall an.
				</p>
				<h3>Warum wir Cloudflare auf unserer Website verwenden?</h3>
				<p>
					Natürlich wollen wir Ihnen mit unserer Webseite das bestmögliche Service bieten.
					Cloudflare hilft uns dabei, unsere Webseite schneller und sicherer zu machen. Cloudflare
					bietet uns sowohl Web-Optimierungen als auch Sicherheitsdienste, wie DDoS-Schutz und
					Web-Firewall, an. Dazu gehören auch ein <a
						href="https://de.wikipedia.org/wiki/Reverse_Proxy"
						target="_blank"
						rel="noopener">Reverse-Proxy</a
					> und das Content-Verteilungsnetzwerk (CDN). Cloudflare blockiert Bedrohungen und begrenzt
					missbräuchliche Bots und Crawler, die unsere Bandbreite und Serverressourcen verschwenden.
					Durch das Speichern unserer Webseite auf lokalen Datenzentren und das Blockieren von Spam-Software
					ermöglicht Cloudflare, unsere Bandbreitnutzung etwa um 60% zu reduzieren. Das Bereitstellen
					von Inhalten über ein Datenzentrum in Ihrer Nähe und einiger dort durchgeführten Web-Optimierungen
					reduziert die durchschnittliche Ladezeit einer Website etwa um die Hälfte. Durch die Einstellung
					„I´m Under Attack Mode“ („Ich werde angegriffen“-Modus) können laut Cloudflare weitere Angriffe
					abgeschwächt werden, indem eine JavaScript-Rechenaufgabe angezeigt wird, die man lösen muss,
					bevor ein User auf eine Webseite zugreifen kann. Insgesamt wird dadurch unsere Website deutlich
					leistungsstärker und weniger anfällig auf Spam oder andere Angriffe.
				</p>
				<h3>Welche Daten werden von Cloudflare gespeichert?</h3>
				<p>
					Cloudflare leitet im Allgemeinen nur jene Daten weiter, die von Websitebetreibern
					gesteuert werden. Die Inhalte werden also nicht von Cloudflare bestimmt, sondern immer vom
					Websitebetreiber selbst. Zudem erfasst Cloudflare unter Umständen bestimmte Informationen
					zur Nutzung unserer Webseite und verarbeitet Daten, die von uns versendet werden oder für
					die Cloudflare entsprechende Anweisungen erhalten hat. In den meisten Fällen erhält
					Cloudflare Daten wie Kontaktinformationen, IP-Adressen, Sicherheitsfingerabdrücke,
					DNS-Protokolldaten und Leistungsdaten für Webseiten, die aus der Browseraktivitäten
					abgeleitet werden. Protokolldaten helfen Cloudflare beispielsweise dabei, neue Bedrohungen
					zu erkennen. So kann Cloudflare einen hohen Sicherheitsschutz für unsere Webseite
					gewährleisten. Cloudflare verarbeitet diese Daten im Rahmen der Services unter Einhaltung
					der geltenden Gesetze. Dazu zählt natürlich auch die Datenschutzgrundverordnung (DSGVO).
				</p>
				<p>
					Aus Sicherheitsgründen verwendet Cloudflare auch ein Cookie. Das Cookie (__cfduid) wird
					verwendet, um einzelne User hinter einer gemeinsam genutzten IP-Adresse zu identifizieren
					und Sicherheitseinstellungen für jeden einzelnen User anzuwenden. Sehr nützlich wird
					dieses Cookie beispielweise, wenn Sie unsere Webseite aus einem Lokal benutzen, in dem
					sich eine Reihe infizierter Computer befinden. Wenn aber Ihr Computer vertrauenswürdig
					ist, können wir dies anhand des Cookies erkennen. So können Sie, trotz infizierter PCs im
					Umfeld, ungehindert durch unsere Webseite surfen. Wichtig zu wissen ist auch noch, dass
					dieses Cookie keine personenbezogenen Daten speichert. Dieses Cookie ist für die
					Cloudflare-Sicherheitsfunktionen unbedingt erforderlich und kann nicht deaktiviert werden.
				</p>
				<h3>Cookies von Cloudflare</h3>
				<ul>
					<li>
						__cfduid
						<ul>
							<li>Ablaufzeit: 30 Tage</li>
							<li>Verwendung: Unterscheidung zwischen echten Besuchern und Bots</li>
							<li>Beispielhafter Wert:&nbsp;d798bf7df9c1ad5b7583eda5cc5e78311259165</li>
						</ul>
					</li>
				</ul>
				<p>
					Ab dem 1. April 2021 möchte Cloudflare auf diesen Cookie verzichen. Weitere Informationen
					zu diesem Vorhaben finden Sie im englischprachigen Blogeintrag von Cloudflare
					<a href="https://blog.cloudflare.com/deprecating-cfduid-cookie/"
						>https://blog.cloudflare.com/deprecating-cfduid-cookie/</a
					>
				</p>
				<p>
					Cloudflare arbeitet auch mit Drittanbietern zusammen. Diese dürfen personenbezogene Daten
					nur unter Anweisung der Firma Cloudflare und in Übereinstimmung mit den
					Datenschutzrichtlinien und anderer Vertraulichkeits- und Sicherheitsmaßnahmen verarbeiten.
					Ohne explizite Einwilligung von uns gibt Cloudflare keine personenbezogenen Daten weiter.
				</p>
				<h3>Wie lange und wo werden die Daten gespeichert?</h3>
				<p>
					Cloudflare speichert Ihre Informationen hauptsächlich in den USA und im Europäischen
					Wirtschaftsraum. Cloudflare kann die oben beschriebenen Informationen aus der ganzen Welt
					übertragen und darauf zugreifen. Im Allgemeinen speichert Cloudflare Daten auf User-Ebene
					für unsere Domain für weniger als 24 Stunden. Wenn allerdings IP-Adressen bei Cloudflare
					Sicherheitswarnungen auslösen, kann es zu Ausnahmen von der oben angeführten
					Speicherungsdauer kommen.
				</p>
				<h3>Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?</h3>
				<p>
					Cloudflare bewahrt Daten-Protokolle nur solange wie nötig auf und diese Daten werden auch
					in den meisten Fällen innerhalb von 24 Stunden wieder gelöscht. Cloudflare speichert auch
					keine personenbezogenen Daten, wie beispielsweise Ihre IP-Adresse. Es gibt allerdings
					Informationen, die Cloudflare als Teil seiner permanenten Protokolle auf unbestimmte Zeit
					speichert, um so die Gesamtleistung von Cloudflare Resolver zu verbessern und etwaige
					Sicherheitsrisiken zu erkennen. Welche permanenten Protokolle genau speichert werden,
					können Sie auf <a
						href="https://www.cloudflare.com/application/privacypolicy/"
						target="_blank"
						rel="noopener">https://www.cloudflare.com/application/privacypolicy/</a
					>
					nachlesen. Alle Daten, die Cloudflare sammelt (temporär oder permanent), werden von allen personenbezogenen
					Daten bereinigt. Alle permanenten Protokolle werden zudem von Cloudflare anonymisiert.
				</p>
				<p>
					Cloudflare geht in ihrer Datenschutzerklärung darauf ein, dass sie für die Inhalte, die
					sie erhalten nicht verantwortlich sind. Wenn Sie beispielsweise bei Cloudflare anfragen,
					ob sie Ihre Inhalte aktualisieren oder löschen können, verweist Cloudflare grundsätzlich
					auf uns als Websitebetreiber.
				</p>
				<p>
					Cloudflare ist aktiver Teilnehmer beim EU-U.S. Privacy Shield Framework wodurch der
					korrekte und sichere Datentransfer persönlicher Daten geregelt wird. Mehr Informationen
					dazu finden Sie auf <a
						href="https://www.privacyshield.gov/participant?id=a2zt0000000GnZKAA0&amp;tid=311259165"
						target="_blank"
						rel="noopener">https://www.privacyshield.gov/participant?id=a2zt0000000GnZKAA0</a
					>.<br />
					Mehr Informationen zum Datenschutz bei Cloudflare finden Sie auf
					<a
						href="https://www.cloudflare.com/de-de/privacypolicy/?tid=311259165"
						target="_blank"
						rel="noopener">https://www.cloudflare.com/de-de/privacypolicy/</a
					>
				</p>
				<p>
					Wir haben mit Cloudflare einen Vertrag zur Auftragsverarbeitung geschlossen den Sie <a
						href="/CloudflareCustomerDPAOctober1_2020.pdf">hier</a
					> einsehen können.
				</p>
				<h2>Speicherung persönlicher Daten</h2>
				<p>
					Persönliche Daten, die Sie uns auf dieser Website elektronisch übermitteln, wie zum
					Beispiel Name, E-Mail-Adresse, Adresse oder andere persönlichen Angaben im Rahmen der
					Übermittlung eines Formulars oder Kommentaren im Blog, werden von uns gemeinsam mit dem
					Zeitpunkt und der IP-Adresse nur zum jeweils angegebenen Zweck verwendet, sicher verwahrt
					und nicht an Dritte weitergegeben.
				</p>
				<p>
					Wir nutzen Ihre persönlichen Daten somit nur für die Kommunikation mit jenen Besuchern,
					die Kontakt ausdrücklich wünschen und für die Abwicklung der auf dieser Webseite
					angebotenen Dienstleistungen und Produkte. Wir geben Ihre persönlichen Daten ohne
					Zustimmung nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim Vorliegen
					von rechtswidrigem Verhalten eingesehen werden.
				</p>
				<p>
					Wenn Sie uns persönliche Daten per E-Mail schicken – somit abseits dieser Webseite –
					können wir keine sichere Übertragung und den Schutz Ihrer Daten garantieren. Wir empfehlen
					Ihnen, vertrauliche Daten niemals unverschlüsselt per E-Mail zu übermitteln.
				</p>
				<p>
					Die Rechtsgrundlage besteht nach <a
						href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&amp;tid=311259165"
						target="_blank"
						rel="noopener">Artikel 6&nbsp; Absatz 1 a DSGVO</a
					> (Rechtmäßigkeit der Verarbeitung) darin, dass Sie uns die Einwilligung zur Verarbeitung der
					von Ihnen eingegebenen Daten geben. Sie können diesen Einwilligung jederzeit widerrufen – eine
					formlose E-Mail reicht aus, Sie finden unsere Kontaktdaten im Impressum.
				</p>
				<h2>Rechte laut Datenschutzgrundverordnung</h2>
				<p>Ihnen stehen laut den Bestimmungen der DSGVO grundsätzlich die folgende Rechte zu:</p>
				<ul>
					<li>Recht auf Berichtigung (Artikel 16 DSGVO)</li>
					<li>Recht auf Löschung („Recht auf Vergessenwerden“) (Artikel 17 DSGVO)</li>
					<li>Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)</li>
					<li>
						Recht auf Benachrichtigung – Mitteilungspflicht im Zusammenhang mit der Berichtigung
						oder Löschung personenbezogener Daten oder der Einschränkung der Verarbeitung (Artikel
						19 DSGVO)
					</li>
					<li>Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)</li>
					<li>Widerspruchsrecht (Artikel 21 DSGVO)</li>
					<li>
						Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung —
						einschließlich Profiling — beruhenden Entscheidung unterworfen zu werden (Artikel 22
						DSGVO)
					</li>
				</ul>
				<p>
					Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt
					oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind,
					können Sie sich an die <a href="https://www.bfdi.bund.de" target="_blank" rel="noopener"
						>Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)</a
					> wenden.
				</p>
				<h2>TLS-Verschlüsselung mit https</h2>
				<p>
					TLS, Verschlüsselung und https klingen sehr technisch und sind es auch. Wir verwenden
					HTTPS (das Hypertext Transfer Protocol Secure steht für „sicheres
					Hypertext-Übertragungsprotokoll“) um Daten abhörsicher im Internet zu übertragen.<br />
					Das bedeutet, dass die komplette Übertragung aller Daten von Ihrem Browser zu unserem Webserver
					abgesichert ist – niemand kann “mithören”.
				</p>
				<p>
					Damit haben wir eine zusätzliche Sicherheitsschicht eingeführt und erfüllen Datenschutz
					durch Technikgestaltung
					<a
						href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&amp;tid=311259165"
						target="_blank"
						rel="noopener">Artikel 25 Absatz 1 DSGVO</a
					>). Durch den Einsatz von TLS (Transport Layer Security), einem Verschlüsselungsprotokoll
					zur sicheren Datenübertragung im Internet können wir den Schutz vertraulicher Daten
					sicherstellen.<br />
					Sie erkennen die Benutzung dieser Absicherung der Datenübertragung am kleinen Schlosssymbol
					<img
						src="/schlosssymbol-https-211141072.svg"
						alt="lock-symbol"
						width="17"
						height="18"
					/>&nbsp;links oben im Browser links von der Internetadresse (z. B. beispielseite.de) und
					der Verwendung des Schemas https (anstatt http) als Teil unserer Internetadresse.<br />
					Wenn Sie mehr zum Thema Verschlüsselung wissen möchten, empfehlen wir die Google Suche nach
					“Hypertext Transfer Protocol Secure wiki” um gute Links zu weiterführenden Informationen zu
					erhalten.
				</p>
				<p>
					Quelle: Erstellt&nbsp;mit dem&nbsp;<a
						title="Datenschutz Generator Deutschland"
						href="https://www.adsimple.de/datenschutz-generator/"
						target="_blank"
						rel="follow"
						>Datenschutz Generator</a
					>
					von AdSimple&nbsp;in Kooperation mit
					<a href="https://www.123familie.de" target="_blank" rel="follow" title="">123familie.de</a
					>
				</p>
			</div>
		</article>
	</div>
</div>

<style>
	.message{
		word-break: break-all;
	}
	.message-body {
		background-color: var(--background) !important;
		color: var(--brandColor) !important;
	}
	.message-header {
		background-color: var(--brandColor) !important;
	}
</style>
