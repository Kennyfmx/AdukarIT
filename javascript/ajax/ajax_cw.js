addEventListener('DOMContentLoaded', function() {
	// document.querySelector('button').addEventListener('click', function(e) {
	// 	console.log('pressed');
	// })
	// console.log('message')
	//
	// function saySomething() {
	// 	console.log('I have something');
	// }
	// setTimeout(saySomething, 1500);
	// console.log('faster than you thinking');
	
	// let url = 'https://jsonplaceholder.typicode.com/posts/';
	// let xhr = new XMLHttpRequest();
	// xhr.addEventListener('readystatechange', function(e) {
	// 	// console.log(xhr.readyState);
	// 	if (xhr.readyState == 2)
	// 		console.log(xhr.status);
	// 	if (xhr.readyState == 4 && xhr.status == 200) {
	// 		let obj = JSON.parse(xhr.response);
	// 		// console.log(xhr.response);
	// 		obj.forEach(function(el) {
	// 			let div = document.createElement('div');
	// 			div.innerHTML = '<span>' + el.id + '</span> <span>' + el.body + '</span>';
	// 			document.body.appendChild(div);
	// 		});
	// 	}
	// });
	// xhr.open('GET', url, true); //false асинхронный/синхронный
	// xhr.timeout = 2000;
	// xhr.send();
///
function sendRequest(url, callback, method = 'GET') {
	let xhr = new XMLHttpRequest();
	xhr.open(method, url, true);
	xhr.send();
	xhr.addEventListener('loadend', function() {
		callback(xhr.response);
	});
}
});
