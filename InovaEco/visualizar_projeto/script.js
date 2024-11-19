function visualizarProjeto() {
    const projeto = {
        nome: "Energia Solar Comunitária",
        setor: "Energia",
        localizacao: "São Paulo - SP",
        descricao: "Soluções de energia solar para comunidades de baixa renda.",
        progresso: 65,
        valorNecessario: 100000,
        valorInvestido: 50000
    };

    // Salva os detalhes do projeto no localStorage
    localStorage.setItem('projetoDetalhes', JSON.stringify(projeto));

    // Redireciona para a página de detalhes (detalhes-projeto.html)
    window.location.href = 'detalhes-projeto.html';
}

// Função que é chamada ao carregar a página de detalhes
window.onload = function() {
    const projeto = JSON.parse(localStorage.getItem('projetoDetalhes'));

    // Preenche os dados do projeto na página
    if (projeto) {
        document.querySelector('.project-name').textContent = projeto.nome;
        document.querySelector('.project-description').textContent = projeto.descricao;
        document.querySelector('.progress .progress').style.width = `${projeto.progresso}%`;

        // Exibe o progresso e os valores de investimento
        document.querySelector('.investment-info').innerHTML = `
            <p><strong>Valor necessário para concluir:</strong> R$ ${projeto.valorNecessario}</p>
            <p><strong>Investido até agora:</strong> R$ ${projeto.valorInvestido}</p>
        `;
    }
};

// Função de Investimento (apenas exemplo, pode ser implementada conforme necessário)
function investirAgora() {
    alert("Você escolheu investir no projeto!");
}