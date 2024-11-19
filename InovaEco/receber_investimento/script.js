// Gráfico de Progresso dos Projetos
const ctxProgress = document.getElementById('progressChart').getContext('2d');
const progressChart = new Chart(ctxProgress, {
    type: 'bar',
    data: {
        labels: ['Energia Solar Comunitária', 'Reciclagem Urbana Sustentável', 'Reflorestamento', 'Gestão de Resíduos'],
        datasets: [{
            label: 'Progresso (%)',
            data: [75, 62.5, 40, 55],
            backgroundColor: '#BAFD02'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});

// Gráfico de Distribuição dos Investimentos
const ctxInvestment = document.getElementById('investmentChart').getContext('2d');
const investmentChart = new Chart(ctxInvestment, {
    type: 'pie',
    data: {
        labels: ['Energia Solar', 'Reciclagem Urbana', 'Reflorestamento', 'Gestão de Resíduos'],
        datasets: [{
            data: [300000, 250000, 200000, 50000],
            backgroundColor: ['#BAFD02', '#FFD700', '#FF8C00', '#FF6347']
        }]
    },
    options: {
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});
