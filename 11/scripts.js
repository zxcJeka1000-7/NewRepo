"use strict";

// Аккордеон для подробностей



var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


let petModal = document.getElementById("petModal");
let resultModal = document.getElementById("resultModal");

function openPetForm() {
    petModal.style.display = "block";
}

function closePetModal() {
    petModal.style.display = "none";
}

function closeResultModal() {
    resultModal.style.display = "none";
}

function showPetResult() {
    const walks = document.getElementById("walks").value;
    const lifespan = document.getElementById("lifespan").value;
    const size = document.getElementById("size").value;

    let result = "Ваш результат таков: ";

    if (walks === "yes" && lifespan === "long" && size === "large") {
        result += "Вам в питомцы подойдут собаки, кошки-мейнкуны и домашние животные: козы, свинки, овцы и другие. Перейдите к нужным разделам сайта, чтобы узнать о них побольше =)";
    } else if (walks === "yes" && lifespan === "long" && size === "small") {
        result += "Для Вас комфортными будут кошки, совы, маленькие собаки. Узнайте о них далее в разделах сайта!";
    } else if (walks === "yes" && lifespan === "any" && size === "large") {
        result += "Птицы - отличные спутники д";
    } else if (walks === "yes" && lifespan === "any" && size === "small") {
        result += "Ручные птицы - отличные спутники для прогулок! Маленькие и компактные. Рассмотрите этот вариант в соответствующем разделе!";
    } else if (walks === "no" && lifespan === "long" && size === "large") {
        result += "Отличный друг домоседа - здоровая черепаха. Вы не любите гулять? Заведите капибару. Главное обеспечьте её ванной. А мы обеспечим Вас широким выбором!";
    } else if (walks === "no" && lifespan === "long" && size === "small") {
        result += "Маленькие и долгоживущие - черепашки, змеи, а десяток лет вас будут радовать канарейки и пауки-птицееды. Возьмите их в добрые руки! ";
    } else if (walks === "no" && lifespan === "any" && size === "large") {
        result += "Счастье - в моментах. Большие рыбки, осьминоги и медузы имеют короткую жизнь, но с Вами она будет лучшей. Как и у лисиц, енотов, ящериц и многих других. Узнайте больше!";
    } else if (walks === "no" && lifespan === "any" && size === "small") {
        result += "Они малы и прелестны. Их дни коротки, но наполните их жизнь смыслом. Хомяки, мыши, пауки, ежи, маленькие рыбки и попугаи - они ждут Вас в объявлениях!";
    } else {
        result += "Кажется, Вам подходят все питомцы. Как здорово!";
    }

    const petResultElement = document.createElement("p");
    petResultElement.textContent = result;

    // Отображаем результат в модальном окне
    const resultContainer = document.getElementById("petResult");
    resultContainer.innerHTML = ""; // Очищаем содержимое
    resultContainer.appendChild(petResultElement);

    // Открываем модальное окно с результатом
    resultModal.style.display = "block";
}

// Закрытие модального окна с результатом при клике вне области окна
window.onclick = function (event) {
    if (event.target == resultModal) {
        resultModal.style.display = "none";
    }
};


// КОНЕЦ ТЕСТА УРА // 




// Показать форму регистрации
function showRegistrationForm() {
    document.getElementById('registrationForm').style.display = 'block';
}

// Зарегистрировать пользователя
function registerUser() {
    // Здесь можно добавить логику отправки данных на сервер и обработки успешной регистрации
    alert('Поздравляем! Регистрация успешна.');
    // Очистить поля формы
    document.getElementById('registerForm').reset();
}

// Показать форму входа
function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
}

// Войти в аккаунт
function loginUser() {
    const fullName = document.getElementById('loginFullName').value;
    const password = document.getElementById('loginPassword').value;

    // Проверяем соответствие ФИО и пароля
    if (fullName && password) {
        // Здесь можно добавить логику проверки на сервере
        alert('Успех! Вход выполнен.');
        // Очистить поля формы
        document.getElementById('loginUser').reset();
    } else {
        alert('Пожалуйста, введите ФИО и пароль.');
    }
}


// ЗАКРЫТЬ ФОРМЫ ЕСЛИ КЛИКНУТЬ МИМО:
window.onclick = function (event) {
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');

    // Если клик произошел вне формы регистрации, закрываем её
    if (event.target == registrationForm) {
        registrationForm.style.display = 'none';
    }

    // Если клик произошел вне формы входа, закрываем её
    if (event.target == loginForm) {
        loginForm.style.display = 'none';
    }
}




// Проверка данных

let registeredFullName = '';
let registeredPassword = '';

// Показать форму регистрации
function showRegistrationForm() {
    document.getElementById('registrationForm').style.display = 'block';
}

// Зарегистрировать пользователя
function registerUser() {
    // Получаем значения из полей формы
    const fullName = document.getElementById('fullName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Сохраняем ФИО и пароль после успешной регистрации
    registeredFullName = fullName;
    registeredPassword = password;

    // Здесь можно добавить логику отправки данных на сервер и обработки успешной регистрации
    alert('Поздравляем! Регистрация успешна.');

    // Очистить поля формы
    document.getElementById('registerForm').reset();
}

// Показать форму входа
function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
}

// Войти в аккаунт
function loginUser() {
    // Получаем значения из полей формы входа
    const loginFullName = document.getElementById('loginFullName').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Проверяем соответствие ФИО и пароля
    if (loginFullName === registeredFullName && loginPassword === registeredPassword) {
        // Здесь можно добавить логику успешного входа
        alert('Успех! Вход выполнен.');

        // Очистить поля формы входа
        document.getElementById('loginUser').reset();
    } else {
        alert('Ошибка! Пожалуйста, проверьте правильность введенных данных.');
    }
}

// Закрыть модальное окно при клике за его пределами
window.onclick = function (event) {
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');

    // Если клик произошел вне формы регистрации, закрываем её
    if (event.target == registrationForm) {
        registrationForm.style.display = 'none';
    }

    // Если клик произошел вне формы входа, закрываем её
    if (event.target == loginForm) {
        loginForm.style.display = 'none';
    }
}


// Функция для проверки, все ли обязательные поля заполнены
function isRegistrationFormValid() {
    const fullName = document.getElementById('fullName').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Проверяем, что все обязательные поля не пустые
    if (fullName === '' || phoneNumber === '' || email === '' || password === '') {
        document.getElementById('registrationError').style.display = 'block';
        return false;
    } else {
        document.getElementById('registrationError').style.display = 'none';
        return true;
    }
}

// Зарегистрировать пользователя
function registerUser() {
    // Проверяем, что все обязательные поля заполнены
    if (!isRegistrationFormValid()) {
        return; // Прекращаем выполнение функции, если есть незаполненные поля
    }

    // Если все поля заполнены, продолжаем обработку регистрации
    // Здесь можно добавить логику отправки данных на сервер и обработки успешной регистрации
    alert('Поздравляем! Регистрация успешна.');

    // Просто скрываем форму регистрации
    document.getElementById('registrationForm').style.display = 'none';
}






// Объект для хранения данных зарегистрированного пользователя
const registeredUser = {
    fullName: '',
    password: ''
};

// Функция для проверки, все ли обязательные поля заполнены
function isRegistrationFormValid() {
    const fullName = document.getElementById('fullName').value.trim();
    const password = document.getElementById('password').value.trim();

    // Проверяем, что все обязательные поля не пустые
    if (fullName === '' || password === '') {
        document.getElementById('registrationError').style.display = 'block';
        return false;
    } else {
        document.getElementById('registrationError').style.display = 'none';
        return true;
    }
}

// Функция для регистрации пользователя
function registerUser() {
    // Проверяем, что все обязательные поля заполнены
    if (!isRegistrationFormValid()) {
        return; // Прекращаем выполнение функции, если есть незаполненные поля
    }

    // Получаем значения из полей формы регистрации
    const fullName = document.getElementById('fullName').value.trim();
    const password = document.getElementById('password').value.trim();

    // Сохраняем данные зарегистрированного пользователя
    registeredUser.fullName = fullName;
    registeredUser.password = password;

    // Очищаем поля формы регистрации
    document.getElementById('registerForm').reset();

    // Отображаем сообщение об успешной регистрации
    alert('Поздравляем! Регистрация успешна.');

    // Скрываем форму регистрации
    document.getElementById('registrationForm').style.display = 'none';
}

// Функция для входа пользователя
function loginUser() {
    // Получаем значения из полей формы входа
    const loginFullName = document.getElementById('loginFullName').value.trim();
    const loginPassword = document.getElementById('loginPassword').value.trim();

    // Проверяем, что оба поля не пусты
    if (loginFullName === '' || loginPassword === '') {
        alert('Пожалуйста, заполните все поля для входа.');
        return;
    }
    // Проверяем соответствие ФИО и пароля зарегистрированного пользователя
    if (loginFullName === registeredUser.fullName && loginPassword === registeredUser.password) {
        // Очищаем поля формы входа
        document.getElementById('loginUser').reset();

        // Отображаем сообщение об успешном входе
        alert('Успех! Вход выполнен.');

        // Скрываем форму входа
        document.getElementById('loginForm').style.display = 'none';
    } else {
        // Отображаем сообщение об ошибке при неправильных данных
        alert('Ошибка! Пожалуйста, проверьте правильность введенных данных.');
    }
}

// Функция для показа формы регистрации
function showRegistrationForm() {
    document.getElementById('registrationForm').style.display = 'block';
}

// Функция для показа формы входа
function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
}




// Давайте резервировать питооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооомцев


// Функция для открытия формы резервации
function openReservationForm() {
    // Проверяем, залогинен ли пользователь
    if (isUserLoggedIn()) {
        document.querySelector('.reservation-form').style.display = 'block';
    } else {
        alert('Для резервации необходимо войти в аккаунт или зарегистрироваться.');
    }
}

// Функция для проверки, залогинен ли пользователь (примерная реализация)
function isUserLoggedIn() {
    // Здесь можно реализовать проверку статуса авторизации пользователя
    // Например, проверка наличия токена или других данных аутентификации
    // Возвращаем true, если пользователь залогинен, иначе false
    return registeredUser.fullName !== '' && registeredUser.password !== '';
}

// Функция для отправки данных формы резервации
function submitReservationForm() {
    const meetingDate = document.getElementById('meetingDate').value;
    const meetingTime = document.getElementById('meetingTime').value;
    const message = document.getElementById('message').value;

    // Здесь можно добавить логику отправки данных на сервер или другие действия
    alert(`Ваша резервация успешно отправлена!\nДата встречи: ${meetingDate}\nВремя встречи: ${meetingTime}\nСообщение: ${message}`);

    openReservationModal();

    // Очищаем поля формы после отправки
    document.getElementById('reservationForm').reset();

    // Скрываем форму резервации
    document.querySelector('.reservation-form').style.display = 'none';
    showSuccessModal()
    
}



// ПОРА ДЕЛАТЬ СМААААААААААААААААААААААААААЙЛИКИ
// Функция для открытия модального окна после успешной резервации
function openReservationModal() {
    var modal = document.getElementById('successModal');
    modal.style.display = 'block';
}

// Функция для закрытия модального окна
function closeReservationModal() {
    var modal = document.getElementById('successModal');
    modal.style.display = 'none';
}

 /* кайф работает для того, чтобы под каждым объявлением вызывалась своя форма: */ 
function openReservationForm(button) {
    if (isUserLoggedIn()) {
        // Находим ближайший родительский элемент с классом 'pet-ad'
        var petAd = button.closest('.pet-ad');

        // Находим форму резервации внутри найденного объявления
        var reservationForm = petAd.querySelector('.reservation-form');

        // Если форма найдена, меняем стиль (display) на 'block' для отображения формы
        if (reservationForm) {
            reservationForm.style.display = 'block';
        }
    }
    else {
    // Если пользователь не залогинен, выводим сообщение об этом
    alert('Для резервации необходимо войти в аккаунт или зарегистрироваться.');
}
}

// добавляю надпись о резервации

function submitReservationForm(form) {
    // Получаем родительский элемент объявления (pet-ad) относительно формы
    var petAd = form.closest('.pet-ad');

    // Находим элемент под фотографией питомца
    var petImage = petAd.querySelector('.pet-image');

    // Создаем новый элемент для подписи
    var reservationStatus = document.createElement('p');
    reservationStatus.textContent = 'Зарезервирован ❤️';

    // Добавляем созданный элемент после фотографии питомца
    petImage.appendChild(reservationStatus);
}



// Объект для хранения состояния резервации каждого объявления
var reservationStatus = {};

function submitReservationForm(form) {
    // Получаем родительский элемент объявления (pet-ad) относительно формы
    var petAd = form.closest('.pet-ad');

    // Получаем уникальный идентификатор объявления (можно использовать, например, ID объявления)
    var adId = petAd.dataset.adId; // предположим, что ID объявления хранится в атрибуте data-ad-id

    // Проверяем состояние резервации для текущего объявления
    if (reservationStatus[adId]) {
        // Если объявление уже зарезервировано, ничего не делаем
        return;
    }

    // Находим элемент под фотографией питомца
    var petImage = petAd.querySelector('.pet-image');

    // Создаем новый элемент для подписи
    var reservationStatusText = document.createElement('p');
    reservationStatusText.textContent = 'Зарезервирован ❤️';

    // Добавляем созданный элемент после фотографии питомца
    petImage.appendChild(reservationStatusText);

    // Устанавливаем флаг резервации для текущего объявления в true
    reservationStatus[adId] = true;

    openReservationModal();
}


