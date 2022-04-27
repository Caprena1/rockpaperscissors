alert("Welcome To My Gamepage")



function greeting() {
    const name = prompt("What is your name?") 
    alert(`Hello, ${name}`)
}
greeting()



let response = prompt("Are you ready to play Rock, Paper, Scissor?") 
if(response === "yes" || response === "Yes" || response === "YES") {
    alert("Let's go!!")
}else if(response === "no" || response === "No" || response === "NO") {
    alert("No problem, maybe another time😊")

}

const choicesDisplay = document.querySelector('#choices')
const choices = ['rock', 'paper', 'scissors']
const computersAnswer = choices[Math.floor(Math.random() * choices.length)]
    const userChoice = document.querySelector('input[name="Game"]:checked').value;
    selectWinner(userChoice, computersAnswer)


function rockButton() {
    let selectWinner = userChoice + computerChoice {
       if(userChoice === choices[1] && computerChoice=== choices[1])
            alert:('You chose ${userChoice} and Computer chose ${computerChoice}, IT'S A TIE!!`)

            }else if(userChoice === choices[1] && computerChoice === choices[0]){ 
            alert:('You chose ${userChoice} and Computer chose ${computerChoice}, YOU WIN!!`)

            }
        }
    
    
}

function paperButton() {
    let choiceDisplay = document.querySelector("choices[1]").innerHTML 
    
}

function scissorsButton() {
    let choiceDisplay = document.querySelector("choices[2]").innerHTML 
    
}

// function addByThree() {
//     //Get the starting value
//     let countAsString = document.querySelector("#count3").innerHTML
//     //MUST CONVERT TO INTEGER
//     let countAsInteger = parseInt(countAsString) 
    
//     //Incrementing by one
//     let newCount = countAsInteger + 3

//     //Display the updated value
//     document.querySelector("#count3").innerHTML = newCount
    
// }