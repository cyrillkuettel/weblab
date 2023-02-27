# Not another Notes App

## Kontext


Ein Tool, um schnell Notizen erfassen zu können, braucht fast jeder. Dieses Projekt 
setzt sich zum Ziel, eine minimale Notes-App zu erstellen. 
Ein Beispiel für bereits existierende Anwendungen, die ähnlich sind: Google Keep.



## Anforderungen

### Fachliche Anforderungen

#### User Story 1: Anmelden mittels  (Prio 'Must')

Als Benutzer möchte ich mich anmelden können, dass ich zugriff auf meine Notizen habe.

**Akzeptanzkriterien**

* Mittels korrektem Benutzername (E-Mail-Adresse) und korrektem Passwort gelange ich zu meinen Notizen.
* Mit nicht korrekte Benutzerdaten (Benutzername / Passwörter) kann ich mich nicht 
  anmelden.

#### User Story 2: Notitz erfassen (Prio 'Must')

Als Benutzer des Notes-App möchte ich neue Notizen erfassen können.

**Akzeptanzkriterien**

* Für die Erfassung einer neuen Notiz muss ich folgende Felder angeben können:
    * Kategorie (Optionales-Feld)
    * Title (Optionales-Feld)
    * Inhalt (Muss-Feld)
#### User Story 3: Notizen ändern (Prio 'Should')

Als eingeloggter Benutzer kann ich meine Notizen verändern, um z.B. nicht mehr passende Informationen zu ändern.

**Akzeptanzkriterien**

*Es können alle Felder, die in Story 2 beschrieben worden sind, verändert werden.*
* Mit dem Speichern wird das Änderungsdatum der Technologie sowie die Person geführt.


#### User Story 4: Listen und Freitext (Prio 'Could')

Als Benutzer möchte ich neben Freitext auch strukturierte Daten (Listen) erfassen können.

**Akzeptanzkriterien**

*Beim Schreiben einer Notiz kann das Format angepasst werden*

#### User Story 5: Export JSON (Prio 'Must')

Als Benutzer möchte ich nicht abhängig sein von einer App, und folglich meine 
Notizen exportieren können (um diese gegebenenfalls in eine andere App zu importieren).
Somit gibt es kein "Vendor Lock-in."

**Akzeptanzkriterien**

* Es gibt einen Button: Export all, welcher alle Notizen als json exportiert. 
    

#### Nicht-Funktionale Anforderungen

* Die **Notes App** soll neben der Desktop-Ansicht, auch für die Mobile-Ansicht optimiert sein.
* Der **Notes App** soll innert 1s geladen sein.


# Technologie Stack:

Frontend: Angular
Backend: Python Webserver.

