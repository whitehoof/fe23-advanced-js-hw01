"use strict"

// Advanced JS, hw01


class Employee {

	constructor(	name = new String, 
					age = new Number, 
					salary = new Number) {
		this._name = name
		this._age = age
		this._salary = salary
	}

	// геттери:
	get name() { return this._name }
	get age() { return this._age }
	get salary() { return this._salary }
	
	// сеттери:
	set name(str) { this._name = str }
	set age(num) { this._age = num }
	set salary(num) { this._salary = num }
}

class Programmer extends Employee {
	
	constructor(	name = new String, 
					age = new Number, 
					salary = new Number, 
					lang = new Array) {
			super(name, age, salary);
			this.lang = lang
		}
		
	// перероблений сеттер:
	get salary() { return this._salary * 3; }
}

// створюю обʼєкт:
const mary = new Employee(	'Siobhan Fitzpatrick', 
33, 
1300);
// перевіряю сеттер:
mary.age = 99;

// перевіряю геттер:
console.log(mary.age);

// створюю ще обʼєкти:
const moe = new Programmer(	'Moe Mobsson',
							44, 
							1500,
							['Norwegian', 'English', 'js']);

const vichu = new Programmer(	'Sivaramakrishna Vishwanathan',
								35, 
								1700, 
								['Hindi', 'Hebrew', 'php']);

const ichigo = new Programmer(	'Kyoko Fukada',
								41, 
								2000, 
								['Japanese', 'Korean', 'English', 'French']);

// виводжу обʼєкти в консоль:
console.group('EMPLOYEES:');
console.log(mary, 'Зарплатня: ' + mary.salary);
console.groupEnd();

console.group('PROGRAMMERS:');
console.log(moe, 'Зарплатня: ' + moe.salary);
console.log(vichu, 'Зарплатня: ' + vichu.salary);
console.log(ichigo, 'Зарплатня: ' + ichigo.salary);
console.groupEnd();
