let burger = document.getElementById('burger');
let headerMenu = document.getElementById('header__menu');
let subscribe = document.getElementById('subscribe');

burger.addEventListener('click', burgerMenu);

function burgerMenu() {
    let element = document.getElementById('header__list_mob');
     element.classList.toggle('header__list_active');
};

subscribe.addEventListener('click', function() {
    let feedbackSubscribe = document.getElementById('feedback_subtitle_subscribe');
      feedbackSubscribe.classList.toggle('feedback_subtitle_subscribe_active');
});



window.addEventListener('scroll', function() {

    let scrollPos = window.scrollY;

    if(scrollPos > 775) {
        headerMenu.classList.add('header__fixed');
    } else {
        headerMenu.classList.remove('header__fixed');
    }

    // console.log(scrollPos)
});


const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};

function Refresh() {
  window.location.reload();
};
