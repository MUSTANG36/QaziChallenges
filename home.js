
// this is a comment line

// console.log('hello');

// alert(10000);

// alert('hello this is qazi');



// var age = prompt('What is your age?');

// document.getElementById('someText').innerHTML = age;


// function greeting(yourName){ 
//     var result = 'This is your name: '+ yourName;
//     console.log(result);
// }


// var firstName = prompt('What is your name');
//  greeting(firstName);


function ageInDays() {
    let brithYear = prompt("What year were you born on?");
    let cd = new Date();
    let currentYear = cd.getFullYear();

    let ageInDays = (currentYear - brithYear) * 365;

    //create and store 
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + ageInDays + 'days');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);

    //display
    document.getElementById('flex-box-result').appendChild(h1);
    console.log(textAnswer);

    document.getElementsById(ageResults);



}

function resetAge() {
    document.getElementById('ageInDays').remove();

}


function CatGenerator() {
    let image = document.createElement('img');
    let div = document.getElementById('flex-box-container-2');
    image.src = 'https://cdn2.thecatapi.com/images/MTc0MTAxNw.gif';
    div.appendChild(image);

}

function rpsGame(yourChoice) {

    let humanChoice, botChoice;

    //give us the id
    humanChoice = yourChoice.id;


    //Gerenate random number by 0-2 
    //Math.random get a random number by 000000000000-199999999.
    //math.floor rounds to the neart
    //* number is range
    botChoice = numberToChoice(randRPSInt());

    console.log(botChoice);
    let results = decideWinner(humanChoice, botChoice); //[0,1] human lost | bot won
    console.log(results);

    let message = finalMessage(results) // you won, 'message'": 'You won!' , 'color' , 'green' ,
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);




}


function randRPSInt() {
    return Math.floor(Math.random() * 2);

}

function numberToChoice(number) {
    return ['rock', 'scissor', 'paper'][number];

}

function decideWinner(yourChoice, computerChoice) {
    //object
    let rpsDatebase = {
        // what rock will win or lose
        'rock': { 'scissor': 1, 'rock': .05, 'paper': 0 },
        'scissor': { 'scissor': .05, 'rock': 0, 'paper': 1 },
        'paper': { 'scissor': 0, 'rock': 1, 'paper': .05 }
    }

    //this will return an array
    // yourScore = .05 | 1 | 0
    let yourScore = rpsDatebase[yourChoice][computerChoice];
    let computerScore = rpsDatebase[computerChoice][yourChoice];



    return [yourScore, computerScore];

}

function finalMessage([yourScore, computerScore]) {

    if (yourScore === 0) {
        return { 'message': 'You lost', 'color': 'red' }
    } else if (yourScore === 1) {
        return { 'message': 'You won', 'color': 'green' }
    } else {
        return { 'message': 'Tie Game', 'color': 'yellow' }
    }

}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    //json object 
    //this make it really easy to access any of these images
    let imagesDatebase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }



    //removes all images

    document.getElementById('rock').remove();

    document.getElementById('scissor').remove();

    document.getElementById('paper').remove();


    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatebase[humanImageChoice] + "'height=150 width=150 style=' box-shadow: 0px 10px 50px rgba(37, 50, 233,1)'>"


    botDiv.innerHTML = "<img src='" + imagesDatebase[botImageChoice] + "'height=150 width=150 style=' box-shadow: 0px 10px 50px rgba(243, 38, 24,1)'>"


    //translation: <h1 style='color:green'> You Won! </h1>
    messageDiv.innerHTML = "<h1 style ='color:" + finalMessage['color'] + "; font-size: 60px; padding:30px: '> " + finalMessage['message'] + "</h1>"



    document.getElementById('rpsChoicesDiv').appendChild(humanDiv);

    document.getElementById('rpsChoicesDiv').appendChild(botDiv);

    document.getElementById('rpsChoicesDiv').appendChild(messageDiv);


}


//challenge 4: Change all the button colors 

 //html collection 
//copying the btn-class in order to copyAllButtons
let allButtons = document.getElementsByTagName('button');
let copyAllButtons = [];


    

function buttonColorChange(colorBtn) {
   
    for (let i = 0; i < allButtons.length; i++) {
        copyAllButtons.push(allButtons[i].classList[1]);
    }

    var colorOption = document.getElementById("background").value;

    //assign to all buttons?? think i have to use innerHtml

    if (colorOption === 'red') {
        buttonsRed();
    } else if (colorOption === 'green') {
        buttonsGreen();
    } else if (colorOption === 'reset') {
        backgroundColorReset();
    } else if (colorOption == 'random') {
        randomColors();
    }


}

function buttonsRed() {
    // allButtons[i].classList[1] get the second class of the [i] button
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }

}

function buttonsGreen() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }

}

function randomColors() {

    let choices = ['btn-primary','btn-danger', 'btn-success', 'btn-warning'];

    for (let i = 0; i < allButtons.length; i++) {

        let randomButtonsColors = choices[Math.floor(Math.random() * 4)];
        allButtons[i].classList.remove(allButtons[i].classList[1]);

        allButtons[i].classList.add(randomButtonsColors);

    }

}
//This function won't work since copyAllButtons isn't working
function backgroundColorReset() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);

    }
    console.log(copyAllButtons);
}

/////////////////////////////////////////Challege 5: BlackJack////////////////////////////////////////////////////////////////////////////////////

let blackjackGame ={
    'you': {'scoreSpan' : '#your-blackjack-result', 'div': '#your-box',"score":0}
    'dealer': {'scoreSpan' : '#dealer-blackjack-result', 'div': '#dealer-box',"score":0}
}


//Query Selectors work like CSS
//if someone hits with someone with this ID, then even listener will run the function Blackjackhit
document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

function blackjackHit() {


    alert(' work bitch');

} 


