const Engineer = require('./Develop/lib/Engineer');
const Intern = require('./Develop/lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');
const render = require('./Develop/lib/htmlRenderer');

const questions = [
	{
		type: 'input', name: 'name', message: 'Enter employee name',
		validate: function validateName(name) {
			return name !== '';
		},
	},
	{
		type: 'number', name: 'id', message: 'Enter employee ID',
		validate: function validateID(id) {
			return id !== '';
		},
	},
	{
		type: 'input', name: 'email',
		message: 'Enter employee email address',
		validate: function validateEmail(email) {
			return email !== '';
		},
	},

];
function createEngineer() {
	inquirer.prompt(questions)
		.then(function (answers) {
			console.log(answers)
			var engineer1 = new addEngineer(answers.name, answers.id, answers.email, answers.role);
			console.log(engineer1);
			runProgram();
		})
};

function runProgram() {
	inquirer.prompt({
		type: 'checkbox',
		message: 'Check employee role',
		name: 'role',
		choices: ['Engineer', 'Manager', 'Intern', 'done']

	}).then(function (answers) {
		console.log(answers)
		if (answers.role[0] === "Engineer") {
			createEngineer();

		} else if (answers.role[0] === "done") {
			console.log("we are done");
		}
	})
}
runProgram();


class addEngineer {
	constructor(name, id, email, github) {
		this.name = name;
		this.id = id;
		this.email = email;
		this.github = github;
	}
	getEngineer() {
		return `${this.name}, ${this.id}, ${this.email}`;
	}
}



