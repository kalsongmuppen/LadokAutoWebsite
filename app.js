(function () {
  'use strict';

  var root = document.documentElement;

  /* Replace later with your real invite link */
  var DISCORD_INVITE_URL = "https://discord.com/invite/";

  var STR = {
    en: {
      brandTag: "Reminders and Auto-Registration",

      navSignIn: "Sign in",
      navCreate: "Create account",
      navAbout: "About",
      navCourses: "My courses",
      navSettings: "Settings",
      navSignOut: "Sign out",

      navDiscordWarning: "Warning: Discord account not connected. No reminders will be received.",

      themeModeLight: "Light",
      themeModeDark: "Dark",
      themeDescLight: "Bright",
      themeDescDark: "Night",

      langModeEN: "EN",
      langModeSV: "SV",
      langDescEN: "English",
      langDescSV: "Svenska",

      mduNoticeTitle: "Use your MDU/Ladok login",
      mduNoticeBody: "Enter your MDU email and the same password you use for Ladok.",

      mduEmailLabel: "MDU email",
      mduEmailPH: "name@student.mdu.se",
      passwordLabel: "MDU password",
      passwordPH: "Your MDU password",
      emailMduError: "Please use your MDU student email ending with @student.mdu.se.",

      loginTitle: "Sign in",
      btnSignIn: "Sign in",

      signupTitle: "Create your account",
      newPasswordLabel: "MDU password",
      newPasswordPH: "Your MDU password",
      btnCreate: "Create account",
      consentRequiredMsg: "You must accept Ladok access to create an account.",
      ladokConsent: "I allow Ladok Auto to access my Ladok account for reminders and registration actions.",

      discordServerTitle: "Official Discord server",
      discordServerDesc: "Connect Discord to enable reminders and receive important notifications.",
      discordServerBtn: "Open Discord",

      discordGuideTitle: "Connect Discord in 4 steps",
      discordGuideS1: "Join Ladok Auto’s Discord server.",
      discordGuideS2: "Enter your Discord username here and click “Send code”.",
      discordGuideS3: "Paste the code the Discord bot sends you.",
      discordGuideS4: "Done — you will receive course reminders.",

      discordOnboardTitle: "Connect Discord to enable reminders",
      discordOnboardWarn: "Without Discord, reminder toggles are disabled and you will not receive reminders.",
      discordVerifyTitle: "Verify Discord username",
      btnSendCode: "Send code",
      codeLabel: "Verification code",
      codePH: "Enter code",
      btnVerify: "Verify",
      btnSkip: "Not now",

      verifySentDemo: "Demo code sent:",
      verifySuccess: "Discord verified",
      verifySuccessBody: "Your Discord username is now connected.",
      invalidCode: "Invalid code. Please try again.",

      dashTitle: "My courses",
      dashSubtitle: "Example data. Real course data would come from Ladok (with permission).",
      dashSave: "Save changes",
      dashSearchPH: "Search courses…",

      thCourse: "Course",
      thStatus: "Status",
      thRegistration: "Registration",
      thReminder: "Reminder",
      thAutoreg: "Auto-registration",
      thReminderHelp: "Notify before registration ends",
      thAutoregHelp: "Register for course when available",
      toggleAllCourses: "Toggle all courses",

      statusRegistered: "Registered",
      statusNotRegistered: "Not registered",
      statusPlanned: "Planned",
      statusActionNeeded: "Action needed",
      regNoAction: "No action needed",
      regOpensJan20: "Opens Jan 20",
      regNotPublished: "Window not published yet",
      regClosesFeb1: "Closes Feb 1",

      dashExamAutoAllTitle: "Auto-register all available examinations",
      dashExamAutoAllDesc: "When an exam registration becomes available, Ladok Auto will attempt to register you.",
      dashExamRemAllTitle: "Reminder before exam registration ends",
      dashExamRemAllDesc: "Get reminded before an exam registration deadline closes.",

      warnTitle: "Warning:",
      warnRemindersOff: "Reminders are disabled for at least one course or examinations. You may miss a registration deadline.",

      setTitle: "Settings",
      setSubtitle: "Preferences and account controls.",
      setLeadLabel: "How early before registration ends do you want to be reminded?",
      setLead1d: "1 day",
      setLead2d: "2 days",
      setLead3d: "3 days",
      setLead5d: "5 days",
      setLead7d: "7 days",
      setLeadMax: "Maximum (as early as possible)",

      setNotifyRegistered: "Notify when registered",
      setNotifyRegisteredDesc: "Get a notification when a course or examination registration is completed.",

      discordSettingsTitle: "Discord",
      discordSettingsLabel: "Discord username",
      discordConnectedPrefix: "Connected as:",
      discordNotConnected: "Not connected to Discord yet.",
      discordVerified: "verified",
      discordNotVerified: "not verified",
      btnAddDiscord: "Add Discord username",
      btnChangeDiscord: "Change Discord username",

      dangerZone: "Danger zone",
      deleteAccount: "Delete Ladok Auto account",
      deleteAccountDesc: "This removes your local demo data and signs you out.",
      deleteConfirm: "Are you sure you want to delete your Ladok Auto account? This cannot be undone in this demo.",
      btnSaveSettings: "Save settings",

      disconnectDiscord: "Disconnect Discord",
      disconnectDiscordDesc: "Disconnect Discord from this account. Reminders will be disabled until you connect again.",
      disconnectConfirm: "Disconnect Discord from this account? Reminders will be disabled until you connect again.",
      toastDiscordDisconnected: "Discord disconnected",
      toastDiscordDisconnectedBody: "Discord has been disconnected. Reminders are now disabled.",

      aboutTitle: "About Ladok Auto",
      aboutSubtitle: "A calmer way to keep up with registration windows.",
      aboutP1: "Registration windows are small, but they can create outsized stress. Ladok Auto exists to reduce that friction: fewer deadlines to remember, fewer moments of “Did I miss it?”, and more room to focus on studying and living.",
      aboutP2: "We believe reliability is not a luxury — it’s a principle. The best systems are the ones that quietly do their job, consistently, without demanding attention. That mindset shapes everything we build: clear controls, predictable behavior, and reminders that arrive when they matter.",
      aboutP3: "Ladok Auto is built by civil engineers at MDU with an obsession for dependable systems. Our goal is simple: keep everything in one place, keep it understandable, and help you avoid unnecessary mistakes.",

      faqTitle: "FAQ",
      faqQDiscord: "My account isn’t connected to Discord",
      faqADiscord: "You can connect Discord in Settings. Join the official Ladok Auto Discord server, enter your Discord username, send a verification code, then confirm it here. Your courses and settings stay saved to your account.",
      faqQSecure: "Is Ladok Auto secure?",
      faqASecure: "Ladok Auto is designed with a strong security mindset and follows standard best practices for protecting user data. That said, no service can guarantee absolute security. If you ever suspect your credentials may have been exposed, you can change your MDU password at any time. Ladok Auto does not accept liability for losses caused by third-party breaches or events outside our control.",

      course_MA101B_title: "MA101B — Linear Algebra",
      course_MA101B_term: "Spring 2026",
      course_DV123A_title: "DV123A — Embedded Systems",
      course_DV123A_term: "Spring 2026",
      course_FY201C_title: "FY201C — Applied Physics",
      course_FY201C_term: "Autumn 2026",
      course_DA330D_title: "DA330D — Databases",
      course_DA330D_term: "Autumn 2026",
      course_RE210A_title: "RE210A — Reliability Engineering",
      course_RE210A_term: "Spring 2026",
      course_EL150B_title: "EL150B — Electronics",
      course_EL150B_term: "Autumn 2026",
      course_ST120A_title: "ST120A — Statistics for Engineers",
      course_ST120A_term: "Autumn 2026",

      toastSaved: "Saved",
      toastSavedBody: "Your changes were saved.",
      toastSignedOut: "Signed out",
      toastSignedOutBody: "You are now signed out."
    },

    sv: {
      brandTag: "Påminnelser och autoanmälan",

      navSignIn: "Logga in",
      navCreate: "Skapa konto",
      navAbout: "Om",
      navCourses: "Mina kurser",
      navSettings: "Inställningar",
      navSignOut: "Logga ut",

      navDiscordWarning: "Varning: Discord-konto inte kopplat. Inga påminnelser kommer att skickas.",

      themeModeLight: "Ljust",
      themeModeDark: "Mörkt",
      themeDescLight: "Ljust",
      themeDescDark: "Kväll",

      langModeEN: "EN",
      langModeSV: "SV",
      langDescEN: "English",
      langDescSV: "Svenska",

      mduNoticeTitle: "Använd din MDU/Ladok-inloggning",
      mduNoticeBody: "Ange din MDU e-post och samma lösenord som du använder för Ladok.",

      mduEmailLabel: "MDU e-post",
      mduEmailPH: "namn@student.mdu.se",
      passwordLabel: "MDU lösenord",
      passwordPH: "Ditt MDU lösenord",
      emailMduError: "Använd din MDU student-e-post som slutar på @student.mdu.se.",

      loginTitle: "Logga in",
      btnSignIn: "Logga in",

      signupTitle: "Skapa konto",
      newPasswordLabel: "MDU lösenord",
      newPasswordPH: "Ditt MDU lösenord",
      btnCreate: "Skapa konto",
      consentRequiredMsg: "Du måste godkänna Ladok-åtkomst för att skapa ett konto.",
      ladokConsent: "Jag tillåter att Ladok Auto får åtkomst till mitt Ladok-konto för påminnelser och registrering.",

      discordServerTitle: "Officiell Discord-server",
      discordServerDesc: "Koppla Discord för att aktivera påminnelser och få viktiga notiser.",
      discordServerBtn: "Öppna Discord",

      discordGuideTitle: "Koppla Discord i 4 steg",
      discordGuideS1: "Gå med i Ladok Autos Discord-server.",
      discordGuideS2: "Skriv in ditt Discord-användarnamn här och klicka på “Skicka kod”.",
      discordGuideS3: "Klistra in koden som Discord-botten skickar.",
      discordGuideS4: "Klart — du får kurs-påminnelser.",

      discordOnboardTitle: "Koppla Discord för att aktivera påminnelser",
      discordOnboardWarn: "Utan Discord är påminnelse-reglage avstängda och du får inga påminnelser.",
      discordVerifyTitle: "Verifiera Discord-användarnamn",
      btnSendCode: "Skicka kod",
      codeLabel: "Verifieringskod",
      codePH: "Ange kod",
      btnVerify: "Verifiera",
      btnSkip: "Inte nu",

      verifySentDemo: "Demo-kod skickad:",
      verifySuccess: "Discord verifierat",
      verifySuccessBody: "Ditt Discord-användarnamn är nu kopplat.",
      invalidCode: "Fel kod. Försök igen.",

      dashTitle: "Mina kurser",
      dashSubtitle: "Exempeldata. I en riktig tjänst hämtas kurser från Ladok (med tillstånd).",
      dashSave: "Spara ändringar",
      dashSearchPH: "Sök kurser…",

      thCourse: "Kurs",
      thStatus: "Status",
      thRegistration: "Registrering",
      thReminder: "Påminnelse",
      thAutoreg: "Autoanmälan",
      thReminderHelp: "Påminn innan registreringen stänger",
      thAutoregHelp: "Registrera för kurs när tillgängligt",
      toggleAllCourses: "Reglage för alla kurser",

      statusRegistered: "Registrerad",
      statusNotRegistered: "Ej registrerad",
      statusPlanned: "Planerad",
      statusActionNeeded: "Åtgärd krävs",
      regNoAction: "Inget att göra",
      regOpensJan20: "Öppnar 20 jan",
      regNotPublished: "Fönster ej publicerat",
      regClosesFeb1: "Stänger 1 feb",

      dashExamAutoAllTitle: "Autoanmäl alla tillgängliga examinationer",
      dashExamAutoAllDesc: "När en tentamensanmälan blir tillgänglig försöker Ladok Auto anmäla dig.",
      dashExamRemAllTitle: "Påminn innan tentamensanmälan stänger",
      dashExamRemAllDesc: "Få en påminnelse innan en tentamensanmälan stänger.",

      warnTitle: "Varning:",
      warnRemindersOff: "Påminnelser är avstängda för minst en kurs eller examinationer. Du kan missa en deadline.",

      setTitle: "Inställningar",
      setSubtitle: "Preferenser och kontokontroller.",
      setLeadLabel: "Hur lång tid innan registreringen stänger vill du bli påmind?",
      setLead1d: "1 dag",
      setLead2d: "2 dagar",
      setLead3d: "3 dagar",
      setLead5d: "5 dagar",
      setLead7d: "7 dagar",
      setLeadMax: "Maximalt (så tidigt som möjligt)",

      setNotifyRegistered: "Meddela när registrerad",
      setNotifyRegisteredDesc: "Få en notis när en kurs- eller tentamensregistrering är klar.",

      discordSettingsTitle: "Discord",
      discordSettingsLabel: "Discord-användarnamn",
      discordConnectedPrefix: "Kopplad som:",
      discordNotConnected: "Inte kopplad till Discord ännu.",
      discordVerified: "verifierad",
      discordNotVerified: "inte verifierad",
      btnAddDiscord: "Lägg till Discord-användarnamn",
      btnChangeDiscord: "Ändra Discord-användarnamn",

      dangerZone: "Riskzon",
      deleteAccount: "Ta bort Ladok Auto-konto",
      deleteAccountDesc: "Detta tar bort lokal demo-data och loggar ut dig.",
      deleteConfirm: "Är du säker på att du vill ta bort ditt Ladok Auto-konto? Detta kan inte ångras i denna demo.",
      btnSaveSettings: "Spara inställningar",

      disconnectDiscord: "Koppla bort Discord",
      disconnectDiscordDesc: "Koppla bort Discord från kontot. Påminnelser stängs av tills du kopplar igen.",
      disconnectConfirm: "Koppla bort Discord från kontot? Påminnelser stängs av tills du kopplar igen.",
      toastDiscordDisconnected: "Discord bortkopplat",
      toastDiscordDisconnectedBody: "Discord har kopplats bort. Påminnelser är nu avstängda.",

      aboutTitle: "Om Ladok Auto",
      aboutSubtitle: "Ett lugnare sätt att hålla koll på registreringsfönster.",
      aboutP1: "Registreringsfönster är små, men de kan skapa oproportionerligt mycket stress. Ladok Auto finns för att minska den friktionen: färre deadlines att minnas, färre stunder av “Missade jag?”, och mer utrymme att fokusera på studier och vardag.",
      aboutP2: "Vi tror att tillförlitlighet inte är en lyx — det är en princip. De bästa systemen gör sitt jobb tyst och konsekvent, utan att kräva uppmärksamhet. Den tanken formar allt vi bygger: tydliga reglage, förutsägbart beteende och påminnelser som kommer när de behövs.",
      aboutP3: "Ladok Auto är byggt av civilingenjörer vid MDU med en stark vilja att skapa pålitliga system. Målet är enkelt: samla allt på ett ställe, gör det begripligt och hjälp dig undvika onödiga misstag.",

      faqTitle: "FAQ",
      faqQDiscord: "Mitt konto är inte kopplat till Discord",
      faqADiscord: "Du kan koppla Discord i Inställningar. Gå med i Ladok Autos officiella Discord-server, ange ditt Discord-användarnamn, skicka en verifieringskod och bekräfta den här. Dina kurser och inställningar sparas på ditt konto.",
      faqQSecure: "Är Ladok Auto säkert?",
      faqASecure: "Ladok Auto är utformat med ett starkt säkerhetsfokus och följer etablerade branschpraxis för att skydda användardata. Samtidigt kan ingen tjänst garantera absolut säkerhet. Om du misstänker att dina uppgifter kan ha läckt kan du när som helst byta MDU-lösenord. Ladok Auto tar inte ansvar för förluster som orsakas av tredjepartsintrång eller händelser utanför vår kontroll.",

      course_MA101B_title: "MA101B — Linjär algebra",
      course_MA101B_term: "Vår 2026",
      course_DV123A_title: "DV123A — Inbyggda system",
      course_DV123A_term: "Vår 2026",
      course_FY201C_title: "FY201C — Tillämpad fysik",
      course_FY201C_term: "Höst 2026",
      course_DA330D_title: "DA330D — Databaser",
      course_DA330D_term: "Höst 2026",
      course_RE210A_title: "RE210A — Tillförlitlighetsteknik",
      course_RE210A_term: "Vår 2026",
      course_EL150B_title: "EL150B — Elektronik",
      course_EL150B_term: "Höst 2026",
      course_ST120A_title: "ST120A — Statistik för ingenjörer",
      course_ST120A_term: "Höst 2026",

      toastSaved: "Sparat",
      toastSavedBody: "Dina ändringar är sparade.",
      toastSignedOut: "Utloggad",
      toastSignedOutBody: "Du är nu utloggad."
    }
  };

  function qsa(sel, ctx) {
    var scope = ctx || document;
    var n = scope.querySelectorAll(sel);
    var arr = [];
    for (var i = 0; i < n.length; i++) arr.push(n[i]);
    return arr;
  }
  function qs(sel, ctx) { return (ctx || document).querySelector(sel); }
  function setAttr(el, name, val) { el.setAttribute(name, val); }
  function getAttr(el, name) { return el.getAttribute(name); }

  function getLang() {
    var saved = null;
    try { saved = localStorage.getItem("la_lang"); } catch (e) {}
    if (saved === "en" || saved === "sv") return saved;
    return "en";
  }

  function t(key) {
    var lang = root.getAttribute("data-lang") || "en";
    if (STR[lang] && STR[lang][key]) return STR[lang][key];
    if (STR.en[key]) return STR.en[key];
    return key;
  }

  function applyLanguage(lang) {
    setAttr(root, "data-lang", lang);
    setAttr(root, "lang", lang);
    try { localStorage.setItem("la_lang", lang); } catch (e) {}

    var nodes = qsa("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var k = getAttr(nodes[i], "data-i18n");
      if (k) nodes[i].textContent = t(k);
    }

    nodes = qsa("[data-i18n-placeholder]");
    for (i = 0; i < nodes.length; i++) {
      k = getAttr(nodes[i], "data-i18n-placeholder");
      if (k) setAttr(nodes[i], "placeholder", t(k));
    }

    nodes = qsa("[data-i18n-label]");
    for (i = 0; i < nodes.length; i++) {
      k = getAttr(nodes[i], "data-i18n-label");
      if (k) setAttr(nodes[i], "data-label", t(k));
    }

    var langBtn = document.getElementById("langToggle");
    if (langBtn) {
      var mode = langBtn.querySelector("[data-lang-mode]");
      var desc = langBtn.querySelector("[data-lang-desc]");
      if (mode) mode.textContent = (lang === "sv") ? STR.en.langModeSV : STR.en.langModeEN;
      if (desc) desc.textContent = (lang === "sv") ? STR.en.langDescSV : STR.en.langDescEN;
      setAttr(langBtn, "aria-pressed", String(lang === "sv"));
    }

    updateThemePillText();
    updateDiscordNavWarning();
    updateDiscordLinks();
  }

  function initLanguage() {
    applyLanguage(getLang());
    var btn = document.getElementById("langToggle");
    if (btn) btn.onclick = function () {
      var next = (root.getAttribute("data-lang") === "sv") ? "en" : "sv";
      applyLanguage(next);
    };
  }

  function getTheme() {
    var saved = null;
    try { saved = localStorage.getItem("la_theme"); } catch (e) {}
    if (saved === "light" || saved === "dark") return saved;
    try {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
    } catch (e2) {}
    return "light";
  }

  function applyTheme(theme) {
    setAttr(root, "data-theme", theme);
    try { localStorage.setItem("la_theme", theme); } catch (e) {}
    var pill = document.getElementById("themeToggle");
    if (!pill) return;
    setAttr(pill, "aria-pressed", String(theme === "dark"));
    var icon = pill.querySelector("[data-theme-icon]");
    if (icon) icon.textContent = (theme === "dark") ? "🌙" : "☀️";
    updateThemePillText();
  }

  function updateThemePillText() {
    var pill = document.getElementById("themeToggle");
    if (!pill) return;
    var mode = pill.querySelector("[data-theme-mode]");
    var desc = pill.querySelector("[data-theme-desc]");
    var isDark = (root.getAttribute("data-theme") === "dark");
    if (mode) mode.textContent = isDark ? t("themeModeDark") : t("themeModeLight");
    if (desc) desc.textContent = isDark ? t("themeDescDark") : t("themeDescLight");
  }

  function initTheme() {
    applyTheme(getTheme());
    var pill = document.getElementById("themeToggle");
    if (pill) pill.onclick = function () {
      var next = (root.getAttribute("data-theme") === "dark") ? "light" : "dark";
      applyTheme(next);
    };
  }

  function initGlobalSync() {
    if (!window.addEventListener) return;
    window.addEventListener("storage", function (e) {
      if (!e || !e.key) return;
      if (e.key === "la_theme") applyTheme(getTheme());
      if (e.key === "la_lang") applyLanguage(getLang());
      if (e.key === "la_discord" || e.key === "la_discord_verified") applyReminderAvailability();
    });
  }

  function updateDiscordLinks() {
    var links = qsa("[data-discord-link]");
    for (var i = 0; i < links.length; i++) {
      links[i].setAttribute("href", DISCORD_INVITE_URL);
    }
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function toast(title, body) {
    var area = document.querySelector(".toast-area");
    if (!area) return;
    var el = document.createElement("div");
    el.className = "toast";
    el.innerHTML =
      '<div class="dot" aria-hidden="true"></div>' +
      '<div><p class="t-title">' + escapeHtml(title) + '</p>' +
      '<p class="t-body">' + escapeHtml(body || "") + '</p></div>';
    area.appendChild(el);
    window.setTimeout(function () {
      el.style.opacity = "0";
      el.style.transform = "translateY(6px)";
      el.style.transition = "200ms ease";
      window.setTimeout(function () {
        if (el && el.parentNode) el.parentNode.removeChild(el);
      }, 220);
    }, 3200);
  }

  function isAuthed() { return sessionStorage.getItem("la_authed") === "1"; }

  function isDiscordConnected() {
    try {
      var u = (localStorage.getItem("la_discord") || "").trim();
      var v = localStorage.getItem("la_discord_verified") === "1";
      return !!u && v;
    } catch (e) { return false; }
  }

  function updateDiscordNavWarning() {
    var el = document.getElementById("discordNavWarning");
    if (!el) return;
    if (!isAuthed()) { el.classList.add("hidden"); return; }
    if (isDiscordConnected()) el.classList.add("hidden");
    else el.classList.remove("hidden");
  }

  function applyAuthVisibility() {
    var authed = isAuthed();
    var showAuthed = qsa("[data-visible='authed']");
    var showPublic = qsa("[data-visible='public']");
    for (var i = 0; i < showAuthed.length; i++) {
      if (authed) showAuthed[i].classList.remove("hidden");
      else showAuthed[i].classList.add("hidden");
    }
    for (i = 0; i < showPublic.length; i++) {
      if (authed) showPublic[i].classList.add("hidden");
      else showPublic[i].classList.remove("hidden");
    }
    updateDiscordNavWarning();
  }

  function initAuthGuard() {
    var requiresAuth = document.querySelector("[data-requires-auth='true']");
    if (!requiresAuth) return;
    if (!isAuthed()) window.location.href = "index.html";
  }

  function getHandle(email) {
    if (!email) return "";
    var at = email.indexOf("@");
    if (at === -1) return email;
    return email.substring(0, at);
  }

  function initUserHandle() {
    var email = isAuthed() ? (sessionStorage.getItem("la_email") || "") : "";
    var handle = getHandle(email);
    var nodes = qsa("[data-user-handle]");
    for (var i = 0; i < nodes.length; i++) nodes[i].textContent = handle || "";
  }

  function isMduStudentEmail(email) {
    var v = String(email || "").trim().toLowerCase();
    return /^[^\s@]+@student\.mdu\.se$/.test(v);
  }

  function initHeaderAutoHide() {
    var header = document.querySelector(".header");
    if (!header) return;

    var lastY = 0;
    var ticking = false;

    function isMobile() { return (window.innerWidth || 0) <= 760; }

    function onScroll() {
      if (!isMobile()) {
        header.classList.remove("header--hidden");
        lastY = window.pageYOffset || 0;
        return;
      }
      var y = window.pageYOffset || 0;
      var dy = y - lastY;

      if (y > 80 && dy > 6) header.classList.add("header--hidden");
      else if (dy < -6) header.classList.remove("header--hidden");

      lastY = y;
      ticking = false;
    }

    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(onScroll);
    });

    window.addEventListener("resize", function () {
      if (!isMobile()) header.classList.remove("header--hidden");
    });
  }

  function openModal(id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.classList.remove("hidden");
    el.setAttribute("aria-hidden", "false");
  }
  function closeModal(id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.classList.add("hidden");
    el.setAttribute("aria-hidden", "true");
  }

  var COURSE_KEY = "la_course_settings";

  function getCourseSettings() {
    try { return JSON.parse(localStorage.getItem(COURSE_KEY) || "{}"); }
    catch (e) { return {}; }
  }

  function setCourseSettings(next) {
    try { localStorage.setItem(COURSE_KEY, JSON.stringify(next)); } catch (e) {}
  }

  function ensureDefaultPreferences() {
    var ids = ["MA101B","DV123A","FY201C","DA330D","RE210A","EL150B","ST120A"];

    var data = getCourseSettings();
    var empty = true;
    for (var k in data) { if (data.hasOwnProperty(k)) { empty = false; break; } }
    if (empty) data = {};

    for (var i = 0; i < ids.length; i++) {
      if (!data[ids[i]]) {
        data[ids[i]] = { autoreg: true, reminder: false };
      } else {
        if (typeof data[ids[i]].autoreg !== "boolean") data[ids[i]].autoreg = true;
        if (typeof data[ids[i]].reminder !== "boolean") data[ids[i]].reminder = false;
      }
    }
    setCourseSettings(data);

    try {
      if (localStorage.getItem("la_exam_autoreg_all") === null) localStorage.setItem("la_exam_autoreg_all", "1");
      if (localStorage.getItem("la_exam_reminder_all") === null) localStorage.setItem("la_exam_reminder_all", "0");
    } catch (e2) {}

    try {
      var s = {};
      try { s = JSON.parse(localStorage.getItem("la_settings") || "{}"); } catch (e3) { s = {}; }
      if (!s.leadTime) s.leadTime = "3d";
      if (typeof s.notifyRegistered !== "boolean") s.notifyRegistered = false;
      localStorage.setItem("la_settings", JSON.stringify(s));
    } catch (e4) {}
  }

  function onDiscordVerifiedEnableDefaultsIfPending() {
    if (!isDiscordConnected()) return;

    var pending = false;
    try { pending = localStorage.getItem("la_pending_reminders_enable") === "1"; } catch (e) {}
    if (!pending) return;

    ensureDefaultPreferences();

    var data = getCourseSettings();
    for (var k in data) {
      if (data.hasOwnProperty(k)) data[k].reminder = true;
    }
    setCourseSettings(data);

    try {
      localStorage.setItem("la_exam_reminder_all", "1");

      var s = {};
      try { s = JSON.parse(localStorage.getItem("la_settings") || "{}"); } catch (e2) { s = {}; }
      s.notifyRegistered = true;
      if (!s.leadTime) s.leadTime = "3d";
      localStorage.setItem("la_settings", JSON.stringify(s));

      localStorage.setItem("la_pending_reminders_enable", "0");
    } catch (e3) {}
  }

  function applyReminderAvailability() {
    var connected = isDiscordConnected();

    var dash = document.querySelector("[data-page='dashboard']");
    if (dash) {
      var courseRem = qsa("input[data-course='reminder']", dash);
      for (var i = 0; i < courseRem.length; i++) {
        courseRem[i].disabled = !connected;
        if (!connected) courseRem[i].checked = false;
      }

      var masters = qsa("input[data-master='reminder']", dash);
      for (i = 0; i < masters.length; i++) {
        masters[i].disabled = !connected;
        if (!connected) { masters[i].checked = false; masters[i].indeterminate = false; }
      }

      var examRem = document.getElementById("examReminderAll");
      if (examRem) {
        examRem.disabled = !connected;
        if (!connected) examRem.checked = false;
      }
    }

    var setPage = document.querySelector("[data-page='settings']");
    if (setPage) {
      var lead = document.getElementById("leadTime");
      var notify = document.getElementById("notifyRegistered");
      if (lead) lead.disabled = !connected;
      if (notify) {
        notify.disabled = !connected;
        if (!connected) notify.checked = false;
      }
    }

    updateDiscordNavWarning();
  }

  function genCode6() {
    var n = Math.floor(100000 + Math.random() * 900000);
    return String(n);
  }

  function bindDiscordVerificationModal(modalId, ids) {
    var modal = document.getElementById(modalId);
    if (!modal) return;

    var userEl = document.getElementById(ids.user);
    var sendBtn = document.getElementById(ids.send);
    var codeEl = document.getElementById(ids.code);
    var verifyBtn = document.getElementById(ids.verify);
    var closeBtn = document.getElementById(ids.close);
    var hintEl = document.getElementById(ids.hint);
    var skipBtn = ids.skip ? document.getElementById(ids.skip) : null;

    function showHint(text) { if (hintEl) hintEl.textContent = text || ""; }
    function clearTemp() {
      try {
        sessionStorage.removeItem("la_discord_verify_code");
        sessionStorage.removeItem("la_discord_verify_user");
      } catch (e) {}
      if (codeEl) codeEl.value = "";
      showHint("");
    }

    if (closeBtn) closeBtn.onclick = function () { closeModal(modalId); clearTemp(); };

    if (skipBtn) skipBtn.onclick = function () {
      closeModal(modalId);
      clearTemp();
      if (typeof window.onDiscordSkipped === "function") window.onDiscordSkipped();
    };

    modal.onclick = function (e) {
      if (e && e.target === modal) { closeModal(modalId); clearTemp(); }
    };

    if (sendBtn) sendBtn.onclick = function () {
      var u = userEl ? String(userEl.value || "").trim() : "";
      if (!u) { showHint(""); return; }
      var code = genCode6();
      try {
        sessionStorage.setItem("la_discord_verify_code", code);
        sessionStorage.setItem("la_discord_verify_user", u);
      } catch (e) {}
      showHint(t("verifySentDemo") + " " + code);
    };

    if (verifyBtn) verifyBtn.onclick = function () {
      var entered = codeEl ? String(codeEl.value || "").trim() : "";
      var expected = "";
      var expectedUser = "";
      try {
        expected = sessionStorage.getItem("la_discord_verify_code") || "";
        expectedUser = sessionStorage.getItem("la_discord_verify_user") || "";
      } catch (e) {}

      var u = userEl ? String(userEl.value || "").trim() : "";
      if (!u || u !== expectedUser || !expected || entered !== expected) {
        showHint(t("invalidCode"));
        return;
      }

      try {
        localStorage.setItem("la_discord", u);
        localStorage.setItem("la_discord_verified", "1");
      } catch (e2) {}

      onDiscordVerifiedEnableDefaultsIfPending();
      applyReminderAvailability();

      closeModal(modalId);
      clearTemp();
      toast(t("verifySuccess"), t("verifySuccessBody"));

      if (typeof window.refreshDiscordUI === "function") window.refreshDiscordUI();
      if (typeof window.refreshDashboardMasters === "function") window.refreshDashboardMasters();

      if (typeof window.onDiscordVerified === "function") window.onDiscordVerified(u);
    };
  }

  function initAuth() {
    var loginForm = document.querySelector("form[data-demo='login']");
    if (loginForm) {
      loginForm.onsubmit = function (e) {
        e.preventDefault();
        var emailEl = document.getElementById("loginEmail");
        var email = emailEl ? emailEl.value : "";
        if (!isMduStudentEmail(email)) {
          var err = document.getElementById("loginError");
          if (err) { err.textContent = t("emailMduError"); err.classList.remove("hidden"); }
          if (emailEl && emailEl.focus) emailEl.focus();
          return;
        }
        var err2 = document.getElementById("loginError");
        if (err2) { err2.textContent = ""; err2.classList.add("hidden"); }

        sessionStorage.setItem("la_email", email);
        sessionStorage.setItem("la_authed", "1");
        applyAuthVisibility();
        initUserHandle();
        window.location.href = "dashboard.html";
      };
    }

    var signupForm = document.querySelector("form[data-demo='signup']");
    if (signupForm) {
      bindDiscordVerificationModal("discordModal", {
        user: "discordModalUsername",
        send: "discordModalSend",
        code: "discordModalCode",
        verify: "discordModalVerify",
        close: "discordModalClose",
        hint: "discordModalHint",
        skip: "discordModalSkip"
      });

      function finalizeSignup() {
        var email = "";
        try { email = sessionStorage.getItem("la_pending_signup_email") || ""; } catch (e) { email = ""; }
        if (!email) return;

        sessionStorage.setItem("la_email", email);
        sessionStorage.setItem("la_authed", "1");

        ensureDefaultPreferences();
        try { localStorage.setItem("la_pending_reminders_enable", "1"); } catch (e2) {}

        onDiscordVerifiedEnableDefaultsIfPending();

        applyAuthVisibility();
        initUserHandle();
        window.location.href = "dashboard.html";
      }

      window.onDiscordVerified = function () { finalizeSignup(); };
      window.onDiscordSkipped = function () { finalizeSignup(); };

      signupForm.onsubmit = function (e) {
        e.preventDefault();

        var emailEl = document.getElementById("signupEmail");
        var email = emailEl ? emailEl.value : "";
        if (!isMduStudentEmail(email)) {
          var se = document.getElementById("signupError");
          if (se) { se.textContent = t("emailMduError"); se.classList.remove("hidden"); }
          if (emailEl && emailEl.focus) emailEl.focus();
          return;
        }

        var consent = document.getElementById("signupConsent");
        if (!(consent && consent.checked)) {
          var se2 = document.getElementById("signupError");
          if (se2) { se2.textContent = t("consentRequiredMsg"); se2.classList.remove("hidden"); }
          return;
        }

        var se3 = document.getElementById("signupError");
        if (se3) { se3.textContent = ""; se3.classList.add("hidden"); }

        try { sessionStorage.setItem("la_pending_signup_email", email); } catch (e3) {}
        try { localStorage.setItem("la_pending_reminders_enable", "1"); } catch (e4) {}

        openModal("discordModal");
        var u = document.getElementById("discordModalUsername");
        if (u && u.focus) u.focus();
      };
    }

    var logoutLinks = qsa("[data-action='logout']");
    for (var i = 0; i < logoutLinks.length; i++) {
      logoutLinks[i].onclick = function (e) {
        e.preventDefault();
        try {
          sessionStorage.removeItem("la_authed");
          sessionStorage.removeItem("la_email");
        } catch (err) {}
        applyAuthVisibility();
        initUserHandle();
        toast(t("toastSignedOut"), t("toastSignedOutBody"));
        window.location.href = "index.html";
      };
    }
  }

  function initDashboard() {
    var page = document.querySelector("[data-page='dashboard']");
    if (!page) return;

    ensureDefaultPreferences();

    var examAuto = document.getElementById("examAutoAll");
    var examRem = document.getElementById("examReminderAll");

    function loadBool(key) {
      try { return localStorage.getItem(key) === "1"; } catch (e) { return false; }
    }
    function saveBool(key, v) {
      try { localStorage.setItem(key, v ? "1" : "0"); } catch (e) {}
    }

    if (examAuto) examAuto.checked = loadBool("la_exam_autoreg_all");
    if (examRem) examRem.checked = loadBool("la_exam_reminder_all");

    var data = getCourseSettings();
    var rows = qsa("[data-course-id]", page);

    function ensure(id) {
      if (!data[id]) data[id] = { reminder: false, autoreg: false };
    }

    function syncRow(row) {
      var id = getAttr(row, "data-course-id");
      if (!id) return;
      ensure(id);
      var rem = row.querySelector("input[data-course='reminder']");
      var au = row.querySelector("input[data-course='autoreg']");
      if (rem && !rem.disabled) data[id].reminder = !!rem.checked;
      if (au && !au.disabled) data[id].autoreg = !!au.checked;
    }

    function eligible(type) {
      var list = [];
      for (var i = 0; i < rows.length; i++) {
        var input = rows[i].querySelector("input[data-course='" + type + "']");
        if (input && !input.disabled) list.push(input);
      }
      return list;
    }

    function clearToggleWarnings() {
      for (var i = 0; i < rows.length; i++) {
        var cell = rows[i].querySelector(".toggle-cell[data-kind='reminder']");
        if (cell) cell.classList.remove("attention");
      }
      var examBox = document.getElementById("examReminderBox");
      if (examBox) examBox.classList.remove("attention");
    }

    
    function updateReminderAttention() {
      clearToggleWarnings();

      // If Discord isn't connected, reminder toggles are disabled anyway.
      if (!isDiscordConnected()) return;

      for (var i = 0; i < rows.length; i++) {
        var inp = rows[i].querySelector("input[data-course='reminder']");
        if (inp && !inp.disabled && !inp.checked) {
          var cell = rows[i].querySelector(".toggle-cell[data-kind='reminder']");
          if (cell) cell.classList.add("attention");
        }
      }

      var examOff = (examRem && !examRem.disabled && !examRem.checked);
      if (examOff) {
        var box = document.getElementById("examReminderBox");
        if (box) box.classList.add("attention");
      }
    }

    function updateMasters() {
      var connected = isDiscordConnected();

      var mRem = qsa("input[data-master='reminder']", page);
      var mAu = qsa("input[data-master='autoreg']", page);

      function apply(type, masters, lockIfNoDiscord) {
        var list = eligible(type);
        var on = 0;
        for (var i = 0; i < list.length; i++) if (list[i].checked) on++;

        for (var j = 0; j < masters.length; j++) {
          var m = masters[j];

          if (lockIfNoDiscord && !connected) {
            m.checked = false;
            m.indeterminate = false;
            m.disabled = true;
            continue;
          }

          if (list.length === 0) {
            m.checked = false;
            m.indeterminate = false;
            m.disabled = true;
          } else {
            m.disabled = false;
            m.checked = (on === list.length);
            m.indeterminate = (on > 0 && on < list.length);
          }
        }
      }

      apply("reminder", mRem, true);
      apply("autoreg", mAu, false);
      updateReminderAttention();
    }

    window.refreshDashboardMasters = function () { updateMasters(); };

    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      var id = getAttr(row, "data-course-id");
      if (!id) continue;

      ensure(id);

      var rem = row.querySelector("input[data-course='reminder']");
      var au = row.querySelector("input[data-course='autoreg']");

      if (rem && typeof data[id].reminder === "boolean") rem.checked = data[id].reminder;
      if (au && typeof data[id].autoreg === "boolean") au.checked = data[id].autoreg;

      (function (r) {
        var rem2 = r.querySelector("input[data-course='reminder']");
        var au2 = r.querySelector("input[data-course='autoreg']");
        if (rem2) rem2.onchange = function () { syncRow(r); setCourseSettings(data); updateMasters(); };
        if (au2) au2.onchange = function () { syncRow(r); setCourseSettings(data); updateMasters(); };
      })(row);
    }
    setCourseSettings(data);

    var searches = qsa("input[data-action='search']", page);
    function filterCourses(val) {
      var v = String(val || "").toLowerCase();
      for (var i2 = 0; i2 < rows.length; i2++) {
        var txt = String(rows[i2].textContent || "").toLowerCase();
        rows[i2].style.display = (txt.indexOf(v) !== -1) ? "" : "none";
      }
    }
    for (var s = 0; s < searches.length; s++) {
      (function (idx) {
        searches[idx].oninput = function () {
          var val = this.value;
          for (var j = 0; j < searches.length; j++) {
            if (j !== idx) searches[j].value = val;
          }
          filterCourses(val);
        };
      })(s);
    }

    function setAll(type, value) {
      if (type === "reminder" && !isDiscordConnected()) return;

      for (var i3 = 0; i3 < rows.length; i3++) {
        var row3 = rows[i3];
        var id3 = getAttr(row3, "data-course-id");
        var input3 = row3.querySelector("input[data-course='" + type + "']");
        if (!id3 || !input3 || input3.disabled) continue;
        ensure(id3);
        input3.checked = value;
        data[id3][type] = value;
      }
      setCourseSettings(data);
      updateMasters();
    }

    var mastersRem = qsa("input[data-master='reminder']", page);
    for (var mr = 0; mr < mastersRem.length; mr++) {
      mastersRem[mr].onchange = function () { setAll("reminder", !!this.checked); };
    }
    var mastersAu = qsa("input[data-master='autoreg']", page);
    for (var ma = 0; ma < mastersAu.length; ma++) {
      mastersAu[ma].onchange = function () { setAll("autoreg", !!this.checked); };
    }

    if (examAuto) examAuto.onchange = function () {
      saveBool("la_exam_autoreg_all", !!this.checked);
      toast(t("toastSaved"), t("toastSavedBody"));
    };
    if (examRem) examRem.onchange = function () {
      if (!isDiscordConnected()) { this.checked = false; return; }
      saveBool("la_exam_reminder_all", !!this.checked);
      updateMasters();
      toast(t("toastSaved"), t("toastSavedBody"));
    };

    var saveBtns = qsa("[data-action='save-courses']", page);
    for (var sb = 0; sb < saveBtns.length; sb++) {
      saveBtns[sb].onclick = function () {
        setCourseSettings(data);
        toast(t("toastSaved"), t("toastSavedBody"));
      };
    }

    updateMasters();
    applyReminderAvailability();
  }

  var SETTINGS_KEY = "la_settings";

  function getSettings() {
    try { return JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}"); }
    catch (e) { return {}; }
  }
  function setSettings(v) {
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(v)); } catch (e) {}
  }

  function initSettings() {
    var page = document.querySelector("[data-page='settings']");
    if (!page) return;

    ensureDefaultPreferences();

    var s = getSettings();
    var lead = document.getElementById("leadTime");
    var notify = document.getElementById("notifyRegistered");

    if (lead && s.leadTime) lead.value = s.leadTime;
    if (notify && typeof s.notifyRegistered === "boolean") notify.checked = s.notifyRegistered;

    var discordStatus = document.getElementById("discordStatus");
    var discordBtn = document.getElementById("discordChangeBtn");

    window.refreshDiscordUI = function refreshDiscordUI() {
      var cur = "";
      var verified = "";
      try {
        cur = localStorage.getItem("la_discord") || "";
        verified = localStorage.getItem("la_discord_verified") || "";
      } catch (e) { cur = ""; verified = ""; }

      if (discordStatus) {
        if (cur) {
          var vtxt = (verified === "1") ? t("discordVerified") : t("discordNotVerified");
          discordStatus.innerHTML = escapeHtml(t("discordConnectedPrefix")) + " <strong>" +
            escapeHtml(cur) + "</strong> (" + escapeHtml(vtxt) + ")";
        } else {
          discordStatus.textContent = t("discordNotConnected");
        }
      }
      if (discordBtn) discordBtn.textContent = cur ? t("btnChangeDiscord") : t("btnAddDiscord");

      /* NEW: hide Disconnect button unless a Discord username exists */
      var disBox = document.getElementById("discordDisconnectBox");
      if (disBox) {
        if (cur) disBox.classList.remove("hidden");
        else disBox.classList.add("hidden");
      }
    };

    window.refreshDiscordUI();

    if (discordBtn) discordBtn.onclick = function () {
      openModal("discordModal");
      var u = document.getElementById("discordModalUsername");
      if (u) {
        try { u.value = localStorage.getItem("la_discord") || ""; } catch (e) { u.value = ""; }
        if (u.focus) u.focus();
      }
      var hint = document.getElementById("discordModalHint");
      if (hint) hint.textContent = "";
      var code = document.getElementById("discordModalCode");
      if (code) code.value = "";
    };

    bindDiscordVerificationModal("discordModal", {
      user: "discordModalUsername",
      send: "discordModalSend",
      code: "discordModalCode",
      verify: "discordModalVerify",
      close: "discordModalClose",
      hint: "discordModalHint"
    });

    var save = page.querySelector("[data-action='save-settings']");
    if (save) {
      save.onclick = function () {
        var connected = isDiscordConnected();
        var next = {
          leadTime: lead ? lead.value : "3d",
          notifyRegistered: notify ? !!notify.checked : false
        };

        if (!connected) next.notifyRegistered = false;

        setSettings(next);
        toast(t("toastSaved"), t("toastSavedBody"));
      };
    }

    var disc = page.querySelector("[data-action='disconnect-discord']");
    if (disc) {
      disc.onclick = function () {
        var ok = window.confirm(t("disconnectConfirm"));
        if (!ok) return;

        try {
          localStorage.removeItem("la_discord");
          localStorage.removeItem("la_discord_verified");
        } catch (e) {}

        applyReminderAvailability();
        updateDiscordNavWarning();
        if (typeof window.refreshDiscordUI === "function") window.refreshDiscordUI();
        if (typeof window.refreshDashboardMasters === "function") window.refreshDashboardMasters();

        toast(t("toastDiscordDisconnected"), t("toastDiscordDisconnectedBody"));
      };
    }

    var del = page.querySelector("[data-action='delete-account']");
    if (del) {
      del.onclick = function () {
        var ok = window.confirm(t("deleteConfirm"));
        if (!ok) return;

        try {
          sessionStorage.removeItem("la_authed");
          sessionStorage.removeItem("la_email");
        } catch (err) {}

        try {
          localStorage.removeItem(COURSE_KEY);
          localStorage.removeItem(SETTINGS_KEY);
          localStorage.removeItem("la_discord");
          localStorage.removeItem("la_discord_verified");
          localStorage.removeItem("la_exam_autoreg_all");
          localStorage.removeItem("la_exam_reminder_all");
          localStorage.removeItem("la_pending_reminders_enable");
        } catch (e) {}

        applyAuthVisibility();
        initUserHandle();
        window.location.href = "index.html";
      };
    }

    applyReminderAvailability();
  }

  function initYear() {
    var y = String(new Date().getFullYear());
    var nodes = qsa("[data-year]");
    for (var i = 0; i < nodes.length; i++) nodes[i].textContent = y;
  }

  function init() {
    initTheme();
    initLanguage();
    initGlobalSync();
    initHeaderAutoHide();
    updateDiscordLinks();

    initAuthGuard();
    initAuth();
    initDashboard();
    initSettings();

    initYear();
    applyAuthVisibility();
    initUserHandle();
    applyReminderAvailability();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
