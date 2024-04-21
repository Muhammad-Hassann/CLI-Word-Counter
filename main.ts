#! /usr/bin/env node

import inquirer from 'inquirer'

const answer = await inquirer.prompt([
    {
        name: "sentence",
        message: "Enter sentence to count the words: ",
        type: "input"
    }
])

const words = answer.sentence.trim().split(" ")

console.log(`There is ${words.length} words in your sentence`)