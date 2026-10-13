# 🛠️ Come migliorare jose-margareth.com

Guida con tutto quello che serve per rendere la **Sala Giochi** più veloce, più facile da trovare, più sicura e più bella.
Ogni punto dice **perché** conviene, **cosa fare** e **quanto è difficile**.

> Situazione al 13 ottobre 2026: il sito è online su **https://jose-margareth.com** (Railway + Namecheap), con 3 pagine: `index.html` (Sala Giochi), `pingpong.html` (Ping Pong) e `pixelcraft.html` (PixelCraft).

---

## Legenda

| Simbolo | Significato |
|---|---|
| 🔴 | Importante: da fare per primo |
| 🟡 | Utile: migliora molto il sito |
| 🟢 | Extra: quando c'è tempo |
| ⏱️ | Tempo indicativo |

---

## 1. Dominio e configurazione

### 🔴 1.1 Far funzionare anche `www.jose-margareth.com` ⏱️ 10 minuti
**Perché:** chi scrive `www.jose-margareth.com` oggi vede "The train has not arrived at the station". Anche i browser che si ricordano il vecchio reindirizzamento verso `www` finiscono lì.

**Cosa fare:**
1. **Railway** → servizio → Settings → Networking → **+ Custom Domain** → `www.jose-margareth.com`, porta **8080**.
2. **Namecheap** → Advanced DNS:
   - CNAME `www` → il valore `xxxx.up.railway.app` che dà Railway (oggi punta a `jose-margareth.com`: va cambiato);
   - TXT `_railway-verify.www` → il codice che dà Railway.
3. Aspettare il pallino verde 🟢. Il server rimanda già da solo `www` → `https://jose-margareth.com`.

### 🟡 1.2 Comprare `josé-margareth.com` (con l'accento) ⏱️ 15 minuti
**Perché:** il dominio con l'accento **non è registrato** (whois: "No match"). Se qualcuno lo scrive, non trova niente, e qualcun altro potrebbe comprarlo.

**Cosa fare:** comprarlo su Namecheap (si cerca come `josé-margareth.com`; internamente è `xn--jos-margareth-dhb.com`), poi aggiungere un **URL Redirect Record** `@` → `https://jose-margareth.com`. Il server lo riconosce già.

### 🟡 1.3 Reindirizzamenti "temporanei" invece che "permanenti" ⏱️ 2 minuti
**Perché:** il server usa il codice **301 (permanente)**. I browser lo ricordano per sempre, ed è proprio quello che ha bloccato Safari quando abbiamo cambiato da `www` a senza `www`. Finché si fanno prove conviene il **302 (temporaneo)**; si torna al 301 quando tutto è definitivo (il 301 è un po' meglio per Google).

**Cosa fare** in `server.js`:
```js
res.writeHead(302, { Location: TARGET + req.url });   // era 301
```

### 🟢 1.4 Mandare sempre su https ⏱️ già fatto da Railway
Railway passa già da solo da `http://` a `https://`. Non serve fare niente: è solo da ricordare.

---

## 2. Velocità

### 🔴 2.1 Togliere la musica da dentro `pingpong.html` ⏱️ 20 minuti
**Perché:** `pingpong.html` pesa **1,92 MB**, e di questi **1,85 MB sono la canzone** incorporata. Chi apre il Ping Pong (anche dal telefono, con i dati) scarica tutta la canzone prima di vedere il gioco.

**Cosa fare:**
1. Rinominare il file senza spazi né accenti: `Nueva grabación.m4a` → `musica.m4a`.
2. In `pingpong.html` sostituire il lunghissimo `src="data:audio/mp4;base64,…"` con:
   ```html
   <audio id="music" loop preload="none" src="musica.m4a"></audio>
   ```
   Con `preload="none"` la canzone si scarica **solo quando si preme Play**.
3. Il server sa già servire i file `.m4a`.

**Risultato:** la pagina del Ping Pong passa da ~2 MB a ~70 KB e si apre all'istante.

### 🟡 2.2 Comprimere le pagine (gzip) ⏱️ 15 minuti
**Perché:** l'HTML compresso pesa circa il 70–80% in meno. Oggi il server manda i file senza comprimerli.

**Cosa fare** in `server.js`, al posto di `fs.createReadStream(filePath).pipe(res)`, per i file di testo:
```js
const zlib = require('zlib');
// ...
const canGzip = /\bgzip\b/.test(req.headers['accept-encoding'] || '') && /^(text|application\/json)/.test(type);
if (canGzip) {
  res.writeHead(200, { 'Content-Type': type, 'Content-Encoding': 'gzip', 'Vary': 'Accept-Encoding', 'Cache-Control': cache });
  return fs.createReadStream(filePath).pipe(zlib.createGzip()).pipe(res);
}
```
(togliere `Content-Length` quando si comprime, perché cambia la dimensione).

### 🟢 2.3 Fermare il gioco quando la scheda non è visibile ⏱️ 10 minuti
**Perché:** se si cambia scheda del browser, oggi il Ping Pong continua a girare e la musica a suonare. Fermandolo si risparmia batteria e la partita non va avanti da sola.

**Cosa fare** in `pingpong.html`:
```js
document.addEventListener('visibilitychange', () => {
  if (document.hidden && running) togglePause();
});
```

### 🟢 2.4 Alleggerire gli effetti sui computer lenti ⏱️ 30 minuti
**Perché:** le luci animate intorno a ~40 pulsanti e le ombre luminose sul campo costano molto ai computer vecchi e ai telefoni.

**Cosa fare:** un pulsante "✨ Effetti: ON/OFF" che toglie la classe di animazione ai pulsanti e mette `shadowBlur = 0` nel canvas.

---

## 3. Farsi trovare su Google e sui social

### 🔴 3.1 Descrizione, icona e anteprima per i social ⏱️ 20 minuti
**Perché:** oggi le pagine **non hanno** né descrizione, né icona (favicon), né anteprima. Su Google e quando si condivide il link su WhatsApp compare solo il titolo, senza immagine.

**Cosa fare:** nel `<head>` di ogni pagina (esempio per `index.html`):
```html
<meta name="description" content="Sala Giochi di José e Margareth: Ping Pong per 2 giocatori e PixelCraft, il mondo a pixel da costruire. Gratis, nel browser.">
<link rel="icon" href="favicon.png">
<meta property="og:title" content="Sala Giochi – jose-margareth.com">
<meta property="og:description" content="Ping Pong per 2 giocatori e PixelCraft. Gioca gratis nel browser!">
<meta property="og:image" content="https://jose-margareth.com/anteprima.png">
<meta property="og:url" content="https://jose-margareth.com/">
<meta name="twitter:card" content="summary_large_image">
```
- `favicon.png`: un'immagine quadrata 512×512 (per esempio la racchetta 🏓 o il joystick 🎮).
- `anteprima.png`: un'immagine 1200×630 con uno screenshot della Sala Giochi.

### 🟡 3.2 Google Search Console ⏱️ 15 minuti + qualche giorno di attesa
**Perché:** per dire a Google che il sito esiste e vedere quando compare nei risultati.

**Cosa fare:**
1. Andare su **search.google.com/search-console** → Aggiungi proprietà → **Dominio** → `jose-margareth.com`.
2. Google dà un **TXT** da mettere su Namecheap (Host `@`). Si aggiunge come record nuovo, senza toccare gli altri TXT.
3. Inviare la sitemap (punto 3.3).

### 🟡 3.3 `robots.txt` e `sitemap.xml` ⏱️ 10 minuti
**Perché:** aiutano Google a trovare tutte le pagine.

`robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://jose-margareth.com/sitemap.xml
```

`sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://jose-margareth.com/</loc></url>
  <url><loc>https://jose-margareth.com/pingpong.html</loc></url>
  <url><loc>https://jose-margareth.com/pixelcraft.html</loc></url>
</urlset>
```
In `server.js` aggiungere il tipo `'.txt': 'text/plain; charset=utf-8'` e `'.xml': 'application/xml; charset=utf-8'` all'elenco `MIME`.

### 🟢 3.4 Indirizzi più belli ⏱️ 15 minuti
**Perché:** `jose-margareth.com/pingpong` è più facile da ricordare di `jose-margareth.com/pingpong.html`.

**Cosa fare:** in `server.js`, se il file non esiste e non ha estensione, provare ad aggiungere `.html`.

---

## 4. Sicurezza e privacy

### 🔴 4.1 Il repository GitHub è pubblico ⏱️ 2 minuti
**Perché:** chiunque può vedere tutto il codice **e ascoltare `Nueva grabación.m4a`**. Se la registrazione è personale, meglio non lasciarla pubblica.

**Cosa fare:** GitHub → repository `jose-margareth` → Settings → Danger Zone → **Change visibility → Private**. Railway continua a funzionare (ha già il permesso).

> Attenzione: anche rendendo privato il repository, la canzone resta ascoltabile **dal sito**, perché è dentro il Ping Pong.

### 🟡 4.2 Intestazioni di sicurezza ⏱️ 10 minuti
**Perché:** proteggono i visitatori da alcuni attacchi comuni (pagina dentro siti altrui, file interpretati nel modo sbagliato).

**Cosa fare** in `server.js`, in ogni risposta:
```js
'X-Content-Type-Options': 'nosniff',
'X-Frame-Options': 'SAMEORIGIN',
'Referrer-Policy': 'strict-origin-when-cross-origin',
'Strict-Transport-Security': 'max-age=31536000',
```
> Aggiungere `Strict-Transport-Security` **solo** quando https funziona su tutti i domini (anche `www`), perché i browser lo ricordano a lungo.

### 🟡 4.3 Personaggi e bandiere ⏱️ da valutare
**Perché:** Spider-Man, Iron Man, Captain America, Thor e Hulk sono personaggi **Marvel/Disney**, protetti da marchio. Per un sito personale e senza pubblicità di solito non è un problema, ma se il sito diventa pubblico e famoso, o se ci si mette pubblicità, conviene rinominarli (per esempio "Ragno", "Armatura", "Scudo", "Martello", "Gigante verde").

---

## 5. Accessibilità (tutti devono poter giocare)

### 🔴 5.1 Scritte che lampeggiano ⏱️ 15 minuti
**Perché:** tutte le scritte lampeggiano di continuo. Per chi soffre di emicrania, epilessia fotosensibile o ha difficoltà di attenzione può essere fastidioso o pericoloso. I sistemi operativi hanno l'opzione "**Riduci movimento**": il sito dovrebbe rispettarla.

**Cosa fare** in fondo al CSS di ogni pagina:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
}
```
e nel JavaScript del Ping Pong, quando `matchMedia('(prefers-reduced-motion: reduce)').matches`, non far lampeggiare le scritte del campo e il colore Cursed.

### 🟡 5.2 Leggibilità ⏱️ 15 minuti
- Alcuni nomi sui pulsanti si leggono male (es. **Candy** e **Yin Yang** su sfondo chiaro). Rinforzare l'ombra del testo o scurire lo sfondo dietro alla scritta.
- I testi grigi piccoli (istruzioni in fondo) sono poco contrastati: schiarirli un po'.

### 🟢 5.3 Tastiera e lettori di schermo ⏱️ 20 minuti
- Aggiungere `aria-pressed="true/false"` ai pulsanti dei colori, per far capire quale è selezionato.
- Aggiungere `aria-label` al canvas: `<canvas aria-label="Campo da ping pong">`.

---

## 6. Telefono e tablet

### 🟡 6.1 Ping Pong sul telefono ⏱️ 30 minuti
**Perché:** il campo si vede, ma su schermi piccoli i due giocatori devono toccare lo stesso telefono stretto, e le 8 colonne dei colori occupano molto spazio.

**Cosa fare:**
- consigliare (o forzare con un messaggio) di girare il telefono in **orizzontale**;
- su schermi piccoli, mettere le sezioni dei colori in un menu che si apre ("🎨 Colori").

### 🟢 6.2 Installare il sito come un'app (PWA) ⏱️ 45 minuti
**Perché:** con un `manifest.json` e un'icona, il sito si può aggiungere alla schermata Home del telefono e si apre a schermo intero, come un'app, anche senza internet.

**Cosa serve:** `manifest.json` (nome, icone, colori), un piccolo `service-worker.js` che salva le pagine, e due righe nel `<head>`.

---

## 7. Contenuti e giochi

### 🔴 7.1 Correggere la scheda del Ping Pong ⏱️ 1 minuto
In `index.html` la descrizione dice "**22 colori**", ma ora sono **42**. Cambiare in "oltre 40 colori".

### 🟡 7.2 Idee per il Ping Pong
- **Modalità contro il computer** (1 giocatore), con livelli facile/medio/difficile.
- **Effetti sonori** quando la pallina colpisce la racchetta e quando si fa punto (con il Web Audio API, senza file).
- **Pulsante per il volume** della musica e per spegnerla.
- **Classifica** delle ultime partite (salvata nel browser).

### 🟡 7.3 Idee per PixelCraft
- **Giorno e notte**, con le torce che fanno luce.
- **Nuovi blocchi**: lana colorata, torce, fiori diversi, lampade.
- **Animali** che camminano (mucche, pecore).
- **Più mondi salvati** e la possibilità di scaricare/caricare un mondo come file.

### 🟢 7.4 Nuovi giochi per le schede "In arrivo"
La Sala Giochi ha già 2 schede vuote. Per aggiungerne uno basta:
1. creare il file del gioco (es. `memory.html`);
2. in `index.html`, nell'elenco `GAMES`, riempire una scheda con `title`, `emoji`, `file`, `description`, `tags`, `color`, `cover`.

Idee semplici: **Memory** con le carte, **Snake**, **Tris** (2 giocatori), **Indovina il numero**, **Quiz** con domande.

---

## 8. Ordine nel codice

### 🟡 8.1 Dividere `pingpong.html` ⏱️ 1 ora
**Perché:** è un unico file di quasi **2.000 righe** (più la canzone). Diventa difficile modificarlo senza rompere qualcosa.

**Cosa fare:** dividerlo in
```
pingpong.html        → solo la struttura
pingpong/style.css   → lo stile
pingpong/colori.js   → l'elenco dei colori e come si disegnano
pingpong/gioco.js    → la logica di gioco
```

### 🟢 8.2 Una pagina di prova prima di pubblicare ⏱️ 10 minuti
**Perché:** oggi ogni `git push` va subito online. Con un secondo ambiente si può provare prima.

**Cosa fare:** su Railway creare un **ambiente "staging"** collegato a un ramo `prova` del repository. Si lavora su `prova`, si controlla l'indirizzo `….up.railway.app` di staging, e solo quando va bene si unisce a `main`.

### 🟢 8.3 Controllare che il sito sia sempre acceso ⏱️ 10 minuti
**Perché:** per sapere subito se il sito si ferma.

**Cosa fare:** registrarsi gratis su **UptimeRobot** (uptimerobot.com) e aggiungere un controllo su `https://jose-margareth.com` ogni 5 minuti: arriva un'email se il sito non risponde.

---

## 9. Come pubblicare ogni modifica

Dal Terminale, nella cartella `josemargareth`:
```bash
git add -A
git commit -m "descrizione della modifica"
git push
```
Railway pubblica la nuova versione da solo in 1–2 minuti.

**Se dopo una modifica il sito non si vede bene:**
1. Provare in una **finestra privata** (Safari: ⇧⌘N), per escludere la memoria del browser.
2. Controllare i **log** su Railway (servizio → Deployments → ultimo deploy → View logs). Deve comparire:
   `Sala Giochi in ascolto sulla porta 8080 (indirizzo principale: https://jose-margareth.com)`
3. Strumenti utili:
   - **whatsmydns.net**: verifica i DNS in tutto il mondo;
   - **sslshopper.com/ssl-checker.html**: verifica il certificato https;
   - **pagespeed.web.dev**: misura la velocità e dà consigli (da provare dopo il punto 2.1).

---

## ✅ Lista rapida in ordine di priorità

- [ ] 🔴 1.1 Collegare `www.jose-margareth.com` su Railway
- [ ] 🔴 2.1 Togliere la canzone da dentro `pingpong.html`
- [ ] 🔴 3.1 Descrizione, favicon e anteprima per i social
- [ ] 🔴 4.1 Rendere privato il repository GitHub (se la registrazione è personale)
- [ ] 🔴 5.1 Rispettare "Riduci movimento" per le scritte che lampeggiano
- [ ] 🔴 7.1 "22 colori" → "oltre 40 colori"
- [ ] 🟡 1.2 Comprare `josé-margareth.com`
- [ ] 🟡 1.3 Reindirizzamenti 302 durante le prove
- [ ] 🟡 2.2 Compressione gzip
- [ ] 🟡 3.2 Google Search Console
- [ ] 🟡 3.3 `robots.txt` e `sitemap.xml`
- [ ] 🟡 4.2 Intestazioni di sicurezza
- [ ] 🟡 4.3 Valutare i nomi dei supereroi
- [ ] 🟡 5.2 Leggibilità dei pulsanti
- [ ] 🟡 6.1 Ping Pong sul telefono
- [ ] 🟡 7.2 / 7.3 Nuove funzioni per i giochi
- [ ] 🟡 8.1 Dividere `pingpong.html`
- [ ] 🟢 Tutto il resto
