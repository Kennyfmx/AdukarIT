let room = {};
room.width = 6.5;
room.length = 3.5;
room.height = 3; 

console.log(room);


let roomX = {
	x: 6.5,
	y: 3.5,
	z: 3
};

let roomSquare = room.width * room.length;
console.log(roomSquare);

console.log('x' in room);

console.log(delete 'x' in room);

// new object

let human = {
	name: 'Randy',
	surname: 'Marsh',
	age: 39,
	birthplace: 'South Park'
}

for (let propName in human) {
	console.log(propName + ': '+ human[propName]);
}
//
let point1 = {
	x: 11,
	y: 12
}
let point2 = point1;
point2.y = 11
console.log(point1.y);
// point1.y получит значение 11.
//new function

function transpose(point, deltaX, deltaY) {
	let newPoint = {};
	for (let property in point) {
		newPoint[property] = point[property];
	}
	newPoint.x = newPoint.x + deltaX;
	newPoint.y = newPoint.y + deltaY;
	return newPoint
}

let pointA = {
	x: 4,
	y: -2
}

let pointB = transpose(pointA, 6, 4);
console.log(pointA, pointB);

// practice

let obj = {
	a: 1,
	b: 2,
	c: 3
};

console.log(obj.c);
console.log(obj['c']);

for (let property in obj) {
	console.log(property + ': ' + obj[property])
}

// 2

let city = {};
city.name = 'Minsk';
city['population'] = 2000000
console.log(city);

// 3
let minsk = {};
	minsk.name = 'Minsk';
	minsk['population'] = 2000000;

let homiel = {};
	homiel.name = 'Homiel';
	homiel['population'] = 2000000;

let hrodno = {
	name: 'Hrodno',
	population: 2000000
};

let brest = {
	name: 'Brest',
	population: 2000000
};

let vitebsk = {
	name: 'Vitebsk',
	population: 10000 
};

let mahiley = {
	name: 'Mahiley',
	population: 100000
};

let country = [minsk, brest, homiel, vitebsk, hrodno, mahiley];
	
console.log(country);

// 4

function search(country) {
	for (let i = 0; i <= country.length; i++) {
		for (let property in country) {
			console.log(property + ': ' + country[property]);
		}
	}
}
search();
