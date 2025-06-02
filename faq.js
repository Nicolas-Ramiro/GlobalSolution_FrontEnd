document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    item.classList.toggle('ativo');

    const icon = button.querySelector('.faq-icon');
    icon.textContent = item.classList.contains('ativo') ? '-' : '+';
  });
});