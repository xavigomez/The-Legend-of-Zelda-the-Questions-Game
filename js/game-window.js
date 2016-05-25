window.addEventListener( "load", ready, false );

questions = window.opener.questions;

var timerRefresh
var timer = 15;

document.getElementById( 'answer-a').addEventListener( 'click', checkAnswerA, true);
document.getElementById( 'answer-b').addEventListener( 'click', checkAnswerB, true);
document.getElementById( 'answer-c').addEventListener( 'click', checkAnswerC, true);
document.getElementById( 'answer-d').addEventListener( 'click', checkAnswerD, true);

function ready(){

    fillQuestionWindow();

}

function checkAnswerA(){
    console.log( document.getElementById( 'answer-a').getAttribute( 'answer-check' ) );
    (parseInt(document.getElementById( 'answer-a').getAttribute( 'answer-check' )) === 1)? correctAnswer():wrongAnswer();
}

function checkAnswerB(){
    console.log( document.getElementById( 'answer-b').getAttribute( 'answer-check' ) );
    (parseInt(document.getElementById( 'answer-b').getAttribute( 'answer-check' )) === 1)? correctAnswer():wrongAnswer();
}
function checkAnswerC(){
    console.log( document.getElementById( 'answer-c').getAttribute( 'answer-check' ) );
    (parseInt(document.getElementById( 'answer-c').getAttribute( 'answer-check' )) === 1)? correctAnswer():wrongAnswer();
}
function checkAnswerD(){
    console.log( document.getElementById( 'answer-d').getAttribute( 'answer-check' ) );
    (parseInt(document.getElementById( 'answer-d').getAttribute( 'answer-check' )) === 1)? correctAnswer():wrongAnswer();
}

function correctAnswer(){
    document.getElementById('correct-sound').play();
    fillQuestionWindow();
}

function wrongAnswer(){
    document.getElementById('fail-sound').play();
    fillQuestionWindow();
}

function fillQuestionWindow(){

    shuffle(questions);

    var question = questions[0][0];

    var answerA = questions[0][1][0][0];
    var answerAChecker = questions[0][1][0][1];

    var answerB = questions[0][1][1][0];
    var answerBChecker = questions[0][1][1][1];

    var answerC = questions[0][1][2][0];
    var answerCChecker = questions[0][1][2][1];

    var answerD = questions[0][1][3][0];
    var answerDChecker = questions[0][1][3][1];

    document.getElementById( 'question-span' ).innerHTML = question;

    document.getElementById( 'answer-a-span-content').innerHTML = answerA;
    document.getElementById( 'answer-a').setAttribute( 'answer-check', parseInt(answerAChecker) );

    document.getElementById( 'answer-b-span-content').innerHTML = answerB;
    document.getElementById( 'answer-b').setAttribute( 'answer-check', parseInt(answerBChecker) );

    document.getElementById( 'answer-c-span-content').innerHTML = answerC;
    document.getElementById( 'answer-c').setAttribute( 'answer-check', parseInt(answerCChecker) );

    document.getElementById( 'answer-d-span-content').innerHTML = answerD;
    document.getElementById( 'answer-d').setAttribute( 'answer-check', parseInt(answerDChecker) );


    //Timer
    timeRefresh();



}

function timeRefresh(){
    timer = 10;

    ( isset( timerRefresh ) )? clearInterval( timerRefresh ) : false ;

    timerRefresh = setInterval(timerControl, 1000);
}

function timerControl() {

    if (timer !== -1) {
        console.log(timer);
        document.getElementById('time-span').innerHTML = timer;
        timer--;
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function isset () {

    var a = arguments,
        l = a.length,
        i = 0,
        undef;

    if (l === 0)
    {
        throw new Error('Empty isset');
    }

    while (i !== l)
    {
        if (a[i] === undef || a[i] === null)
        {
            return false;
        }
        i++;
    }
    return true;
}