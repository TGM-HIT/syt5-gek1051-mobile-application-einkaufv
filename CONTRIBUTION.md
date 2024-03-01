# CONTRIBUTION

## Mitarbeit im Team

## Allgemeines

Ganz wichtig: bitte für dieses Repository die Git-Config richtig setzen! Das heißt, dass ihr euren Namen und eure E-Mail-Adresse richtig setzt. Das geht mit folgenden Befehlen:

```sh
git config --local user.name "Vorname Nachname"
git config --local user.email "github-email"
```

Statt `--local` könnt ihr auch `--global` verwenden, wenn ihr das für alle eure Repositories setzen wollt. Mit `github-email` ist jene E-Mail-Adresse gemeint, die ihr als primäre E-Mail-Adresse auf GitHub verwendet.

### Branches

Wir arbeiten hier alle gemeinsam im selben Repository, daher ist es gescheiter, in unterschiedlichen Branches zu arbeiten. Der `main`-Branch ist für direkte Commits gesperrt und ist nur für *funktionierende* Versionen des Projekts gedacht (*what is on the main branch works*). Für die Bennenung der Branches wäre folgendes Muster angebracht:

- `feature/<...>` für neue Features
- `fix/<...>` für kleinere Fixes (optional, wenn es direkt mit einem Feature verbunden ist, dann kann auch im Feature-Branch gearbeitet werden)

Andere Branches, die nicht direkt mit Features, aber dafür mit der Organisation des Projekts zu tun haben, brauchen nicht zwingend ein Prefix.

Wenn ihr Pull Requests eröffnet, dann bitte auch einen aussagekräftigen Titel einfügen - wünschenswert wäre auch eine kurze Beschreibung, was ihr gemacht habt (wenn es nicht direkt aus den Commits ersichtlich ist).

Aufgrund der Tatsache, dass dies nur ein kleines Projekt ist, möchten wir zwar kein volles CI/CD, aber dafür nur das "CI" (Continuous Integration) einsetzen. Mit anderen Worten: bitte macht regelmäßige Commits (zumindest nach jeder DezSys-Einheit), damit alle Änderungen stets sichtbar sind.

### Commit Messages

Die Commit-Messages machen wir am besten in der selben Sprache und bleiben auch in der selben Sprache (am besten wäre natürlich Englisch).

Hier finden sich gute Beispiele für Commit-Messages: [https://wiki.openstack.org/wiki/GitCommitMessages#Examples_of_good_practice](https://wiki.openstack.org/wiki/GitCommitMessages#Examples_of_good_practice)

Ein guter Style für Commit-Messages wäre es, die erste Zeile jeweils mit einem Verb im Imperativ zu beginnen (z.B. "Add", "Fix", "Change", "Remove", "Refactor", etc.) und dann eine kurze Beschreibung des Commits zu geben. Da die erste Zeile auf 72 Zeichen beschränkt sein sollte, können noch zusätzliche Informationen in den folgenden Zeilen hinzugefügt werden (mit einer Leerzeile dazwischen, siehe Beispiele aus dem Link oben).

Als Referenz können auch die bisherigen Commits herangezogen werden.