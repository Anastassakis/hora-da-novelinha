const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('isactive');
    menuLinks.classList.toggle('active');
});
const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.items');
const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left');
    
        if(isLeft){
            currentItem -= 1;
        } else {
            currentItem += 1;
        }
        if(currentItem >= maxItems){
            currentItem = 0;
        }
        if (currentItem < 0){
            currentItem = maxItems - 1;
        }
        items.forEach(item => item.classList.remove('current-item'));
        items[currentItem].scrollIntoView({
            inline:"center",
            behavior:"smooth",
        });
        items[currentItem].classList.add("current-item");
    });
});