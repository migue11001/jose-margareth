// Traduzioni della Sala Giochi, condivise da tutte le pagine.
// Uso nelle pagine:
//   - testo semplice:       <span data-i18n="chiave">…</span>
//   - testo con <kbd>, <b>: <p data-i18n-html="chiave">…</p>
//   - segnaposto:           <input data-i18n-placeholder="chiave">
//   - valore {n}:           data-i18n-n="1"
//   - nel JavaScript:       I18N.t('chiave', { n: 1 })  e l'evento window 'langchange'
(function () {
  const LANGS = [
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  ];

  const STRINGS = {
    it: {
      'lang.label': '🌐 Lingua',
      'common.back': '← Tutti i giochi',

      'index.title': 'Sala Giochi',
      'index.h1': '🎮 Sala Giochi',
      'index.subtitle': 'Scegli un gioco per iniziare',
      'index.footer': 'Nuovi giochi in arrivo!',
      'intro.title': "Benvenuti su jose-margareth.com! 🎮",
      'intro.tagline': "Il divertimento non ha età: entra, gioca e lasciati sorprendere!",
      'intro.p1': "Preparati a entrare in un mondo pieno di colori, sfide e creatività! Jose-Margareth.com nasce per diventare una grande sala giochi digitale, un luogo dove bambini, ragazzi e adulti possono divertirsi, mettere alla prova le proprie abilità e condividere la passione per il gioco.",
      'intro.p2': "🏓 <b>Sfida gli amici a Ping Pong</b>, costruisci mondi straordinari in <b>PixelCraft</b> e preparati a scoprire tanti nuovi giochi in arrivo!",
      'intro.p3': "Che tu abbia voglia di competere, creare o semplicemente trascorrere qualche momento di puro divertimento, qui troverai sempre qualcosa di nuovo da provare.",
      'intro.motto': "Una sola grande sala giochi, infinite possibilità di divertirsi.",
      'intro.cta': "✨ Il prossimo livello ti aspetta. Sei pronto a giocare?",
      'card.soon': 'In arrivo',
      'card.play': '▶ Gioca',
      'card.soonTitle': 'Gioco {n}',
      'card.soonDesc': 'Un nuovo gioco arriverà presto in questa scheda.',
      'game.pingpong.desc': 'Sfida un amico sulla stessa tastiera. Arriva a 10 punti, scegli tra oltre 40 colori della pallina e attento ai tiri super veloci!',
      'game.pixelcraft.desc': 'Un mondo a pixel tutto da costruire: piazza e rompi blocchi, crea case e pianta alberi con un clic, vola sopra le colline.',
      'tag.2players': '2 giocatori',
      'tag.1player': '1 giocatore',
      'tag.keyboardTouch': 'Tastiera / Touch',
      'tag.mouseTouch': 'Mouse / Touch',
      'tag.40min': '40 min',
      'tag.building': 'Costruzione',

      'pp.doctitle': 'Ping Pong 2 Giocatori',
      'pp.selectName': 'Seleziona nome del giocatore {n}',
      'pp.player': 'Giocatore {n}',
      'sec.original': '🎨 Colori originali',
      'sec.original2': '🎨 Colori originali 2',
      'sec.special': '✨ Colori speciali',
      'sec.elemental': '🌍 Colori elementali',
      'sec.hero': '🦸 Hero Color',
      'sec.mineral': '💎 Colori minerali',
      'sec.flags': '🚩 Flags Color',
      'sec.seasons': '🍂 Colori delle stagioni',
      'sec.hedgehog': '🦔 Hedgehog Colors',
      'sec.ultra': '💥 Ultra Color',
      'pp.start': '▶ Inizia / Pausa',
      'pp.reset': '↺ Ricomincia',
      'pp.help': 'Giocatore 1: <kbd>W</kbd> su, <kbd>S</kbd> giù &nbsp;·&nbsp; Giocatore 2: <kbd>↑</kbd> su, <kbd>↓</kbd> giù &nbsp;·&nbsp; <kbd>Spazio</kbd> pausa &nbsp;·&nbsp; Vince chi arriva a 10 punti o chi ha più punti allo scadere dei 40 minuti.<br>Su touch screen: trascina il dito sulla metà sinistra o destra del campo.',
      'pp.superFast': '⚡ SUPER VELOCE! ⚡',
      'pp.draw': '⏱ Tempo scaduto: pareggio!',
      'pp.paused': 'In pausa',
      'pp.pressPlay': 'Premi Spazio o "Inizia" per giocare',
      'pp.pressReset': 'Premi "Ricomincia" per una nuova partita',
      'pp.musicOn': '🔊 Musica: ON',
      'pp.musicOff': '🔇 Musica: OFF',

      'pc.holding': 'In mano:',
      'pc.fly': 'Volo:',
      'pc.bgPlace': 'Piazza sullo sfondo:',
      'pc.btnFly': '✈️ Volo',
      'pc.btnBg': '🧱 Sfondo',
      'pc.btnSave': '💾 Salva',
      'pc.btnNew': '🌍 Nuovo mondo',
      'pc.help': 'Muoviti: <kbd>A</kbd> <kbd>D</kbd> o <kbd>←</kbd> <kbd>→</kbd> &nbsp;·&nbsp; Salta: <kbd>W</kbd> <kbd>↑</kbd> o <kbd>Spazio</kbd> &nbsp;·&nbsp; Volo: <kbd>F</kbd> (in volo <kbd>W</kbd>/<kbd>S</kbd> per salire e scendere)<br><b>Clic sinistro</b>: piazza il blocco &nbsp;·&nbsp; <b>Clic destro</b> (o <kbd>Shift</kbd>+clic): rompi &nbsp;·&nbsp; Tieni premuto e trascina per costruire più blocchi<br>Scegli il blocco: <kbd>1</kbd>…<kbd>0</kbd>, rotellina del mouse o <kbd>Q</kbd>/<kbd>E</kbd> &nbsp;·&nbsp; <kbd>T</kbd> albero &nbsp;·&nbsp; <kbd>C</kbd> casa &nbsp;·&nbsp; <kbd>X</kbd> piccone &nbsp;·&nbsp; <kbd>B</kbd> piazza sullo sfondo',
      'pc.saved': '💾 Mondo salvato',
      'pc.saveError': 'Non è stato possibile salvare il mondo',
      'pc.newConfirm': 'Vuoi creare un nuovo mondo? Quello attuale verrà cancellato.',
      'pc.newCreated': '🌍 Nuovo mondo creato',
      'block.grass': 'Erba', 'block.dirt': 'Terra', 'block.stone': 'Pietra', 'block.cobble': 'Ciottoli',
      'block.log': 'Tronco', 'block.leaves': 'Foglie', 'block.planks': 'Assi di legno', 'block.glass': 'Vetro',
      'block.bricks': 'Mattoni', 'block.sand': 'Sabbia', 'block.water': 'Acqua', 'block.bedrock': 'Roccia madre',
      'block.door': 'Porta', 'block.roof': 'Tegole', 'block.flower': 'Fiore',
      'tool.tree': 'Albero', 'tool.house': 'Casa', 'tool.pick': 'Piccone (rompi)',
    },

    en: {
      'lang.label': '🌐 Language',
      'common.back': '← All games',

      'index.title': 'Game Room',
      'index.h1': '🎮 Game Room',
      'index.subtitle': 'Pick a game to start',
      'index.footer': 'New games coming soon!',
      'intro.title': "Welcome to jose-margareth.com! 🎮",
      'intro.tagline': "Fun has no age: come in, play and let yourself be surprised!",
      'intro.p1': "Get ready to enter a world full of colours, challenges and creativity! Jose-Margareth.com was born to become a big digital game room, a place where children, teens and adults can have fun, test their skills and share their passion for games.",
      'intro.p2': "🏓 <b>Challenge your friends at Ping Pong</b>, build amazing worlds in <b>PixelCraft</b> and get ready to discover lots of new games coming soon!",
      'intro.p3': "Whether you feel like competing, creating or simply enjoying a few moments of pure fun, here you'll always find something new to try.",
      'intro.motto': "One big game room, endless ways to have fun.",
      'intro.cta': "✨ The next level is waiting for you. Ready to play?",
      'card.soon': 'Coming soon',
      'card.play': '▶ Play',
      'card.soonTitle': 'Game {n}',
      'card.soonDesc': 'A new game will arrive in this card soon.',
      'game.pingpong.desc': 'Challenge a friend on the same keyboard. Reach 10 points, choose from over 40 ball colors and watch out for super-fast shots!',
      'game.pixelcraft.desc': 'A pixel world to build: place and break blocks, create houses and plant trees with one click, fly over the hills.',
      'tag.2players': '2 players',
      'tag.1player': '1 player',
      'tag.keyboardTouch': 'Keyboard / Touch',
      'tag.mouseTouch': 'Mouse / Touch',
      'tag.40min': '40 min',
      'tag.building': 'Building',

      'pp.doctitle': 'Ping Pong for 2 Players',
      'pp.selectName': 'Choose player {n} name',
      'pp.player': 'Player {n}',
      'sec.original': '🎨 Original Colors',
      'sec.original2': '🎨 Original Colors 2',
      'sec.special': '✨ Special Colors',
      'sec.elemental': '🌍 Elemental Colors',
      'sec.hero': '🦸 Hero Colors',
      'sec.mineral': '💎 Mineral Colors',
      'sec.flags': '🚩 Flag Colors',
      'sec.seasons': '🍂 Season Colors',
      'sec.hedgehog': '🦔 Hedgehog Colors',
      'sec.ultra': '💥 Ultra Color',
      'pp.start': '▶ Start / Pause',
      'pp.reset': '↺ Restart',
      'pp.help': 'Player 1: <kbd>W</kbd> up, <kbd>S</kbd> down &nbsp;·&nbsp; Player 2: <kbd>↑</kbd> up, <kbd>↓</kbd> down &nbsp;·&nbsp; <kbd>Space</kbd> pause &nbsp;·&nbsp; The first to reach 10 points wins, or whoever has more points when the 40 minutes are up.<br>On touch screens: drag your finger on the left or right half of the field.',
      'pp.superFast': '⚡ SUPER FAST! ⚡',
      'pp.draw': "⏱ Time's up: it's a draw!",
      'pp.paused': 'Paused',
      'pp.pressPlay': 'Press Space or "Start" to play',
      'pp.pressReset': 'Press "Restart" for a new match',
      'pp.musicOn': '🔊 Music: ON',
      'pp.musicOff': '🔇 Music: OFF',

      'pc.holding': 'Holding:',
      'pc.fly': 'Flying:',
      'pc.bgPlace': 'Place on background:',
      'pc.btnFly': '✈️ Fly',
      'pc.btnBg': '🧱 Background',
      'pc.btnSave': '💾 Save',
      'pc.btnNew': '🌍 New world',
      'pc.help': 'Move: <kbd>A</kbd> <kbd>D</kbd> or <kbd>←</kbd> <kbd>→</kbd> &nbsp;·&nbsp; Jump: <kbd>W</kbd> <kbd>↑</kbd> or <kbd>Space</kbd> &nbsp;·&nbsp; Fly: <kbd>F</kbd> (while flying, <kbd>W</kbd>/<kbd>S</kbd> to go up and down)<br><b>Left click</b>: place block &nbsp;·&nbsp; <b>Right click</b> (or <kbd>Shift</kbd>+click): break &nbsp;·&nbsp; Hold and drag to build many blocks<br>Choose a block: <kbd>1</kbd>…<kbd>0</kbd>, mouse wheel or <kbd>Q</kbd>/<kbd>E</kbd> &nbsp;·&nbsp; <kbd>T</kbd> tree &nbsp;·&nbsp; <kbd>C</kbd> house &nbsp;·&nbsp; <kbd>X</kbd> pickaxe &nbsp;·&nbsp; <kbd>B</kbd> place on background',
      'pc.saved': '💾 World saved',
      'pc.saveError': 'The world could not be saved',
      'pc.newConfirm': 'Create a new world? The current one will be deleted.',
      'pc.newCreated': '🌍 New world created',
      'block.grass': 'Grass', 'block.dirt': 'Dirt', 'block.stone': 'Stone', 'block.cobble': 'Cobblestone',
      'block.log': 'Log', 'block.leaves': 'Leaves', 'block.planks': 'Wooden Planks', 'block.glass': 'Glass',
      'block.bricks': 'Bricks', 'block.sand': 'Sand', 'block.water': 'Water', 'block.bedrock': 'Bedrock',
      'block.door': 'Door', 'block.roof': 'Roof Tiles', 'block.flower': 'Flower',
      'tool.tree': 'Tree', 'tool.house': 'House', 'tool.pick': 'Pickaxe (break)',
    },

    es: {
      'lang.label': '🌐 Idioma',
      'common.back': '← Todos los juegos',

      'index.title': 'Sala de Juegos',
      'index.h1': '🎮 Sala de Juegos',
      'index.subtitle': 'Elige un juego para empezar',
      'index.footer': '¡Nuevos juegos muy pronto!',
      'intro.title': "¡Bienvenidos a jose-margareth.com! 🎮",
      'intro.tagline': "La diversión no tiene edad: ¡entra, juega y déjate sorprender!",
      'intro.p1': "¡Prepárate para entrar en un mundo lleno de colores, desafíos y creatividad! Jose-Margareth.com nace para convertirse en una gran sala de juegos digital, un lugar donde niños, jóvenes y adultos pueden divertirse, poner a prueba sus habilidades y compartir la pasión por el juego.",
      'intro.p2': "🏓 <b>Reta a tus amigos al Ping Pong</b>, construye mundos extraordinarios en <b>PixelCraft</b> y prepárate para descubrir muchos juegos nuevos que están por llegar.",
      'intro.p3': "Tengas ganas de competir, de crear o simplemente de pasar un rato de pura diversión, aquí siempre encontrarás algo nuevo para probar.",
      'intro.motto': "Una sola gran sala de juegos, infinitas formas de divertirse.",
      'intro.cta': "✨ El siguiente nivel te espera. ¿Estás listo para jugar?",
      'card.soon': 'Próximamente',
      'card.play': '▶ Jugar',
      'card.soonTitle': 'Juego {n}',
      'card.soonDesc': 'Pronto llegará un nuevo juego a esta tarjeta.',
      'game.pingpong.desc': 'Reta a un amigo en el mismo teclado. Llega a 10 puntos, elige entre más de 40 colores de pelota y ¡cuidado con los tiros súper rápidos!',
      'game.pixelcraft.desc': 'Un mundo de píxeles para construir: coloca y rompe bloques, crea casas y planta árboles con un clic, vuela sobre las colinas.',
      'tag.2players': '2 jugadores',
      'tag.1player': '1 jugador',
      'tag.keyboardTouch': 'Teclado / Táctil',
      'tag.mouseTouch': 'Ratón / Táctil',
      'tag.40min': '40 min',
      'tag.building': 'Construcción',

      'pp.doctitle': 'Ping Pong para 2 jugadores',
      'pp.selectName': 'Elige el nombre del jugador {n}',
      'pp.player': 'Jugador {n}',
      'sec.original': '🎨 Colores originales',
      'sec.original2': '🎨 Colores originales 2',
      'sec.special': '✨ Colores especiales',
      'sec.elemental': '🌍 Colores elementales',
      'sec.hero': '🦸 Colores de héroes',
      'sec.mineral': '💎 Colores minerales',
      'sec.flags': '🚩 Colores de banderas',
      'sec.seasons': '🍂 Colores de las estaciones',
      'sec.hedgehog': '🦔 Colores de erizos',
      'sec.ultra': '💥 Color Ultra',
      'pp.start': '▶ Empezar / Pausa',
      'pp.reset': '↺ Reiniciar',
      'pp.help': 'Jugador 1: <kbd>W</kbd> arriba, <kbd>S</kbd> abajo &nbsp;·&nbsp; Jugador 2: <kbd>↑</kbd> arriba, <kbd>↓</kbd> abajo &nbsp;·&nbsp; <kbd>Espacio</kbd> pausa &nbsp;·&nbsp; Gana quien llegue a 10 puntos o quien tenga más puntos al acabar los 40 minutos.<br>En pantalla táctil: arrastra el dedo por la mitad izquierda o derecha del campo.',
      'pp.superFast': '⚡ ¡SÚPER RÁPIDO! ⚡',
      'pp.draw': '⏱ ¡Se acabó el tiempo: empate!',
      'pp.paused': 'En pausa',
      'pp.pressPlay': 'Pulsa Espacio o "Empezar" para jugar',
      'pp.pressReset': 'Pulsa "Reiniciar" para una nueva partida',
      'pp.musicOn': '🔊 Música: ON',
      'pp.musicOff': '🔇 Música: OFF',

      'pc.holding': 'En la mano:',
      'pc.fly': 'Vuelo:',
      'pc.bgPlace': 'Colocar en el fondo:',
      'pc.btnFly': '✈️ Volar',
      'pc.btnBg': '🧱 Fondo',
      'pc.btnSave': '💾 Guardar',
      'pc.btnNew': '🌍 Nuevo mundo',
      'pc.help': 'Moverse: <kbd>A</kbd> <kbd>D</kbd> o <kbd>←</kbd> <kbd>→</kbd> &nbsp;·&nbsp; Saltar: <kbd>W</kbd> <kbd>↑</kbd> o <kbd>Espacio</kbd> &nbsp;·&nbsp; Volar: <kbd>F</kbd> (en vuelo, <kbd>W</kbd>/<kbd>S</kbd> para subir y bajar)<br><b>Clic izquierdo</b>: colocar bloque &nbsp;·&nbsp; <b>Clic derecho</b> (o <kbd>Shift</kbd>+clic): romper &nbsp;·&nbsp; Mantén pulsado y arrastra para construir muchos bloques<br>Elegir bloque: <kbd>1</kbd>…<kbd>0</kbd>, rueda del ratón o <kbd>Q</kbd>/<kbd>E</kbd> &nbsp;·&nbsp; <kbd>T</kbd> árbol &nbsp;·&nbsp; <kbd>C</kbd> casa &nbsp;·&nbsp; <kbd>X</kbd> pico &nbsp;·&nbsp; <kbd>B</kbd> colocar en el fondo',
      'pc.saved': '💾 Mundo guardado',
      'pc.saveError': 'No se pudo guardar el mundo',
      'pc.newConfirm': '¿Quieres crear un mundo nuevo? El actual se borrará.',
      'pc.newCreated': '🌍 Nuevo mundo creado',
      'block.grass': 'Hierba', 'block.dirt': 'Tierra', 'block.stone': 'Piedra', 'block.cobble': 'Adoquín',
      'block.log': 'Tronco', 'block.leaves': 'Hojas', 'block.planks': 'Tablones de madera', 'block.glass': 'Cristal',
      'block.bricks': 'Ladrillos', 'block.sand': 'Arena', 'block.water': 'Agua', 'block.bedrock': 'Lecho de roca',
      'block.door': 'Puerta', 'block.roof': 'Tejas', 'block.flower': 'Flor',
      'tool.tree': 'Árbol', 'tool.house': 'Casa', 'tool.pick': 'Pico (romper)',
    },

    fr: {
      'lang.label': '🌐 Langue',
      'common.back': '← Tous les jeux',

      'index.title': 'Salle de jeux',
      'index.h1': '🎮 Salle de jeux',
      'index.subtitle': 'Choisis un jeu pour commencer',
      'index.footer': 'De nouveaux jeux arrivent bientôt !',
      'intro.title': "Bienvenue sur jose-margareth.com ! 🎮",
      'intro.tagline': "Le plaisir n'a pas d'âge : entre, joue et laisse-toi surprendre !",
      'intro.p1': "Prépare-toi à entrer dans un monde plein de couleurs, de défis et de créativité ! Jose-Margareth.com est né pour devenir une grande salle de jeux numérique, un lieu où enfants, ados et adultes peuvent s'amuser, tester leurs talents et partager leur passion du jeu.",
      'intro.p2': "🏓 <b>Défie tes amis au Ping Pong</b>, construis des mondes extraordinaires dans <b>PixelCraft</b> et prépare-toi à découvrir plein de nouveaux jeux à venir !",
      'intro.p3': "Que tu aies envie de rivaliser, de créer ou simplement de passer un moment de pur plaisir, tu trouveras toujours ici quelque chose de nouveau à essayer.",
      'intro.motto': "Une seule grande salle de jeux, des possibilités de s'amuser infinies.",
      'intro.cta': "✨ Le niveau suivant t'attend. Prêt à jouer ?",
      'card.soon': 'Bientôt',
      'card.play': '▶ Jouer',
      'card.soonTitle': 'Jeu {n}',
      'card.soonDesc': 'Un nouveau jeu arrivera bientôt dans cette carte.',
      'game.pingpong.desc': 'Défie un ami sur le même clavier. Atteins 10 points, choisis parmi plus de 40 couleurs de balle et attention aux tirs super rapides !',
      'game.pixelcraft.desc': 'Un monde en pixels à construire : pose et casse des blocs, crée des maisons et plante des arbres en un clic, survole les collines.',
      'tag.2players': '2 joueurs',
      'tag.1player': '1 joueur',
      'tag.keyboardTouch': 'Clavier / Tactile',
      'tag.mouseTouch': 'Souris / Tactile',
      'tag.40min': '40 min',
      'tag.building': 'Construction',

      'pp.doctitle': 'Ping Pong à 2 joueurs',
      'pp.selectName': 'Choisis le nom du joueur {n}',
      'pp.player': 'Joueur {n}',
      'sec.original': '🎨 Couleurs originales',
      'sec.original2': '🎨 Couleurs originales 2',
      'sec.special': '✨ Couleurs spéciales',
      'sec.elemental': '🌍 Couleurs des éléments',
      'sec.hero': '🦸 Couleurs des héros',
      'sec.mineral': '💎 Couleurs des minéraux',
      'sec.flags': '🚩 Couleurs des drapeaux',
      'sec.seasons': '🍂 Couleurs des saisons',
      'sec.hedgehog': '🦔 Couleurs hérisson',
      'sec.ultra': '💥 Couleur Ultra',
      'pp.start': '▶ Jouer / Pause',
      'pp.reset': '↺ Recommencer',
      'pp.help': 'Joueur 1 : <kbd>W</kbd> haut, <kbd>S</kbd> bas &nbsp;·&nbsp; Joueur 2 : <kbd>↑</kbd> haut, <kbd>↓</kbd> bas &nbsp;·&nbsp; <kbd>Espace</kbd> pause &nbsp;·&nbsp; Le premier à 10 points gagne, ou celui qui a le plus de points à la fin des 40 minutes.<br>Sur écran tactile : fais glisser ton doigt sur la moitié gauche ou droite du terrain.',
      'pp.superFast': '⚡ SUPER RAPIDE ! ⚡',
      'pp.draw': '⏱ Temps écoulé : égalité !',
      'pp.paused': 'En pause',
      'pp.pressPlay': 'Appuie sur Espace ou « Jouer » pour commencer',
      'pp.pressReset': 'Appuie sur « Recommencer » pour une nouvelle partie',
      'pp.musicOn': '🔊 Musique : ON',
      'pp.musicOff': '🔇 Musique : OFF',

      'pc.holding': 'En main :',
      'pc.fly': 'Vol :',
      'pc.bgPlace': 'Poser en arrière-plan :',
      'pc.btnFly': '✈️ Voler',
      'pc.btnBg': '🧱 Arrière-plan',
      'pc.btnSave': '💾 Sauvegarder',
      'pc.btnNew': '🌍 Nouveau monde',
      'pc.help': 'Se déplacer : <kbd>A</kbd> <kbd>D</kbd> ou <kbd>←</kbd> <kbd>→</kbd> &nbsp;·&nbsp; Sauter : <kbd>W</kbd> <kbd>↑</kbd> ou <kbd>Espace</kbd> &nbsp;·&nbsp; Voler : <kbd>F</kbd> (en vol, <kbd>W</kbd>/<kbd>S</kbd> pour monter et descendre)<br><b>Clic gauche</b> : poser le bloc &nbsp;·&nbsp; <b>Clic droit</b> (ou <kbd>Shift</kbd>+clic) : casser &nbsp;·&nbsp; Maintiens et fais glisser pour construire plusieurs blocs<br>Choisir le bloc : <kbd>1</kbd>…<kbd>0</kbd>, molette de la souris ou <kbd>Q</kbd>/<kbd>E</kbd> &nbsp;·&nbsp; <kbd>T</kbd> arbre &nbsp;·&nbsp; <kbd>C</kbd> maison &nbsp;·&nbsp; <kbd>X</kbd> pioche &nbsp;·&nbsp; <kbd>B</kbd> poser en arrière-plan',
      'pc.saved': '💾 Monde sauvegardé',
      'pc.saveError': "Impossible de sauvegarder le monde",
      'pc.newConfirm': 'Créer un nouveau monde ? Le monde actuel sera effacé.',
      'pc.newCreated': '🌍 Nouveau monde créé',
      'block.grass': 'Herbe', 'block.dirt': 'Terre', 'block.stone': 'Pierre', 'block.cobble': 'Pierre taillée',
      'block.log': 'Bûche', 'block.leaves': 'Feuilles', 'block.planks': 'Planches', 'block.glass': 'Verre',
      'block.bricks': 'Briques', 'block.sand': 'Sable', 'block.water': 'Eau', 'block.bedrock': 'Bedrock',
      'block.door': 'Porte', 'block.roof': 'Tuiles', 'block.flower': 'Fleur',
      'tool.tree': 'Arbre', 'tool.house': 'Maison', 'tool.pick': 'Pioche (casser)',
    },
    ja: {
      'lang.label': '🌐 言語',
      'common.back': '← すべてのゲーム',

      'index.title': 'ゲームルーム',
      'index.h1': '🎮 ゲームルーム',
      'index.subtitle': 'ゲームを選んでスタート',
      'index.footer': '新しいゲームが近日登場！',
      'intro.title': "jose-margareth.com へようこそ！🎮",
      'intro.tagline': "楽しさに年齢は関係ない：入って、遊んで、驚きを楽しもう！",
      'intro.p1': "色とチャレンジと創造力にあふれた世界へようこそ！Jose-Margareth.com は、子どもも若者も大人も一緒に楽しみ、自分の腕を試し、ゲームへの情熱を分かち合える、大きなデジタルゲームルームを目指して生まれました。",
      'intro.p2': "🏓 <b>友だちとピンポンで対戦</b>したり、<b>PixelCraft</b> ですごい世界を作ったり、もうすぐ登場するたくさんの新しいゲームも楽しみにしていてね！",
      'intro.p3': "競いたいときも、作りたいときも、ただ楽しいひとときを過ごしたいときも、ここにはいつも新しい遊びが待っています。",
      'intro.motto': "ひとつの大きなゲームルーム、楽しみ方は無限大。",
      'intro.cta': "✨ 次のレベルが待っています。遊ぶ準備はできた？",
      'card.soon': '近日公開',
      'card.play': '▶ あそぶ',
      'card.soonTitle': 'ゲーム {n}',
      'card.soonDesc': 'このカードに新しいゲームがもうすぐ登場します。',
      'game.pingpong.desc': '同じキーボードで友だちと対戦。10点先取、40色以上のボールから選べます。超高速ショットに注意！',
      'game.pixelcraft.desc': 'ピクセルの世界を自由に建築：ブロックを置いたり壊したり、ワンクリックで家を建てたり木を植えたり、丘の上を飛び回ろう。',
      'tag.2players': '2人プレイ',
      'tag.1player': '1人プレイ',
      'tag.keyboardTouch': 'キーボード / タッチ',
      'tag.mouseTouch': 'マウス / タッチ',
      'tag.40min': '40分',
      'tag.building': '建築',

      'pp.doctitle': '2人用ピンポン',
      'pp.selectName': 'プレイヤー{n}の名前',
      'pp.player': 'プレイヤー{n}',
      'sec.original': '🎨 オリジナルカラー',
      'sec.original2': '🎨 オリジナルカラー 2',
      'sec.special': '✨ スペシャルカラー',
      'sec.elemental': '🌍 エレメントカラー',
      'sec.hero': '🦸 ヒーローカラー',
      'sec.mineral': '💎 鉱石カラー',
      'sec.flags': '🚩 国旗カラー',
      'sec.seasons': '🍂 四季のカラー',
      'sec.hedgehog': '🦔 ハリネズミカラー',
      'sec.ultra': '💥 ウルトラカラー',
      'pp.start': '▶ スタート / 一時停止',
      'pp.reset': '↺ やり直す',
      'pp.help': 'プレイヤー1：<kbd>W</kbd> 上、<kbd>S</kbd> 下 &nbsp;·&nbsp; プレイヤー2：<kbd>↑</kbd> 上、<kbd>↓</kbd> 下 &nbsp;·&nbsp; <kbd>スペース</kbd> 一時停止 &nbsp;·&nbsp; 先に10点取るか、40分経過時に得点が多い方の勝ち。<br>タッチ画面：コートの左半分または右半分を指でドラッグ。',
      'pp.superFast': '⚡ 超高速！ ⚡',
      'pp.draw': '⏱ 時間切れ：引き分け！',
      'pp.paused': '一時停止中',
      'pp.pressPlay': 'スペースか「スタート」を押してプレイ',
      'pp.pressReset': '「やり直す」を押して新しい試合',
      'pp.musicOn': '🔊 音楽：ON',
      'pp.musicOff': '🔇 音楽：OFF',

      'pc.holding': '手に持っている：',
      'pc.fly': '飛行：',
      'pc.bgPlace': '背景に置く：',
      'pc.btnFly': '✈️ 飛行',
      'pc.btnBg': '🧱 背景',
      'pc.btnSave': '💾 保存',
      'pc.btnNew': '🌍 新しい世界',
      'pc.help': '移動：<kbd>A</kbd> <kbd>D</kbd> または <kbd>←</kbd> <kbd>→</kbd> &nbsp;·&nbsp; ジャンプ：<kbd>W</kbd> <kbd>↑</kbd> または <kbd>スペース</kbd> &nbsp;·&nbsp; 飛行：<kbd>F</kbd>（飛行中は <kbd>W</kbd>/<kbd>S</kbd> で上下）<br><b>左クリック</b>：ブロックを置く &nbsp;·&nbsp; <b>右クリック</b>（または <kbd>Shift</kbd>+クリック）：壊す &nbsp;·&nbsp; 押したままドラッグで連続して置ける<br>ブロック選択：<kbd>1</kbd>…<kbd>0</kbd>、マウスホイール、<kbd>Q</kbd>/<kbd>E</kbd> &nbsp;·&nbsp; <kbd>T</kbd> 木 &nbsp;·&nbsp; <kbd>C</kbd> 家 &nbsp;·&nbsp; <kbd>X</kbd> つるはし &nbsp;·&nbsp; <kbd>B</kbd> 背景に置く',
      'pc.saved': '💾 世界を保存しました',
      'pc.saveError': '世界を保存できませんでした',
      'pc.newConfirm': '新しい世界を作りますか？今の世界は消えます。',
      'pc.newCreated': '🌍 新しい世界を作りました',
      'block.grass': '草', 'block.dirt': '土', 'block.stone': '石', 'block.cobble': '丸石',
      'block.log': '原木', 'block.leaves': '葉', 'block.planks': '木の板', 'block.glass': 'ガラス',
      'block.bricks': 'レンガ', 'block.sand': '砂', 'block.water': '水', 'block.bedrock': '岩盤',
      'block.door': 'ドア', 'block.roof': '屋根瓦', 'block.flower': '花',
      'tool.tree': '木', 'tool.house': '家', 'tool.pick': 'つるはし（壊す）',
    },

    de: {
      'lang.label': '🌐 Sprache',
      'common.back': '← Alle Spiele',

      'index.title': 'Spielhalle',
      'index.h1': '🎮 Spielhalle',
      'index.subtitle': 'Wähle ein Spiel, um zu starten',
      'index.footer': 'Neue Spiele kommen bald!',
      'intro.title': "Willkommen auf jose-margareth.com! 🎮",
      'intro.tagline': "Spaß kennt kein Alter: Komm rein, spiel mit und lass dich überraschen!",
      'intro.p1': "Mach dich bereit für eine Welt voller Farben, Herausforderungen und Kreativität! Jose-Margareth.com soll ein großes digitales Spielzimmer werden – ein Ort, an dem Kinder, Jugendliche und Erwachsene Spaß haben, ihr Können testen und ihre Leidenschaft fürs Spielen teilen können.",
      'intro.p2': "🏓 <b>Fordere deine Freunde beim Ping Pong heraus</b>, baue fantastische Welten in <b>PixelCraft</b> und freu dich auf viele neue Spiele, die bald kommen!",
      'intro.p3': "Ob du Lust hast, dich zu messen, etwas zu erschaffen oder einfach ein paar Momente purer Freude zu genießen – hier findest du immer etwas Neues zum Ausprobieren.",
      'intro.motto': "Ein großes Spielzimmer, unendlich viele Möglichkeiten, Spaß zu haben.",
      'intro.cta': "✨ Das nächste Level wartet auf dich. Bist du bereit zu spielen?",
      'card.soon': 'Demnächst',
      'card.play': '▶ Spielen',
      'card.soonTitle': 'Spiel {n}',
      'card.soonDesc': 'Bald kommt hier ein neues Spiel.',
      'game.pingpong.desc': 'Fordere einen Freund an derselben Tastatur heraus. Erreiche 10 Punkte, wähle aus über 40 Ballfarben und pass auf superschnelle Schüsse auf!',
      'game.pixelcraft.desc': 'Eine Pixelwelt zum Bauen: Blöcke setzen und abbauen, mit einem Klick Häuser bauen und Bäume pflanzen, über die Hügel fliegen.',
      'tag.2players': '2 Spieler',
      'tag.1player': '1 Spieler',
      'tag.keyboardTouch': 'Tastatur / Touch',
      'tag.mouseTouch': 'Maus / Touch',
      'tag.40min': '40 Min.',
      'tag.building': 'Bauen',

      'pp.doctitle': 'Ping Pong für 2 Spieler',
      'pp.selectName': 'Name von Spieler {n} wählen',
      'pp.player': 'Spieler {n}',
      'sec.original': '🎨 Originalfarben',
      'sec.original2': '🎨 Originalfarben 2',
      'sec.special': '✨ Spezialfarben',
      'sec.elemental': '🌍 Elementfarben',
      'sec.hero': '🦸 Heldenfarben',
      'sec.mineral': '💎 Mineralfarben',
      'sec.flags': '🚩 Flaggenfarben',
      'sec.seasons': '🍂 Jahreszeitenfarben',
      'sec.hedgehog': '🦔 Igelfarben',
      'sec.ultra': '💥 Ultra-Farbe',
      'pp.start': '▶ Start / Pause',
      'pp.reset': '↺ Neustart',
      'pp.help': 'Spieler 1: <kbd>W</kbd> hoch, <kbd>S</kbd> runter &nbsp;·&nbsp; Spieler 2: <kbd>↑</kbd> hoch, <kbd>↓</kbd> runter &nbsp;·&nbsp; <kbd>Leertaste</kbd> Pause &nbsp;·&nbsp; Wer zuerst 10 Punkte hat, gewinnt – oder wer nach 40 Minuten mehr Punkte hat.<br>Auf Touchscreens: den Finger auf der linken oder rechten Spielfeldhälfte ziehen.',
      'pp.superFast': '⚡ SUPERSCHNELL! ⚡',
      'pp.draw': '⏱ Zeit abgelaufen: Unentschieden!',
      'pp.paused': 'Pausiert',
      'pp.pressPlay': 'Drücke die Leertaste oder „Start“, um zu spielen',
      'pp.pressReset': 'Drücke „Neustart“ für ein neues Spiel',
      'pp.musicOn': '🔊 Musik: AN',
      'pp.musicOff': '🔇 Musik: AUS',

      'pc.holding': 'In der Hand:',
      'pc.fly': 'Fliegen:',
      'pc.bgPlace': 'In den Hintergrund setzen:',
      'pc.btnFly': '✈️ Fliegen',
      'pc.btnBg': '🧱 Hintergrund',
      'pc.btnSave': '💾 Speichern',
      'pc.btnNew': '🌍 Neue Welt',
      'pc.help': 'Bewegen: <kbd>A</kbd> <kbd>D</kbd> oder <kbd>←</kbd> <kbd>→</kbd> &nbsp;·&nbsp; Springen: <kbd>W</kbd> <kbd>↑</kbd> oder <kbd>Leertaste</kbd> &nbsp;·&nbsp; Fliegen: <kbd>F</kbd> (im Flug <kbd>W</kbd>/<kbd>S</kbd> zum Steigen und Sinken)<br><b>Linksklick</b>: Block setzen &nbsp;·&nbsp; <b>Rechtsklick</b> (oder <kbd>Shift</kbd>+Klick): abbauen &nbsp;·&nbsp; Gedrückt halten und ziehen, um viele Blöcke zu bauen<br>Block wählen: <kbd>1</kbd>…<kbd>0</kbd>, Mausrad oder <kbd>Q</kbd>/<kbd>E</kbd> &nbsp;·&nbsp; <kbd>T</kbd> Baum &nbsp;·&nbsp; <kbd>C</kbd> Haus &nbsp;·&nbsp; <kbd>X</kbd> Spitzhacke &nbsp;·&nbsp; <kbd>B</kbd> in den Hintergrund setzen',
      'pc.saved': '💾 Welt gespeichert',
      'pc.saveError': 'Die Welt konnte nicht gespeichert werden',
      'pc.newConfirm': 'Eine neue Welt erstellen? Die aktuelle wird gelöscht.',
      'pc.newCreated': '🌍 Neue Welt erstellt',
      'block.grass': 'Gras', 'block.dirt': 'Erde', 'block.stone': 'Stein', 'block.cobble': 'Bruchstein',
      'block.log': 'Holzstamm', 'block.leaves': 'Blätter', 'block.planks': 'Holzbretter', 'block.glass': 'Glas',
      'block.bricks': 'Ziegel', 'block.sand': 'Sand', 'block.water': 'Wasser', 'block.bedrock': 'Grundgestein',
      'block.door': 'Tür', 'block.roof': 'Dachziegel', 'block.flower': 'Blume',
      'tool.tree': 'Baum', 'tool.house': 'Haus', 'tool.pick': 'Spitzhacke (abbauen)',
    },
  };

  // nomi dei colori della pallina del Ping Pong (chiave: color.<id del colore>)
  const COLOR_NAMES = {
    it: { rosso: 'Rosso', blu: 'Blu', verde: 'Verde', rosa: 'Rosa', viola: 'Viola', giallo: 'Giallo', arcobaleno: 'Arcobaleno', arancione: 'Arancione', celeste: 'Celeste', turchese: 'Turchese', bianco: 'Bianco', marrone: 'Marrone', yinyang: 'Yin Yang', galassia: 'Galassia', caramella: 'Caramella', maledetto: 'Maledetto', cyborg: 'Cyborg', lava: 'Lava', acqua: 'Acqua', terra: 'Terra', neve: 'Neve', spiderman: 'Spider-Man', ironman: 'Iron Man', captain: 'Capitan America', thor: 'Thor', hulk: 'Hulk', diamante: 'Diamante', smeraldo: 'Smeraldo', ametista: 'Ametista', netherite: 'Netherite', rame: 'Rame', oro: 'Oro', colombia: 'Colombia', italia: 'Italia', bolivia: 'Bolivia', inghilterra: 'Inghilterra', usa: 'Stati Uniti', francia: 'Francia', spagna: 'Spagna', germania: 'Germania', svizzera: 'Svizzera', ultra: 'Ultra', estate: 'Estate', inverno: 'Inverno', autunno: 'Autunno', primavera: 'Primavera', sonic: 'Sonic', shadow: 'Shadow' },
    en: { rosso: 'Red', blu: 'Blue', verde: 'Green', rosa: 'Pink', viola: 'Purple', giallo: 'Yellow', arcobaleno: 'Rainbow', arancione: 'Orange', celeste: 'Sky Blue', turchese: 'Turquoise', bianco: 'White', marrone: 'Brown', yinyang: 'Yin Yang', galassia: 'Galaxy', caramella: 'Candy', maledetto: 'Cursed', cyborg: 'Cyborg', lava: 'Lava', acqua: 'Water', terra: 'Earth', neve: 'Snow', spiderman: 'Spider-Man', ironman: 'Iron Man', captain: 'Captain America', thor: 'Thor', hulk: 'Hulk', diamante: 'Diamond', smeraldo: 'Emerald', ametista: 'Amethyst', netherite: 'Netherite', rame: 'Copper', oro: 'Gold', colombia: 'Colombia', italia: 'Italy', bolivia: 'Bolivia', inghilterra: 'England', usa: 'USA', francia: 'France', spagna: 'Spain', germania: 'Germany', svizzera: 'Switzerland', ultra: 'Ultra', estate: 'Summer', inverno: 'Winter', autunno: 'Autumn', primavera: 'Spring', sonic: 'Sonic', shadow: 'Shadow' },
    es: { rosso: 'Rojo', blu: 'Azul', verde: 'Verde', rosa: 'Rosa', viola: 'Morado', giallo: 'Amarillo', arcobaleno: 'Arcoíris', arancione: 'Naranja', celeste: 'Celeste', turchese: 'Turquesa', bianco: 'Blanco', marrone: 'Marrón', yinyang: 'Yin Yang', galassia: 'Galaxia', caramella: 'Caramelo', maledetto: 'Maldito', cyborg: 'Cíborg', lava: 'Lava', acqua: 'Agua', terra: 'Tierra', neve: 'Nieve', spiderman: 'Spider-Man', ironman: 'Iron Man', captain: 'Capitán América', thor: 'Thor', hulk: 'Hulk', diamante: 'Diamante', smeraldo: 'Esmeralda', ametista: 'Amatista', netherite: 'Netherita', rame: 'Cobre', oro: 'Oro', colombia: 'Colombia', italia: 'Italia', bolivia: 'Bolivia', inghilterra: 'Inglaterra', usa: 'EE. UU.', francia: 'Francia', spagna: 'España', germania: 'Alemania', svizzera: 'Suiza', ultra: 'Ultra', estate: 'Verano', inverno: 'Invierno', autunno: 'Otoño', primavera: 'Primavera', sonic: 'Sonic', shadow: 'Shadow' },
    fr: { rosso: 'Rouge', blu: 'Bleu', verde: 'Vert', rosa: 'Rose', viola: 'Violet', giallo: 'Jaune', arcobaleno: 'Arc-en-ciel', arancione: 'Orange', celeste: 'Bleu ciel', turchese: 'Turquoise', bianco: 'Blanc', marrone: 'Marron', yinyang: 'Yin Yang', galassia: 'Galaxie', caramella: 'Bonbon', maledetto: 'Maudit', cyborg: 'Cyborg', lava: 'Lave', acqua: 'Eau', terra: 'Terre', neve: 'Neige', spiderman: 'Spider-Man', ironman: 'Iron Man', captain: 'Captain America', thor: 'Thor', hulk: 'Hulk', diamante: 'Diamant', smeraldo: 'Émeraude', ametista: 'Améthyste', netherite: 'Netherite', rame: 'Cuivre', oro: 'Or', colombia: 'Colombie', italia: 'Italie', bolivia: 'Bolivie', inghilterra: 'Angleterre', usa: 'États-Unis', francia: 'France', spagna: 'Espagne', germania: 'Allemagne', svizzera: 'Suisse', ultra: 'Ultra', estate: 'Été', inverno: 'Hiver', autunno: 'Automne', primavera: 'Printemps', sonic: 'Sonic', shadow: 'Shadow' },
    ja: { rosso: '赤', blu: '青', verde: '緑', rosa: 'ピンク', viola: '紫', giallo: '黄色', arcobaleno: '虹', arancione: 'オレンジ', celeste: '空色', turchese: 'ターコイズ', bianco: '白', marrone: '茶色', yinyang: '陰陽', galassia: '銀河', caramella: 'キャンディ', maledetto: '呪い', cyborg: 'サイボーグ', lava: '溶岩', acqua: '水', terra: '大地', neve: '雪', spiderman: 'スパイダーマン', ironman: 'アイアンマン', captain: 'キャプテン・アメリカ', thor: 'ソー', hulk: 'ハルク', diamante: 'ダイヤモンド', smeraldo: 'エメラルド', ametista: 'アメジスト', netherite: 'ネザライト', rame: '銅', oro: '金', colombia: 'コロンビア', italia: 'イタリア', bolivia: 'ボリビア', inghilterra: 'イングランド', usa: 'アメリカ', francia: 'フランス', spagna: 'スペイン', germania: 'ドイツ', svizzera: 'スイス', ultra: 'ウルトラ', estate: '夏', inverno: '冬', autunno: '秋', primavera: '春', sonic: 'ソニック', shadow: 'シャドウ' },
    de: { rosso: 'Rot', blu: 'Blau', verde: 'Grün', rosa: 'Rosa', viola: 'Lila', giallo: 'Gelb', arcobaleno: 'Regenbogen', arancione: 'Orange', celeste: 'Himmelblau', turchese: 'Türkis', bianco: 'Weiß', marrone: 'Braun', yinyang: 'Yin Yang', galassia: 'Galaxie', caramella: 'Bonbon', maledetto: 'Verflucht', cyborg: 'Cyborg', lava: 'Lava', acqua: 'Wasser', terra: 'Erde', neve: 'Schnee', spiderman: 'Spider-Man', ironman: 'Iron Man', captain: 'Captain America', thor: 'Thor', hulk: 'Hulk', diamante: 'Diamant', smeraldo: 'Smaragd', ametista: 'Amethyst', netherite: 'Netherit', rame: 'Kupfer', oro: 'Gold', colombia: 'Kolumbien', italia: 'Italien', bolivia: 'Bolivien', inghilterra: 'England', usa: 'USA', francia: 'Frankreich', spagna: 'Spanien', germania: 'Deutschland', svizzera: 'Schweiz', ultra: 'Ultra', estate: 'Sommer', inverno: 'Winter', autunno: 'Herbst', primavera: 'Frühling', sonic: 'Sonic', shadow: 'Shadow' },
  };
  for (const l in COLOR_NAMES) for (const id in COLOR_NAMES[l]) STRINGS[l]['color.' + id] = COLOR_NAMES[l][id];

  const STORAGE_KEY = 'sala-giochi-lingua';
  let lang = 'it';
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && STRINGS[saved]) lang = saved;
  } catch (e) { /* la memoria del browser può non essere disponibile */ }

  function t(key, vars) {
    let s = (STRINGS[lang] && STRINGS[lang][key]) ?? STRINGS.it[key] ?? key;
    if (vars) for (const k in vars) s = s.split('{' + k + '}').join(vars[k]);
    return s;
  }

  function varsOf(el) {
    return el.dataset.i18nN !== undefined ? { n: el.dataset.i18nN } : undefined;
  }

  function apply(root) {
    const r = root || document;
    document.documentElement.lang = lang;
    r.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n, varsOf(el)); });
    r.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml, varsOf(el)); });
    r.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder, varsOf(el)); });
    const bar = document.getElementById('lang-bar');
    if (bar) {
      bar.querySelectorAll('button').forEach(b => {
        const on = b.dataset.lang === lang;
        b.classList.toggle('active', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
    }
  }

  function setLang(code) {
    if (!STRINGS[code] || code === lang) return;
    lang = code;
    try { localStorage.setItem(STORAGE_KEY, code); } catch (e) { /* niente */ }
    apply();
    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  // header in cima alla pagina: a sinistra logo e nome del sito, a destra le lingue
  function buildBar() {
    // font in corsivo elegante per il nome del sito
    const font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap';
    document.head.appendChild(font);

    const style = document.createElement('style');
    style.textContent = `
      #site-header {
        display: flex; align-items: center; justify-content: space-between; gap: 12px;
        width: 100%; max-width: 1080px; margin: 0 auto 16px; padding: 10px 14px;
        background: rgba(255, 255, 255, .88);
        border: 1px solid #bcd5f5; border-radius: 16px;
        font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
        text-align: left;
      }
      #site-header .brand {
        display: flex; align-items: center; gap: 10px;
        color: #C51F26; text-decoration: none; font-size: 1.2rem; font-weight: 800;
      }
      /* nome del sito in rosso neon soffice: alone leggero dello stesso colore */
      #site-header .brand span {
        font-family: "Dancing Script", "Brush Script MT", cursive;
        font-size-adjust: .5;
        font-size: 1.4rem; font-weight: 700; letter-spacing: .5px;
        cursor: default; user-select: none;
        text-shadow: 0 0 4px rgba(197, 31, 38, .45), 0 0 10px rgba(197, 31, 38, .3), 0 0 18px rgba(197, 31, 38, .18);
      }
      /* logo: l'avatar ritagliato in tondo, con un bordo azzurro-rosa */
      #site-header .logo {
        width: 48px; height: 48px; flex: none;
        border-radius: 50%; object-fit: cover;
        border: 2px solid #ffc4de; box-shadow: 0 0 0 2px #bfe0ff;
      }
      #lang-bar { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 6px; min-width: 0; }
      #lang-bar button {
        display: inline-flex; align-items: center; gap: 5px;
        background: #ffffff; color: #000000;
        border: 2px solid #bcd5f5; border-radius: 999px;
        padding: 4px 10px; font-size: .8rem; font-weight: 700; cursor: pointer;
        animation: none;
      }
      #lang-bar button:hover { border-color: #f7a3c7; }
      #lang-bar button.active { border-color: #f08bb8; box-shadow: 0 0 10px rgba(240,139,184,.5); }
      #lang-bar .flag { font-size: 1.05rem; line-height: 1; }
      /* sul telefono: sopra logo e nome del sito, sotto tutte le lingue su una riga */
      @media (max-width: 560px) {
        #site-header { flex-direction: column; align-items: stretch; gap: 8px; padding: 10px 12px; }
        #site-header .logo { width: 40px; height: 40px; }
        #site-header .brand span { font-size: 1.25rem; }
        #lang-bar { flex-wrap: nowrap; justify-content: space-between; gap: 4px; }
        #lang-bar button { flex: 1; justify-content: center; padding: 4px 0; }
        #lang-bar .code { display: none; }
      }
    `;
    document.head.appendChild(style);

    const header = document.createElement('div');
    header.id = 'site-header';
    header.setAttribute('role', 'banner');

    // nome del sito: solo da leggere, non è un link
    const brand = document.createElement('div');
    brand.className = 'brand';
    brand.innerHTML = '<img class="logo" src="logo.png" alt="" aria-hidden="true"><span>jose-margareth.com</span>';
    header.appendChild(brand);

    const bar = document.createElement('nav');
    bar.id = 'lang-bar';
    bar.setAttribute('aria-label', 'Lingua / Language');
    LANGS.forEach(l => {
      const b = document.createElement('button');
      b.type = 'button';
      b.dataset.lang = l.code;
      b.lang = l.code;
      b.title = l.label;
      b.innerHTML = `<span class="flag">${l.flag}</span><span class="code">${l.code.toUpperCase()}</span>`;
      b.addEventListener('click', () => { setLang(l.code); b.blur(); });
      bar.appendChild(b);
    });
    header.appendChild(bar);
    document.body.prepend(header);
  }

  window.I18N = { t, setLang, apply, get lang() { return lang; }, LANGS };

  function init() {
    buildBar();
    apply();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
