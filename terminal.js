const text = "Booting RAT PORN system...\nLoading sewer logs...\nAccess granted.\n";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("type").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 50);
  } else {
    document.getElementById("menu").classList.remove("hidden");
  }
}

type();
