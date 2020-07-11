const showBtn = document.querySelector('.showbtn');
const overlay = document.querySelector('.overlay');

overlay.addEventListener('click', function () {
    this.style.display = 'none';
});

showBtn.addEventListener('click', function () {
    overlay.style.display = 'block';
});