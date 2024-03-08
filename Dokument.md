# Dokumentation der verwendeten Technologien

## Bestehende Applikation

Für dieses Projekt steht eine bestehende Applikation als Vorlage zur Verfügung. Diese kombiniert das JS-Framework Vue.js als Frontend mit PouchDB als in-browser Datenbank. Diese App steht unter [https://github.com/mborko/shopping-list](https://github.com/mborko/shopping-list) zur Verfügung.

### Setup

Repository klonen:

```sh
$ git clone https://github.com/ibm-watson-data-lab/shopping-list-vuejs-pouchdb
```

Installieren der Dependencies (Hinweis, dies wird über 100 Warnungen aufgrund von Sicherheitslücken ausgeben, da die Dependencies nicht aktuell sind; siehe auch [Fazit](#fazit)):

```sh
$ npm install
```

Starten als lokale Applikation:

```sh
$ npm start
```

### Technologien & Architektur

- [Vue.js](https://vuejs.org): ist ein modernes JS-Framework zur Entwicklung von Web-Interfaces. Im Gegensatz zu einfachem HTML, CSS & JavaScript ist Vue.js (wie auch ähnliche Frameworks) *komponentenbasiert*, d.h. die Applikation wird in einzelne Komponenten aufgeteilt, welche auch wiederverwendet werden können. Die Komponenten können auch *Parameter* entgegennehmen (um eine gewisse Dynamik zu ermöglichen) und *Events* auslösen, die direkt in JavaScript behandelt werden können.

- Als Datenbank wird [Pouch DB](https://couchdb.apache.org/) verwendet, welche an [Apache Couch DB](https://couchdb.apache.org/) angelehnt ist, aber in JavaScript geschrieben worden ist. Pouch DB [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API), welche strukturierte Daten (aber auch Dateien und Blobs) lokal in den *Local Storage* des Browsers speichert und im Hintergrund zu einer entfernten Datenbank synchronisiert/repliziert (sollte eine solche existieren, z.B. CouchDB). Pouch DB ist also eine *Offline-First*-Lösung, d.h. die Applikation funktioniert auch ohne Internetverbindung und synchronisiert sich automatisch, sobald eine Verbindung besteht.

### Schnittstellen-Beschreibung

TODO

## Neuentwicklung von Grund auf

Beim Installieren der Dependencies fällt auf, dass die Dependencies nicht aktuell sind und über 100 Warnungen aufgrund von Sicherheitslücken ausgeben. Daher wäre eine Alternative, die Applikation von Grund auf neu zu entwickeln. Da die Applikation sowieso das *Offline-First*-Prinzip implementieren soll, bleiben nicht viele Datenbanken übrig, außer z.B. [RxDB](https://rxdb.info/), welche ebenfalls für JavaScript-Applikationen geschrieben worden ist. Als Frontend kann weiterhin Vue.js verwendet werden, da die größten Frameworks (React, Angular, Vue) sich wenig voneinander abheben.

## <a name="fazit"></a>Fazit
