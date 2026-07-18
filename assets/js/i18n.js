function getSiteLang() {
  return document.documentElement.getAttribute('data-lang') || 'pt';
}

function updateLangButtonLabel() {
  var label = document.getElementById('lang-toggle-label');
  if (label) {
    label.textContent = getSiteLang() === 'en' ? 'PT' : 'EN';
  }
}

function setSiteLang(lang) {
  try {
    localStorage.setItem('site-lang', lang);
  } catch (e) {}
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang);
  updateLangButtonLabel();
}

function toggleSiteLang() {
  setSiteLang(getSiteLang() === 'en' ? 'pt' : 'en');
}

document.addEventListener('DOMContentLoaded', updateLangButtonLabel);
