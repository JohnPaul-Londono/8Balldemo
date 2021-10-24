var lifesAnswers = [
    "Yes, pendeja.",
    "Signs point to IDFK.",
    "Reply high, ask again.",
    "Ask again later whore.",
    "Better not tell you now cuz im naked.",
    "Cannot predict now, I dOnT WAnnA.",
    "Concentrate on the poops gurl.",
    "Don't count on it, fat slut.",
    "My reply is nNAAAAH.",
    "My sources say no, slut.",
    "Outlook not so good.",
    "Very doubtful."
];
// var myAnswer = Math.floor(Math.random() * lifesAnswers.length);
// console.log(lifesAnswers[myAnswer]);


function answer(){
    // We need the input value
    var inputAnswer = document.querySelector("#question").value;
    // We need to check if the value is worth anything
    // We need to do something based off that information
    if(inputAnswer == ""){
        document.querySelector("#response").innerText = "You need to ask a question!";
    } else {
        // Ball change happens here
        document.querySelector("#ballImg").src = "./imgs/ball.gif";
        setTimeout(swap,1200);
    }
}

function swap(){
    document.querySelector("#ballImg").src = "./imgs/ballStill.jpeg";
    var myAnswer = Math.floor(Math.random() * lifesAnswers.length);
    console.log(lifesAnswers[myAnswer]);
    document.querySelector("#response").innerText = lifesAnswers[myAnswer];
}

// Series of events to make ball gif shake
// button is clicked
// ballStill is replaced with ball.gif
// setTimeout for x amount of time
// time runs out, ball.gif goes back to ballStill and we see the answer