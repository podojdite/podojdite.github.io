// Получаем элементы
const modal = document.getElementById('myModal');
const btn = document.getElementById('openModal');
const span = document.getElementsByClassName('close')[0];

// Когда пользователь нажимает на кнопку, открывается модальное окно
btn.onclick = function() {
    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

// Когда пользователь нажимает на <span> (x), закрывается модальное окно
span.onclick = function() {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500); // Соответствует времени анимации
}

// Когда пользователь нажимает в любом месте за пределами модального окна, оно закрывается
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500); // Соответствует времени анимации
    }
}