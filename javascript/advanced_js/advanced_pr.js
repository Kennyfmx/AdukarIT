// Дан код:
// let obj = { greeting: "Привет" };
// function func(surname, name) {
// alert(this.greeting + ', ' + surname + ' ' + name);
// }
// func();  // тут должно вывести 'привет, Иванов Иван'
// Добавьте в последнюю строчку метод call() так, чтобы на экран вывелось 'Привет, Иванов Иван'. Слово 'привет' возьмите из свойства объекта obj, а 'Иванов' и 'Иван' задайте как параметры функциями.

let obj = { 
	greeting: "Привет" 
};

// function func(surname, name) {
// 	alert(this.greeting + ', ' + surname + ' ' + name);
// }
// func.call(obj, 'Иванов', 'Иван');

//Перепишите задачу так, чтобы вместо call применялся apply.

function func(surname, name) {
	alert(this.greeting + ', ' + surname + ' ' + name);
}
func.apply(obj, ["Иванов", "Иван"])
