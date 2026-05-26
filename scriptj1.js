document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Rolagem Suave ao clicar nos links do menu
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // 2. Animação de Scroll (Aparecimento gradual dos elementos)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                entry.target.style.transition = "all 0.6s ease-out";
            }
        });
    }, { threshold: 0.1 });

    // Observa itens de cuidados (os cards dinâmicos serão tratados no style.js)
    document.querySelectorAll(".dica-item").forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";
        observer.observe(item);
    });
});
