document.addEventListener("DOMContentLoaded", function () {
  const selectAcompanantes = document.querySelector('select[name="ACOMPANANTES"]');
  const container = document.getElementById('acompanantes-container');

  if (!selectAcompanantes || !container) return;

  selectAcompanantes.addEventListener('change', function () {
    // Limpia los campos anteriores
    container.innerHTML = '';

    const cantidad = parseInt(this.value, 10) || 0;

    for (let i = 1; i <= cantidad; i++) {
      const input = document.createElement('input');
      input.type = 'text';
      input.name = `ACOMPANANTE_${i}`;
      input.placeholder = `Nombre acompañante ${i}`;
      input.required = true;
      container.appendChild(input);
    }
  });
});