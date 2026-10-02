/* =====================================================
   STRINOVA OUTBREAK DECKS
   SUPABASE V1
===================================================== */


/* =====================================================
   SUPABASE CONFIG
===================================================== */

/*
  GANTI 2 VALUE DI BAWAH INI

  SUPABASE_URL:
  Project URL milik kamu.

  SUPABASE_KEY:
  Publishable key / anon key milik kamu.

  JANGAN masukkan service_role key di sini.
*/

const SUPABASE_URL =
  "https://midfyybrkgcnxewqbsbw.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_G77_R1aK453uHwTAUiIcgg_twxaiScv";


/* =====================================================
   CREATE SUPABASE CLIENT
===================================================== */

const {
  createClient
} = window.supabase;

const supabaseClient =
  createClient(
    SUPABASE_URL,
    SUPABASE_KEY
  );


/* =====================================================
   DOM
===================================================== */

const deckGrid =
  document.querySelector("#deckGrid");

const emptyState =
  document.querySelector("#emptyState");

const recordCount =
  document.querySelector("#recordCount");

const searchInput =
  document.querySelector("#search");

const deckTypeInput =
  document.querySelector("#deckType");

const cardPicker =
  document.querySelector("#cardPicker");

const cardSearchInput =
  document.querySelector("#cardSearch");

const selectedCardCount =
  document.querySelector("#selectedCardCount");

const form =
  document.querySelector("#deckForm");

const uploadResult =
  document.querySelector("#uploadResult");

const submitButton =
  document.querySelector("#submitButton");

const cancelEditButton =
  document.querySelector("#cancelEditButton");

const authForm =
  document.querySelector("#authForm");

const authEmailInput =
  document.querySelector("#authEmail");

const authPasswordInput =
  document.querySelector("#authPassword");

const loginButton =
  document.querySelector("#loginButton");

const signupButton =
  document.querySelector("#signupButton");

const logoutButton =
  document.querySelector("#logoutButton");

const authResult =
  document.querySelector("#authResult");

const authLoggedOut =
  document.querySelector("#topbarAuthLoggedOut");

const authLoggedIn =
  document.querySelector("#topbarAuthLoggedIn");

const authUserEmail =
  document.querySelector("#topbarAuthUserEmail");

const uploadLoginNotice =
  document.querySelector("#uploadLoginNotice");

const authModalOverlay =
  document.querySelector("#authModalOverlay");

const openAuthModalButton =
  document.querySelector("#openAuthModalButton");

const closeAuthModalButton =
  document.querySelector("#closeAuthModalButton");

const donateModalOverlay =
  document.querySelector("#donateModalOverlay");

const openDonateModalButton =
  document.querySelector("#openDonateModalButton");

const closeDonateModalButton =
  document.querySelector("#closeDonateModalButton");

const languageSelect =
  document.querySelector("#languageSelect");

const deckDetailsModalOverlay =
  document.querySelector("#deckDetailsModalOverlay");

const deckDetailsModal =
  document.querySelector("#deckDetailsModal");

const closeDeckDetailsButton =
  document.querySelector("#closeDeckDetailsButton");

let deckDetailsReturnFocus = null;


/* =====================================================
   LANGUAGE
===================================================== */

const translations = {
  id: {
    languageLabel: "Bahasa",
    statusConnecting: "Menghubungkan…",
    statusConnected: "Terhubung",
    statusConnectionFailed: "Gagal terhubung",
    authLoginSignup: "Masuk / Daftar",
    logout: "Keluar",
    heroTag: "Database Deck Komunitas Strinova Outbreak",
    heroTitle: "Strinova Outbreak Decks",
    heroCopy: "Temukan sinergi Superstring & Crystalline deck, salin kode deck langsung ke game, atau masuk untuk membagikan konfigurasi buatanmu ke seluruh komunitas.",
    viewAllDecks: "Lihat Semua Deck",
    uploadDeck: "+ Unggah Deck",
    newsUpdateKicker: "PEMBARUAN WEBSITE",
    newsUpdateTitle: "Update 2 Oktober 2026",
    newsUpdateCards: "Menambahkan gambar kartu untuk menampilkan preview isi deck yang diunggah.",
    newsUpdateDesign: "Mengubah tema dan desain website.",
    searchFilter: "Cari & Filter Deck",
    searchLabel: "Cari nama, deskripsi, kategori, author, atau kode deck",
    searchPlaceholder: "Cari deck… misal Burning, DoT, Armor, Superstring…",
    energyType: "Tipe Energi",
    allTypes: "Semua Tipe",
    category: "Kategori",
    categoryHint: "Pilih satu atau lebih kategori.",
    cardSelection: "Kartu Deck",
    cardSelectionHint: "Pilih semua kartu yang digunakan dalam deck ini.",
    cardSearch: "Cari nama kartu…",
    selectedCards: "{count} kartu dipilih",
    deckCards: "Kartu Deck",
    deckDetails: "Detail Deck",
    viewDeck: "Lihat Isi Deck",
    deckTag: "Tag",
    noDeckCards: "Belum ada kartu yang dipilih untuk deck ini.",
    selectAtLeastOneCard: "Pilih minimal satu kartu untuk deck ini.",
    allCategories: "Semua",
    deckList: "Daftar Deck",
    loading: "Memuat…",
    deckNotFound: "Deck tidak ditemukan",
    tryAnotherFilter: "Coba kata kunci atau filter lain.",
    uploadDeckTitle: "Unggah Deck",
    loginToUpload: "Masuk untuk mengunggah",
    loginToUploadCopy: "Masuk atau buat akun di atas untuk mengunggah deck.",
    deckName: "Nama Deck",
    deckNamePlaceholder: "mis. Burning Corrosion",
    authorName: "Nama Author",
    authorPlaceholder: "Nama atau nickname…",
    description: "Deskripsi",
    descriptionPlaceholder: "Jelaskan sinergi taktis dan instruksi penggunaan deck…",
    deckCode: "Kode Deck",
    codePlaceholder: "Tempel kode deck hasil export di sini…",
    codeHint: "Akan tersimpan di database bersama setelah dikirim.",
    cancel: "Batal",
    unofficialDatabase: "Database komunitas tidak resmi",
    websiteCreator: "Kreator:",
    websiteInspiredBy: "Inspirasi:",
    artworkBy: "Aset:",
    footerDescription: "Website ini dibuat untuk komunitas Outbreak dan tidak bermaksud membuat ulang website resmi Strinova. Tema dan desainnya disesuaikan dengan website resmi Strinova. Semua aset yang digunakan dicantumkan beserta nama dan sumbernya.",
    donateMe: "Donasi Saya",
    donateTitle: "Dukung Proyek Ini",
    donateCopy: "Jika project ini membantu, kamu bisa mendukung pengembang melalui Saweria.",
    close: "Tutup",
    email: "Email",
    password: "Kata Sandi",
    passwordPlaceholder: "Minimal 6 karakter",
    login: "Masuk",
    createAccount: "Buat Akun",
    tag: "TAG",
    deckCodeLabel: "Kode Deck:",
    authorLabel: "Author:",
    copyCode: "Salin Kode",
    copied: "Tersalin",
    edit: "Edit",
    delete: "Hapus",
    deckCount: "deck",
    deckCountPlural: "deck",
    loadFailed: "Gagal memuat deck",
    loadFailedCopy: "Periksa URL, key Supabase, dan kebijakan RLS.",
    loginLoading: "Sedang masuk…",
    signupLoading: "Membuat akun…",
    loginFailed: "Gagal masuk.",
    fillCredentials: "Isi email dan kata sandi terlebih dahulu.",
    passwordMin: "Kata sandi minimal 6 karakter.",
    accountCreated: "Akun berhasil dibuat. Kamu sudah masuk.",
    confirmEmail: "Akun berhasil dibuat. Cek email untuk konfirmasi.",
    signupFailed: "Gagal membuat akun.",
    saveChanges: "Simpan Perubahan",
    deleteConfirm: "Hapus deck \"{name}\"? Tindakan ini tidak bisa dibatalkan.",
    deleting: "Menghapus…",
    deleteFailed: "Gagal menghapus deck: {error}",
    copyPrompt: "Salin kode deck ini:",
    notLoggedIn: "Belum masuk",
    loginFirst: "Silakan masuk terlebih dahulu.",
    saving: "Menyimpan perubahan…",
    uploading: "Mengunggah…",
    saved: "Deck berhasil diperbarui",
    uploaded: "Deck berhasil diunggah",
    name: "Nama",
    type: "Tipe",
    saveFailed: "Gagal {action}",
    updateAction: "menyimpan perubahan",
    uploadAction: "mengunggah deck",
    partOf: "Part Of",
    unknownDatabaseError: "Terjadi kesalahan database yang tidak diketahui."
  },
  en: {
    languageLabel: "Language",
    statusConnecting: "Connecting…",
    statusConnected: "Connected",
    statusConnectionFailed: "Connection failed",
    authLoginSignup: "Log in / Sign up",
    logout: "Log out",
    heroTag: "Strinova Outbreak Community Deck Database",
    heroTitle: "Strinova Outbreak Decks",
    heroCopy: "Discover Superstring & Crystalline deck synergies, copy deck codes directly into the game, or sign in to share your build with the community.",
    viewAllDecks: "View All Decks",
    uploadDeck: "+ Upload Deck",
    newsUpdateKicker: "WEBSITE UPDATE",
    newsUpdateTitle: "October 2, 2026 Update",
    newsUpdateCards: "Added card images to preview the contents of uploaded decks.",
    newsUpdateDesign: "Refreshed the website theme and design.",
    searchFilter: "Search & Filter Decks",
    searchLabel: "Search by name, description, category, author, or deck code",
    searchPlaceholder: "Search decks… e.g. Burning, DoT, Armor, Superstring…",
    energyType: "Energy Type",
    allTypes: "All Types",
    category: "Category",
    categoryHint: "Select one or more categories.",
    cardSelection: "Deck Cards",
    cardSelectionHint: "Select all cards used in this deck.",
    cardSearch: "Search card names…",
    selectedCards: "{count} cards selected",
    deckCards: "Deck Cards",
    deckDetails: "Deck Details",
    viewDeck: "View Deck Contents",
    deckTag: "Tag",
    noDeckCards: "No cards have been selected for this deck.",
    selectAtLeastOneCard: "Select at least one card for this deck.",
    allCategories: "All",
    deckList: "Deck List",
    loading: "Loading…",
    deckNotFound: "No decks found",
    tryAnotherFilter: "Try another keyword or filter.",
    uploadDeckTitle: "Upload Deck",
    loginToUpload: "Log in to upload",
    loginToUploadCopy: "Log in or create an account above to upload a deck.",
    deckName: "Deck Name",
    deckNamePlaceholder: "e.g. Burning Corrosion",
    authorName: "Author Name",
    authorPlaceholder: "Name or nickname…",
    description: "Description",
    descriptionPlaceholder: "Explain the deck's tactical synergy and usage instructions…",
    deckCode: "Deck Code",
    codePlaceholder: "Paste the exported deck code here…",
    codeHint: "It will be saved to the shared database after submission.",
    cancel: "Cancel",
    unofficialDatabase: "Unofficial community database",
    websiteCreator: "Created by:",
    websiteInspiredBy: "Inspired by:",
    artworkBy: "Assets:",
    footerDescription: "This website was made for the Outbreak community and is not intended to recreate the official Strinova website. Its theme and design are adapted to align with the official Strinova website. All assets used are credited with their names and sources.",
    donateMe: "Donate Me",
    donateTitle: "Support This Project",
    donateCopy: "If this project helps you, you can support the developer through Saweria.",
    close: "Close",
    email: "Email",
    password: "Password",
    passwordPlaceholder: "Minimum 6 characters",
    login: "Log in",
    createAccount: "Create Account",
    tag: "TAG",
    deckCodeLabel: "Deck Code:",
    authorLabel: "Author:",
    copyCode: "Copy Code",
    copied: "Copied",
    edit: "Edit",
    delete: "Delete",
    deckCount: "deck",
    deckCountPlural: "decks",
    loadFailed: "Failed to load decks",
    loadFailedCopy: "Check the Supabase URL, key, and RLS policies.",
    loginLoading: "Logging in…",
    signupLoading: "Creating account…",
    loginFailed: "Log in failed.",
    fillCredentials: "Enter your email and password first.",
    passwordMin: "Password must be at least 6 characters.",
    accountCreated: "Account created. You are now logged in.",
    confirmEmail: "Account created. Check your email to confirm it.",
    signupFailed: "Sign up failed.",
    saveChanges: "Save Changes",
    deleteConfirm: "Delete deck \"{name}\"? This action cannot be undone.",
    deleting: "Deleting…",
    deleteFailed: "Failed to delete deck: {error}",
    copyPrompt: "Copy this deck code:",
    notLoggedIn: "Not logged in",
    loginFirst: "Please log in first.",
    saving: "Saving changes…",
    uploading: "Uploading…",
    saved: "Deck updated successfully",
    uploaded: "Deck uploaded successfully",
    name: "Name",
    type: "Type",
    saveFailed: "Failed to {action}",
    updateAction: "save changes",
    uploadAction: "upload the deck",
    partOf: "Part Of",
    unknownDatabaseError: "An unknown database error occurred."
  }
};

let currentLanguage =
  localStorage.getItem("outbreakDeckLanguage") || "id";

function t(key, replacements = {}) {
  let text = translations[currentLanguage][key] || translations.id[key] || key;

  Object.entries(replacements).forEach(([name, value]) => {
    text = text.replace(`{${name}}`, value);
  });

  return text;
}

function formatCardName(name) {
  return String(name).replace(/\b[a-z]/g, letter => letter.toUpperCase());
}

function cardImagePath(type, name) {
  return `cards/${type.toLowerCase()}/${encodeURIComponent(name)}.png`;
}

function renderCardPicker(selectedNames = Array.from(selectedCardNames)) {
  const cards = window.DECK_CARD_CATALOG[deckTypeInput.value] || [];
  selectedCardNames = new Set(selectedNames);
  const query = cardSearchInput.value.trim().toLowerCase();
  const visibleCards = cards.filter(name => name.includes(query));

  cardPicker.replaceChildren();

  visibleCards.forEach(name => {
    const label = document.createElement("label");
    label.className = "card-option";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "card_names";
    checkbox.value = name;
    checkbox.checked = selectedCardNames.has(name);

    const image = document.createElement("img");
    image.src = cardImagePath(deckTypeInput.value, name);
    image.alt = "";
    image.loading = "lazy";

    const caption = document.createElement("span");
    caption.textContent = formatCardName(name);

    label.classList.toggle("is-selected", checkbox.checked);
    label.append(checkbox, image, caption);
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        selectedCardNames.add(name);
      } else {
        selectedCardNames.delete(name);
      }
      label.classList.toggle("is-selected", checkbox.checked);
      updateSelectedCardCount();
    });
    cardPicker.append(label);
  });

  updateSelectedCardCount();
}

function updateSelectedCardCount() {
  selectedCardCount.textContent = t("selectedCards", {
    count: selectedCardNames.size
  });
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  languageSelect.value = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach(element => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });

  localStorage.setItem("outbreakDeckLanguage", currentLanguage);
  updateSelectedCardCount();
  renderDecks();
}

languageSelect.addEventListener("change", event => {
  currentLanguage = event.target.value;
  applyLanguage();
});

/* =====================================================
   STATE
===================================================== */

let decks = [];

let activeType = "all";

let activeCategory = "all";

let selectedCardNames = new Set();

/*
  ID deck yang sedang di-edit.
  null = mode upload baru.
*/
let editingId = null;

/*
  User yang sedang login
  (object dari Supabase Auth,
  null kalau belum login).
*/
let currentUser = null;

applyLanguage();


/* =====================================================
   DATABASE CONNECTION TEST
===================================================== */

async function checkConnection() {

  try {

    const {
      error
    } = await supabaseClient
      .from("decks")
      .select("id")
      .limit(1);


    if (error) {
      throw error;
    }


  } catch (error) {

    console.error(
      "Supabase connection error:",
      error
    );

  }

}


/* =====================================================
   AUTH — INIT
===================================================== */

async function initAuth() {

  const {
    data: {
      session
    }
  } = await supabaseClient.auth.getSession();


  currentUser =
    session?.user || null;


  updateAuthUI();


  /*
    Dengarkan perubahan status
    login (login/logout/refresh
    token) secara real-time.
  */

  supabaseClient.auth.onAuthStateChange(
    (event, session) => {

      currentUser =
        session?.user || null;

      updateAuthUI();

      renderDecks();

    }
  );

}


/* =====================================================
   AUTH — UPDATE UI
===================================================== */

function updateAuthUI() {

  if (currentUser) {

    authLoggedOut.classList.add(
      "hidden"
    );

    authLoggedIn.classList.remove(
      "hidden"
    );

    authUserEmail.textContent =
      currentUser.email;


    form.classList.remove(
      "hidden"
    );

    uploadLoginNotice.classList.add(
      "hidden"
    );


    closeAuthModal();

  } else {

    authLoggedOut.classList.remove(
      "hidden"
    );

    authLoggedIn.classList.add(
      "hidden"
    );


    form.classList.add(
      "hidden"
    );

    uploadLoginNotice.classList.remove(
      "hidden"
    );


    /*
      Kalau lagi edit terus
      logout, batalkan mode edit.
    */

    if (editingId) {

      cancelEdit();

    }

  }

}


/* =====================================================
   AUTH MODAL — OPEN / CLOSE
===================================================== */

function openAuthModal() {

  authModalOverlay.classList.remove(
    "hidden"
  );

  authEmailInput.focus();

}

function closeAuthModal() {

  authModalOverlay.classList.add(
    "hidden"
  );

}

openAuthModalButton.addEventListener(
  "click",
  openAuthModal
);

closeAuthModalButton.addEventListener(
  "click",
  closeAuthModal
);

function openDonateModal() {
  donateModalOverlay.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = t(element.dataset.i18n);
  });

  donateModalOverlay.querySelectorAll("[data-i18n-aria-label]").forEach(element => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });

  donateModalOverlay.classList.remove("hidden");
}

function closeDonateModal() {
  donateModalOverlay.classList.add("hidden");
}

function openDeckDetails(deck, trigger) {
  const typeClass = deck.type.toLowerCase();
  const typeBadge = document.querySelector("#deckDetailsType");
  const cardsContainer = document.querySelector("#deckDetailsCards");

  document.querySelector("#deckDetailsName").textContent = deck.name;
  typeBadge.textContent = deck.type;
  typeBadge.className = `type-badge ${typeClass}`;
  document.querySelector("#deckDetailsCategory").textContent = deck.category || "-";
  document.querySelector("#deckDetailsDescription").textContent = deck.description || "-";
  document.querySelector("#deckDetailsAuthor").textContent = deck.author || "-";
  cardsContainer.replaceChildren();

  const selectedCards = Array.isArray(deck.card_names) ? deck.card_names : [];
  if (!selectedCards.length) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "deck-details-empty";
    emptyMessage.textContent = t("noDeckCards");
    cardsContainer.append(emptyMessage);
  } else {
    selectedCards.forEach(name => {
      const item = document.createElement("figure");
      item.className = "deck-details-card";

      const image = document.createElement("img");
      image.src = cardImagePath(deck.type, name);
      image.alt = formatCardName(name);
      image.loading = "lazy";

      const caption = document.createElement("figcaption");
      caption.textContent = formatCardName(name);

      item.append(image, caption);
      cardsContainer.append(item);
    });
  }

  deckDetailsReturnFocus = trigger;
  deckDetailsModalOverlay.classList.remove("hidden");
  closeDeckDetailsButton.focus();
}

function closeDeckDetails() {
  deckDetailsModalOverlay.classList.add("hidden");
  deckDetailsReturnFocus?.focus();
  deckDetailsReturnFocus = null;
}

openDonateModalButton.addEventListener(
  "click",
  openDonateModal
);

closeDonateModalButton.addEventListener(
  "click",
  closeDonateModal
);

closeDeckDetailsButton.addEventListener("click", closeDeckDetails);

deckDetailsModalOverlay.addEventListener("click", event => {
  if (event.target === deckDetailsModalOverlay) {
    closeDeckDetails();
  }
});

donateModalOverlay.addEventListener(
  "click",
  event => {
    if (event.target === donateModalOverlay) {
      closeDonateModal();
    }
  }
);

/*
  Klik di luar kotak modal
  (area overlay gelap) menutup
  modal.
*/

authModalOverlay.addEventListener(
  "click",
  event => {

    if (event.target === authModalOverlay) {

      closeAuthModal();

    }

  }
);

/*
  Tombol Escape menutup modal.
*/

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape" &&
      !authModalOverlay.classList.contains("hidden")
    ) {

      closeAuthModal();

    }

    if (
      event.key === "Escape" &&
      !donateModalOverlay.classList.contains("hidden")
    ) {

      closeDonateModal();

    }

    if (
      event.key === "Escape" &&
      !deckDetailsModalOverlay.classList.contains("hidden")
    ) {
      closeDeckDetails();
    }

  }
);


/* =====================================================
   AUTH — RESULT MESSAGE
===================================================== */

function showAuthResult(
  message,
  isError
) {

  authResult.textContent =
    message;

  authResult.classList.remove(
    "hidden"
  );

  authResult.style.color =
    isError
      ? "var(--danger)"
      : "var(--success)";

  authResult.style.borderColor =
    isError
      ? "var(--danger-border)"
      : "var(--success-border)";

  authResult.style.background =
    isError
      ? "var(--danger-tint)"
      : "var(--success-tint)";

}


/* =====================================================
   AUTH — LOGIN
===================================================== */

authForm.addEventListener(
  "submit",
  async event => {

    event.preventDefault();


    const email =
      authEmailInput.value.trim();

    const password =
      authPasswordInput.value;


    loginButton.disabled = true;

    signupButton.disabled = true;

    loginButton.textContent =
      t("loginLoading");


    try {

      const {
        error
      } = await supabaseClient.auth

        .signInWithPassword({
          email,
          password
        });


      if (error) {
        throw error;
      }


      authForm.reset();

      authResult.classList.add(
        "hidden"
      );


    } catch (error) {

      showAuthResult(
        error.message ||
          t("loginFailed"),
        true
      );

    } finally {

      loginButton.disabled = false;

      signupButton.disabled = false;

      loginButton.textContent =
        "Masuk";

    }

  }
);


/* =====================================================
   AUTH — SIGN UP
===================================================== */

signupButton.addEventListener(
  "click",
  async () => {

    const email =
      authEmailInput.value.trim();

    const password =
      authPasswordInput.value;


    if (!email || !password) {

      showAuthResult(
        t("fillCredentials"),
        true
      );

      return;

    }


    if (password.length < 6) {

      showAuthResult(
        t("passwordMin"),
        true
      );

      return;

    }


    loginButton.disabled = true;

    signupButton.disabled = true;

    signupButton.textContent =
      t("signupLoading");


    try {

      const {
        data,
        error
      } = await supabaseClient.auth

        .signUp({
          email,
          password
        });


      if (error) {
        throw error;
      }


      if (data.session) {

        showAuthResult(
          t("accountCreated"),
          false
        );

      } else {

        showAuthResult(
          t("confirmEmail"),
          false
        );

      }


      authForm.reset();


    } catch (error) {

      showAuthResult(
        error.message ||
          t("signupFailed"),
        true
      );

    } finally {

      loginButton.disabled = false;

      signupButton.disabled = false;

      signupButton.textContent =
        "Buat akun";

    }

  }
);


/* =====================================================
   AUTH — LOGOUT
===================================================== */

logoutButton.addEventListener(
  "click",
  async () => {

    await supabaseClient.auth.signOut();

  }
);


/* =====================================================
   LOAD DECKS
===================================================== */

async function loadDecks() {

    recordCount.textContent =
      t("loading");


  const {
    data,
    error
  } = await supabaseClient
    .from("decks")
    .select(`
      id,
      name,
      author,
      type,
      card_names,
      category,
      description,
      code,
      user_id,
      created_at
    `)
    .order(
      "created_at",
      {
        ascending: false
      }
    );


  if (error) {

    console.error(
      "Load decks error:",
      error
    );

    recordCount.textContent =
      t("statusConnectionFailed");

    deckGrid.innerHTML = "";

    emptyState.classList.remove(
      "hidden"
    );

    emptyState.innerHTML = `
        <h3>${t("loadFailed")}</h3>

        <p>${t("loadFailedCopy")}</p>
    `;

    return;
  }


  decks = data || [];

  renderDecks();

}


/* =====================================================
   FILTER DATA
===================================================== */

function getFilteredDecks() {

  const query =
    searchInput.value
      .trim()
      .toLowerCase();


  return decks.filter(deck => {

    /*
      TYPE FILTER
    */

    if (
      activeType !== "all" &&
      deck.type !== activeType
    ) {

      return false;

    }


    /*
      CATEGORY FILTER
    */

    const deckCategories = String(deck.category || "")
      .split(",")
      .map(category => category.trim());

    if (
      activeCategory !== "all" &&
      !deckCategories.includes(activeCategory)
    ) {

      return false;

    }


    /*
      SEARCH
    */

    if (!query) {

      return true;

    }


    const searchableText = [

      deck.name,

      deck.description,

      deck.author,

      deck.type,

      deck.category,

      deck.code

    ]
      .join(" ")
      .toLowerCase();


    return searchableText.includes(
      query
    );

  });

}


/* =====================================================
   RENDER DECKS
===================================================== */

function renderDecks() {

  const results =
    getFilteredDecks();


  deckGrid.innerHTML = "";


  recordCount.textContent =
    `${results.length} ${results.length === 1 ? t("deckCount") : t("deckCountPlural")}`;


  emptyState.classList.toggle(
    "hidden",
    results.length !== 0
  );


  results.forEach(deck => {

    const template =
      document.querySelector(
        "#deckTemplate"
      );


    const card =
      template.content.cloneNode(
        true
      );

    card.querySelectorAll("[data-i18n]").forEach(element => {
      element.textContent = t(element.dataset.i18n);
    });


    /*
      DATABASE ID
    */

    card.querySelector(
      ".record-id"
    ).textContent =
      `#OUT-${String(deck.id).padStart(4, "0")}`;


    /*
      TYPE
      (warna badge & aksen kartu
      mengikuti jenis deck)
    */

    const typeClass =
      deck.type.toLowerCase();

    card.querySelector(
      ".deck-card"
    ).classList.add(
      typeClass
    );

    const typeBadge =
      card.querySelector(
        ".type-badge"
      );

    typeBadge.textContent =
      deck.type;

    typeBadge.classList.add(
      typeClass
    );


    /*
      NAME
    */

    card.querySelector(
      ".deck-name"
    ).textContent =
      deck.name;


    /*
      CATEGORY
    */

    card.querySelector(
      ".category"
    ).textContent =
      deck.category;


    /*
      DESCRIPTION
    */

    card.querySelector(
      ".description"
    ).textContent =
      deck.description;


    card.querySelector(".view-deck-btn").addEventListener("click", event => {
      openDeckDetails(deck, event.currentTarget);
    });


    /*
      CODE
    */

    card.querySelector(
      "code"
    ).textContent =
      deck.code;


    /*
      AUTHOR
    */

    card.querySelector(
      ".author"
    ).textContent =
      deck.author;


    /*
      COPY BUTTON
    */

    const copyButton =
      card.querySelector(
        ".copy-btn"
      );


    copyButton.addEventListener(
      "click",
      () => {

        copyDeck(
          deck.code,
          copyButton
        );

      }
    );


    /*
      OWNER ACTIONS
      (EDIT / DELETE)
    */

    const ownerActions =
      card.querySelector(
        ".owner-actions"
      );


    if (
      currentUser &&
      deck.user_id === currentUser.id
    ) {

      ownerActions.classList.remove(
        "hidden"
      );


      const editButton =
        card.querySelector(
          ".edit-btn"
        );

      const deleteButton =
        card.querySelector(
          ".delete-btn"
        );


      editButton.addEventListener(
        "click",
        () => {

          startEditDeck(deck);

        }
      );


      deleteButton.addEventListener(
        "click",
        () => {

          deleteDeck(
            deck,
            deleteButton
          );

        }
      );

    }


    deckGrid.appendChild(
      card
    );

  });

}


/* =====================================================
   START EDIT DECK
===================================================== */

function startEditDeck(deck) {

  editingId = deck.id;


  form.querySelector("#deckName").value =
    deck.name;

  form.querySelector("#author").value =
    deck.author;

  form.querySelector("#deckType").value =
    deck.type;

  cardSearchInput.value = "";
  renderCardPicker(Array.isArray(deck.card_names) ? deck.card_names : []);

  const selectedCategories = String(deck.category || "")
    .split(",")
    .map(category => category.trim());

  Array.from(form.querySelector("#category").options).forEach(option => {
    option.selected = selectedCategories.includes(option.value);
  });

  form.querySelector("#description").value =
    deck.description;

  form.querySelector("#deckCode").value =
    deck.code;


  submitButton.textContent =
          t("saveChanges");

  cancelEditButton.classList.remove(
    "hidden"
  );


  uploadResult.classList.add(
    "hidden"
  );


  document
    .querySelector("#upload")
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* =====================================================
   CANCEL EDIT
===================================================== */

function cancelEdit() {

  editingId = null;

  form.reset();

  submitButton.textContent =
    t("uploadDeck");

  cancelEditButton.classList.add(
    "hidden"
  );

  uploadResult.classList.add(
    "hidden"
  );

}


/* =====================================================
   DELETE DECK
===================================================== */

async function deleteDeck(
  deck,
  button
) {

  const confirmed =
    window.confirm(
      t("deleteConfirm", { name: deck.name })
    );


  if (!confirmed) {
    return;
  }


  const oldText =
    button.textContent;

  button.disabled = true;

  button.textContent =
    t("deleting");


  try {

    const {
      error
    } = await supabaseClient

      .from("decks")

      .delete()

      .eq(
        "id",
        deck.id
      );


    if (error) {
      throw error;
    }


    /*
      Kalau deck yang sedang
      di-edit dihapus, batalkan
      mode edit.
    */

    if (editingId === deck.id) {

      cancelEdit();

    }


    await loadDecks();


  } catch (error) {

    console.error(
      "Delete error:",
      error
    );

    alert(
      t("deleteFailed", {
        error: error.message || t("unknownDatabaseError")
      })
    );

    button.disabled = false;

    button.textContent =
      oldText;

  }

}


/* =====================================================
   COPY DECK
===================================================== */

async function copyDeck(
  code,
  button
) {

  try {

    await navigator.clipboard
      .writeText(code);


    const oldText =
      button.textContent;


    button.textContent =
      t("copied");


    setTimeout(() => {

      button.textContent =
        oldText;

    }, 1300);


  } catch (error) {

    /*
      Fallback untuk browser
      yang tidak mengizinkan
      Clipboard API.
    */

    window.prompt(
      t("copyPrompt"),
      code
    );

  }

}


/* =====================================================
   FILTER BUTTON HELPER
===================================================== */

function setActiveFilter(
  group,
  clicked
) {

  group
    .querySelectorAll(
      ".filter"
    )
    .forEach(button => {

      button.classList.remove(
        "active"
      );

    });


  clicked.classList.add(
    "active"
  );

}


/* =====================================================
   TYPE FILTER
===================================================== */

document
  .querySelector(
    "#typeFilters"
  )
  .addEventListener(
    "click",
    event => {

      const button =
        event.target.closest(
          ".filter"
        );


      if (!button) {
        return;
      }


      activeType =
        button.dataset.type;


      setActiveFilter(
        event.currentTarget,
        button
      );


      renderDecks();

    }
  );


/* =====================================================
   CATEGORY FILTER
===================================================== */

document
  .querySelector(
    "#categoryFilters"
  )
  .addEventListener(
    "click",
    event => {

      const button =
        event.target.closest(
          ".filter"
        );


      if (!button) {
        return;
      }


      activeCategory =
        button.dataset.category;


      setActiveFilter(
        event.currentTarget,
        button
      );


      renderDecks();

    }
  );


/* =====================================================
   SEARCH
===================================================== */

searchInput.addEventListener(
  "input",
  renderDecks
);


deckTypeInput.addEventListener("change", () => {
  selectedCardNames.clear();
  renderCardPicker([]);
});

cardSearchInput.addEventListener("input", () => {
  renderCardPicker();
});

renderCardPicker();


/* =====================================================
   UPLOAD DECK
===================================================== */

form.addEventListener(
  "submit",
  async event => {

    event.preventDefault();


    if (!currentUser) {

      uploadResult.innerHTML = `
        <strong>
          ${t("notLoggedIn")}
        </strong>
        <br />
        ${t("loginFirst")}
      `;

      uploadResult.classList.add(
        "is-error"
      );

      uploadResult.classList.remove(
        "hidden"
      );

      return;

    }


    /*
      Ambil data form
    */

    const formData =
      new FormData(form);


    if (!selectedCardNames.size) {
      uploadResult.textContent = t("selectAtLeastOneCard");
      uploadResult.classList.add("is-error");
      uploadResult.classList.remove("hidden");
      return;
    }


    const deckPayload = {

      name:
        formData
          .get("name")
          .trim(),

      author:
        formData
          .get("author")
          .trim(),

      type:
        formData
          .get("type"),

      card_names:
        Array.from(selectedCardNames),

      category:
        formData
          .getAll("category")
          .join(", "),

      description:
        formData
          .get("description")
          .trim(),

      code:
        formData
          .get("code")
          .trim()

    };


    const isEditing =
      Boolean(editingId);


    if (!isEditing) {

      /*
        user_id dipakai RLS
        policy untuk memastikan
        hanya pemilik yang bisa
        edit/hapus deck ini.
      */

      deckPayload.user_id =
        currentUser.id;

    }


    /*
      Disable button
    */

    submitButton.disabled =
      true;

    submitButton.textContent =
      isEditing
        ? t("saving")
        : t("uploading");


    uploadResult.classList.add(
      "hidden"
    );

    uploadResult.classList.remove(
      "is-error"
    );


    try {

      let data;
      let error;


      if (isEditing) {

        /*
          UPDATE DI SUPABASE
        */

        ({
          data,
          error
        } = await supabaseClient

          .from("decks")

          .update(
            deckPayload
          )

          .eq(
            "id",
            editingId
          )

          .select()
          .single());

      } else {

        /*
          INSERT KE SUPABASE
        */

        ({
          data,
          error
        } = await supabaseClient

          .from("decks")

          .insert(
            deckPayload
          )

          .select()
          .single());

      }


      /*
        ERROR
      */

      if (error) {

        throw error;

      }


      /*
        SUCCESS
      */

      uploadResult.innerHTML = `

        <strong>
          ${isEditing ? t("saved") : t("uploaded")}
        </strong>

        <br />

        ID
        #OUT-${String(data.id).padStart(4, "0")}

        <br />

        ${t("name")}
        ${escapeHTML(data.name)}

        <br />

        ${t("type")}
        ${escapeHTML(data.type)}

        <br />

        Kategori
        ${escapeHTML(data.category)}

      `;


      uploadResult.classList.remove(
        "hidden"
      );


      /*
        Keluar dari mode edit
      */

      editingId = null;

      cancelEditButton.classList.add(
        "hidden"
      );


      /*
        Reset form
      */

      form.reset();


      /*
        Ambil ulang data
        dari database
      */

      await loadDecks();


      /*
        Scroll ke deck
      */

      document
        .querySelector("#decks")
        .scrollIntoView({
          behavior: "smooth"
        });


    } catch (error) {

      console.error(
        "Save error:",
        error
      );


      uploadResult.innerHTML = `

        <strong>
          ${t("saveFailed", {
            action: isEditing ? t("updateAction") : t("uploadAction")
          })}
        </strong>

        <br />

        ${escapeHTML(
          error.message ||
          t("unknownDatabaseError")
        )}

      `;


      uploadResult.classList.add(
        "is-error"
      );

      uploadResult.classList.remove(
        "hidden"
      );

    } finally {

      submitButton.disabled =
        false;

      submitButton.textContent =
        editingId
          ? t("saveChanges")
          : t("uploadDeck");

    }

  }
);


/* =====================================================
   CANCEL EDIT BUTTON
===================================================== */

cancelEditButton.addEventListener(
  "click",
  cancelEdit
);

form.addEventListener("reset", () => {
  cardSearchInput.value = "";
  selectedCardNames.clear();
  window.setTimeout(() => renderCardPicker(), 0);
});


/* =====================================================
   HTML ESCAPE
===================================================== */

function escapeHTML(
  value
) {

  return String(value)

    .replaceAll(
      "&",
      "&amp;"
    )

    .replaceAll(
      "<",
      "&lt;"
    )

    .replaceAll(
      ">",
      "&gt;"
    )

    .replaceAll(
      '"',
      "&quot;"
    )

    .replaceAll(
      "'",
      "&#039;"
    );

}


/* =====================================================
   INITIALIZE
===================================================== */

async function initialize() {

  openDonateModal();

  await checkConnection();

  await initAuth();

  await loadDecks();

}


initialize();