


const SUPABASE_URL =
  "https://midfyybrkgcnxewqbsbw.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_G77_R1aK453uHwTAUiIcgg_twxaiScv";



const {
  createClient
} = window.supabase;

const supabaseClient =
  createClient(
    SUPABASE_URL,
    SUPABASE_KEY
  );



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

const mapPicker =
  document.querySelector("#mapPicker");

const agentPicker =
  document.querySelector("#agentPicker");

const cardSearchInput =
  document.querySelector("#cardSearch");

const cardRarityFilters =
  document.querySelector("#cardRarityFilters");

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

const deckDetailsModalOverlay =
  document.querySelector("#deckDetailsModalOverlay");

const deckDetailsModal =
  document.querySelector("#deckDetailsModal");

const closeDeckDetailsButton =
  document.querySelector("#closeDeckDetailsButton");

let deckDetailsReturnFocus = null;



const translations = {
  en: {
    statusConnecting: "Connecting…",
    statusConnected: "Connected",
    statusConnectionFailed: "Connection failed",
    authLoginSignup: "Log in / Sign up",
    authSignupInstruction: "Create an account if you don't have one yet.",
    authLoginInstruction: "Log in if you've already created an account.",
    logout: "Log out",
    heroTag: "Strinova Outbreak Community Deck Database",
    heroTitle: "Strinova Outbreak Decks",
    heroCopy: "Discover Superstring & Crystalline deck synergies, copy deck codes directly into the game, or sign in to share your build with the community.",
    viewAllDecks: "View All Decks",
    uploadDeck: "+ Upload Deck",
    newsUpdateKicker: "WEBSITE UPDATE",
    newsUpdateTitle: "October 2, 2026 Update",
    newsUpdateTitle2: "October 17, 2026 Update",
    newsUpdateCards: "Added card images to preview the contents of uploaded decks.",
    newsUpdateDesign: "Refreshed the website theme and design.",
    newsUpdateLogin: "Improved login verification.",
    newsUpdateRemoved: "Removed Indonesian language.",
    newsUpdateCardRarity: "Updated card rarity colors.",
    newsUpdateCardOrder: "Reordered card display.",
    newsUpdateRarity: "Updated card rarity filtering.",
    newsUpdateCategories: "Category filtering updated",
    searchFilter: "Search & Filter Decks",
    searchLabel: "Search by name, description, category, author, or deck code",
    searchPlaceholder: "Search decks… e.g. Burning, DoT, Armor, Superstring…",
    energyType: "Energy Type",
    allTypes: "All Types",
    filterByUploader: "Uploaded By",
    allDecks: "All Decks",
    myUploads: "My Uploads",
    filterByMap: "Map",
    filterByCharacter: "Character",
    allCharacters: "All Characters",
    category: "Category",
    categoryHint: "Select one or more categories.",
    selectAtLeastOneCategory: "Select at least one category for this deck.",
    cardSelection: "Deck Cards",
    cardSelectionHint: "Select all cards used in this deck.",
    mapSelection: "Maps",
    mapSelectionHint: "Choose a map that suits your deck. You can select multiple maps if your deck is versatile.",
    agentSelection: "Characters",
    agentSelectionHint: "Select one or more characters for this deck.",
    cardSearch: "Search card names…",
    allRarities: "All rarities",
    epic: "Epic",
    rare: "Rare",
    refined: "Refined",
    selectedCards: "{count} cards selected",
    deckCards: "Deck Cards",
    deckMaps: "Maps",
    deckAgents: "Characters",
    deckDetails: "Deck Details",
    viewDeck: "View Deck Contents",
    deckTag: "Tag",
    noDeckCards: "No cards have been selected for this deck.",
    noDeckMaps: "No maps have been selected for this deck.",
    noDeckAgents: "No characters have been selected for this deck.",
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
    donateCopy: "If this project helps you, you can support the developer through Ko-fi.",
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
    accountCreated: "Account created successfully. Please log in.",
    confirmEmail: "Account successfully created. Please check your email to confirm, if you don't see it, check your spam folder, then log in.",
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
    unknownDatabaseError: "An unknown database error occurred.",
    newsUpdateAgents: "Added Agents and Maps",
    newsUpdateCategory: "Category updated",
    newsUpdateFiltering: "Update filtering options",
    newsAddCategory: "Added new category",
    newsUpdateTitle3: "October 25, 2026 Update",
  }
};

function t(key, replacements = {}) {
  let text = translations.en[key] || key;

  Object.entries(replacements).forEach(([name, value]) => {
    text = text.replace(`{${name}}`, value);
  });

  return text;
}

const defaultCardsByType = {
  Superstring: new Set([
    "resurgence",
    "defense first",
    "assailant",
    "relentless assault",
    "berserker",
    "thunderstrike",
    "jump power",
    "movement speed",
    "max hp",
    "max armor",
    "bouncy shot",
    "hit and run",
    "sustained vitality",
    "full armor",
    "rapid reload"
  ]),
  Crystalline: new Set([
    "forbidden claws",
    "comeback",
    "claws",
    "unarmord claws",
    "stattering leap",
    "rusher",
    "light of life",
    "enhanced armor",
    "leaper",
    "sprinter",
    "bloodrage",
    "armor devourer"
  ])
};

const cardDisplayNameOverrides = {
  "assasin": "Assassin",
  "crystal plauge": "Crystal Plague",
  "drumbstick combo": "Drumstick Combo",
  "enchanted skill": "Enchanted Shell",
  "enhanced granade": "Enhanced Grenade",
  "enhanced slow granade": "Enhanced Slow Grenade",
  "lone suvivor": "Lone Survivor",
  "repture": "Rupture",
  "stattering leap": "Shattering Leap",
  "sunbrust armor": "Sunburst Armor",
  "unarmord claws": "Unarmored Claws",
  "ultimate ready!": "Ultimate Ready!",
  "wariors solitude": "Warriors Solitude"
};

const outbreakMaps = [
  { value: "abyssal_frontier", name: "Abyssal Frontier" },
  { value: "crimson_wasteland", name: "Crimson Wasteland" },
  { value: "euler_night_harbor", name: "Euler Night Harbor" },
  { value: "ghannak", name: "Ghannak" },
  { value: "loch_district", name: "Loch District" },
  { value: "polar_research_institute", name: "Polar Research Institute" },
  { value: "all_map", name: "All Map", image: "maps/all_map.png" }
];

const deckAgents = [
  { name: "Audrey", type: "Superstring", image: "agents/superstring/urbino/Audrey_Profile.png" },
  { name: "Bai_Mo", type: "Superstring", image: "agents/superstring/urbino/Bai_Mo_Profile.png" },
  { name: "Celestia", type: "Superstring", image: "agents/superstring/urbino/Celestia_Profile.png" },
  { name: "Cielle", type: "Superstring", image: "agents/superstring/urbino/Cielle_Profile.png" },
  { name: "Chiyo", type: "Superstring", image: "agents/superstring/p.u.s/Chiyo_Profile.png" },
  { name: "Eika", type: "Superstring", image: "agents/superstring/the scissors/Eika_Profile.png" },
  { name: "Flavia", type: "Superstring", image: "agents/superstring/p.u.s/Flavia_Profile.png" },
  { name: "Fragrans", type: "Superstring", image: "agents/superstring/the scissors/Fragrans_Profile.png" },
  { name: "Fuchsia", type: "Superstring", image: "agents/superstring/urbino/Fuchsia_Profile.png" },
  { name: "Galatea", type: "Superstring", image: "agents/superstring/urbino/Galatea_Profile.png" },
  { name: "Kanami", type: "Superstring", image: "agents/superstring/the scissors/Kanami_Profile.png" },
  { name: "Kokona", type: "Superstring", image: "agents/superstring/p.u.s/Kokona_Profile.png" },
  { name: "Lawine", type: "Superstring", image: "agents/superstring/the scissors/Lawine_Profile.png" },
  { name: "Leona", type: "Superstring", image: "agents/superstring/p.u.s/Leona_Profile.png" },
  { name: "Maddelena", type: "Superstring", image: "agents/superstring/urbino/Maddelena_Profile.png" },
  { name: "Mara", type: "Superstring", image: "agents/superstring/the scissors/Mara_Profile.png" },
  { name: "Meredith", type: "Superstring", image: "agents/superstring/the scissors/Meredith_Profile.png" },
  { name: "Michele", type: "Superstring", image: "agents/superstring/p.u.s/Michele_Profile.png" },
  { name: "Ming", type: "Superstring", image: "agents/superstring/the scissors/Ming_Profile.png" },
  { name: "Nobunaga", type: "Superstring", image: "agents/superstring/p.u.s/Nobunaga_Profile.png" },
  { name: "Nora", type: "Superstring", image: "agents/superstring/the scissors/Nora_Profile.png" },
  { name: "Reiichi", type: "Superstring", image: "agents/superstring/the scissors/Reiichi_Profile.png" },
  { name: "Yugiri", type: "Superstring", image: "agents/superstring/p.u.s/Yugiri_Profile.png" },
  { name: "Yvette", type: "Superstring", image: "agents/superstring/p.u.s/Yvette_Profile.png" },
  { name: "Blade_Fiend", type: "Crystalline", image: "agents/crystalline/Blade_Fiend_Profile.png" },
  { name: "Blast_Fiend", type: "Crystalline", image: "agents/crystalline/Blast_Fiend_Profile.png" },
  { name: "Bloodthorn_Empress", type: "Crystalline", image: "agents/crystalline/Bloodthorn_Empress_Profile.png" },
  { name: "Darkthorn_Empress", type: "Crystalline", image: "agents/crystalline/Darkthorn_Empress_Profile.png" },
  { name: "Lilith", type: "Crystalline", image: "agents/crystalline/Lilith_Profile.png" }
];

function formatCardName(name) {
  if (cardDisplayNameOverrides[name]) {
    return cardDisplayNameOverrides[name];
  }

  return String(name).replace(/\b[a-z]/g, letter => letter.toUpperCase());
}

function isDefaultCard(type, name) {
  return defaultCardsByType[type]?.has(name) || false;
}

function cardImagePath(type, name) {
  return `cards/${type.toLowerCase()}/${encodeURIComponent(name)}.png`;
}

function orderCardNames(type, names) {
  const remainingNames = new Set(names);
  const orderedNames = (window.DECK_CARD_CATALOG[type] || [])
    .filter(name => remainingNames.delete(name));

  return [...orderedNames, ...remainingNames];
}

function renderCardPicker(selectedNames = Array.from(selectedCardNames)) {
  const type = deckTypeInput.value;
  const cards = window.DECK_CARD_CATALOG[type] || [];
  const defaultCards = defaultCardsByType[type] || new Set();
  selectedCardNames = new Set([...selectedNames, ...defaultCards]);
  const query = cardSearchInput.value.trim().toLowerCase();
  const visibleCards = cards.filter(name => {
    const matchesSearch = name.includes(query);
    const matchesRarity = activeCardRarity === "all"
      || window.DECK_CARD_RARITY[type]?.[name] === activeCardRarity;

    return matchesSearch && matchesRarity;
  });

  cardPicker.replaceChildren();

  visibleCards.forEach(name => {
    const label = document.createElement("label");
    label.className = "card-option";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "card_names";
    checkbox.value = name;
    checkbox.checked = selectedCardNames.has(name);
    checkbox.disabled = isDefaultCard(type, name);

    const artwork = document.createElement("div");
    artwork.className = "card-artwork";

    const image = document.createElement("img");
    image.src = cardImagePath(deckTypeInput.value, name);
    image.alt = "";
    image.loading = "lazy";
    artwork.append(image);

    const caption = document.createElement("span");
    caption.className = "card-title";
    caption.textContent = formatCardName(name);

    const rarity = window.DECK_CARD_RARITY[type]?.[name];
    const rarityPanel = document.createElement("span");
    rarityPanel.className = "card-rarity-panel";
    rarityPanel.textContent = rarity ? rarity.toUpperCase() : "";
    label.append(checkbox, artwork, caption, rarityPanel);
    if (rarity) {
      label.classList.add(`rarity-${rarity}`);
    }

    if (isDefaultCard(type, name)) {
      const defaultBadge = document.createElement("span");
      defaultBadge.className = "default-card-badge";
      defaultBadge.textContent = "DEFAULT";
      defaultBadge.setAttribute("aria-label", "Default card; always included");
      label.append(defaultBadge);
    }

    label.classList.toggle("is-selected", checkbox.checked);
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

function renderMapPicker(selectedNames = []) {
  const selectedMapNames = new Set(selectedNames);
  mapPicker.replaceChildren();

  outbreakMaps.forEach(map => {
    const label = document.createElement("label");
    label.className = "map-option";
    if (map.value === "all_map") {
      label.classList.add("is-all-map");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "map_names";
    checkbox.value = map.value;
    checkbox.checked = selectedMapNames.has(map.value);

    const image = document.createElement("img");
    image.src = map.image || `maps/${map.value}.png`;
    image.alt = "";
    image.loading = "lazy";

    const caption = document.createElement("span");
    caption.textContent = map.name;

    label.append(checkbox, image, caption);
    mapPicker.append(label);
  });
}

function renderAgentPicker(selectedNames = Array.from(selectedAgentNames)) {
  const type = deckTypeInput.value;
  const selectedNamesSet = new Set(selectedNames);
  selectedAgentNames = new Set(
    deckAgents
      .filter(agent => agent.type === type && selectedNamesSet.has(agent.name))
      .map(agent => agent.name)
  );
  agentPicker.replaceChildren();

  const agentsByGroup = new Map();
  deckAgents
    .filter(agent => agent.type === type)
    .forEach(agent => {
      const group = agentGroupName(agent);
      if (!agentsByGroup.has(group)) {
        agentsByGroup.set(group, []);
      }
      agentsByGroup.get(group).push(agent);
    });

  const groupOrder = type === "Superstring"
    ? ["p.u.s", "the scissors", "urbino"]
    : ["Crystalline"];

  groupOrder.forEach(group => {
    const agents = agentsByGroup.get(group);
    if (!agents?.length) {
      return;
    }

    const section = document.createElement("section");
    section.className = "agent-group";
    section.classList.add(agentGroupClass(group));

    const grid = document.createElement("div");
    grid.className = "agent-group-grid";

    agents.forEach(agent => {
      const label = document.createElement("label");
      label.className = "agent-option";
      label.classList.add(agentGroupClass(group));
      label.classList.toggle("is-selected", selectedAgentNames.has(agent.name));

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "character_names";
      checkbox.value = agent.name;
      checkbox.checked = selectedAgentNames.has(agent.name);

      const image = document.createElement("img");
      image.src = agent.image;
      image.alt = "";
      image.loading = "lazy";

      const caption = document.createElement("span");
      caption.textContent = agent.name.replaceAll("_", " ");

      const factionPanel = document.createElement("span");
      factionPanel.className = "agent-faction-panel";
      factionPanel.textContent = agentGroupLabel(group);

      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          selectedAgentNames.add(agent.name);
        } else {
          selectedAgentNames.delete(agent.name);
        }
        label.classList.toggle("is-selected", checkbox.checked);
      });

      label.append(checkbox, image, caption, factionPanel);
      grid.append(label);
    });

    section.append(grid);
    agentPicker.append(section);
  });
}

function updateSelectedCardCount() {
  selectedCardCount.textContent = t("selectedCards", {
    count: selectedCardNames.size
  });
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach(element => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });

  updateSelectedCardCount();
  renderDecks();
}


let decks = [];

let activeType = "all";

let activeMap = "all";

let activeCharacter = "all";

let activeUploader = "all";

let activeCategory = "all";

let selectedCardNames = new Set();

let selectedAgentNames = new Set();

let activeCardRarity = "all";

function agentGroupName(agent) {
  return agent.type === "Crystalline"
    ? "Crystalline"
    : agent.image.split("/")[2];
}

function agentGroupLabel(group) {
  if (group === "p.u.s") {
    return "P.U.S";
  }

  return group.replace(/\b\w/g, letter => letter.toUpperCase());
}

function agentGroupClass(group) {
  return `agent-group-${group.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

function renderMapFilters() {
  const mapFilters = document.querySelector("#mapFilters");
  const fragment = document.createDocumentFragment();

  outbreakMaps.forEach(map => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter";
    button.dataset.map = map.value;
    button.classList.toggle("active", activeMap === map.value);
    button.textContent = map.name;
    fragment.append(button);
  });

  mapFilters.replaceChildren(fragment);
}

function renderCharacterFilters() {
  const characterFilters = document.querySelector("#characterFilters");
  const allButton = document.createElement("button");
  allButton.type = "button";
  allButton.className = "filter character-filter-all";
  allButton.dataset.characterFilter = "all";
  allButton.classList.toggle("active", activeCharacter === "all");
  allButton.textContent = t("allCharacters");
  characterFilters.replaceChildren(allButton);

  const groups = new Map();
  const groupOrder = ["p.u.s", "the scissors", "urbino", "Crystalline"];

  groupOrder.forEach(group => {
    const agents = deckAgents.filter(agent => agentGroupName(agent) === group);
    if (!agents.length) {
      return;
    }

    const section = document.createElement("section");
    section.className = "character-filter-group";
    section.classList.add(agentGroupClass(group));

    const filters = document.createElement("div");
    filters.className = "filters";

    agents.forEach(agent => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "filter";
      button.classList.add(agentGroupClass(group));
      button.dataset.characterFilter = agent.name;
      button.classList.toggle("active", activeCharacter === agent.name);
      button.textContent = agent.name.replaceAll("_", " ");
      filters.append(button);
    });

    section.append(filters);
    groups.set(group, section);
  });

  groupOrder.forEach(group => {
    const section = groups.get(group);
    if (section) {
      characterFilters.append(section);
    }
  });
}

function renderUploadFilters() {
  const uploadFilters = document.querySelector("#uploadFilters");
  const fragment = document.createDocumentFragment();
  const filters = [
    { value: "all", label: t("allDecks") },
    { value: "mine", label: t("myUploads") }
  ];

  filters.forEach(filter => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter";
    button.dataset.uploader = filter.value;
    button.classList.toggle("active", activeUploader === filter.value);
    button.disabled = filter.value === "mine" && !currentUser;
    button.textContent = filter.label;
    fragment.append(button);
  });

  uploadFilters.replaceChildren(fragment);
}

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

applyTranslations();



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



function updateAuthUI() {
  if (!currentUser && activeUploader === "mine") {
    activeUploader = "all";
  }

  renderUploadFilters();

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
  const mapsContainer = document.querySelector("#deckDetailsMaps");
  const agentsContainer = document.querySelector("#deckDetailsAgents");

  document.querySelector("#deckDetailsName").textContent = deck.name;
  typeBadge.textContent = deck.type;
  typeBadge.className = `type-badge ${typeClass}`;
  document.querySelector("#deckDetailsCategory").textContent = deck.category || "-";
  document.querySelector("#deckDetailsDescription").textContent = deck.description || "-";
  document.querySelector("#deckDetailsAuthor").textContent = deck.author || "-";
  cardsContainer.replaceChildren();
  mapsContainer.replaceChildren();
  agentsContainer.replaceChildren();

  const selectedCards = Array.isArray(deck.card_names)
    ? orderCardNames(deck.type, deck.card_names)
    : [];
  if (!selectedCards.length) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "deck-details-empty";
    emptyMessage.textContent = t("noDeckCards");
    cardsContainer.append(emptyMessage);
  } else {
    selectedCards.forEach(name => {
      const item = document.createElement("figure");
      item.className = "deck-details-card";
      const rarity = window.DECK_CARD_RARITY[deck.type]?.[name];
      if (rarity) {
        item.classList.add(`rarity-${rarity}`);
      }

      const artwork = document.createElement("div");
      artwork.className = "card-artwork";

      const image = document.createElement("img");
      image.src = cardImagePath(deck.type, name);
      image.alt = formatCardName(name);
      image.loading = "lazy";
      artwork.append(image);

      const caption = document.createElement("figcaption");
      caption.className = "card-title";
      caption.textContent = formatCardName(name);

      const rarityPanel = document.createElement("div");
      rarityPanel.className = "card-rarity-panel";
      rarityPanel.textContent = rarity ? rarity.toUpperCase() : "";

      item.append(artwork, caption, rarityPanel);
      if (isDefaultCard(deck.type, name)) {
        const defaultBadge = document.createElement("span");
        defaultBadge.className = "default-card-badge";
        defaultBadge.textContent = "DEFAULT";
        item.append(defaultBadge);
      }
      cardsContainer.append(item);
    });
  }

  const selectedMapNames = new Set(Array.isArray(deck.map_names) ? deck.map_names : []);
  const selectedMaps = outbreakMaps.filter(map => selectedMapNames.has(map.value));
  if (!selectedMaps.length) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "deck-details-empty";
    emptyMessage.textContent = t("noDeckMaps");
    mapsContainer.append(emptyMessage);
  } else {
    selectedMaps.forEach(map => {
      const item = document.createElement("figure");
      item.className = "deck-details-map";
      if (map.value === "all_map") {
        item.classList.add("is-all-map");
      }

      const image = document.createElement("img");
      image.src = map.image || `maps/${map.value}.png`;
      image.alt = map.name;
      image.loading = "lazy";

      const caption = document.createElement("figcaption");
      caption.textContent = map.name;

      item.append(image, caption);
      mapsContainer.append(item);
    });
  }

  const selectedAgentNames = new Set(
    Array.isArray(deck.character_names) ? deck.character_names : []
  );
  const selectedAgents = deckAgents.filter(agent =>
    agent.type === deck.type && selectedAgentNames.has(agent.name)
  );
  if (!selectedAgents.length) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "deck-details-empty";
    emptyMessage.textContent = t("noDeckAgents");
    agentsContainer.append(emptyMessage);
  } else {
    selectedAgents.forEach(agent => {
      const item = document.createElement("figure");
      const group = agentGroupName(agent);
      item.className = `agent-option deck-details-agent ${agentGroupClass(group)}`;

      const image = document.createElement("img");
      image.src = agent.image;
      image.alt = "";
      image.loading = "lazy";

      const caption = document.createElement("span");
      caption.textContent = agent.name.replaceAll("_", " ");

      const factionPanel = document.createElement("span");
      factionPanel.className = "agent-faction-panel";
      factionPanel.textContent = agentGroupLabel(group);

      item.append(image, caption, factionPanel);
      agentsContainer.append(item);
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
        t("login");

    }

  }
);



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
          password,
          options: {
            emailRedirectTo: new URL(
              "auth.html",
              window.location.href
            ).href
          }
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
        t("createAccount");

    }

  }
);



logoutButton.addEventListener(
  "click",
  async () => {

    await supabaseClient.auth.signOut();

  }
);



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
      map_names,
      character_names,
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

    if (
      activeMap !== "all" &&
      activeMap !== "all_map" &&
      (!Array.isArray(deck.map_names) ||
        (!deck.map_names.includes(activeMap) && !deck.map_names.includes("all_map")))
    ) {
      return false;
    }

    if (
      activeCharacter !== "all" &&
      (!Array.isArray(deck.character_names) ||
        !deck.character_names.includes(activeCharacter))
    ) {
      return false;
    }

    if (
      activeUploader === "mine" &&
      (!currentUser || deck.user_id !== currentUser.id)
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

    const mapTags = card.querySelector(".deck-map-tags");
    const selectedMapNames = new Set(
      Array.isArray(deck.map_names) ? deck.map_names : []
    );
    outbreakMaps
      .filter(map => selectedMapNames.has(map.value))
      .forEach(map => {
        const tag = document.createElement("span");
        tag.className = "deck-tag deck-map-tag";
        tag.textContent = map.name;
        mapTags.append(tag);
      });

    const characterTags = card.querySelector(".deck-character-tags");
    const selectedCharacterNames = new Set(
      Array.isArray(deck.character_names) ? deck.character_names : []
    );
    deckAgents
      .filter(agent => selectedCharacterNames.has(agent.name))
      .forEach(agent => {
        const tag = document.createElement("span");
        tag.className = `deck-tag deck-character-tag ${agentGroupClass(agentGroupName(agent))}`;
        tag.textContent = agent.name.replaceAll("_", " ");
        characterTags.append(tag);
      });

    card.querySelector(".deck-tags").classList.toggle(
      "hidden",
      mapTags.childElementCount === 0 && characterTags.childElementCount === 0
    );


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

  form.querySelectorAll('input[name="category"]').forEach(input => {
    input.checked = selectedCategories.includes(input.value);
  });

  const selectedMapNames = Array.isArray(deck.map_names) ? deck.map_names : [];
  mapPicker.querySelectorAll('input[name="map_names"]').forEach(input => {
    input.checked = selectedMapNames.includes(input.value);
  });

  renderAgentPicker(
    Array.isArray(deck.character_names) ? deck.character_names : []
  );

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

document
  .querySelector("#mapFilters")
  .addEventListener("click", event => {
    const button = event.target.closest("[data-map]");
    if (!button) {
      return;
    }

    activeMap = button.dataset.map;
    setActiveFilter(event.currentTarget, button);
    renderDecks();
  });

document
  .querySelector("#characterFilters")
  .addEventListener("click", event => {
    const button = event.target.closest("[data-character-filter]");
    if (!button) {
      return;
    }

    activeCharacter = button.dataset.characterFilter;
    document.querySelectorAll("#characterFilters [data-character-filter]")
      .forEach(filterButton => {
        filterButton.classList.toggle("active", filterButton === button);
      });
    renderDecks();
  });

document
  .querySelector("#uploadFilters")
  .addEventListener("click", event => {
    const button = event.target.closest("[data-uploader]");
    if (!button || button.disabled) {
      return;
    }

    activeUploader = button.dataset.uploader;
    setActiveFilter(event.currentTarget, button);
    renderDecks();
  });



searchInput.addEventListener(
  "input",
  renderDecks
);


deckTypeInput.addEventListener("change", () => {
  selectedCardNames.clear();
  selectedAgentNames.clear();
  renderCardPicker([]);
  renderAgentPicker([]);
});

cardSearchInput.addEventListener("input", () => {
  renderCardPicker();
});

cardRarityFilters.addEventListener("click", event => {
  const button = event.target.closest("[data-card-rarity]");
  if (!button) {
    return;
  }

  activeCardRarity = button.dataset.cardRarity;
  cardRarityFilters.querySelectorAll("[data-card-rarity]").forEach(filterButton => {
    const isActive = filterButton === button;
    filterButton.classList.toggle("active", isActive);
    filterButton.setAttribute("aria-pressed", String(isActive));
  });
  renderCardPicker();
});

renderCardPicker();
renderMapPicker();
renderAgentPicker();
renderMapFilters();
renderCharacterFilters();
renderUploadFilters();



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

    const selectedCategories =
      formData.getAll("category");


    if (!selectedCardNames.size) {
      uploadResult.textContent = t("selectAtLeastOneCard");
      uploadResult.classList.add("is-error");
      uploadResult.classList.remove("hidden");
      return;
    }

    if (!selectedCategories.length) {
      uploadResult.textContent = t("selectAtLeastOneCategory");
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

      map_names:
        formData.getAll("map_names"),

      character_names:
        formData.getAll("character_names"),

      category:
        selectedCategories.join(", "),

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

        ${t("category")}
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



cancelEditButton.addEventListener(
  "click",
  cancelEdit
);

form.addEventListener("reset", () => {
  cardSearchInput.value = "";
  selectedCardNames.clear();
  selectedAgentNames.clear();
  window.setTimeout(() => {
    renderCardPicker();
    renderAgentPicker();
  }, 0);
});



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



async function initialize() {

  openDonateModal();

  await checkConnection();

  await initAuth();

  await loadDecks();

}


initialize();