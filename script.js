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

function getLabelFromName(name) {
  const base = name.split("_")[0];
  return base.toUpperCase();
}

function clearActiveTabs() {
  tabs.forEach(tab => tab.classList.remove("active"));
}

function loadTab(tabName) {
  gallery.innerHTML = "";
  const tabFiles = mediaFiles.filter(file => file.startsWith(tabName));

  tabFiles.forEach((file, index) => {
    const card = document.createElement("div");
    card.className = "card fade-in";
    card.style.animationDelay = (index * 0.05) + "s";

    const inner = document.createElement("div");
    inner.className = "card-inner";

    if (file.endsWith(".png")) {
      const img = document.createElement("img");
      img.src = "assets/" + file;
      img.alt = file;
      inner.appendChild(img);
    } else if (file.endsWith(".mp4")) {
      const video = document.createElement("video");
      video.src = "assets/" + file;
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      inner.appendChild(video);
    }

    const label = document.createElement("div");
    label.className = "card-label";
    label.textContent = getLabelFromName(file);

    card.appendChild(inner);
    card.appendChild(label);
    gallery.appendChild(card);
  });

  if (tabFiles.length === 0) {
    const empty = document.createElement("div");
    empty.style.color = "#777";
    empty.style.fontSize = "14px";
    empty.textContent = "No media yet for this category.";
    gallery.appendChild(empty);
  }
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const tabName = tab.dataset.tab;
    clearActiveTabs();
    tab.classList.add("active");
    loadTab(tabName);
  });
});

loadTab("building");
