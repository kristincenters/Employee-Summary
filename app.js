const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');
const render = require('./lib/htmlRenderer');

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
	{
		type: 'checkbox',
		message: 'Check employee role',
		name: 'role',
		choices: ['Engineer', 'Manager', 'Intern'],
	},
];
inquirer.prompt(questions)
	.then(function (answers) {
		console.log(answers)
	})
