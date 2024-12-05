function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

    const arrowContainer = document.querySelector('#arrow-container');
    const firstSection = document.querySelector('#profile');

    // Detecta rolagem para mostrar ou esconder a seta e texto
    window.addEventListener('scroll', () => {
        const rect = firstSection.getBoundingClientRect();

        // Verifica se a primeira seção está visível
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            arrowContainer.style.display = 'block'; // Mostra seta e texto
        }
    });

    // Rola para a próxima seção ao clicar na seta
    arrowContainer.addEventListener('click', () => {
        const nextSection = firstSection.nextElementSibling; // Próxima seção no DOM

        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente
        }

        // Esconde a seta e o texto após o clique
        arrowContainer.style.display = 'none';
    });