let hamburguer = document.querySelector('.hamburguer_navbar');
let bar1 = document.querySelector('.bar1');
let bar2 = document.querySelector('.bar2');
let bar3 = document.querySelector('.bar3');
let menu = document.querySelector('.wrap_navbar_movel')

function mostrarMenu(){
    hamburguer.classList.toggle('active');
    bar1.classList.toggle('active');
    bar2.classList.toggle('active');
    bar3.classList.toggle('active');
    menu.classList.toggle('active');
}

hamburguer.addEventListener('click', mostrarMenu);