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

// Swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,
  
    slidesPerView: 4,
    spaceBetween: 42,
    freeMode: true,

    // Navigation arrows
    navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    }
  });