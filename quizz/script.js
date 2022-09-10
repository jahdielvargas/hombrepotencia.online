function segunda() {
  document.getElementById("primeira").classList.add("hide")
  document.getElementById("segunda").classList.remove("hide")
}
function terceira() {
  document.getElementById("segunda").classList.add("hide")
  document.getElementById("terceira").classList.remove("hide")
}
function redirect() {
  location.href = atob('aHR0cHM6Ly9ob21icmVwb3RlbmNpYS5vbmxpbmUvdnNsMQ==')
}