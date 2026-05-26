// Banco de dados centralizado das raças
const CAVALOS_DATA = [
    {
        raca: "Puro Sangue Lusitano",
        origem: "Portugal",
        desc: "Famoso por sua inteligência, docilidade e movimentos altivos. É a escolha perfeita para adestramento clássico.",
        imagem: "https://images.unsplash.com/photo-1601987177651-8edfe6c20009?q=80&w=600"
    },
    {
        raca: "Quarto de Milha",
        origem: "Estados Unidos",
        desc: "O cavalo mais versátil e rápido do mundo em curtas distâncias. Possui uma musculatura robusta e arranque incomparável.",
        imagem: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?q=80&w=600"
    },
    {
        raca: "Frísio (Friesian)",
        origem: "Holanda",
        desc: "Uma raça majestosa de pelagem inteiramente preta, crinas longas e onduladas. Destaca-se pela elegância de seus passos.",
        imagem: "https://images.unsplash.com/photo-1553284965-83fd3e82fa52?q=80&w=600"
    }
];

// Função para desenhar os cards na tela
function renderizarCards(listaCavalos) {
    const grid = document.getElementById("grid-racas");
    if (!grid) return;
    
    grid.innerHTML = ""; // Limpa a grade antes de desenhar

    if(listaCavalos.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:#666;">Nenhuma raça encontrada com esse nome.</p>`;
        return;
    }

    listaCavalos.forEach(cavalo => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div class="card-img" style="background-image: url('${cavalo.imagem}')"></div>
            <span class="tag">📍 ${cavalo.origem}</span>
            <h3>${cavalo.raca}</h3>
            <p>${cavalo.desc}</p>
        `;
        grid.appendChild(card);
    });
}

// Inicialização do sistema de busca
document.addEventListener("DOMContentLoaded", () => {
    renderizarCards(CAVALOS_DATA); // Renderiza todos no início

    const inputBusca = document.getElementById("search-input");
    const botaoBusca = document.getElementById("search-button");

    function executarBusca() {
        const termo = inputBusca.value.toLowerCase();
        const filtrados = CAVALOS_DATA.filter(c => c.raca.toLowerCase().includes(termo));
        renderizarCards(filtrados);
    }

    // Busca ao clicar no botão ou ao apertar "Enter"
    botaoBusca.addEventListener("click", executarBusca);
    inputBusca.addEventListener("keyup", (e) => {
        if (e.key === "Enter") executarBusca();
    });
});
