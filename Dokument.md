# Dokumentation der verwendeten Technologien

## Entscheidung

### Vue.js und PouchDB

Für dieses Projekt steht eine bestehende Applikation als Vorlage zur Verfügung. Diese kombiniert das JS-Framework Vue.js als Frontend mit PouchDB als in-browser Datenbank. Diese App steht unter [https://github.com/mborko/shopping-list](https://github.com/mborko/shopping-list) zur Verfügung. Die App ist zwar bereits voll funktionstüchtig, jedoch gibt es einige Sicherheitslücken in den Dependencies, da die letzten Commits schon ganze 7 Jahre (!)zurückliegen. Des Weiteren sind die Versionen der verwendeten Frameworks so alt, dass sie nicht mehr mit den heutigen Implementierungen vergleichbar sind, weshalb aktuelle Dokumentationen und Tutorials nicht direkt anwendbar sind (Stichwort Vue.js).

### Neuentwicklung von Grund auf

Beim Installieren der Dependencies fällt auf, dass die Dependencies nicht aktuell sind und über 100 Warnungen aufgrund von Sicherheitslücken ausgeben. Daher wäre eine Alternative, die Applikation von Grund auf neu zu entwickeln. Da die Applikation sowieso das *Offline-First*-Prinzip implementieren soll, bleiben nicht viele Datenbanken übrig, außer z.B. [RxDB](https://rxdb.info/), welche ebenfalls für JavaScript-Applikationen geschrieben worden ist. Als Frontend kann weiterhin Vue.js verwendet werden, da die größten Frameworks (React, Angular, Vue) sich wenig voneinander abheben.

### <a name="fazit"></a>Fazit

Aufgrund des beschränkten Zeitrahmens von nur 6 Wochen ist es für uns nicht sinnvoll, die Shoppingliste von Grund auf neu zu programmieren. Wir werden mit den bestehenden Technologien arbeiten und die Sicherheitslücken in den Dependencies ignorieren.

## Beschreibung der Applikation

### Setup

Repository klonen:

```sh
$ git clone https://github.com/ibm-watson-data-lab/shopping-list-vuejs-pouchdb
```

Installieren der Dependencies (Hinweis, dies wird über 100 Warnungen aufgrund von Sicherheitslücken ausgeben, da die Dependencies nicht aktuell sind):

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

#### PouchDB

PouchDB: PouchDB-API-Aufrufe, die zum Speichern, Abfragen, Aktualisieren und Löschen von Daten in der lokalen Datenbank verwendet werden.
Beispiele:

- Erstellen der PouchDB`var db = new PouchDB('shopping');`
- die CRUD-Operationen `return db.find(q);`

#### AJAX

AJAX wird verwendet, um die Verwendung einer HTTP-Anfrage für die OpenStreetMap Daten zur Verfügung zu stellen.

```
/\*\*
_ Called when the Lookup button is pressed. We make an API call to
_ OpenStreetMap passing in the user-supplied name of the place. If
_ the API returns something, the options are added to Vue's "places"
_ array and become a pull-down list of options on the front end.
\*/
onClickLookup: function() {

      // make request to the OpenStreetMap API
      var url = 'https://nominatim.openstreetmap.org/search';
      var qs = {
        format: 'json',
        addressdetails: 1,
        namedetails: 1,
        q: this.singleList.place.title
      };
      ajax(url, qs).then((d) => {

        // add the list of places to our list
        this.places = d;

        // if there is only one item in the list
        if (d.length ==1) {
          // simulate selection of first and only item
          this.onChangePlace(d[0].place_id);
        }
      });

    },
```

#### Vue Material

Vue Material wird für die Gestaltung der Benutzeroberfläche von Vue verwendet.

```
// Vue Material plugin
Vue.use(VueMaterial);

// Vue Material theme
Vue.material.registerTheme('default', {
primary: 'blue',
accent: 'white',
warn: 'red',
background: 'grey'
});
```

#### Vue.js

Vue.js wird als reaktive Benutzeroberfläche verwendet, die automatisch aktualisiert wird, wenn sich zugrunde liegende Daten ändern.

- mit der Datenbank:

```
    var app = new Vue({
  el: '#app',
  data: {
    mode: 'showlist',
    pagetitle: 'Shopping Lists',
    shoppingLists: [],
    shoppingListItems: [],
    singleList: null,
    currentListId: null,
    newItemTitle:'',
    places: [],
    selectedPlace: null,
    syncURL:'',
    syncStatus: 'notsyncing'
  },
```

- Methoden:

```
methods: {
  onClickSettings: function() { ... },
  saveLocalDoc: function(doc) { ... },
    //.....
```

#### Cloudant

Cloudant ist ein Cloud-basierter Datenbankdienst, der für die Synchronisierung der Daten vorhanden in PouchDB vorhanden, verwendet wird.

PouchDB to Cloudant two-way sync:

```
/**
     * Called when save button on the settings panel is clicked. The
     * Cloudant sync URL is saved in PouchDB and the sync process starts.
     */
    onClickStartSync: function() {
      var obj = {
        '_id': '_local/user',
        'syncURL': this.syncURL
      };
      this.saveLocalDoc(obj).then( () => {
        this.startSync();
      });
    },
```


## Neuentwicklung von Grund auf

Beim Installieren der Dependencies fällt auf, dass die Dependencies nicht aktuell sind und über 100 Warnungen aufgrund von Sicherheitslücken ausgeben. Daher wäre eine Alternative, die Applikation von Grund auf neu zu entwickeln. Da die Applikation sowieso das *Offline-First*-Prinzip implementieren soll, bleiben nicht viele Datenbanken übrig, außer z.B. [RxDB](https://rxdb.info/), welche ebenfalls für JavaScript-Applikationen geschrieben worden ist. Als Frontend kann weiterhin Vue.js verwendet werden, da die größten Frameworks (React, Angular, Vue) sich wenig voneinander abheben.

## <a name="fazit"></a>Fazit
