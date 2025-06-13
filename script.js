const modules = [
  {
    title: "ওরিয়েন্টেশন সেশন",
    subtitle: "পরিচিতি, রোডম্যাপ ওভারভিউ, কী আশা করা যায়",
    videoId: "hdI2bqOjy3c",
    github: "https://github.com/yourusername/js-basics",
    pdf: "/files/js-basics.pdf",
  },
  {
    title: "HTML ক্লাস",
    subtitle: "ওয়েবের স্ট্রাকচার শেখা",
    videoId: "xiIcE0vktNI",
    github: "",
    pdf: "",
  },
  {
    title: "CSS বেসিক",
    subtitle: "রঙ, ফন্ট, বক্স মডেল",
    videoId: "",
    github: "",
    pdf: "",
  },
  {
    title: "CSS ফ্লেক্সবক্স ও লেআউট",
    subtitle: "",
    videoId: "",
    github: "",
    pdf: "",
  },
  {
    title: "CSS ডিপ ডাইভ",
    subtitle: "পজিশনিং, অ্যানিমেশন",
    videoId: "",
    github: "",
    pdf: "",
  },
  {
    title: "প্রজেক্ট ডে ১",
    subtitle: "পার্সোনাল পোর্টফোলিও বানানো",
    videoId: "",
    github: "",
    pdf: "",
  },
  {
    title: "ভাইব কোডিং মাস্টারক্লাস",
    subtitle: "",
    videoId: "",
    github: "",
    pdf: "",
  },
  {
    title: "JavaScript বেসিক",
    subtitle: "ভেরিয়েবল, ডেটা টাইপ",
    videoId: "",
    github: "",
    pdf: "",
  },
  {
    title: "JavaScript কন্ট্রোল ফ্লো",
    subtitle: "কন্ডিশনাল",
    videoId: "",
    github: "",
    pdf: "",
  },
  {
    title: "প্র্যাকটিস ডে",
    subtitle: "ক্লাস নেই",
    videoId: "",
    github: "",
    pdf: "",
  },
  {
    title: "JavaScript ফাংশন ও স্কোপ",
    subtitle: "",
    videoId: "",
    github: "",
    pdf: "",
  },
  {
    title: "JavaScript অ্যারে ও অবজেক্ট",
    subtitle: "",
    videoId: "",
    github: "",
    pdf: "",
  },
  {
    title: "প্র্যাকটিস ডে",
    subtitle: "ক্লাস নেই",
    videoId: "",
    github: "",
    pdf: "",
  },
  {
    title: "DOM ম্যানিপুলেশন ও ইভেন্ট",
    subtitle: "",
    videoId: "0ik6X4DJKCc",
    github: "https://github.com/yourusername/dom-manipulation",
    pdf: "/files/dom-notes.pdf",
  },
  {
    title: "ES6+ ফিচার ও ডিবাগিং",
    subtitle: "",
    videoId: "NCwa_xi0Uuc",
    github: "https://github.com/yourusername/es6-features",
    pdf: "/files/es6-notes.pdf",
  },
  {
    title: "GitHub মাস্টারক্লাস",
    subtitle: "",
    videoId: "",
    github: "",
    pdf: "",
  },
  {
    title: "লাইভ প্রজেক্ট: কুইজ অ্যাপ",
    subtitle: "",
    videoId: "",
    github: "",
    pdf: "",
  },
  {
    title: "প্র্যাকটিস ডে",
    subtitle: "এক্সট্রা",
    videoId: "",
    github: "",
    pdf: "",
  },
  {
    title: "এক্সাম ডে",
    subtitle: "",
    videoId: "",
    github: "",
    pdf: "",
  },
  {
    title: "রোডম্যাপ ও ফিডব্যাক",
    subtitle: "",
    videoId: "",
    github: "",
    pdf: "",
  },
]

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
  document.getElementById("github-link").href = mod.github
  document.getElementById("pdf-link").href = mod.pdf

  const allItems = document.querySelectorAll(".module-item")
  allItems.forEach((item) => item.classList.remove("active"))
  allItems[index].classList.add("active")
}
