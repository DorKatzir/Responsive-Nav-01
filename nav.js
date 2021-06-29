const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');


burger.addEventListener('click', toggleMenu);

let show = false;

function toggleMenu (){
    
    if ( !show ){

        menu.classList.add('show');
        show = true;
        
    } else {
        
        menu.classList.remove('show');
        show = false;

    }
}