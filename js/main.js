const infoBtns = document.querySelectorAll('.info__dot');
const infoHints = document.querySelectorAll('.info__hint');

infoBtns.forEach(function(element) {
    element.addEventListener('click', function(e){
        e.stopPropagation();
        this.parentNode.querySelector('.info__hint').classList.toggle('none');
    });
});

document.addEventListener('click', function(){
    infoHints.forEach(function(element) {
        element.classList.add('none');
    });
});

infoHints.forEach(function(element){
    element.addEventListener('click', (e) => e.stopPropagation());
});