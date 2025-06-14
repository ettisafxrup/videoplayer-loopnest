document
  .getElementById("emailForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault()

    const email = document.getElementById("emailInput").value
    const errorElement = document.getElementById("error")

    try {
      const response = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const result = await response.json()
      console.log(result)

      if (result.match === true) {
        localStorage.setItem("email", email)
        localStorage.setItem("userName", result.name)
        window.location.href = "./pages/video.html" // Change to your desired page
      } else {
        errorElement.textContent = result.message || "Unknown error."
        errorElement.classList.remove("hidden")
      }
    } catch (err) {
      errorElement.textContent =
        "Failed to connect to server. Please reach out support desk."
      errorElement.classList.remove("hidden")
    }
  })
