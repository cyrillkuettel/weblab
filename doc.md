## Einleitung

In der Programming Lab Blockwoche HS2022 wurde den
Teilnehmenden diverse Themen im Bereich der Webtechnologien vermittelt.

Von Ansätzen und Architekturen zu JavaScript und Typescript, Angular über Authentication 
und Weiteres vermittelt. Als
Abschluss wird ein eigenes Webprojekt mit Angular und Python umgesetzt.


Im folgenden Kapitel "Architekturdokumentation", wird die Architektur des
Webprojekts dokumentiert, danach folgt das "Fazit & Reflexion" und Anhänge wie
das Arbeitsjournal.


# Architekturdokumentation


## Einführung und Ziele
Die Aufgabe, die ich mir gestellt habe, war das Entwickeln einer simplen Notes-App.
Dabei ist die Grundidee, dass der Benutzer Notizen erstellen und bearbeiten kann.

Ausserdem ermöglicht die App, die Notizen hinter einem Passwort zu schützen.
### Anforderungen 

| User Story | Priority |
| --- | --- |
| Anmelden | Must |
| Notitz erfassen | Must |
| Notizen ändern | Should |
| Listen und Freitext | Could |
| Export JSON | Must |

### Nicht-Funktionale Anforderungen

| Anforderung | Beschreibung |
| --- | --- |
| Plattform-Unterstützung | Die Notes App soll für sowohl Desktop- als auch Mobile-Ansichten optimiert sein. |
| Ladezeit | Die Notes App soll innerhalb von 1 Sekunde geladen werden. |

### Randbedingungen

Die gegebenen Rahmenbedingungen sind vergleichsweise flexibel und bieten 
somit eine breite Bandbreite an Möglichkeiten bei der Umsetzung.
Diese Flexibilität kann neue Perspektiven auf Probleme und Lösungen zu eröffnen. 
Eine flexible Gestaltungsfreiheit eröffnet die Möglichkeit, kreativ zu sein und 
innovative Ideen zu entwickeln.


### Lösungsstrategie

| Nicht-funktionale Anforderung                                                    | Lösungsansätze                                                          |
|----------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| Die Notes App soll für sowohl Desktop- als auch Mobile-Ansichten optimiert sein. | - Frontend mit Angular und Bulma<br/> - Responsive Design               |
| Die Notes App soll innerhalb von 1 Sekunde geladen werden.                       | - Schlakes Design<br/> - Verzicht auf grosse Resourcen wie z.B. Bilder. |


## Bausteinsicht

<p align="middle">
  <img src="https://github.com/cyrillkuettel/weblab/blob/master/img/bausteinsicht.png" width="250px" />
</p>

###  Frontend
Erreichbar unter `localhost:4200`.

### Backend 
Das Back-End besteht aus flask webserver, welches verschiedene API
anbietet. Der Service unter `localhost:5000` erreichbar. 

Sqlalchemy ist das Brückenstück, welche die Flask App mit einer SQLite Datenbank verbindet.
Die API wird im folgenden Abschnitt kurz zusammengefasst.


| Aufruf         | Beschreibung                                                                                                        | Methode(n)              |
|----------------| -------------------------------------------------------------------------------------------------------------------|------------------------|
| `/login`       | Authentifiziert Benutzer, die ihre Anmeldeinformationen senden.                                                      | POST                   |
| `/notes`       | Gibt alle Notizen zurück, die in der Datenbank gespeichert sind.                                                    | GET                    |
| `/note/title`  | Gibt die Notiz mit dem angegebenen Titel zurück.                                                                     | GET, PUT               |
| `/note`        | Erstellt eine neue Notiz mit den bereitgestellten Informationen.                                                     | POST                   |
| `/note/title` | Aktualisiert eine Notiz mit dem angegebenen Titel anhand der bereitgestellten Informationen.                         | PUT                    |

## Laufzeitsicht

### Inbetriebnahme der Applikation

Instruktionen zum Start des Servers und das Frontend zu starten sind dem Top-Level `README.md` zu entnehmen.
Ein Unixoides System wird zwar nicht vorausgesetzt, die Kommandos gehen aber davon aus. 
Auf Windows müssen gegebenenfalls kleine Anpassungen gemacht werden.

### Interaktionsmöglichkeiten


## Fazit und Reflexion


Bisher hatte ich Erfahrung mit Javascript, habe vor diesem Modul noch nie Frameworks
im Frontend eingesetzt. Das war gänzlich Neuland für mich.
 Aus diesem Grund war ein grosser Lerneffekt da, ich konnte einiges mitnehmen über Angular spezifisch und auch 
generelle Web Technologien.

Den Workflow mit Typescript habe ich als sehr positiv empfunden. 
Fehler im Code werden (nicht wie bei Javascript) zur Laufzeit, sondern schon vom 
Compiler früh erkannt. Ausserdem ist mir aufgefallen, dass die Stukturierung des Codes 
in Komponenten einige Vorteile mit sich bringt. Zum Beispiel ist die Suche viel einfacher. 

Ein weiterer Aspekt, welcher die Entwicklung sehr angenehm macht, ist die gute 
Unterstützung für Angular der IDE. Features wie "Springen zu Definition" 
funktionieren sehr gut, sogar aus einem HTML-File kann zu entsprechenden Variabeln 
gesprungen werden. 

Was auch sehr gut geklappt hat, war das Einbinden eines Python Webservers. Es hat funktioniert, 
jedoch würde ich es bei einem nächsten Projekt wahrscheinlich nicht mehr so machen:
Das Hinzufügen von Programmiersprachen in einem Projekt erhöht die Komplexität. In disem Fall war
es nicht nur nicht notwendig, es hat auch zu etwas Mehraufwand geführt. Zum Beispiel gibt es keine Möglichkeit,
Code zwischen dem Frontend und Backend zu teilen. So wurde beispielsweise das Modell für eine "Note" einmal 
Typescript und einmal in Python definiert, und somit dupliziert.


### Herausforderungen

Bei online tutorials / Beispiel-Code zu Angular ist höchste vorsicht geboten. Je 
älter eine Resource ist, desto höher ist die Wahrscheinlichkeit, dass auch der 
dazugehörige Code nicht mehr funktioniert, weil die entsprechenden methoden deprecated 
sind. Hier ist es durchaus lohnenswert, bei seiner Suchmaschine das Datum so 
eingrenzen, dass Resultate, die nicht älter als 3 Jahre sind, gar nicht erst 
angezeigt werden. 

## Source Code
Die Softwareartefakte sind auf GitHub: https://cyrillkuettel/weblab/