function main() {
  if (window.localStorage == null) {
    alert("LocalStorage must be enabled for changing options.");
  }
}

document.addEventListener('DOMContentLoaded', function () {
  main();
});
