const npcs = [
  {
    id: "albert_jr",
    name: "Albert Jr",
    description: "NPC amigável da vila.",
    x: 45,
    y: 60
  },
  {
    id: "annie",
    name: "Annie",
    description: "Cuida das flores.",
    x: 30,
    y: 40
  },
  {
    id: "andrew",
    name: "Andrew",
    description: "Sempre perto do lago.",
    x: 65,
    y: 55
  }
];

const pinsLayer = document.getElementById("pins-layer");
const mapImage = document.getElementById("map-image");
const filterContainer = document.getElementById("filter-container");

/* Cria pins quando a imagem carregar */
mapImage.onload = () => {
  createPins();
  createFilters();
};

function createPins() {
  pinsLayer.innerHTML = "";

  npcs.forEach(npc => {
    const pin = document.createElement("div");
    pin.className = "pin";
    pin.style.left = npc.x + "%";
    pin.style.top = npc.y + "%";

    pin.onclick = () => openModal(npc);

    pinsLayer.appendChild(pin);
  });
}

function createFilters() {
  npcs.forEach(npc => {
    const label = document.createElement("div");
    label.textContent = npc.name;
    label.style.cursor = "pointer";
    label.onclick = () => openModal(npc);
    filterContainer.appendChild(label);
  });
}

/* Modal */
function openModal(npc) {
  document.getElementById("modal-title").textContent = npc.name;
  document.getElementById("modal-description").textContent = npc.description;
  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}
