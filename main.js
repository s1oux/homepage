document.getElementById(
  'current-date'
).textContent = new Date().toLocaleDateString();

document.getElementById('initial-date').textContent = new Date(
  0
).toLocaleDateString();
