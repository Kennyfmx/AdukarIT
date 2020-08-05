function User(name) {
	this.name = name;
	this.sayHello = function() {
		console.log('Hello, I\'m ' + this.name);
	}
}
let vasia = new User('Vasia');
let petr = new User('Petr');
let anton = new User('Anton');

console.log(vasia);
console.log(anton);
petr.sayHello();

//!!желательно не создавать пустые функции
// function doNothing() {
// 	//this = {};
// 	//return 'some str';
// };

// let newFunction = new doNothing();
// console.log(newFunction);

function Car(color) {
	let _wheels = 4;
	this.color = color;
	this.drive = function() {
		console.log('This ' + this.color + ' car drives using ' + _wheels + ' wheels');
	}
}
let audi = new Car('green');
console.log(audi);
audi.drive();

//

let transport = {
	rides: true
}

let bike = {
	wheels: 2
}
//bike.__proto__ = transport; не испольовать, тоже самое, что ниже.
Object.setPrototypeOf(bike, transport);

console.log(bike.wheels);
console.log(bike.rides);

console.log(Object.prototype);


let brokenCar = {
	wheels: 4
}

Object.setPrototypeOf(brokenCar, transport);
brokenCar.rides = false
console.log(brokenCar);

//

let birds = {
	hasWings: true
}
function Penguin(name) {
	this.name = name;
}
Penguin.prototype = birds;
let gunter = new Penguin('Gunter');
console.log(gunter.hasWings);
console.log(gunter.name);



function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype.getFullName = function() {
	return this.firstName + ' ' + this.lastName;
}

let man = new Person('Vasia', 'Petrov');
console.dir(man);


function User(firstName, lastName, email, pwd) {
	Person.call(this, firstName, lastName);
	this.email = email;
	this.password = pwd;
}
User.prototype = Object.create(Person.prototype);

User.prototype.login = function(email, pwd) {
	return email == this.email && pwd == this.password;
}

let petr = new User('Petr', 'Ivanov', 'email@gmail.com', 'pass');
console.log(petr);

function Admin(firstName, lastName, email, pwd) {
	User.apply(this, arguments);
}

Admin.prototype = Object.create(User.prototype);
Admin.banHammer = function(email) {
	console.log('User with this ' + email + ' was banned');
}

let adminVasia = new Admin('Petr', 'Ivanov', 'email@gmail.com', 'password');
console.log(adminVasia);

//practice

function Machine() {
	this._enabled = false;
}
Machine.prototype.on = function() {
	this._enabled = true;
};
Machine.prototype.off = function() {
	this._enabled = false;
}

let machine = new Machine();

function Fridge(deltaT, minT) {
	Machine.call(this);
	let _temp = 20;
	this.deltaT = deltaT;
	this.minT = minT;
	this.on = function() {
		Machine.prototype.on.call(this);
		console.log('This fridge is on');
	}
	this.off = function() {
		Machine.prototype.off.call(this);
		console.log('This fridge is off');
		_temp = 20;
	}
	this.cool = function() {
		if (this._enabled == false)
			return;
		if (_temp > this.minT)
			_temp -= this.deltaT;
		else
			_temp = this.minT
		return _temp;
	}
}

Fridge.prototype = Object.create(Machine.prototype);
let atlant = new Fridge(1, -4);
atlant.on();
atlant.cool();
atlant.cool();
console.log(atlant.cool());

//classes
class Animal {
	constructor(type) {
		this.name = name;
	}
	run() {
		console.log(this.name + ' runs');
	}
}

let horse = new Animal('Horse');
horse.run();
console.dir(horse);

class Dog extends Animal {
	constructor(breed, name) {
		super('Dog');
		this.breed = breed;
		this.name = name;
	}
	run() {
		super.run();
		console.log('This dog\'s name is ' + this.name + ' and the breed is ' + this.breed)
	}
}

let pes = new Dog('Raptor', 'Dog');
pes.run();
