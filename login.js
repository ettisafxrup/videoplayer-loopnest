document
  .getElementById("emailForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault()

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
      "📱",
      "🚀",
      "🌟",
      "⚡",
      "🗿",
    ]
    let index = 0
    let emojiesInterval = setInterval(() => {
      document.getElementById("submit").textContent = rotateEmojies[index]
      if (index > rotateEmojies.length) index = 0
      index++
    }, 100)
    const email = document.getElementById("emailInput").value
    const errorElement = document.getElementById("error")

    errorElement.classList.add("hidden")

    try {
      const response = await fetch(
        "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLhls0bm_fE_k3peWuP2CAA5DQNCchxOr609DPY4_q8gKPrPJLb0sHs8vfaRzmD-7exI-IYO4SOSNDNlOn5WTBiQ5Bysdy36Hkq_ZL46Tk5PdH8xDXS2TYZlhuCp74aiMC5Ro_BdAr7bu1ZkR0Vy03LBOi2cMYFfu0dMPX01hqBixYqie29AsZWSF6h9bAMPVkYZUOI9PFdRpdL6Qlvbh4_OFf7JPQZhbfR_05vZVDXfvTLpPQCXgMfHTeQs0emfWf7vm6xijgYjOP8e7whP8td9m81PAQ&lib=MxNKebbvQ9Y-EuUa7oAxxsHGe0gmIaYGN"
      )

      const result = await response.json()

      if (result.includes(email.toLowerCase())) {
        clearInterval(emojiesInterval)
        localStorage.setItem("email", email)
        window.location.href = "./pages/video.html"
      } else {
        clearInterval(emojiesInterval)
        errorElement.textContent = "Invalid email. Please try again."
        errorElement.classList.remove("hidden")
        document.getElementById("submit").textContent = "➾"
      }
    } catch (err) {
      errorElement.textContent =
        "Failed to connect to server. Please reach out support desk."
      errorElement.classList.remove("hidden")
    }
  })
