const modal = document.querySelector('.modal');
const showLoginFormBtn = document.getElementById('show-login-form-btn');

showLoginFormBtn.addEventListener('click', function(){
    modal.style.display = 'block';
});

window.onclick = function(event){
    if(event.target==modal){
        modal.style.display = 'none';
    }
};