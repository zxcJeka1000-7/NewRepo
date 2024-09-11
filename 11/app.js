// Находим кнопку "Зарезервировать!" и модальное окно (сейчас будем создавать основную форму для заполнения)
var reserveBtn = document.querySelector('.reservation-button');
var modal = document.getElementById('reservationModal');

// Находим элемент для закрытия модального окна (крестик)
var closeBtn = document.querySelector('.close');

// Открываем модальное окно при клике на кнопку "Зарезервировать!"
reserveBtn.addEventListener('click', function () {
    modal.style.display = 'block';
});

// Закрываем модальное окно при клике на крестик
closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Закрываем модальное окно при клике за его пределами (если пользователь кликнул вне окна)
window.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});


// закрываем регистрацию и открываем закрываем регистрацию и открываем закрываем регистрацию и открываем закрываем регистрацию и открываем закрываем регистрацию и открываем

// Находим кнопку "Регистрация" и модальное окно регистрации
var registerBtn = document.querySelector('.register-button');
var registrationModal = document.getElementById('registrationModal');

// Находим элемент для закрытия модального окна регистрации (крестик)
var closeRegistrationModal = registrationModal.querySelector('.close');

// При нажатии на кнопку "Регистрация" открываем модальное окно регистрации
registerBtn.addEventListener('click', function () {
    registrationModal.style.display = 'block';
});

// При клике на крестик закрываем модальное окно регистрации
closeRegistrationModal.addEventListener('click', function () {
    registrationModal.style.display = 'none';
});

// Закрываем модальное окно регистрации при клике за его пределами (если пользователь кликнул вне окна)
window.addEventListener('click', function (event) {
    if (event.target == registrationModal) {
        registrationModal.style.display = 'none';
    }
});




// Находим кнопку "Вход" и модальное окно входа
var loginBtn = document.querySelector('.login-button');
var loginModal = document.getElementById('loginModal');

// Находим элемент для закрытия модального окна входа (крестик)
var closeLoginModal = loginModal.querySelector('.close');

// При нажатии на кнопку "Вход" открываем модальное окно входа
loginBtn.addEventListener('click', function () {
    loginModal.style.display = 'block';
});

// При клике на крестик закрываем модальное окно входа
closeLoginModal.addEventListener('click', function () {
    loginModal.style.display = 'none';
});

// Закрываем модальное окно входа при клике за его пределами (если пользователь кликнул вне окна)
window.addEventListener('click', function (event) {
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    }
});



// Находим элементы формы регистрации и кнопку "Зарегистрироваться"
var registrationForm = document.querySelector('#registrationModal form');
var registerSubmitButton = document.querySelector('.register-submit-button');

// При отправке формы регистрации показываем сообщение об успешной регистрации
registrationForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем отправку формы (для примера)

    // Показываем сообщение об успешной регистрации
    showRegistrationSuccessMessage();
});

// Показываем сообщение об успешной регистрации
function showRegistrationSuccessMessage() {
    // Создаем элемент сообщения
    var successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = 'Вы успешно зарегистрировались! Теперь можете зарезервировать питомца.';

    // Добавляем сообщение к элементу body
    document.body.appendChild(successMessage);

    // Удаляем сообщение через 5 секунд
    setTimeout(function () {
        successMessage.remove();
    }, 5000); // Указываем время в миллисекундах (в данном случае, 5 секунд)
}