const Manager = require("./lib/Manager");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');
const render = require('./lib/htmlRenderer');

let teamArr = [];

const questionsEng = [
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
	{
		type: 'input', name: 'github', message: "Enter github name"
	}
];
const questionsMgr = [
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
	{
		type: 'input', name: 'officeNumber', message: "What's the number?"
	}
];
const questionsIntern = [
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
	{
		type: 'input', name: 'school', message: "School Name?"
	}
];

function runProgram() {
	inquirer.prompt({
		type: 'list',
		message: 'Check employee role',
		name: 'role',
		choices: ['Engineer', 'Manager', 'Intern', 'End Data Entry']


	}).then(function (answers) {
		console.log(answers)

		if (answers.role === "Engineer") {
			createEngineer();
		}
		else if (answers.role === "Manager") {
			createManager();
		}
		else if (answers.role === "Intern") {
			createIntern();
		}
		else if (answers.role === "End Data Entry") {
			console.log("end employee data entry");
			//console.log(teamArr);
			const htmlRender = render(teamArr)
			//console.log(holdRender);
			fs.writeFile(outputPATH, htmlRender, function (err) {
				if (err) {
					console.log(err)
				}
			})
		}
	})
}

function createEngineer() {
	inquirer.prompt(questionsEng)
		.then(function (answers) {
			console.log(answers)
			var engineer1 = new addEngineer(answers.name, answers.id, answers.email, answers.github);
			teamArr.push(engineer1);
			console.log(teamArr);
			runProgram();

		})
};
function createManager() {
	inquirer.prompt(questionsMgr)
		.then(function (answers) {
			console.log(answers)
			var manager1 = new addManager(answers.name, answers.id, answers.email, answers.officeNumber);
			teamArr.push(manager1);
			runProgram();
		})
};
function createIntern() {
	inquirer.prompt(questionsIntern)
		.then(function (answers) {
			console.log(answers)
			var intern1 = new addIntern(answers.roleData, answers.name, answers.id, answers.email, answers.school);
			teamArr.push(intern1);
			runProgram();
		})
};
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
		this.role = "Engineer";
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
		this.role = "Manager";
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
		this.role = "Intern";
	}
	getIntern() {
		return `${this.name}, ${this.id}, ${this.email}, ${this.school}`;
	}
}
