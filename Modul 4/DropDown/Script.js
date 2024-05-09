// script.js
const dropdownItems = document.querySelectorAll('.dropdown-content a');

dropdownItems.forEach(item => {
  item.addEventListener('click', () => {
    alert(`Anda memilih: ${item.textContent}`);
  });
});
