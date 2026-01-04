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
  let rotX = 0
  let rotY = 0
  let targetX = 0
  let targetY = 0

  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const nx = (x / rect.width - 0.5) * 2
    const ny = (y / rect.height - 0.5) * 2

    targetX = ny * -12
    targetY = nx * 12
  })

  card.addEventListener("mouseleave", () => {
    targetX = 0
    targetY = 0
  })

  function animate() {
    rotX += (targetX - rotX) * 0.12
    rotY += (targetY - rotY) * 0.12

    card.style.transform = `
      rotateX(${rotX}deg)
      rotateY(${rotY}deg)
    `

    requestAnimationFrame(animate)
  }

  animate()
})
