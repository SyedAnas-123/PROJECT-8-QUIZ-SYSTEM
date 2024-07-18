#! /usr/bin/env node

import inquirer from "inquirer";

//user ke rrsponses ke answwrs store hiongen  is object me
const quiz :{
    question_1 :string;
    question_2 :string;
    question_3 :string;
    question_4 :string;
    question_5 :string;
} = await inquirer.prompt([
    //QUESTIONS
    {
        name : "question_1",
        type : "list",
        message : "WHAT IS THE CORRECT WAY TO CHECK IF 2 VALUES ARE NOT EQUAL ",
        choices: ["a == b" ,"a === b" , "a = b" , "a !== b"]

    },
    {
        name : "question_2",
        type : "list",
        message : "IS TYPE SCRIPT IS LIKE JAVA SCRIPT",
        choices: ["YES" ,"NO"]

    },
    {
        name : "question_3",
        type : "list",
        message : "IS JAVA SCRIPT IS LIKE JAVA SCRIPT",
        choices: ["YES" ,"NO"]

    },
    {
        name : "question_4",
        type : "list",
        message : "IS GOVERNOR AI COURSE WORTH IT ?",
        choices: ["YES" ,"NO"]

    },
    {
        name : "question_5",
        type : "list",
        message : "IS GOVERNOR A GOOD MAN ?",
        choices: ["YES" ,"NO"]

    }
]);

//for scores
let score : number = 0;

//swithc case if suer ansswr is correct or not 
switch(quiz.question_1){
    case"a !== b" :
    console.log("1. CORRECT");
    //increse score
    ++score;
    break;
    default :
    console.log("1. INCORRECT");

}

switch(quiz.question_2){
    case"YES" :
    console.log("2. CORRECT");
    //increse score
    ++score;
    break;
    default :
    console.log("2. INCORRECT");
}

switch(quiz.question_3){
    case"NO" :
    console.log("3. CORRECT");
    //increse score
    ++score;
    break;
    default :
    console.log("3. INCORRECT");
}

switch(quiz.question_4){
    case"NO" :
    console.log("4. CORRECT");
    //increse score
    ++score;
    break;
    default :
    console.log("4. INCORRECT");
}

switch(quiz.question_5){
    case"YES" :
    console.log("5. CORRECT");
    //increse score
    ++score;
    break;
    default :
    console.log("5.  INCORRECT");
}

console.log(`YOUR SCORE IS Score: ${score}`);
