document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Criar Botão de Alternar Tema de forma limpa
    const nav = document.querySelector("nav");
    const themeBtn = document.createElement("button");
    themeBtn.innerHTML = "🌙";
    themeBtn.style.cssText = `
        background: none;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        margin-left: 20px;
        transition: transform 0.2s;
    `;
    nav.appendChild(themeBtn);

    let darkMode = false;

    themeBtn.addEventListener("click", () => {
        darkMode = !darkMode;
        const root = document.documentElement;

        if (darkMode) {
            themeBtn.innerHTML = "☀️";
            root.style.setProperty('--bg-light', '#120c08');
            root.style.setProperty('--bg-card', '#1f150e');
            root.style.setProperty('--text-main', '#f5f5f5');
            root.style.setProperty('--text-muted', '#ccc');
            root.style.setProperty('--primary', '#0f0a06');
            document.querySelector(".cuidados-section").style.backgroundColor = "#2b1d14";
        } else {
            themeBtn.innerHTML = "🌙";
            root.style.setProperty('--bg-light', '#fcfbf7');
            root.style.setProperty('--bg-card', '#ffffff');
            root.style.setProperty('--text-main', '#333333');
            root.style.setProperty('--text-muted', '#666666');
            root.style.setProperty('--primary', '#2b1d14');
            document.querySelector(".cuidados-section").style.backgroundColor = "#faedcd";
        }
    });

    // 2. Efeito dinâmico de Hover nos Cards (Usa delegação de evento já que os cards são dinâmicos)
    const grid = document.getElementById("grid-racas");
    if(grid) {
        grid.addEventListener("mouseover", (e) => {
            const card = e.target.closest(".card");
            if(card) {
                card.style.transform = "translateY(-8px)";
                card.style.boxShadow = "0 15px 35px rgba(0,0,0,0.15)";
                card.style.transition = "all 0.3s ease";
            }
        });

        grid.addEventListener("mouseout", (e) => {
            const card = e.target.closest(".card");
            if(card) {
                card.style.transform = "translateY(0)";
                card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
            }
        });
    }
});
