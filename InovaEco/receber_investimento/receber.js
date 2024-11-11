// Dados iniciais de investimentos (simulados)
const investimentosRecebidos = [
    { nome: "SolarInvest", valor: 300000, data: "10/10/2023" },
    { nome: "GreenPower Ltda", valor: 200000, data: "15/10/2023" },
    { nome: "EcoPartners", valor: 250000, data: "20/10/2023" }
];

// Função para calcular o total de investimentos e atualizar a barra de progresso
function atualizarInvestimento() {
    const totalMeta = 1000000;
    const totalRecebido = investimentosRecebidos.reduce((acc, invest) => acc + invest.valor, 0);
    const progresso = (totalRecebido / totalMeta) * 100;

    document.getElementById("total-investment").textContent = `R$ ${totalRecebido.toLocaleString()}`;
    document.querySelector(".progress").style.width = `${progresso}%`;
}

// Executa a atualização ao carregar a página
document.addEventListener("DOMContentLoaded", atualizarInvestimento);
