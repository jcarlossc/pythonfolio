//Script para fechar navbar ao clicar -->
  document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', () => {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const menuNavbar = document.querySelector('#menuNavbar');

      if (navbarToggler.offsetParent !== null && menuNavbar.classList.contains('show')) {
        navbarToggler.click(); // Simula o clique no botão sanduíche
      }
    });
  });