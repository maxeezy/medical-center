let slider;
let burger;
let menu;
window.onload = () => {
    slider = document.querySelector('.slider-line');
    burger = document.querySelector('.burger');
    menu = document.querySelector('.menu');
    burger.onclick = () => {
        if (menu.classList.contains('none')) {
            menu.classList.remove('none');
            menu.classList.add('block');
        } else if (menu.classList.contains('block')) {
            menu.classList.remove('block');
            menu.classList.add('none');
        }
    };
};

document.addEventListener("click", function (e) {
    if (e.target.className === "button-x") {
        let width = document.querySelector('.slide-x').offsetWidth;
        let pos = -e.target.id * width + 'px';
        slider.style.left = pos;
    }
});






