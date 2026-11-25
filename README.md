# Rollenspiele und Simulationen mit KI in der Lehre

Workshop-Seite (90 Minuten: drei kurze Inputs, drei Übungen) von Prof. Dr. Roman Bartnik, TH Köln.

**Seite:** https://th-koln-bartnik.github.io/workshop-ki-rollenspiele/

Begleitmaterial zum Buch [„Generative KI als Hilfe zum Lehren und Lernen“](https://th-koln-bartnik.github.io/genai4teaching/).

## Aufbau

- `docs/index.html` – die gesamte Seite in einer Datei, ohne Build-Schritt; Hauptteil: die Hauptpunkte der acht Kern-Folien und drei Übungen; am Ende der Abschnitt „Vertiefung der Inhalte durch Interaktion“ und der Link zum Skript. Änderungen an dieser Datei erscheinen nach dem Hochladen auf `main` innerhalb weniger Minuten online.
- `docs/folien.html` – die Folien zu den drei Inputs (Quarto/revealjs, eine Datei mit allem eingebettet). Quelle: `folien/folien.qmd`, Gestaltung `folien/th.scss`, Schätz-Widgets `folien/widgets.js`. Neu bauen: im Ordner `folien` `quarto render folien.qmd` ausführen und `folien.html` nach `docs/` kopieren.
- `docs/skript.html` – das Skript zum Workshop (Version 3 vom 14.07.2026) als Webseite, ebenfalls eine einzelne Datei. Adresse: https://th-koln-bartnik.github.io/workshop-ki-rollenspiele/skript.html
- `docs/folien-kern.html` – elf Folien mit den Kern-Inputs des Übungsblatts vom 14.07.2026. Quelle: `folien/kern.qmd`; bauen wie oben, Ergebnis `kern.html` als `docs/folien-kern.html` ablegen.
- `docs/.nojekyll` – leere Datei; sie weist GitHub Pages an, die Seite unverändert auszuliefern.

## Lizenz

Inhalte unter [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.de), wie das Buch.
