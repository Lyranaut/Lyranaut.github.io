document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});

var modal = document.getElementById("contactModal");
var btn = document.getElementById("openModalBtn");
var closeBtn = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Получаем элемент, в котором будет меняться текст профессии
const professionElement = document.getElementById("profession");

// Массив фраз для смены
const phrases = [
    "Python Developer",
    "Web Developer",
    "System Administrator",
    "Data Entry Specialist"
];

// Функция для смены текста
function changeProfession() {
    let index = 0;
    setInterval(() => {
        professionElement.textContent = phrases[index];
        index = (index + 1) % phrases.length;
    }, 2000); // Каждые 3 секунды меняем текст
}

// Вызываем функцию для смены текста
changeProfession();
