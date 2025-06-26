document.addEventListener('DOMContentLoaded', function () {
  const modalForm = document.querySelector('#modal form');

  if (modalForm) {
    modalForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Stop form from submitting normally

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();

      if (name && email) {
        alert(`Thanks for registering, ${name}! We'll contact you at ${email}.`);
        modalForm.reset(); // Clear the form
        document.getElementById('modal').style.display = 'none'; // Close modal
      }
    });
  }

  // Modal open/close logic (if not already present)
  const modal = document.getElementById('modal');
  const openModalBtns = document.querySelectorAll('.open-modal');
  const closeModalBtn = document.getElementById('close-modal');

openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';
    });
  });

  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
