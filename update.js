fetch("https://ratmedia.github.io/ratporn/latest.json")
.then(r => r.json())
.then(d => {
  let link = document.createElement("a");
  link.href = d.latest;
  link.innerText = "DOWNLOAD LATEST ISSUE";
  document.body.appendChild(link);
})
.catch(() => console.log("Offline mode active"));
