document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-pane');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', function(e) {
        e.preventDefault();
  
        // Remove a classe 'active' de todas as abas e conteúdos
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(tc => tc.classList.remove('show', 'active'));
  
        // Adiciona a classe 'active' à aba clicada
        this.classList.add('active');
  
        // Mostra o conteúdo correspondente
        const target = this.getAttribute('href');
        document.querySelector(target).classList.add('show', 'active');
      });
    });
  });