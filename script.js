const gallery = document.getElementById("gallery");
const tabs = document.querySelectorAll("nav li");

const mediaFiles = [
  "building_1.png",
  "building_2.png",
  "scripting_1.mp4",
  "scripting_2.mp4",
  "model_1.png",
  "model_2.png"
];

const mediaNames = {
  "building_1.png": "Modern Baseplate",
  "building_2.png": "Sci-Fi Structure",
  "scripting_1.mp4": "Pathfinding Demo",
  "scripting_2.mp4": "Combat Script Showcase",
  "model_1.png": "Knife Handle A",
  "model_2.png": "Knife Handle B"
};

const mediaDescriptions = {
  "building_1.png": "A clean baseplate layout for modular builds.",
  "building_2.png": "A futuristic structure with layered geometry.",
  "scripting_1.mp4": "Demonstrates NPC pathfinding using waypoints.",
  "scripting_2.mp4": "Showcases a combat system with hit detection.",
  "model_1.png": "Smooth ergonomic knife handle with subtle curves.",
  "model_2.png": "Textured grip with loop for enhanced control."
};

function clearActiveTabs() {
  tabs.forEach(tab => tab.classList.remove("active"));
}

function loadTab(tabName) {
  gallery.innerHTML = "";
  const tabFiles = mediaFiles.filter(file => file.startsWith(tabName));

  tabFiles.for
