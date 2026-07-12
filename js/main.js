/* Caffetteria della Darsena — i18n IT/EN, intro "la goccia", nav, reveal, watchdog */
(function () {
  'use strict';

  /* ---------- i18n ---------- */

  var translations = {
    it: {
      skip: 'Salta al contenuto',
      menu: 'Menu',
      nav_day: 'La giornata',
      nav_menu2: 'Al banco',
      nav_services: 'I servizi',
      nav_hours: 'Orari e dove',
      call_short: 'Chiama',
      call_cta: 'Chiama il bar',
      call_cta2: 'Chiama',
      menu_cta: 'Guarda il banco',
      hero_eyebrow: 'Bar · caffetteria · sulla Darsena, Milano',
      hero_nome1: 'Caffetteria',
      hero_nome2: 'della Darsena',
      hero_claim: 'Il bar di quartiere affacciato sul porto di Milano.',
      hero_lead: "Dalla brioche del mattino alle scaloppine di mezzogiorno, dal ginseng migliore della zona al pacchetto e al biglietto dell'ATM: qui si passa, e si torna.",
      hero_badge: '4,2 su Google · aperti dalle 7 del mattino',
      day_title: 'Una giornata sulla Darsena',
      day_sub: "Apre alle sette e non si ferma: il ritmo del quartiere, dall'alba alla sera.",
      m1_t: 'La colazione',
      m1_p: 'Brioche golose e cornetti davvero ottimi, cappuccino come si deve e il caffè al ginseng che in zona non ha rivali. Il modo giusto di cominciare, con la Darsena davanti.',
      m2_t: 'Il pranzo',
      m2_p: 'Un menù vario e casalingo, a prezzi onesti — comprese «le scaloppine più buone mai mangiate», parola dei clienti. Veloce se hai fretta, con calma se non ce l\'hai.',
      m3_t: 'Il pomeriggio',
      m3_p: 'Un caffè al volo, una pausa lunga, due chiacchiere al banco. Il personale è sempre sorridente e il posto è di quelli dove, dopo la prima volta, ti riconoscono.',
      menu_title: 'Al banco',
      menu_sub: 'I classici di sempre, ai prezzi di un bar onesto.',
      c1: 'Caffetteria',
      v1: 'Caffè espresso', v2: 'Cappuccino', v3: 'Caffè al ginseng', v4: 'Tè e infusi',
      c2: 'La colazione',
      v5: 'Brioche e cornetti', v6: 'Brioche farcita', v7: "Spremuta d'arancia",
      c3: 'Il pranzo',
      v8: 'Primo del giorno', v9: 'Scaloppine della casa', v10: 'Piatto freddo e insalate', v11: 'Panini e toast',
      c4: "L'aperitivo",
      v12: 'Spritz e calice di vino', v13: 'Birra alla spina',
      da: 'da',
      menu_note: 'Prezzi indicativi — il menù del giorno è sulla lavagna al banco',
      serv_title: 'Il bar che fa tutto',
      serv_sub: 'Perché un bar di quartiere è anche il posto dove risolvere le piccole cose.',
      s1_t: 'Biglietti ATM',
      s1_p: 'Urbani e tessere ricaricabili: sali sul tram senza pensieri.',
      s2_t: 'Tabacchi',
      s2_p: 'Rivendita completa, valori bollati e ricariche: la tabaccheria di fiducia.',
      s3_t: 'Francobolli',
      s3_p: 'La cartolina dalla Darsena parte da qui: francobolli sempre disponibili.',
      s4_t: 'Caffè da asporto',
      s4_p: 'Il tuo caffè, la tua brioche e il tuo pranzo, anche da portare via.',
      hours_title: 'Orari e dove',
      hours_sub: "Sull'acqua della Darsena, dove il Naviglio incontra il porto.",
      hours_caption: 'Orari di apertura',
      weekdays: 'Lunedì – Sabato',
      sun: 'Domenica',
      closed: 'chiuso',
      metro: 'M2 Porta Genova, cinque minuti a piedi lungo la Darsena',
      maps: 'Apri in Google Maps',
      dove_note: 'Ci trovi affacciati sul bacino: il posto giusto per una pausa con vista sull\'acqua.',
      f_contacts: 'Contatti',
      f_where: 'Dove',
      f_what: 'Il bar',
      f_line: 'Colazione, pranzo, caffè e servizi di quartiere, affacciati sul porto di Milano.',
      aria_top: 'Caffetteria della Darsena — torna su',
      aria_nav: 'Navigazione principale'
    },
    en: {
      skip: 'Skip to content',
      menu: 'Menu',
      nav_day: 'The day',
      nav_menu2: 'At the counter',
      nav_services: 'Services',
      nav_hours: 'Hours & location',
      call_short: 'Call',
      call_cta: 'Call the bar',
      call_cta2: 'Call',
      menu_cta: 'See the counter',
      hero_eyebrow: 'Bar · café · on the Darsena, Milan',
      hero_nome1: 'Caffetteria',
      hero_nome2: 'della Darsena',
      hero_claim: 'The neighbourhood bar looking out over Milan’s harbour.',
      hero_lead: "From the morning brioche to lunchtime scaloppine, from the best ginseng coffee in the area to a pack of cigarettes and a tram ticket: you pass by — and you come back.",
      hero_badge: '4.2 on Google · open from 7 in the morning',
      day_title: 'A day on the Darsena',
      day_sub: 'It opens at seven and never stops: the rhythm of the neighbourhood, from dawn to evening.',
      m1_t: 'Breakfast',
      m1_p: 'Indulgent brioches and truly excellent croissants, a proper cappuccino and the ginseng coffee that has no rivals around here. The right way to start, with the Darsena in front of you.',
      m2_t: 'Lunch',
      m2_p: 'A varied, home-style menu at honest prices — including "the best scaloppine I’ve ever had", in the customers’ own words. Quick if you’re in a rush, unhurried if you’re not.',
      m3_t: 'The afternoon',
      m3_p: 'A quick coffee, a long break, a chat at the counter. The staff are always smiling, and this is the kind of place where, after the first time, they remember you.',
      menu_title: 'At the counter',
      menu_sub: 'The everyday classics, at an honest bar’s prices.',
      c1: 'Coffee bar',
      v1: 'Espresso', v2: 'Cappuccino', v3: 'Ginseng coffee', v4: 'Tea & infusions',
      c2: 'Breakfast',
      v5: 'Brioches & croissants', v6: 'Filled brioche', v7: 'Fresh orange juice',
      c3: 'Lunch',
      v8: 'Pasta of the day', v9: 'House scaloppine', v10: 'Cold plates & salads', v11: 'Sandwiches & toasties',
      c4: 'Aperitivo',
      v12: 'Spritz & glass of wine', v13: 'Draught beer',
      da: 'from',
      menu_note: 'Indicative prices — the day’s menu is on the chalkboard at the counter',
      serv_title: 'The bar that does it all',
      serv_sub: 'Because a neighbourhood bar is also the place to sort out the little things.',
      s1_t: 'ATM tram tickets',
      s1_p: 'Single rides and top-up cards: hop on the tram without a worry.',
      s2_t: 'Tobacconist',
      s2_p: 'Full tobacco counter, revenue stamps and top-ups: your trusted tabaccheria.',
      s3_t: 'Stamps',
      s3_p: 'The postcard from the Darsena starts here: stamps always in stock.',
      s4_t: 'Coffee to go',
      s4_p: 'Your coffee, your brioche and your lunch, to take away too.',
      hours_title: 'Hours & location',
      hours_sub: 'On the water of the Darsena, where the Naviglio meets the harbour.',
      hours_caption: 'Opening hours',
      weekdays: 'Monday – Saturday',
      sun: 'Sunday',
      closed: 'closed',
      metro: 'M2 Porta Genova, a five-minute walk along the Darsena',
      maps: 'Open in Google Maps',
      dove_note: 'You’ll find us right on the basin: the perfect spot for a break with a view of the water.',
      f_contacts: 'Contact',
      f_where: 'Find us',
      f_what: 'The bar',
      f_line: 'Breakfast, lunch, coffee and neighbourhood services, looking out over Milan’s harbour.',
      aria_top: 'Caffetteria della Darsena — back to top',
      aria_nav: 'Main navigation'
    }
  };

  var current = 'it';
  try {
    var saved = localStorage.getItem('darsena-lang');
    if (saved === 'en' || saved === 'it') current = saved;
  } catch (e) { /* storage non disponibile: si resta in IT */ }

  function applyLang(lang) {
    var dict = translations[lang];
    if (!dict) return;
    current = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    try { localStorage.setItem('darsena-lang', lang); } catch (e) { /* ok */ }
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.getAttribute('data-lang'));
    });
  });

  if (current !== 'it') applyLang(current);

  /* ---------- intro "la goccia" ---------- */

  var intro = document.getElementById('intro');
  if (intro) {
    var introReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (introReduced) {
      intro.remove();
    } else {
      var introDone = false;
      var sfuma = function () {
        intro.classList.add('intro--via');
      };
      var finishIntro = function () {
        if (introDone) return;
        introDone = true;
        clearTimeout(viaTimer);
        clearTimeout(endTimer);
        document.body.classList.remove('intro-lock');
        intro.remove();
        window.removeEventListener('pointerdown', finishIntro, true);
        window.removeEventListener('keydown', finishIntro, true);
      };
      document.body.classList.add('intro-lock');
      var viaTimer = setTimeout(sfuma, 2200);
      var endTimer = setTimeout(finishIntro, 2800);
      window.addEventListener('pointerdown', finishIntro, true);
      window.addEventListener('keydown', finishIntro, true);
    }
  }

  /* ---------- copyright dinamico ---------- */

  var nowYear = new Date().getFullYear();
  document.querySelectorAll('[data-current-year]').forEach(function (el) {
    el.textContent = String(nowYear);
  });

  /* ---------- nav mobile ---------- */

  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  if (nav && toggle) {
    var chiudiNav = function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    };
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('.nav-menu a').forEach(function (link) {
      link.addEventListener('click', chiudiNav);
    });
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        chiudiNav();
        toggle.focus();
      }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 920) chiudiNav();
    });
  }

  /* ---------- reveal on scroll ---------- */

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll(
      '.hero-contenuto, .sezione-titolo, .sezione-sub, .momento, ' +
      '.listino-cat, .listino-nota, .servizio, .orari-tabella, .dove'
    );
    targets.forEach(function (t) { t.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    targets.forEach(function (t) { io.observe(t); });
  }

  /* ---------- rete di sicurezza: se IntersectionObserver non parte, mostra tutto ---------- */

  if ('IntersectionObserver' in window) {
    var ioVivo = false;
    var sentinella = new IntersectionObserver(function () { ioVivo = true; sentinella.disconnect(); });
    sentinella.observe(document.body);
    setTimeout(function () {
      if (!ioVivo) {
        document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
      }
    }, 1500);
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
