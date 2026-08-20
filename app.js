/* Wildwood Pronunciation — vanilla JS app logic */
(function () {
  "use strict";

  const TERMS = [
    {t:'Jena',ph:'Jeh-nah (J like g in mirage)',ipa:'/ˈʒe.na/',cat:'Character',d:'The narrator and central character.'},
    {t:'Jenica',ph:'Jeh-nee-kah (J like g in mirage)',ipa:'/ʒeˈni.ka/',cat:'Character',d:'A form of Jena’s name listed in the book’s pronunciation guide.'},
    {t:'Gogu',ph:'Goh-goo',ipa:'/ˈɡo.ɡu/',cat:'Character',d:'Jena’s frog companion.'},
    {t:'Tati',ph:'Tah-tee',ipa:'/ˈta.ti/',cat:'Character',d:'Jena’s eldest sister; short for Tatiana.'},
    {t:'Tatiana',ph:'Tah-tee-ahr-nah',ipa:'/ta.tiˈa.na/',cat:'Character',d:'Jena’s eldest sister, usually called Tati.'},
    {t:'Paula',ph:'Pow-lah',ipa:'/ˈpa.u.la/',cat:'Character',d:'One of Jena’s sisters.'},
    {t:'Iulia',ph:'Yoo-lee-ah',ipa:'/ˈju.li.a/',cat:'Character',d:'One of Jena’s sisters.'},
    {t:'Stela',ph:'Stel-ah',ipa:'/ˈste.la/',cat:'Character',d:'Jena’s youngest sister.'},
    {t:'Florica',ph:'Flo-ree-kah',ipa:'/floˈri.ka/',cat:'Character',d:'The housekeeper at Piscul Dracului.'},
    {t:'Petru',ph:'Peh-troo',ipa:'/ˈpe.tru/',cat:'Character',d:'Florica’s husband.'},
    {t:'Nicolae',ph:'Nee-koh-lie-eh (lie rhymes with sky)',ipa:'/ni.koˈla.e/',cat:'Character',d:'Jena’s uncle.'},
    {t:'Bogdana',ph:'Bohg-dah-nah',ipa:'/boɡˈda.na/',cat:'Character',d:'Jena’s aunt.'},
    {t:'Cezar',ph:'Cheh-zahr',ipa:'/ˈtʃe.zar/',cat:'Character',d:'Jena’s cousin.'},
    {t:'Costi',ph:'Koh-tee',ipa:'/ˈkos.ti/',cat:'Character',d:'A character name listed in the book’s pronunciation guide.'},
    {t:'Costin',ph:'Kohs-teen',ipa:'/kosˈtin/',cat:'Character',d:'A character name listed in the book’s pronunciation guide.'},
    {t:'Gabriel',ph:'Gah-bree-EL',ipa:'/ɡa.briˈel/',cat:'Character',d:'Jena’s father’s secretary.'},
    {t:'Piscul Dracului',ph:'Pis-kul Drah-koo-looy',ipa:'/ˈpis.kul ˈdra.ku.luj/',cat:'Place',d:'“Devil’s Peak,” Jena’s family home.'},
    {t:'Constanța',ph:'Kahn-stahn-tsah',ipa:'/konˈstan.t͡sa/',cat:'Place',d:'A trading port on the Black Sea coast.'},
    {t:'Brașov',ph:'Brah-shove',ipa:'/braˈʃov/',cat:'Place',d:'A merchant town in central Transylvania.'},
    {t:'Sibiu',ph:'See-bee-yoo',ipa:'/siˈbi.u/',cat:'Place',d:'A merchant town in central Transylvania.'},
    {t:'Vârful cu Negură',ph:'Vur-fool koo Neh-goo-ruh',ipa:'/ˈvɨr.ful ku ˈne.ɡu.rə/',cat:'Place',d:'“Storm Heights.”'},
    {t:'Tăul Ielelor',ph:'Tah-ool Yeh-leh-lor',ipa:'/ˈtə.ul ˈje.le.lor/',cat:'Place',d:'The Lake of the Iele.'},
    {t:'Tăul',ph:'Tah-ool',ipa:'/ˈtə.ul/',cat:'Place',d:'Short form used for Tăul Ielelor.'},
    {t:'Drăguța',ph:'Druh-goo-tsah',ipa:'/drəˈɡu.t͡sa/',cat:'Character',d:'A mysterious figure associated with the Wildwood.'},
    {t:'Anastasia',ph:'Ah-nah-stah-see-yah',ipa:'/a.na.staˈsi.a/',cat:'Character',d:'A character name from the book’s pronunciation guide.'},
    {t:'Anatolie',ph:'Ah-nah-toh-yee-ah',ipa:'/a.na.toˈli.e/',cat:'Character',d:'A friend from the Other Kingdom.'},
    {t:'Grigori',ph:'Gree-gohr-ree',ipa:'/ɡriˈɡo.ri/',cat:'Character',d:'A friend from the Other Kingdom.'},
    {t:'Sten',ph:'Sten',ipa:'/sten/',cat:'Character',d:'A friend from the Other Kingdom.'},
    {t:'Ileana',ph:'Eel-leh-ah-nah',ipa:'/i.leˈa.na/',cat:'Character',d:'A character name from the book’s pronunciation guide.'},
    {t:'Marin',ph:'Mah-reen',ipa:'/maˈrin/',cat:'Character',d:'A character name from the book’s pronunciation guide.'},
    {t:'Răzvan',ph:'Rahz-vahn',ipa:'/rəzˈvan/',cat:'Character',d:'A character name from the book’s pronunciation guide.'},
    {t:'Salem bin Afazi',ph:'Sah-lem bin Ah-fah-zee',ipa:'/ˈsa.lem bin aˈfa.zi/',cat:'Character',d:'A character name from the book’s pronunciation guide.'},
    {t:'Sandu',ph:'Sahn-doo',ipa:'/ˈsan.du/',cat:'Character',d:'A character name from the book’s pronunciation guide.'},
    {t:'Tadeusz',speak:'Tadeuș',ph:'Tah-deh-oosh (deh-oosh almost one syllable)',ipa:'/ˈta.dɛ.uʂ/',cat:'Character',d:'A character name from the book’s pronunciation guide.'},
    {t:'Teodor',ph:'The-oh-dor',ipa:'/te.oˈdor/',cat:'Character',d:'A character name from the book’s pronunciation guide.'},
    {t:'Ildephonsus',speak:'Ildefonsus',ph:'Ill-deh-FON-sus',ipa:'/ˌɪl.dəˈfɒn.səs/',cat:'Character',d:'A character name appearing in the novel.'},
    {t:'Ciorbă',ph:'chor-buh',ipa:'/ˈtʃor.bə/',cat:'Vocabulary',d:'Traditional Romanian broth or sour soup.'},
    {t:'Mămăligă',ph:'muh-muh-lee-guh',ipa:'/mə.məˈli.ɡə/',cat:'Vocabulary',d:'A Romanian cornmeal porridge or cake, similar to polenta.'},
    {t:'Pomană',ph:'poh-mah-nuh',ipa:'/poˈma.nə/',cat:'Vocabulary',d:'A memorial feast for the dead.'},
    {t:'Țuică',ph:'tswee-kuh',ipa:'/ˈt͡suj.kə/',cat:'Vocabulary',d:'Romanian plum brandy.'},
    {t:'Țara Românească',ph:'Tsah-rah Roh-muh-ne-eyes-kuh',ipa:'/ˈt͡sa.ra ro.mɨˈne̯as.kə/',cat:'Place',d:'The region south of Transylvania, also known as Wallachia.'},
    {t:'Voivode',speak:'voievod',ph:'voh-yeah-vode',ipa:'/vo.jeˈvod/',cat:'Vocabulary',d:'The ruler or head of a Transylvanian territory; a prince or princeling.'},
    {t:'Transilvania',ph:'trahn-seel-VAH-nee-ah',ipa:'/tran.silˈva.ni.a/',cat:'Place',d:'The region the story is set in.'},
    {t:'Pădurea',ph:'puh-DOO-reh-ah',ipa:'/pəˈdu.re̯a/',cat:'Place',d:'The forest — the wildwood itself.'},
    {t:'Dealul',ph:'DEH-ah-lool',ipa:'/ˈde̯a.lul/',cat:'Place',d:'“The hill”, common in valley place names.'},
    {t:'Dracului',ph:'DRAH-koo-loo-ee',ipa:'/ˈdra.ku.luj/',cat:'Vocabulary',d:'“Of the devil” — the possessive of drac.'},
    {t:'Ielele',ph:'YEH-leh-leh',ipa:'/ˈje.le.le/',cat:'Vocabulary',d:'Dangerous dancing spirits of folklore.'},
    {t:'Strigoi',ph:'stree-GOY',ipa:'/striˈɡoj/',cat:'Vocabulary',d:'A restless night creature of the folk tales.'},
    {t:'Vârcolac',ph:'vuhr-ko-LAHK',ipa:'/vɨr.koˈlak/',cat:'Vocabulary',d:'A shape-changer of the forest stories.'},
    {t:'Zână',ph:'ZUH-nuh',ipa:'/ˈzɨ.nə/',cat:'Vocabulary',d:'A fairy woman.'},
    {t:'Doamnă',ph:'DWAHM-nuh',ipa:'/ˈdo̯am.nə/',cat:'Vocabulary',d:'Madam; a formal address to a woman.'},
    {t:'Domnule',ph:'DOM-noo-leh',ipa:'/ˈdom.nu.le/',cat:'Vocabulary',d:'Sir; a formal address to a man.'},
    {t:'Mulțumesc',ph:'mool-tsoo-MESK',ipa:'/mul.tsuˈmesk/',cat:'Vocabulary',d:'Thank you.'},
    {t:'Bună ziua',ph:'BOO-nuh ZEE-wah',ipa:'/ˈbu.nə ˈzi.wa/',cat:'Vocabulary',d:'Good day.'},
    {t:'Noapte bună',ph:'NWAHP-teh BOO-nuh',ipa:'/ˈno̯ap.te ˈbu.nə/',cat:'Vocabulary',d:'Good night.'},
    {t:'Plăcintă',ph:'pluh-CHEEN-tuh',ipa:'/pləˈtʃin.tə/',cat:'Vocabulary',d:'A filled pastry.'},
    {t:'Sărbătoare',ph:'suhr-buh-TWAH-reh',ipa:'/sər.bəˈto̯a.re/',cat:'Vocabulary',d:'A feast day or celebration.'},
    {t:'Codru',ph:'KO-droo',ipa:'/ˈko.dru/',cat:'Vocabulary',d:'Deep old forest.'},
    {t:'Lună plină',ph:'LOO-nuh PLEE-nuh',ipa:'/ˈlu.nə ˈpli.nə/',cat:'Vocabulary',d:'Full moon — the night of the crossing.'},
    {t:'Iarnă',ph:'YAR-nuh',ipa:'/ˈjar.nə/',cat:'Vocabulary',d:'Winter.'},
    {t:'Inimă',ph:'EE-nee-muh',ipa:'/ˈi.ni.mə/',cat:'Vocabulary',d:'Heart.'},
    {t:'Soră',ph:'SO-ruh',ipa:'/ˈso.rə/',cat:'Vocabulary',d:'Sister.'},
    {t:'Sorrow',ph:'SOR-oh',ipa:'/ˈsɒ.ɹoʊ/',cat:'Character',d:'The silent stranger Tati dances with.'}
  ];

  const RECENTS_KEY = 'ww.recents.v1';
  const VOICE_KEY = 'ww.voiceKey.v1';
  const THEME_KEY = 'ww.theme.v1';
  const SLOW_KEY = 'ww.slow.v1';
  const MAX_RECENTS = 20;
  const RECENTS_SHOWN = 8;
  const NORMAL_RATE = 0.92;
  const SLOW_RATE = 0.75;
  const SLOW_WORD_PAUSE_MS = 320;

  // ---- Romanian diacritic-insensitive normalization ----
  // Explicit Romanian letter mapping (not just generic accent stripping):
  //   a/ă/â -> a   i/î -> i   s/ș/ş -> s   t/ț/ţ -> t
  function normalizeRo(input) {
    return String(input || '')
      .toLowerCase()
      .replace(/[ăâ]/g, 'a')
      .replace(/î/g, 'i')
      .replace(/[șş]/g, 's')
      .replace(/[țţ]/g, 't')
      // defensive fallback for any other accented characters
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function findTerm(text) {
    const k = normalizeRo(text);
    if (!k) return null;
    for (let i = 0; i < TERMS.length; i++) {
      if (normalizeRo(TERMS[i].t) === k) return TERMS[i];
    }
    return null;
  }

  function loadJSON(key, fallback) {
    try {
      const v = JSON.parse(localStorage.getItem(key) || 'null');
      return v == null ? fallback : v;
    } catch (e) { return fallback; }
  }
  function save(key, value) {
    try { localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value)); } catch (e) {}
  }

  // ---- state ----
  const state = {
    draft: '',
    query: '',
    filter: 'all',
    showAllRecent: false,
    recents: loadJSON(RECENTS_KEY, []),
    voices: [],
    hasRo: false,
    voiceKey: localStorage.getItem(VOICE_KEY) || '',
    speaking: '',
    voicesOpen: false,
    theme: localStorage.getItem(THEME_KEY) || null, // 'light' | 'dark' | null(=system)
    slow: localStorage.getItem(SLOW_KEY) === '1',
  };

  // ---- elements ----
  const el = {
    freeformInput: document.getElementById('freeformInput'),
    clearDraft: document.getElementById('clearDraft'),
    speakBtn: document.getElementById('speakBtn'),
    speakingRow: document.getElementById('speakingRow'),
    speakingTerm: document.getElementById('speakingTerm'),

    voiceBtn: document.getElementById('voiceBtn'),
    voiceBtnLabel: document.getElementById('voiceBtnLabel'),
    slowBtn: document.getElementById('slowBtn'),
    themeBtn: document.getElementById('themeBtn'),
    themeGlyph: document.getElementById('themeGlyph'),
    installBtn: document.getElementById('installBtn'),

    clearRecentsBtn: document.getElementById('clearRecentsBtn'),
    recentGrid: document.getElementById('recentGrid'),
    toggleRecentBtn: document.getElementById('toggleRecentBtn'),
    recentEmpty: document.getElementById('recentEmpty'),

    searchInput: document.getElementById('searchInput'),
    filterChips: Array.prototype.slice.call(document.querySelectorAll('.filter-chip')),
    resultsList: document.getElementById('resultsList'),
    noResults: document.getElementById('noResults'),

    voiceSheetOverlay: document.getElementById('voiceSheetOverlay'),
    voiceSheetBackdrop: document.getElementById('voiceSheetBackdrop'),
    voiceSheetTitle: document.getElementById('voiceSheetTitle'),
    voiceList: document.getElementById('voiceList'),
    voiceFootnote: document.getElementById('voiceFootnote'),
  };

  // ---- theme ----
  function applyTheme() {
    if (state.theme === 'dark' || state.theme === 'light') {
      document.documentElement.setAttribute('data-theme', state.theme);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    const isDark = state.theme === 'dark' ||
      (state.theme === null && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    el.themeGlyph.textContent = isDark ? '☾' : '☀';
  }
  el.themeBtn.addEventListener('click', function () {
    const currentlyDark = document.documentElement.getAttribute('data-theme') === 'dark' ||
      (!document.documentElement.getAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    state.theme = currentlyDark ? 'light' : 'dark';
    save(THEME_KEY, state.theme);
    applyTheme();
  });

  // ---- slow / clearer pronunciation ----
  function applySlowUI() {
    el.slowBtn.classList.toggle('active', state.slow);
    el.slowBtn.setAttribute('aria-pressed', String(state.slow));
  }
  el.slowBtn.addEventListener('click', function () {
    state.slow = !state.slow;
    save(SLOW_KEY, state.slow ? '1' : '0');
    applySlowUI();
  });

  // ---- voices ----
  function voiceKeyFor(v) { return v.name + '|' + v.lang; }

  function loadVoices() {
    if (!('speechSynthesis' in window)) { state.voices = []; state.hasRo = false; renderVoiceUI(); return; }
    const all = speechSynthesis.getVoices() || [];
    if (!all.length) { state.voices = []; state.hasRo = false; renderVoiceUI(); return; }
    const ro = all.filter(function (v) { return /^ro([-_]|$)/i.test(v.lang || ''); });
    // On-device voices reliably honor rate/pitch changes; many network voices silently ignore
    // them, so list local voices first and prefer one as the default pick.
    const sorted = ro.length ? ro : all.slice(0, 6);
    sorted.sort(function (a, b) { return (b.localService ? 1 : 0) - (a.localService ? 1 : 0); });
    state.voices = sorted;
    state.hasRo = ro.length > 0;
    if (!state.voiceKey || !state.voices.some(function (v) { return voiceKeyFor(v) === state.voiceKey; })) {
      const roRoLocal = state.voices.find(function (v) { return /^ro[-_]ro$/i.test(v.lang || '') && v.localService; });
      const roRoAny = state.voices.find(function (v) { return /^ro[-_]ro$/i.test(v.lang || ''); });
      const anyLocal = state.voices.find(function (v) { return v.localService; });
      const preferred = roRoLocal || roRoAny || anyLocal || state.voices[0];
      if (preferred) state.voiceKey = voiceKeyFor(preferred);
    }
    renderVoiceUI();
  }
  function getSelectedVoice() {
    return state.voices.find(function (v) { return voiceKeyFor(v) === state.voiceKey; }) || null;
  }

  // ---- speaking ----
  let speakTimeout = null;
  let activeSequence = null; // { cancelled: boolean } — lets a new speak() cut off an in-progress word-by-word sequence
  function clearSpeakingIfMatches(text) {
    if (state.speaking === text) {
      state.speaking = '';
      el.speakingRow.hidden = true;
    }
  }
  function makeUtterance(text, rate) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'ro-RO';
    const v = getSelectedVoice();
    if (v) { u.voice = v; u.lang = v.lang; }
    // Set rate last: assigning .voice after .rate has been seen to silently reset the
    // rate back to default on some Chromium/Android builds.
    u.rate = rate;
    return u;
  }
  // Speaks each word as its own utterance with a short pause between, so multi-word
  // names (e.g. "Tăul Ielelor") are easier to pick apart at slow speed.
  function speakWordSequence(words, rate, recentKeyText) {
    const seq = { cancelled: false };
    activeSequence = seq;
    let i = 0;
    function playNext() {
      if (seq.cancelled) return;
      if (i >= words.length) { clearSpeakingIfMatches(recentKeyText); return; }
      const u = makeUtterance(words[i++], rate);
      u.onend = u.onerror = function () {
        if (seq.cancelled) return;
        if (i >= words.length) { clearSpeakingIfMatches(recentKeyText); return; }
        setTimeout(function () { if (!seq.cancelled) playNext(); }, SLOW_WORD_PAUSE_MS);
      };
      speechSynthesis.speak(u);
    }
    playNext();
    // safety net in case a voice never fires onend/onerror
    speakTimeout = setTimeout(function () { seq.cancelled = true; clearSpeakingIfMatches(recentKeyText); }, words.length * 3500 + 1500);
  }
  function speak(rawText) {
    const text = String(rawText || '').trim();
    if (!text) { el.freeformInput.focus(); return; }
    const known = findTerm(text);
    const utterText = known ? (known.speak || known.t) : text;

    pushRecent(text, known ? known.ph : '');

    state.speaking = text;
    el.speakingRow.hidden = false;
    el.speakingTerm.textContent = text;

    if (speakTimeout) clearTimeout(speakTimeout);
    if (activeSequence) activeSequence.cancelled = true;

    if (!('speechSynthesis' in window)) {
      speakTimeout = setTimeout(function () { clearSpeakingIfMatches(text); }, 900);
      return;
    }
    speechSynthesis.cancel();

    const rate = state.slow ? SLOW_RATE : NORMAL_RATE;
    const words = utterText.trim().split(/\s+/).filter(Boolean);

    if (state.slow && words.length > 1) {
      speakWordSequence(words, rate, text);
      return;
    }
    const u = makeUtterance(utterText, rate);
    u.onend = u.onerror = function () { clearSpeakingIfMatches(text); };
    speechSynthesis.speak(u);
    speakTimeout = setTimeout(function () { clearSpeakingIfMatches(text); }, 4000);
  }

  // ---- recent history ----
  function pushRecent(t, ph) {
    const key = normalizeRo(t);
    const rest = state.recents.filter(function (r) { return normalizeRo(r.t) !== key; });
    state.recents = [{ t: t, ph: ph || '' }].concat(rest).slice(0, MAX_RECENTS);
    save(RECENTS_KEY, state.recents);
    renderRecents();
  }
  function clearRecents() {
    state.recents = [];
    state.showAllRecent = false;
    save(RECENTS_KEY, state.recents);
    renderRecents();
  }

  function renderRecents() {
    const shown = state.showAllRecent ? state.recents : state.recents.slice(0, RECENTS_SHOWN);
    el.recentGrid.innerHTML = shown.map(function (r, i) {
      return '<button type="button" class="recent-card" data-idx="' + i + '">' +
        '<span class="recent-term">' + esc(r.t) + '</span>' +
        '<span class="recent-ph">' + esc(r.ph || '') + '</span>' +
        '</button>';
    }).join('');
    Array.prototype.forEach.call(el.recentGrid.querySelectorAll('.recent-card'), function (btn, i) {
      btn.addEventListener('click', function () { speak(shown[i].t); });
    });

    el.recentEmpty.hidden = state.recents.length !== 0;
    if (state.recents.length > RECENTS_SHOWN) {
      el.toggleRecentBtn.hidden = false;
      el.toggleRecentBtn.textContent = state.showAllRecent ? 'Show fewer' : 'See all ' + state.recents.length + ' recent';
    } else {
      el.toggleRecentBtn.hidden = true;
    }
  }

  // ---- search / guide ----
  function matchesQuery(entry, qNorm) {
    if (!qNorm) return true;
    const hay = normalizeRo(entry.t + ' ' + entry.ph + ' ' + entry.d);
    return hay.indexOf(qNorm) >= 0;
  }
  function renderResults() {
    const qNorm = normalizeRo(state.query);
    const results = TERMS.filter(function (e) {
      return (state.filter === 'all' || e.cat === state.filter) && matchesQuery(e, qNorm);
    });
    el.resultsList.innerHTML = results.map(function (e, i) {
      return '<div class="result-row" data-idx="' + i + '">' +
        '<div class="result-main">' +
          '<div class="result-headline"><span class="result-term">' + esc(e.t) + '</span><span class="result-cat">' + esc(e.cat) + '</span></div>' +
          '<div class="result-phrow"><span class="result-ph">' + esc(e.ph) + '</span><span class="result-ipa">' + esc(e.ipa) + '</span></div>' +
          '<div class="result-desc">' + esc(e.d) + '</div>' +
        '</div>' +
        '<button type="button" class="result-speak" aria-label="Pronounce ' + esc(e.t) + '">' +
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 9.5h3.6L13 5v14l-5.4-4.5H4z" fill="currentColor"></path><path d="M16.6 8.6a4.8 4.8 0 0 1 0 6.8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"></path></svg>' +
        '</button>' +
      '</div>';
    }).join('');
    Array.prototype.forEach.call(el.resultsList.querySelectorAll('.result-row'), function (row, i) {
      const play = function (ev) { ev.stopPropagation(); speak(results[i].t); };
      row.addEventListener('click', play);
      row.querySelector('.result-speak').addEventListener('click', play);
    });
    el.noResults.hidden = results.length !== 0;
  }

  // ---- voice sheet ----
  function renderVoiceUI() {
    const sel = getSelectedVoice();
    el.voiceBtnLabel.textContent = sel ? (sel.lang || 'ro-RO').replace('_', '-') : 'ro-RO';
    el.voiceSheetTitle.textContent = state.voices.length === 0
      ? 'No voices available'
      : (state.hasRo ? 'Romanian voice' : 'No Romanian voice found');
    let footnote = state.voices.length === 0
      ? 'This browser isn’t exposing any text-to-speech voices. Playback may be silent until a voice is installed.'
      : (state.hasRo
          ? 'Romanian voices installed on this device.'
          : 'These are your device’s default voices, so Romanian words will be read with a foreign accent. Add a Romanian voice in your language settings for accurate pronunciation.');
    if (sel && !sel.localService) {
      footnote += ' This voice is a network voice — some network voices ignore the Slower speed control. Pick an “on device” voice below if you need Slower to take effect.';
    }
    el.voiceFootnote.textContent = footnote;

    el.voiceList.innerHTML = state.voices.map(function (v, i) {
      const key = voiceKeyFor(v);
      const isSel = key === state.voiceKey;
      return '<button type="button" class="voice-option" data-idx="' + i + '" style="border-color:' + (isSel ? 'var(--accent)' : 'var(--line)') + '">' +
        '<span><span class="vname">' + esc(v.name) + '</span><span class="vmeta">' + esc(v.lang) + (v.localService ? ' · on device' : ' · network') + '</span></span>' +
        '<span class="vmark">' + (isSel ? '●' : '') + '</span>' +
      '</button>';
    }).join('');
    Array.prototype.forEach.call(el.voiceList.querySelectorAll('.voice-option'), function (btn, i) {
      btn.addEventListener('click', function () {
        const v = state.voices[i];
        state.voiceKey = voiceKeyFor(v);
        save(VOICE_KEY, state.voiceKey);
        closeVoiceSheet();
        renderVoiceUI();
        speak('Bună ziua');
      });
    });
  }

  let lastFocusedBeforeSheet = null;
  function openVoiceSheet() {
    lastFocusedBeforeSheet = document.activeElement;
    state.voicesOpen = true;
    el.voiceSheetOverlay.hidden = false;
    document.addEventListener('keydown', onSheetKeydown);
    const first = el.voiceList.querySelector('.voice-option');
    (first || el.voiceSheetTitle).focus && (first || el.voiceSheetTitle).focus();
  }
  function closeVoiceSheet() {
    state.voicesOpen = false;
    el.voiceSheetOverlay.hidden = true;
    document.removeEventListener('keydown', onSheetKeydown);
    if (lastFocusedBeforeSheet && lastFocusedBeforeSheet.focus) lastFocusedBeforeSheet.focus();
  }
  function onSheetKeydown(e) { if (e.key === 'Escape') closeVoiceSheet(); }

  el.voiceBtn.addEventListener('click', openVoiceSheet);
  el.voiceSheetBackdrop.addEventListener('click', closeVoiceSheet);

  // ---- freeform input wiring ----
  function updateClearDraftVisibility() { el.clearDraft.hidden = state.draft.length === 0; }
  el.freeformInput.addEventListener('input', function (e) {
    state.draft = e.target.value;
    updateClearDraftVisibility();
  });
  el.freeformInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') { e.preventDefault(); speak(state.draft); }
  });
  el.clearDraft.addEventListener('click', function () {
    state.draft = '';
    el.freeformInput.value = '';
    updateClearDraftVisibility();
    el.freeformInput.focus();
  });
  el.speakBtn.addEventListener('click', function () { speak(state.draft); });

  // ---- recent controls ----
  el.clearRecentsBtn.addEventListener('click', clearRecents);
  el.toggleRecentBtn.addEventListener('click', function () {
    state.showAllRecent = !state.showAllRecent;
    renderRecents();
  });

  // ---- search / filters ----
  el.searchInput.addEventListener('input', function (e) {
    state.query = e.target.value;
    renderResults();
  });
  el.filterChips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      state.filter = chip.getAttribute('data-filter');
      el.filterChips.forEach(function (c) { c.classList.toggle('active', c === chip); });
      renderResults();
    });
  });

  // ---- install prompt ----
  let deferredInstallPrompt = null;
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferredInstallPrompt = e;
    if (!localStorage.getItem('ww.installDismissed.v1')) el.installBtn.hidden = false;
  });
  el.installBtn.addEventListener('click', function () {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.then(function () {
      deferredInstallPrompt = null;
      el.installBtn.hidden = true;
    });
  });
  window.addEventListener('appinstalled', function () {
    el.installBtn.hidden = true;
    save('ww.installDismissed.v1', '1');
  });

  // ---- service worker ----
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('./service-worker.js');
    });
  }

  // ---- init ----
  applyTheme();
  applySlowUI();
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
      if (state.theme === null) applyTheme();
    });
  }
  loadVoices();
  if ('speechSynthesis' in window) speechSynthesis.onvoiceschanged = loadVoices;
  renderRecents();
  renderResults();
})();
