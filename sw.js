self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("resume-cache").then(c =>
      c.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/script.js"
      ])
    )
  );
});
