document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const isActive = item.classList.contains('ativo');
    
    // Fecha todas as outras perguntas
    document.querySelectorAll('.faq-item').forEach(el => {
      el.classList.remove('ativo');
      el.querySelector('.faq-icon').textContent = '+';
    });
    
    // Abre apenas a clicada se não estiver ativa
    if (!isActive) {
      item.classList.add('ativo');
      button.querySelector('.faq-icon').textContent = '-';
    }
  });
});