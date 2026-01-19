// TERMINAL INTRO
const lines = [
  "Initializing profile...",
  "Loading skill matrix...",
  "Booting experience modules...",
  "System ready."
];

let i = 0;
const term = document.getElementById("terminal-text");

function boot() {
  if (i < lines.length) {
    term.textContent += lines[i++] + "\n";
    setTimeout(boot, 600);
  } else {
    setTimeout(() => {
      document.getElementById("terminal").style.display = "none";
      document.querySelector(".container").classList.remove("hidden");
    }, 800);
  }
}
boot();

// Scroll reveal
const obs = new IntersectionObserver(entries =>
  entries.forEach(e => e.isIntersecting && e.target.classList.add("active"))
);
document.querySelectorAll(".reveal").forEach(el => obs.observe(el));

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("light");
}

// PDF
function downloadPDF() {
  window.print();
}

// JSON export
function downloadJSON() {
  const data = {
    name: "Your Name",
    role: "Full Stack MERN Developer",
    skills: ["React", "Node", "MongoDB", "Express"],
    projects: ["Facial Recognition Attendance System"]
  };
  const blob = new Blob([JSON.stringify(data,null,2)],{type:"application/json"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "resume.json";
  a.click();
}

// Command palette
document.addEventListener("keydown", e => {
  if (e.ctrlKey && e.key === "k") {
    e.preventDefault();
    document.getElementById("palette").classList.toggle("hidden");
  }
});

// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
