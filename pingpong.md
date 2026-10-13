# 🏓 Ping Pong 2 Giocatori

Gioco di ping pong per due giocatori sulla stessa tastiera (o sullo stesso schermo touch), in un unico file HTML: `pingpong.html`.

## Come avviarlo

Apri `index.html` (la **Sala Giochi**) e clicca sulla scheda **Ping Pong**, oppure apri direttamente `pingpong.html` con un qualsiasi browser (Chrome, Safari, Firefox…). Non serve installare niente né essere connessi a internet.

```bash
open index.html
```

Dal gioco puoi tornare alla Sala Giochi con il pulsante **← Tutti i giochi** in alto a sinistra.

## Comandi

| Azione | Giocatore 1 | Giocatore 2 |
|--------|-------------|-------------|
| Su     | `W`         | `↑`         |
| Giù    | `S`         | `↓`         |

| Tasto / pulsante | Effetto |
|------------------|---------|
| `Spazio` o **▶ Inizia / Pausa** | Avvia o mette in pausa la partita |
| **↺ Ricomincia** | Azzera punteggi e timer e inizia una nuova partita |

**Touch screen:** trascina il dito sulla metà sinistra del campo per muovere il Giocatore 1, sulla metà destra per il Giocatore 2.

## Musica

Nel file `pingpong.html` è **incorporata** la registrazione `Nueva grabación.m4a` (circa 3 minuti), quindi il gioco funziona anche senza il file audio accanto.

- La musica **parte quando premi Play** (pulsante **▶ Inizia / Pausa** o `Spazio`).
- Si **ferma in pausa** e riprende da dove era quando ricominci a giocare.
- Si **ferma a fine partita** (vittoria o tempo scaduto).
- Con **↺ Ricomincia** riparte dall'inizio.
- Quando finisce ricomincia da capo (in loop).

Per cambiare canzone bisogna sostituire il contenuto dell'elemento `<audio id="music">` nel file HTML.

## Regole

- Vince chi arriva per primo a **10 punti**.
- Ogni partita dura al massimo **40 minuti**: allo scadere del tempo vince chi ha più punti; a punteggio uguale è **pareggio**.
- Il timer scorre solo mentre si gioca (si ferma in pausa) e negli ultimi 30 secondi diventa rosso.
- La pallina va sempre a **velocità normale**, ma ogni tanto (circa 1 colpo su 5) parte un **tiro super veloce**: la pallina va a più del doppio della velocità, lascia una scia più lunga e in basso compare la scritta **⚡ SUPER VELOCE! ⚡**. Al colpo successivo torna normale (a meno che non esca un altro tiro super veloce).
- L'angolo del rimbalzo dipende da dove la pallina colpisce la racchetta: al centro torna dritta, sui bordi esce più inclinata.

## Schermata di gioco

- Sopra il campo ci sono due riquadri, **Seleziona nome del giocatore 1** e **Seleziona nome del giocatore 2**, dove scrivere i nomi. Il nome compare sotto il punteggio nel campo e nella schermata YOU WIN. Se il riquadro resta vuoto si usa "Giocatore 1" / "Giocatore 2". I nomi vengono ricordati dal browser anche quando riapri la pagina.
- **Lo sfondo del campo è tutto del colore scelto**, un po' più scuro così la pallina e le scritte restano visibili. I colori con più tinte usano una sfumatura (per esempio rosso e blu con Spider-Man, arancione e giallo con Lava, tutti i colori che girano con Rainbow). Quando cambi colore lo sfondo sfuma dolcemente verso il nuovo colore in meno di un secondo.
- In alto al centro del campo c'è il **timer**, con il punteggio del Giocatore 1 a sinistra e quello del Giocatore 2 a destra.
- Quando un giocatore vince compare la scritta **YOU WIN** con il bordo giallo, del colore della pallina scelta, e dall'alto cadono dei **coriandoli** colorati.
- Il colore della pallina si può cambiare in qualsiasi momento, anche durante la partita.
- **Le scritte lampeggiano piano** (titolo, titoli delle sezioni, nomi dei colori, pulsanti, istruzioni, punteggi, timer, YOU WIN e messaggi nel campo): sfumano lentamente e tornano piene con un ciclo di circa 2,4 secondi, e quando sono accese emettono una **luce del loro colore**. I nomi dei colori si illuminano del colore del loro pulsante, e la luce si irradia anche intorno al pulsante. La pallina invece **non lampeggia** (tranne Cursed e Cyborg, che hanno il loro lampeggio speciale).

## Colori della pallina

I nomi dei colori sui pulsanti sono in inglese.

### 🎨 Colori originali

Red · Blue · Green · Pink · Yellow · Orange · White

### 🎨 Colori originali 2

Purple · Sky Blue · Turquoise · Gold · Brown

### ✨ Colori speciali

| Colore | Pallina | Scritta YOU WIN |
|--------|---------|-----------------|
| **Rainbow** | Cambia colore di continuo e lascia una scia multicolore | Cambia colore insieme alla pallina |
| **Yin Yang** | Simbolo yin yang bianco e nero che ruota | Metà bianca e metà nera |
| **Galaxy** | Nebulosa rosa, viola e blu con stelline che brillano | Sfumatura rosa → viola → blu |
| **Candy** | Strisce rosa e bianche che ruotano, come un lecca-lecca | Strisce diagonali rosa e bianche |
| **Cursed** | Rossa con una crepa nera, lampeggia e lancia fulmini neri tutto intorno | Rossa lampeggiante, con grossi fulmini neri che cadono dall'alto |
| **Cyborg** | Sfera metallica blu con circuiti azzurri e un occhio centrale che lampeggia | Blu metallico con una banda azzurra luminosa che lampeggia |

### 🌍 Colori elementali

| Colore | Pallina | Scritta YOU WIN |
|--------|---------|-----------------|
| **Lava** | Nucleo incandescente che pulsa, con croste scure in movimento | Dal giallo incandescente al rosso |
| **Water** | Sfera azzurra con un'onda che scorre e un riflesso | Dall'azzurro chiaro al blu profondo |
| **Earth** | Zolla marrone con sassolini e un ciuffo d'erba, che rotola | Erba verde sopra, terra marrone sotto |
| **Snow** | Palla bianca con un fiocco di neve che gira | Dal bianco all'azzurro ghiaccio |

### 🦸 Hero Color

| Colore | Pallina | Scritta YOU WIN |
|--------|---------|-----------------|
| **Spider-Man** | Maschera rossa con ragnatela nera, occhi bianchi e parte bassa blu | Rossa con la ragnatela nera e la parte bassa blu |
| **Iron Man** | Elmo rosso metallico con maschera dorata e occhi azzurri luminosi che pulsano | Rosso metallico con un riflesso dorato che scorre |
| **Captain America** | Lo scudo con gli anelli rossi e bianchi e la stella bianca su fondo blu, che gira | Bandiera: fascia blu con le stelle sopra, strisce rosse e bianche sotto |
| **Thor** | Sfera di tempesta con il martello d'argento che ruota e fulmini azzurri tutto intorno | Argento del martello, con lampi e fulmini azzurri che cadono dall'alto |
| **Hulk** | Faccia verde arrabbiata con capelli neri e denti stretti, che trema | Verde con i pantaloncini viola in basso, e la scritta trema |

### 💎 Colori minerali

| Colore | Pallina | Scritta YOU WIN |
|--------|---------|-----------------|
| **Diamond** | Gemma azzurra brillante con le sfaccettature che ruotano e un luccichio a stella | Dal blu all'azzurro chiaro, con un riflesso bianco che scorre |
| **Emerald** | Gemma verde con le sfaccettature che ruotano e un luccichio a stella | Dal verde scuro al verde chiaro, con un riflesso bianco che scorre |

### 💥 Ultra Color

| Colore | Pallina | Scritta YOU WIN |
|--------|---------|-----------------|
| **Ultra** | Mischia tutti gli altri colori: **ogni secondo** la pallina diventa un colore diverso, passando per tutti (da Red fino a Iron Man) e poi ricomincia. Anche lo sfondo del campo cambia ogni secondo | Prende l'aspetto del colore del momento |

> Con il colore **Yellow** il bordo della scritta YOU WIN diventa rosso, altrimenti non si leggerebbe.

## Personalizzazione

All'inizio dello script in `pingpong.html` ci sono alcune costanti facili da modificare:

| Costante | Valore | Significato |
|----------|--------|-------------|
| `WIN_SCORE` | `10` | Punti necessari per vincere |
| `GAME_TIME` | `40 * 60` | Durata della partita in secondi |
| `PADDLE_H` | `90` | Altezza delle racchette |
| `PADDLE_SPEED` | `9` | Velocità delle racchette |
| `BALL_SPEED` | `9` | Velocità normale della pallina |
| `BALL_SUPER_SPEED` | `18` | Velocità dei tiri super veloci |
| `SUPER_CHANCE` | `0.2` | Probabilità di un tiro super veloce a ogni colpo (0.2 = 1 su 5) |

Per aggiungere un nuovo colore semplice basta aggiungere una riga all'elenco `COLORS`, ad esempio:

```js
{ id: 'menta', label: 'Mint', value: '#3dffb0' },
```

Il pulsante comparirà nella sezione **Colori originali 2**, e il nuovo colore entrerà automaticamente anche nel giro di **Ultra**. Per metterlo in un'altra sezione, aggiungi il suo `id` all'elenco `ORIGINAL`, `SPECIAL`, `ELEMENTAL`, `HERO`, `MINERAL` o `ULTRA`.
