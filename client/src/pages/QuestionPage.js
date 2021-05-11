const fs = require('fs');
const inquirer = require('inquirer');
const open = require('open');
const questions = require('./questions');
const buildHTMLTemplate = require('./template');

async function main() {
    try {
        const userData = await inquirer.prompt(questions);

        const html = buildHTMLTemplate(userData);
    
        fs.writeFileSync('./index.html', html);
    
        console.log('File was successfully written.');
        await open('./index.html');
    
        console.log('Check your browser!');
    } catch (error) {
        console.log(error);
    }
}

main();
