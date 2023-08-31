const switchBtn = document.querySelector('#switch');

switchBtn.addEventListener('click', () => {
  switchBtn.classList.toggle('active');
  document.body.classList.toggle('dark');
})