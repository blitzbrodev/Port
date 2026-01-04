const cursor = document.querySelector(".cursor")
const cards = document.querySelectorAll(".card")
const viewer = document.querySelector(".viewer")
const viewerTitle = document.getElementById("viewer-title")
const viewerDesc = document.getElementById("viewer-desc")

let mouseX = 0
let mouseY = 0

window.addEventListener("mousemove", e => {
  mouseX = e.clientX
  mouseY = e.clientY
  cursor.style.left = mouseX + "px"
  cursor.style.top = mouseY + "px"
})

cards.forEach(card => {
  let currentX = 0
  let currentY = 0

  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const forceX = (y - centerY) / centerY
    const forceY = (x - centerX) / centerX

    currentX += forceX * 4
    currentY += forceY * 4

    card.style.transform = `
      rotateX(${-currentX}deg)
      rotateY(${currentY}deg)
    `
  })

  card.addEventListener("mouseleave", () => {
    currentX *= 0.6
    currentY *= 0.6
    card.style.transform = `
      rotateX(${currentX}deg)
      rotateY(${currentY}deg)
    `
  })

  card.addEventListener("click", () => {
    viewer.classList.remove("hidden")
    viewerTitle.textContent = card.dataset.title
    viewerDesc.textContent = card.dataset.desc
  })
})

viewer.addEventListener("click", () => {
  viewer.classList.add("hidden")
})
