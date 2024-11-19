document.getElementById('projectForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const projectName = document.getElementById('projectName').value;
    const projectDescription = document.getElementById('projectDescription').value;
    const projectType = document.getElementById('projectType').value;
    const projectAmount = document.getElementById('projectAmount').value;
    const projectImage = document.getElementById('projectImage').files[0];
  
    if (projectName && projectDescription && projectType && projectAmount) {
      const projectList = document.getElementById('projectList');
      const listItem = document.createElement('li');
      let imageHTML = '';
      
      if (projectImage) {
        const imageURL = URL.createObjectURL(projectImage);
        imageHTML = `<img src="${imageURL}" alt="Imagem do Projeto" style="max-width: 100px; margin-bottom: 10px;">`;
      }
  
      listItem.innerHTML = `
        ${imageHTML}
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
  