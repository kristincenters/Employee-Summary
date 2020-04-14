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
function createManager() {
	inquirer.prompt(questions)
		.then(function (answers) {
			console.log(answers)
			var manager1 = new addManager(answers.name, answers.id, answers.email, answers.role);
			console.log(manager1);
			runProgram();
		})
};
function createIntern() {
	inquirer.prompt(questions)
		.then(function (answers) {
			console.log(answers)
			var intern1 = new addIntern(answers.name, answers.id, answers.email, answers.role);
			console.log(intern1);
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
		}
		else if (answers.role[0] === "Manager") {
			createManager();
		}
		else if (answers.role[0] === "Intern") {
			createIntern();
		}
		else if (answers.role[0] === "done") {
			console.log("we are done");
		}
	})
}
runProgram();

class addEmployee {
	constructor(name, id, email, role) {
		this.name = name;
		this.id = id;
		this.email = email;
		this.role = role;
	}
	getEmployee() {
		return `${this.name}, ${this.id}, ${this.email}, ${this.github}`;
	}
}
class addEngineer {
	constructor(name, id, email, github) {
		this.name = name;
		this.id = id;
		this.email = email;
		this.github = github;
	}
	getEngineer() {
		return `${this.name}, ${this.id}, ${this.email}, ${this.github}`;
	}
}
class addManager {
	constructor(name, id, email, officeNumber) {
		this.name = name;
		this.id = id;
		this.email = email;
		this.officeNumber = officeNumber
	}
	getManager() {
		return `${this.name}, ${this.id}, ${this.email}, ${this.officeNumber}`;
	}
}
class addIntern {
	constructor(name, id, email, school) {
		this.name = name;
		this.id = id;
		this.email = email;
		this.school = school;
	}
	getIntern() {
		return `${this.name}, ${this.id}, ${this.email}, ${this.school}`;
	}
}
//render();
//fs.writeFile(team.html, output, function() {

//	writeFile();
//}