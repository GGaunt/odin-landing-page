const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const openBtns = [document.getElementById('openModal'), document.getElementById('openModal2')];
const toggleButtons = document.querySelectorAll('.toggleForm');

openBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('active');
    overlay.classList.add('active');
  });
});

overlay.addEventListener('click', () => {
  modal.classList.remove('active', 'flipped');
  overlay.classList.remove('active');
});

toggleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.toggle('flipped');
  });
});
