// Função para mostrar detalhes do projeto selecionado
function mostrarDetalhes(projeto) {
    const detalhesSection = document.getElementById('detalhes-projeto');
    const projectTitle = document.getElementById('project-title');
    const projectDescription = document.getElementById('project-description');

    // Alterar os detalhes com base no projeto selecionado
    if (projeto === 'projeto1') {
        projectTitle.textContent = "Projeto Energia Solar Comunitária";
        projectDescription.textContent = "Este projeto visa fornecer soluções de energia solar para comunidades de baixa renda, impactando positivamente o acesso à energia sustentável.";
    } else if (projeto === 'projeto2') {
        projectTitle.textContent = "Reciclagem Urbana Sustentável";
        projectDescription.textContent = "Focado em reciclagem urbana, este projeto promove a inclusão social e a sustentabilidade, melhorando a gestão de resíduos nas cidades.";
    }

    // Exibir a seção de detalhes do projeto
    detalhesSection.style.display = "block";
}

// Função para simular o investimento em um projeto
document.getElementById('form-investir').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter os dados do formulário
    const valorInvestimento = document.getElementById('valor-investimento').value;
    const planoBeneficio = document.getElementById('plano-beneficio').value;

    if (!valorInvestimento || !planoBeneficio) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Exibir um alerta com os dados do investimento
    alert(`Investimento Confirmado!\nValor: R$ ${valorInvestimento}\nPlano de Benefício: ${planoBeneficio}`);

    // Aqui, você pode adicionar lógica para registrar o investimento no backend
    // Por exemplo, fazendo uma chamada API para registrar o investimento

    // Limpar os campos após o envio
    document.getElementById('valor-investimento').value = '';
    document.getElementById('plano-beneficio').value = '';
});
