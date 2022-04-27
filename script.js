alert("Welcome To My Webpage")



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

const handleClick = (e) => {
    
    const computersAnswer = choices[Math.floor(Math.random() * choices.length)]
    const userChoice = document.querySelector('input[name="Game"]:checked').value;
    getResults(userChoice, computersAnswer)

}

const getResults = (userChoice, computerChoice) => {
    switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            alert(`You chose ${userChoice} and Computer chose ${computerChoice}, YOU WIN!!`)
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            alert(`You chose ${userChoice} and Computer chose ${computerChoice}, YOU LOSE!!`)
            break
        case 'scissorsscissors':
        case 'rockrock':
        case 'paperpaper':
            alert(`You chose ${userChoice} and Computer chose ${computerChoice}, IT'S A TIE!!`)
            break
    }

}


 
