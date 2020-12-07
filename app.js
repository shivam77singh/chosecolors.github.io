const menu__btn = document.querySelector('#menu')
const nav__links = document.querySelector('.nav__links');
const btn = document.getElementById('btn');
const nav__link = document.getElementsByClassName('nav__link')


menu__btn.addEventListener('click', function (){
    menu__btn.classList.toggle('change');
    nav__links.classList.toggle('nav__active');
});


const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#menu__home')
    const aboutMenu = document.querySelector('#menu__about')
    const servicesMenu = document.querySelector('#menu__services')
    let scrollPos = window.scrollY

    // adds 'highlight' class to any menu icon
    if(window.innerWidth > 750 && scrollPos < 550){
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    } else if(window.innerWidth > 750 && scrollPos < 1200){
        homeMenu.classList.remove('highlight')
        aboutMenu.classList.add('highlight')
        servicesMenu.classList.remove('highlight')
        return
    } else if(window.innerWidth > 750 && scrollPos < 2345){
        servicesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }

    if((elem && window.innerWidth < 750 && scrollPos < 550) || elem){
        elem.classList.remove('highlight')

    }
    
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);


const navbar__scroll = document.querySelector('.navbar');
const elem2 = document.querySelector('.highlight__nav');

window.addEventListener('scroll', function(){
    if(window.scrollY > 100){
        navbar__scroll.classList.add('highlight__nav');
    }
    else {
        navbar__scroll.classList.remove('highlight__nav');
    }
});

function removeFunc(){
    let nav__activ = document.querySelector('.nav__active');
    let change__menu = document.querySelector('.change');
    if(nav__activ){
        nav__activ.classList.remove('nav__active');
        change__menu.classList.remove('change');
    }
}


document.querySelector('.logo').addEventListener('click', function(){
    document.querySelector('.home__page').scrollIntoView();
    removeFunc();
});


document.querySelector('#menu__home').addEventListener('click', function(){
    document.querySelector('.home__page').scrollIntoView();
    removeFunc();
});
document.querySelector('#menu__about').addEventListener('click', function(){
    document.querySelector('.about__page').scrollIntoView();
    removeFunc();
});
document.querySelector('#menu__services').addEventListener('click', function(){
    document.querySelector('.services__page').scrollIntoView();
    removeFunc();
});

