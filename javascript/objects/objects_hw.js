//Напишите функцию, которая получает в качестве аргументов объект и строку и проверяет,
//есть ли в этом объекте свойство с именем, равным этой строке.
let object = {
		country: "Belarus",
		city: "Minsk",
		address: "Landera street",
	};
function checkString(object, str) {
	if (str in object) {
		return true
	} else {
		return false
	}
}
console.log(checkString(object, 'city'));

//Создайте объект для хранения своего любимого кулинарного рецепта.
//Он должен содержать название, ингредиенты и их необходимое количество (в виде вложенного объекта),
//а также количество порций (больше 1). Напишите функцию, которая получает "рецепт", подсчитывает, сколько каждого ингредиента нужно на одну порцию,
//и выводит информацию об этом в консоль.

let georgianCuisine = {
	name: "Жричодали",
	serving: 5,
	ingredients: {
		meet_kilos: 1,
		pasta_kilos: 0.5,
		pepper: "taste",
		salt: "taste",
	} 
}
 function letCookOne() {
 	let onePortion = {};
 	for(let key in georgianCuisine.ingredients){
 		onePortion[key] = georgianCuisine.ingredients[key]/georgianCuisine.serving;
 	}
 	console.log("For one portion " + georgianCuisine.name + " we r need: ", onePortion);
 }
 letCookOne(georgianCuisine);

 //Создайте объект "Цилиндр" (свойства – радиус и высота). Добавьте в него метод, который считает объём цилиндра (используя this).

let cylinder = {
	radius: 12,
	height: 20,
	getVolume() {
		return this.radius*this.radius*Math.PI*this.height
	}
}
console.log(cylinder.getVolume());

//Выберите пингвина из списка вымышленных пингвинов на Википедии и опишите его в виде объекта (не менее трёх полей; например, имя, создатель и источник).
//Добавьте этому объекту свойство canFly. Добавьте два метода: sayHello, который выводит в консоль приветствие и представление вашего пингвина, и fly,
// который в зависимости от значения свойства canFly (true или false) определяет, может ли пингвин летать, и сообщает об этом в консоль.

let wanted = {
	family: "Penguins",
	name: "Kowalski",
	rank: "First Lieutenant",
	origin: "Madagascar",
	info: "A crafty group of penguins who try to escape the zoo to go back to Antarctica",
	comment: 'Armed and Dangerous',
	canFly: false,
	sayHello() {
		return "Hello, this is " + this.name
	},
	fly() {
		if (this.canFly == true) {
			return "And i'm can fly"
		} else {
			return "And i'm can't fly, but i wish to learn how..."
		}
	}
}
console.log(wanted.sayHello(), wanted.fly());
