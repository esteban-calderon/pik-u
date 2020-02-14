alert("hello");

function cambia() {
    var matera = document.getElementById('matera');
    var input = document.getElementById('mensaje');

    matera.innerHTML = input.value;
}