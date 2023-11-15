document.addEventListener('DOMContentLoaded', function () {
    var openModalBtn = document.getElementById('openModalBtn');
    var closeModalBtn = document.getElementById('closeModalBtn');
    var modal = document.getElementById('modal');
  
    if (openModalBtn && closeModalBtn && modal) {
      openModalBtn.addEventListener('click', function () {
        modal.style.display = 'flex';
      });
  
      closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
      });
    } else {
      console.error('Elementos não encontrados. Verifique os IDs dos elementos.');
    }
  });
  