// Função para buscar e filtrar projetos
function buscarProjetos() {
    const searchInput = document.getElementById("project-search").value.toLowerCase();
    const setorInput = document.getElementById("setor").value.toLowerCase();
    const localizacaoInput = document.getElementById("localizacao").value.toLowerCase();
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        const description = card.querySelector("p").textContent.toLowerCase();
        const setor = card.querySelector(".setor").textContent.toLowerCase();
        const localizacao = card.querySelector(".localizacao").textContent.toLowerCase();

        const matchesSearch = title.includes(searchInput) || description.includes(searchInput);
        const matchesSetor = setorInput === "todos" || setor.includes(setorInput);
        const matchesLocalizacao = localizacao.includes(localizacaoInput);

        card.style.display = (matchesSearch && matchesSetor && matchesLocalizacao) ? "block" : "none";
    });
}

// Função para demonstrar interesse em investir
function investirProjeto(nomeProjeto) {
    alert(`Você demonstrou interesse em investir no projeto: ${nomeProjeto}.`);
}

// Função para avaliar um projeto
function visualizarProjeto(nomeProjeto) {
    alert(`Abrindo detalhes para avaliar o projeto: ${nomeProjeto}.`);
}
