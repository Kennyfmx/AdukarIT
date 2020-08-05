console.log('Все элементы label внутри таблицы. Должно быть 3 элемента.');
console.log(document.getElementById('age-list'));
console.log(document.querySelectorAll('td > label'));
let td = document.getElementById('age-list');
console.log(td.getElementsByTagName('label'));
//
console.log('Первую ячейку таблицы (со словом "Возраст")');
console.log(document.querySelectorAll('td > tr'));
console.log(document.querySelector('td'));
//
console.log('Вторую форму в документе.');
let form = document.getElementsByTagName('form');
console.log(form[1]);
//
console.log('Форму с именем search, без использования её позиции в документе.');
console.log(document.querySelector('form[name="search"]'));
//
console.log('Элемент input в форме с именем search. Если их несколько, то нужен первый.');
console.log(document.getElementsByTagName('input')[0]);
//
console.log('Элемент с именем info[0], без точного знания его позиции в документе.');
console.log(document.querySelector('input[name="info[0]"]'));
//
console.log('Элемент с именем info[0], внутри формы с именем search-person.');

let info = document.querySelector('[name="search-person"]');
console.log(info.querySelector('[name="info[0]"]'));
