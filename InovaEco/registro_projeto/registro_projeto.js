document.getElementById('projectForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const projectName = document.getElementById('projectName').value;
  const projectDescription = document.getElementById('projectDescription').value;
  const projectType = document.getElementById('projectType').value;
  const projectAmount = document.getElementById('projectAmount').value;

  if (projectName && projectDescription && projectType && projectAmount) {
      const projectList = document.getElementById('projectList');
      const listItem = document.createElement('li');
      listItem.innerHTML = `
          <strong>${projectName}</strong><br>
          Tipo: ${projectType}<br>
          Descrição: ${projectDescription}<br>
          Valor de Investimento: R$ ${parseFloat(projectAmount).toFixed(2)}
      `;
      projectList.appendChild(listItem);

      // Limpar o formulário após o envio
      document.getElementById('projectForm').reset();

      // Exibir mensagem de sucesso
      alert("Projeto registrado com sucesso!");
  } else {
      alert('Por favor, preencha todos os campos.');
  }
});
