const cursor = document.querySelector(".cursor")
let mouseX = 0
let mouseY = 0

window.addEventListener("mousemove", e => {
  mouseX = e.clientX
  mouseY = e.clientY
  cursor.style.left = mouseX + "px"
  cursor.style.top = mouseY + "px"
})

document.querySelectorAll(".card, .nav-card").forEach(card => {
  let rotX = 0
  let rotY = 0
  let targetX = 0
  let targetY = 0

  card.addEventListener("mousemove", e => {
    const r = card.getBoundingClientRect()
    const nx = (e.clientX - r.left) / r.width - 0.5
    const ny = (e.clientY - r.top) / r.height - 0.5
    targetX = ny * -12
    targetY = nx * 12
  })

  card.addEventListener("mouseleave", () => {
    targetX = 0
    targetY = 0
  })

  function tick() {
    rotX += (targetX - rotX) * 0.12
    rotY += (targetY - rotY) * 0.12
    card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`
    requestAnimationFrame(tick)
  }

  tick()
})
