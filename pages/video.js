import modules from "./../modules/modules.js"

// Render module list
const moduleList = document.getElementById("module-list")

modules.forEach((mod, index) => {
  const li = document.createElement("li")
  li.className = "module-item"
  li.innerHTML = `
    <div class="module-title">📕 ${mod.title}</div>
    <div class="module-subtitle">> ${mod.subtitle}</div>
  `
  li.addEventListener("click", () => loadModule(index))
  moduleList.appendChild(li)

  li.addEventListener("click", () => {
    loadModule(index)
    // Highlight the selected module
    document.querySelectorAll(".module-item").forEach((item) => {
      item.classList.remove("active")
    })
    li.classList.add("active")
  })
  moduleList.appendChild(li)
})

function loadModule(index) {
  const mod = modules[index]
  document.getElementById(
    "video-frame"
  ).src = `https://www.youtube.com/embed/${mod.videoId}`
  document.getElementById("video-frame").title = `${mod.title}`
  document.getElementById("github-link").href = mod.github
  document.getElementById("pdf-link").href = mod.pdf

  const allItems = document.querySelectorAll(".module-item")
  allItems.forEach((item) => item.classList.remove("active"))
  allItems[index].classList.add("active")
}
