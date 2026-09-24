# ATLAS Terminal Plugin

Das Terminal kann Themes aus dem [UGSo-Oh-My-Posh-Fork](https://github.com/rockbaer2007/oh-my-posh) auswählen. Die Themes werden in lokalen Bash-Sitzungen angewendet, wenn Oh My Posh und Bash auf dem ATLAS-Host installiert sind. Bei SSH bleibt die Shell des Zielservers unverändert.

Eigenständiges GitHub-Repository für das ATLAS-Terminal-Plugin. Das Terminal
stellt ein Browser-Terminal mit ANSI-Farben, einstellbarer Schriftgröße und
optionalem SSH-Ziel bereit. Der Prompt ist von Oh My Posh inspiriert.

Das Frontend wird hier separat versioniert. Die Shell-, Supervisor- und
WebSocket-Backend-Funktionen laufen weiterhin im ATLAS-Host; dieses Repository
ist kein eigenständiger SSH-Server und kein Home-Assistant-Add-on.

## In ATLAS Administration hinzufügen

Installationsseite: <https://rockbaer2007.github.io/atlas-terminal-plugin/install.html>

Repository-Manifest:

```text
https://raw.githubusercontent.com/rockbaer2007/atlas-terminal-plugin/main/repository.json
```

In ATLAS Administration unter **Plugins → Repository hinzufügen** den Typ
**Plugin** wählen, die Manifest-URL einfügen und anschließend das Plugin-Paket
installieren. Das Add-on muss eine kompatible Terminal-Backend-Version
enthalten.

Die Theme-Auswahl benötigt mindestens ATLAS `0.2.0-alpha.79` beziehungsweise
Home-Assistant-App/Add-on `0.1.211`. Ältere Host-Versionen zeigen kein Theme-Feld.

## Sicherheit und Einrichtung

Das Terminal bleibt standardmäßig deaktiviert. Aktiviere es erst, nachdem du
auf dem ATLAS-Host ein zufälliges Zugriffstoken mit mindestens 32 URL-sicheren
Zeichen konfiguriert hast. Eine lokale Shell läuft mit den Berechtigungen des
ATLAS-Prozesses. Im Home-Assistant-Add-on ermöglicht sie mit der Supervisor-API
auch Befehle wie `ha core check`; behandle Terminalzugriff daher wie
administrativen Zugriff.

Das Token wird nur im lokalen Browser gespeichert und beim Verbindungsaufbau
über das WebSocket-Subprotokoll übertragen, nicht in einer URL. Skripte derselben
Website können auf den Browserspeicher zugreifen. Nutze das Terminal nur in
einem vertrauenswürdigen Browserprofil.

Optionales SSH benötigt einen serverseitig festgelegten Host, Benutzer,
privaten Schlüssel und `known_hosts`-Datei. Die Hostschlüsselprüfung bleibt
aktiv; das Browserfenster kann kein beliebiges Ziel auswählen.

Über **Zurück zum Hub** in der Terminal-Kopfzeile gelangst du wieder zum ATLAS Plugin-Hub.

## Entwicklung

Die ausgelieferten Dateien liegen unter `plugins/terminal`. `app.js` und
`app.bundle.js` werden im ATLAS-Hauptrepository aus xterm.js gebaut. Nach einer
Änderung dort müssen Manifest, Paketversion und `repository.json` synchron
aktualisiert werden.

Die Versionshistorie steht in [CHANGELOG.md](CHANGELOG.md).

```powershell
npm run build:package
```

## Lizenz

MIT. Siehe [LICENSE](LICENSE).
