const infoBtns = document.querySelectorAll('.info__dot');
const infoHints = document.querySelectorAll('.info__hint');
const tabBtns = document.querySelectorAll('[data-tab]');
const tabCards = document.querySelectorAll('[data-tab-value]');

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

tabBtns.forEach(function(e) {
    e.addEventListener('click', function() {

        if(this.classList.value === 'products__tab') {
            tabBtns.forEach(function(element) {
                element.classList.remove('products__tab--active');
            })

            this.classList.add('products__tab--active');
        } else {
            this.classList.remove('products__tab--active');
        }

        for (let card of tabCards) {

            card.classList.add('none');

            if((card.dataset.tabValue === this.dataset.tab) || (this.classList.value === 'products__tab')) {
                card.classList.remove('none');
            }
        }

        swiper.update();
    })
})
