const logando = document.querySelector('.logar');

logando.addEventListener('click', function () {
    location.reload();
})

const container = document.querySelector('.container')
const redeSocialDarkMode = document.querySelectorAll(".lista_item_texto");

const mudarTema = document.querySelector('#colormode');

mudarTema.addEventListener('change', function(){
        container.classList.toggle('dark');


        redeSocialDarkMode.forEach(function (elemento) {
        elemento.classList.toggle('dark_texto')});

    });