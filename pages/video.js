let modules = []
const moduleViewButton = document.getElementById("view-module")

async function fetchSheetDBData() {
  try {
    const response = await fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLgzeedU0n3fJWZBkvODii4K5sXueOUd3Ip6TA21NinK9nZCZPSYfuG9QWQjor56IYr4_kKX1Krsc2UtdIk5tzrzWNmY9Jxq7gAaSWaWII3lY_ZTPtfSs9WCzXbpqMBATY6iwMXs65YLx33ruaJYBOtc14Sw0mJeFJdoWL17bz4kZB61_NozH3vLLnLbIy2yp9EUf37TXheY85pNmcm4mHLgS_HfZY48hwI2r5xJwcj4ZmuOIC8lSg1dxlKhSGcH9azaFVG8PLv2YTXTK-plJYDUGdclzLR-0r0Vczkw&lib=M4wdroAKGSzVjk0iLAUBOD8rO6oHD--2g"
    )

    const data = await response.json()

    console.log(data)
    return data
  } catch (error) {
    const errorMsg = document.createElement("strong")
    errorMsg.style.color = "red"
    errorMsg.innerHTML =
      "Something went wrong, Please report ettisafxrup to resolve issue. <br>"
    document.querySelector(".right").appendChild(errorMsg)
    console.error("Fetch error:", error)
  }
}

const moduleList = document.getElementById("module-list")

const rotateEmojies = [
  "😀",
  "😎",
  "😍",
  "🥳",
  "🤔",
  "😭",
  "😡",
  "👍",
  "👎",
  "🙏",
  "🔥",
  "💯",
  "✨",
  "🎉",
  "💻",
  "☕",
  "🚀",
  "🌟",
  "⚡",
  "🗿",
]

if (!moduleList.innerHTML) {
  let index = 0
  moduleViewButton.innerText = rotateEmojies[0]

  const emojiesInterval = setInterval(() => {
    moduleViewButton.innerText = rotateEmojies[index]
    index++
    if (index > rotateEmojies.length) index = 0
  }, 100)

  setTimeout(() => {
    clearInterval(emojiesInterval)
    moduleViewButton.innerText = "👀"
  }, 5000)
}

modules = await fetchSheetDBData()

modules.forEach((mod, index) => {
  const li = document.createElement("li")
  li.className = "module-item"
  li.innerHTML = `
      <div class="module-title">📕 ${mod[0]}</div>
      <div class="module-subtitle">→ ${mod[1]}</div>
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
  function toAbsoluteUrl(url) {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      return "https://" + url
    }
    return url
  }

  const mod = modules[index]
  document.getElementById(
    "video-frame"
  ).src = `https://www.youtube.com/embed/${mod[2]}`
  document.getElementById("video-frame").title = `${mod.title}`
  document.getElementById("github-link").href = toAbsoluteUrl(mod[3])
  document.getElementById("pdf-link").href = toAbsoluteUrl(mod[4])

  const allItems = document.querySelectorAll(".module-item")
  allItems.forEach((item) => item.classList.remove("active"))
  allItems[index].classList.add("active")
}

// Render module list
