const popbtn = document.querySelector('#popbtn');
const modal = document.querySelector('.modal');
const closebtn = document.querySelector('.close');

popbtn.onclick = function(){
    modal.style.display = 'block';
}

closebtn.onclick = function(){
    modal.style.display = 'none';
}

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = 'none';
    }
}