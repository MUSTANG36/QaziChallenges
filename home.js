'use strict';
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


function ageInDays(){
    let brithYear = prompt("What year were you born on?");
    let cd = new Date();
    let currentYear = cd.getFullYear();

    let ageInDays = (currentYear - brithYear) * 365;

    //create and store 
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' +ageInDays+ 'days');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);

    //display
    document.getElementById('flex-box-result').appendChild(h1);
    console.log(textAnswer);

    document.getElementsById(ageResults);
    


}

 function resetAge(){
    document.getElementById('ageInDays').remove();

}


function CatGenerator(){
    let image = document.createElement('img');
    let div = document.getElementById('flex-box-container-2');
    image.src = 'https://cdn2.thecatapi.com/images/MTc0MTAxNw.gif';
    div.appendChild(image);

}

function rpsGame(yourChoice){

    let humanChoice, botChoice;

    //give us the id
    humanChoice = yourChoice.id;
  
  
    //Gerenate random number by 0-2 
    //Math.random get a random number by 000000000000-199999999.
    //math.floor rounds to the neart
    //* number is range
    botChoice  = numberToChoice(randRPSInt());

    console.log(botChoice);
    let results = decideWinner(humanChoice, botChoice); //[0,1] human lost | bot won
    console.log(results);

   finalMessage(results) // you won, 'message'": 'You won!' , 'color' , 'green' ,

   // rpsFrontEnd(yourChoice.id, botChoice, message);
    
    


}


function randRPSInt(){
    return Math.floor(Math.random() * 2);

}

function numberToChoice(number){
     return ['rock', 'scissor', 'paper'][number];

}

function decideWinner(yourChoice,computerChoice){
    //object
    let rpsDatebase ={
        // what rock will win or lose
        'rock':{'scissor': 1 , 'rock': .05, 'paper':0 },
        'scissor':{'scissor':.05, 'rock': 0, 'paper':1 },
        'paper':{'scissor':0, 'rock': 1, 'paper':.05 }
    }

    //this will return an array
    // yourScore = .05 | 1 | 0
    let yourScore = rpsDatebase[yourChoice][computerChoice];
    let computerScore = rpsDatebase[computerChoice][yourChoice];

    

    return [yourScore, computerScore];

} 

function finalMessage([yourScore, computerScore]) {

    if(yourScore === 0){
        alert("Human Lost");
        return {'message': 'You lost', 'color' : 'red'}
    }else if (yourScore === 1){
        return {'message': }
    }else{
        alert("Tie Game");
    }

}