const btnMobile = document.getElementById('btn-menu');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('navegaçao');
  nav.classList.toggle('ativa');
  const ativa = nav.classList.contains('ativa');
  event.currentTarget.setAttribute('aria-expanded', ativa);
  if (ativa) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

