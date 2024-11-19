// Função de busca de projetos
function buscarProjetos() {
    const searchInput = document.getElementById("project-search").value.toLowerCase();
    const setorInput = document.getElementById("setor").value.toLowerCase();
    const localizacaoInput = document.getElementById("localizacao").value.toLowerCase();
    const projectCards = document.querySelectorAll(".project-card");
    let projetosVisiveis = 0;

    projectCards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        const setor = card.querySelector(".setor").textContent.toLowerCase();
        const localizacao = card.querySelector(".localizacao").textContent.toLowerCase();

        const matchesSearch = title.includes(searchInput);
        const matchesSetor = setorInput === "todos" || setor.includes(setorInput);
        const matchesLocalizacao = localizacao.includes(localizacaoInput);

        if (matchesSearch && matchesSetor && matchesLocalizacao) {
            card.style.display = "block";
            projetosVisiveis++;
        } else {
            card.style.display = "none";
        }
    });

    document.getElementById("no-results-message").style.display = projetosVisiveis === 0 ? "block" : "none";
}

// Funções para interação
function investirProjeto(nomeProjeto) {
    alert(`Você demonstrou interesse em investir no projeto: ${nomeProjeto}.`);
}

function visualizarProjeto(nomeProjeto) {
    alert(`Abrindo detalhes do projeto: ${nomeProjeto}.`);
}

// Ativar busca com Enter
function handleEnter(event) {
    if (event.key === "Enter") {
        buscarProjetos();
    }
}
