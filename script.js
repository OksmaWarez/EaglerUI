document.addEventListener('DOMContentLoaded', function() {
  var wasmCheckbox = document.getElementById('wasmToggle');
  var darkCheckbox = document.getElementById('darkModeToggle');
  var wasmStored = localStorage.getItem('doesUserLikeBugs');
  var darkStored = localStorage.getItem('isDarkModeEnabled');
  var links = document.querySelectorAll('.selection a');
  links.forEach(function(a) {
    if (!a.dataset.orig) {
      var href = a.getAttribute('href');
      a.dataset.orig = href;
      a.dataset.wasm = "wasm/" + href;
    }
  });
  
  if (wasmStored !== null && wasmCheckbox) {
    wasmCheckbox.checked = (wasmStored === '1' || wasmStored === 'true');
    wasm();
  }

  if (darkStored !== null && darkCheckbox) {
    var isDarkModeEnabled = (darkStored === '1' || darkStored === 'true');
    darkCheckbox.checked = isDarkModeEnabled;
    if (isDarkModeEnabled) document.body.classList.add('make-it-dark');
    else document.body.classList.remove('make-it-dark');
  }
});

function dark() {
  var enabled = document.body.classList.toggle('make-it-dark');
  localStorage.setItem('isDarkModeEnabled', enabled ? '1' : '0');
}

function wasm() {
  var checkbox = document.getElementById('wasmToggle');
  var enabled = checkbox && checkbox.checked;
  var links = document.querySelectorAll('.selection a');
  links.forEach(function(a) {
    a.setAttribute('href', enabled ? a.dataset.wasm : a.dataset.orig);
  });
  localStorage.setItem('doesUserLikeBugs', enabled ? '1' : '0');
}