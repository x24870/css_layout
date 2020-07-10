
const popupBtn = document.querySelector('#pop-btn');
popupBtn.addEventListener('click', function(){
  var popup = document.querySelector('#pop1');
  popup.classList.toggle('show');
});