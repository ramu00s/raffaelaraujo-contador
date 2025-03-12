document.addEventListener('DOMContentLoaded', function () {
  // Função para ajustar o padding-top do conteúdo
  function adjustContentPadding() {
      const header = document.getElementById('fixed-header');
      const content = document.querySelector('.content');
      if (header && content) {
          const headerHeight = header.offsetHeight;
          content.style.paddingTop = `${headerHeight}px`;
      }
  }

  // Ajusta o padding ao carregar a página e ao redimensionar a janela
  adjustContentPadding(); // Executa imediatamente
  window.addEventListener('resize', adjustContentPadding); // Executa ao redimensionar

  // Recalcula o padding ao mudar de aba
  const tabs = document.querySelectorAll('.nav-link');
  tabs.forEach(tab => {
      tab.addEventListener('shown.bs.tab', function () {
          adjustContentPadding(); // Recalcula o padding ao mudar de aba
      });
  });
});