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

function rpsGame(choice){

    let humanChoice, botChoice;

    //give us the id
    humanChoice = choice.id;

    botChoice  = 

    results = decideWinner(humanChoice, botChoice); //[0,1] human lost | bot won


    
}