let startBtnEl = $('#start-btn');
let primaryTextEl = $('#primary-text');
let secondaryTextEl = $('#secondary-text');
let buttonsEl = $('#buttons');

let correctAnswers = 0;
// QUESTION OBJECTS

let question1 = {
question: 'Commonly used data types include: ',
incorrect1: 'Strings',
incorrect2: 'Booleans',
incorrect3: 'Integers',
correct: 'Numbers',

}

function checkCorrect (event) {
}

function createButtons (num, buttonsEl) {
    for (let i = 0; i < num; i++) {
        let btnEl = $('<button>');
        btnEl.addClass('btn btn-primary btn-lg');
        buttonsEl.append(btnEl);
    }
}

function createQuestion(){
    primaryTextEl.text(question1.question);
    createButtons(4, buttonsEl);
}

function startQuiz(event) {
    event.preventDefault();

    secondaryTextEl.remove();
    startBtnEl.remove();
    createQuestion();

}

startBtnEl.on('click', startQuiz);

buttonsEl.on('click', checkCorrect);