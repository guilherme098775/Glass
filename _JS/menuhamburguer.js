document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('nav-menu');
    // Abre/fecha menu hamburguer
    document.getElementById('menu-hamburguer').onclick = function() {
        navMenu.classList.toggle('ativo');
    };

    // Submenu responsivo: abre ao clicar no <span>
    const submenuToggles = navMenu.querySelectorAll('li > span');
    submenuToggles.forEach(span => {
        span.onclick = function(e) {
            e.stopPropagation();
            // Fecha outros submenus
            submenuToggles.forEach(s => {
                if (s !== span) s.parentElement.classList.remove('open');
            });
            // Toggle submenu atual
            span.parentElement.classList.toggle('open');
        };
    });

    // Fecha submenu ao clicar em qualquer área do menu
    navMenu.addEventListener('click', function(e) {
        const abertos = navMenu.querySelectorAll('li.open');
        abertos.forEach(li => li.classList.remove('open'));
    });
});

// Fecha submenu ao clicar fora do menu
document.addEventListener('click', function(e) {
    const navMenu = document.getElementById('nav-menu');
    if (!navMenu.contains(e.target)) {
        const abertos = navMenu.querySelectorAll('li.open');
        abertos.forEach(li => li.classList.remove('open'));
    }
});