let modules = []
const moduleViewButton = document.getElementById("view-module")

async function fetchSheetDBData() {
  try {
    // SheetDB.io Api (Temporary terminated as limits request)
    // const response = await fetch(
    //   "https://sheetdb.io/api/v1/mgpfkcwut0n6r",
    //
    // NEW: NoCodeAPI (300req/day)
    const response = await fetch(
      "https://v1.nocodeapi.com/ettisafxrup/google_sheets/qvsYtlwqKFmkJOpL?tabId=Sheet1",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    if (!response) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    const data = result.data

    console.log(data)
    return data
  } catch (error) {
    const errorMsg = document.createElement("strong")
    errorMsg.style.color = "red"
    errorMsg.innerHTML =
      "Database limit reached out, Please report ettisafxrup to resolve issue. <br>"
    document.querySelector(".right").appendChild(errorMsg)
    console.error("Fetch error:", error)
  }
}

moduleViewButton.addEventListener("click", async () => {
  const moduleList = document.getElementById("module-list")

  let modules
  if (!moduleList.innerHTML) {
    moduleViewButton.innerText = "⟳"
    modules = await fetchSheetDBData()
  }

  modules.forEach((mod, index) => {
    const li = document.createElement("li")
    li.className = "module-item"
    li.innerHTML = `
      <div class="module-title">📕 ${mod.title}</div>
      <div class="module-subtitle">→ ${mod.subtitle}</div>
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

    moduleViewButton.innerText = "➢"
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
    ).src = `https://www.youtube.com/embed/${mod.videoId}`
    document.getElementById("video-frame").title = `${mod.title}`
    document.getElementById("github-link").href = toAbsoluteUrl(mod.github)
    document.getElementById("pdf-link").href = toAbsoluteUrl(mod.pdf)

    const allItems = document.querySelectorAll(".module-item")
    allItems.forEach((item) => item.classList.remove("active"))
    allItems[index].classList.add("active")
  }
})

// Render module list
