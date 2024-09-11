// ������� ������ "���������������!" � ��������� ���� (������ ����� ��������� �������� ����� ��� ����������)
var reserveBtn = document.querySelector('.reservation-button');
var modal = document.getElementById('reservationModal');

// ������� ������� ��� �������� ���������� ���� (�������)
var closeBtn = document.querySelector('.close');

// ��������� ��������� ���� ��� ����� �� ������ "���������������!"
reserveBtn.addEventListener('click', function () {
    modal.style.display = 'block';
});

// ��������� ��������� ���� ��� ����� �� �������
closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

// ��������� ��������� ���� ��� ����� �� ��� ��������� (���� ������������ ������� ��� ����)
window.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});


// ��������� ����������� � ��������� ��������� ����������� � ��������� ��������� ����������� � ��������� ��������� ����������� � ��������� ��������� ����������� � ���������

// ������� ������ "�����������" � ��������� ���� �����������
var registerBtn = document.querySelector('.register-button');
var registrationModal = document.getElementById('registrationModal');

// ������� ������� ��� �������� ���������� ���� ����������� (�������)
var closeRegistrationModal = registrationModal.querySelector('.close');

// ��� ������� �� ������ "�����������" ��������� ��������� ���� �����������
registerBtn.addEventListener('click', function () {
    registrationModal.style.display = 'block';
});

// ��� ����� �� ������� ��������� ��������� ���� �����������
closeRegistrationModal.addEventListener('click', function () {
    registrationModal.style.display = 'none';
});

// ��������� ��������� ���� ����������� ��� ����� �� ��� ��������� (���� ������������ ������� ��� ����)
window.addEventListener('click', function (event) {
    if (event.target == registrationModal) {
        registrationModal.style.display = 'none';
    }
});




// ������� ������ "����" � ��������� ���� �����
var loginBtn = document.querySelector('.login-button');
var loginModal = document.getElementById('loginModal');

// ������� ������� ��� �������� ���������� ���� ����� (�������)
var closeLoginModal = loginModal.querySelector('.close');

// ��� ������� �� ������ "����" ��������� ��������� ���� �����
loginBtn.addEventListener('click', function () {
    loginModal.style.display = 'block';
});

// ��� ����� �� ������� ��������� ��������� ���� �����
closeLoginModal.addEventListener('click', function () {
    loginModal.style.display = 'none';
});

// ��������� ��������� ���� ����� ��� ����� �� ��� ��������� (���� ������������ ������� ��� ����)
window.addEventListener('click', function (event) {
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    }
});



// ������� �������� ����� ����������� � ������ "������������������"
var registrationForm = document.querySelector('#registrationModal form');
var registerSubmitButton = document.querySelector('.register-submit-button');

// ��� �������� ����� ����������� ���������� ��������� �� �������� �����������
registrationForm.addEventListener('submit', function (event) {
    event.preventDefault(); // ������������� �������� ����� (��� �������)

    // ���������� ��������� �� �������� �����������
    showRegistrationSuccessMessage();
});

// ���������� ��������� �� �������� �����������
function showRegistrationSuccessMessage() {
    // ������� ������� ���������
    var successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = '�� ������� ������������������! ������ ������ ��������������� �������.';

    // ��������� ��������� � �������� body
    document.body.appendChild(successMessage);

    // ������� ��������� ����� 5 ������
    setTimeout(function () {
        successMessage.remove();
    }, 5000); // ��������� ����� � ������������� (� ������ ������, 5 ������)
}