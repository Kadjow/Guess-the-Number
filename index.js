let computerNumber
let userNumbers = []
let attemps = 0
let maxguesses = 6

function newGame(){
    window.location.reload()
}



function init(){
    computerNumber = Math.floor(Math.random() * 100 + 1)
    console.log(computerNumber)
}

function compareNumbers(){
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').textContent = userNumbers

    if(attemps < maxguesses){
        if(userNumber > computerNumber){
            document.getElementById('textOutput').innerHTML = 'Seu chute foi muito alto'
            document.getElementById('inputBox').value = ''
            attemps ++
            document.getElementById('attempts').innerHTML = attemps
        }
        else if (userNumber < computerNumber){
            document.getElementById('textOutput').innerHTML = 'Seu chute foi muito baixo'
            document.getElementById('inputBox').value = ''
            attemps ++
            document.getElementById('attempts').innerHTML = attemps
        }
        else{
            document.getElementById('textOutput').innerHTML = 'IHULL PARABENS VOCÊ ACERTOU!!!'
            attemps ++
            document.getElementById('attempts').innerHTML = attemps
            document.getElementById('inputBox').setAttribute('readonly', 'readonly')
        }
}
else{
    document.getElementById('textOutput').innerHTML = 'Você perdeu !!! O número correto é  : ' + computerNumber
    document.getElementsById('inputBox').setAttribute('readonly', 'readonly')
}
}