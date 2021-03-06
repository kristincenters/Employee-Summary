const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const render = require('./lib/htmlRenderer');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');


let teamArr = [];
// team member data entry questions for three employee roles: manager, engineer and intern
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
		type: 'input', name: 'officeNumber', message: "What is the office number?"
	}
];
const questionsIntern = [
	{
		type: 'input', name: 'name', message: 'Enter Intern name',
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
// choose employee role, selection will prompt questions for specific role
function runProgram() {
	inquirer.prompt({
		type: 'list',
		message: 'Choose employee role',
		name: 'role',
		choices: ['Engineer', 'Manager', 'Intern', 'End Data Entry']


	}).then(function (answers) {

		if (answers.role === "Engineer") {
			createEngineer();
		}
		else if (answers.role === "Manager") {
			createManager();
		}
		else if (answers.role === "Intern") {
			createIntern();
		}
		// app ends with this choice and html files are dynamically generated 
		else if (answers.role === "End Data Entry") {
			const htmlPage = render(teamArr);
			fs.writeFile(outputPath, htmlPage, function (err) {
				if (err) {
					console.log(err)
				}
			})
		}
	})
}
// create new engineer, manager and intern objects with question prompts and output for html file
function createEngineer() {
	inquirer.prompt(questionsEng)
		.then(function (answers) {
			var engineer1 = new Engineer(answers.name, answers.id, answers.email, answers.github);
			teamArr.push(engineer1);
			runProgram();

		})
};
function createManager() {
	inquirer.prompt(questionsMgr)
		.then(function (answers) {
			var manager1 = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
			teamArr.push(manager1);
			runProgram();
		})
};
function createIntern() {
	inquirer.prompt(questionsIntern)
		.then(function (answers) {
			var intern1 = new Intern(answers.name, answers.id, answers.email, answers.school);
			teamArr.push(intern1);
			runProgram();
		})
};
runProgram();

