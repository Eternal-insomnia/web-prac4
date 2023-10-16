function show_information() {
    alert("Суворов А.В. ИКПИ-11 Практическая работа №4");
}

function show_avg(elem) {
    let x = parseInt(elem.value);
    if (!isNaN(x) && 3.00 <= x && x <= 5.00) {
        alert("Ваш средний балл - " + elem.value);
    }
    else {
        alert("Ошибка №1 - некорректный ввод");
    }
}

function send(surname, radio1, radio2, radio3) {
    let markProg = parseInt(radio1.value), 
        markMath = parseInt(radio2.value),
        markPhyz = parseInt(radio3.value);

    document.write("<h2>Фамилия: " + surname.value + "</h2>");
    document.write("<h2>Оценка по программированию: " + markProg + "</h2>");
    document.write("<h2>Оценка по математике: " + markMath + "</h2>");
    document.write("<h2>Оценка по физике: " + markPhyz + "</h2>");
    document.write("<h2>Рейтинг: " + ((markMath + markPhyz + markProg)/3 ) + "</h2>");
}

function validEmail() {
    var regex = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var myMail = document.getElementById("email").value;
    var valid = regex.test(myMail);
    if (valid) output = "Всё верно!";
    else output = "Переделать, переделать...";
    document.getElementById("message").innerHTML = output;

    return valid;
}