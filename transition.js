const fade = document.querySelector(".fade")

window.addEventListener("load", () => {
  fade.classList.add("hide")
})

document.querySelectorAll("[data-link]").forEach(el => {
  el.addEventListener("click", () => {
    fade.classList.remove("hide")
    setTimeout(() => {
      location.href = el.dataset.link
    }, 400)
  })
})
