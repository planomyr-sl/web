// scripts.js
// Añade el año actual al footer y cualquier lógica mínima.
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
