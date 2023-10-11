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
    document.write("<h2>Оценка по программированию: " + markProg.value + "</h2>");
    document.write("<h2>Оценка по математике: " + markMath.value + "</h2>");
    document.write("<h2>Оценка по физике: " + markPhyz.value + "</h2>");
    document.write("<h2>Рейтинг: " + ((markMath + markPhyz + markProg)/3 ) + "</h2>");
}