// const coll = document.getElementsByClassName('collapsible');

const coll = document.querySelectorAll('.collapsible');
console.log(coll.length);
for (let i=0; i < coll.length; i++){
    console.log(666);
    coll[i].addEventListener('click', function(){
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        console.log(555);
        if (content.style.display === 'block'){
            content.style.display = 'none';
        }else{
            content.style.display = 'block';
        }
    });
}