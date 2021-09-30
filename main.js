'use strict';
// var person = {
// 	name: "Amanda"
// }
// console.log(person.toString());
// Object.getPrototypeOf(person);
// var person1 = Object.create(person);
// console.log(person1);
// console.log(person1.name);

// var person1 = person.__proto__;  -----> !== object.creat(person) , == object.getprototypeof(person)

// console.log(person1.name);

// console.log(person1.__proto__ === person);


// const amandaw = prompt("enter your weight");
// const amandah = prompt("enter your height");

// const emadw = prompt("emad enter your weight");
// const emadh = prompt("emad enter your height");

// let amandab = amandaw / amandah ** 2;
// let emadb = emadw / emadh ** 2;

// if (amandab > emadb) {
// 	console.log(`amanda's BMI ${amandab} is higher than emad's BMI ${emadb}`);
// } else {
// 	console.log(`emad's BMI ${emadb} is higher than amanda's BMI ${amandab}`);
// }

// const names = ['amanda'];

// const name1 = names.push('emad')

// console.log(names);
// console.log(name1);

// const name2 = names.push('parya')

// const amanda = "Hello how are you?";

// console.log(amanda.indexOf('h'));


// const calcTip = function (bill) {
// 	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

// console.log(totals);

///////////////////// modal window by js


const showModal = document.querySelectorAll(".modal__show");
const modal = document.querySelector(".modal__window");
const closeModal = document.querySelector(".modal__close");
const overlay = document.querySelector(".overlay");

for (let i = 0; i < showModal.length; i++) {
	showModal[i].addEventListener('click', function () {
		modal.classList.remove("hidden");
		overlay.classList.remove("hidden");
	});
}

const closeModalFunc = function () {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};

closeModal.addEventListener('click', closeModalFunc);

overlay.addEventListener('click', closeModalFunc);

document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape' && !modal.classList.contains('hidden')) {	
		closeModalFunc();
	}	
});
