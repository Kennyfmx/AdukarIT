// строгий режим 'use strict';

let obj = {
	a: 234,
	b: 345,
	c: 'avxd'
};
Object.defineProperty(obj, 'newKey', {
	writable: true,
	configurable: true,
	enumarable: false,
	value: 10
});
console.log(obj);
//console.log(Object.keys(obj));
for (let prop in obj) {
	console.log(prop);
}

///

let joey = {
	name: 'Joe',
	surname: 'Ivanov',
	birthday: '1968-01-02'
};

Object.defineProperty(joey, 'fullname', {
	enumarable: false,
	get: function() {
		return this.name + ' ' + this.surname;
	},
	set: function(value) {
		this.name = value.split(' ')[0];
		this.surname = value.split(' ')[1];
	}
})
console.log(joey.fullname);
joey.fullname = 'Joe Petrov';
console.log(joey);

///

//стрелочные функции

function func(a, b) {
	return a + b;
}
const func2 = (a, b) => {
	return a+b;
}
const func3 = (a, b) => a+b;
//
function func4(a) {
	return a*2;
}
const func5 = a => {return a*2;}
//
function func6() {
	return undefined;
}
const func7 = () => {return undefined;}
//

function drawPoint(x, y) {
	console.log(x, y);
}

let arr = [[6, 8], [9, 10], [11, 12]];
console.log(drawPoint(...arr[0]));
console.log(drawPoint([0],[0], [0],[1]));


/// модули

function f(a, b) {
	return a+b;
}

export {f};

//в том файле в который хотим импортировать функцию пишем

//в html  указываем в script type='modul';
// в js пишем
import {f} from './adress.js';



