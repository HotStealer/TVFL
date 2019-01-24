const guessField = document.querySelector('.guessField'),
      guessSubmit = document.querySelector('.guessSubmit'),
      guesses = document.querySelector('.guesses'),
      lastResult = document.querySelector('.lastResult'),
      lowOrHigh = document.querySelector('.lowOrHigh'),
      guessRestart = document.querySelector('.guessRestart');

let guessCount = 1;
let randomNumber = Math.floor(Math.random() * 100) +1;

const checkGuess = () => {
    let userGuess = Number(guessField.value);
    
    if(guessCount === 1){
        guesses.textContent = "Eelnevad pakkumised: ";
    }
    
    guesses.textContent += `${userGuess} `;
    
    if(userGuess === randomNumber){
        lastResult.textContent = "Palju õnne sa võitsid";
        lastResult.style.color = 'green';
    }else if(guessCount === 10){
        lastResult.textContent = "Mäng läbi";
        guessField.disabled = true;
        guessSubmit.disabled = true;
        guessRestart.style.visibility = 'visible';
        guessRestart.onclick= location.reload();
    }else{
        lastResult.textContent = "Vale vastus";
        lastResult.style.color = 'red';
        
        const lowOrHighText = 'Viimane pakkumine oli liiga ';
        
        if(userGuess < randomNumber){
            lowOrHigh.textContent = lowOrHighText + "madal";
           }else if(userGuess > randomNumber){
            lowOrHigh.textContent = lowOrHighText + "kõrge";
        }
    };
    
    guessCount++;
    guessField.value = '';
    guessField.focus();
};

guessSubmit.addEventListener('click',checkGuess);
//guessRestart.addEventListener('onclick',window.location.reload);
// join push includes