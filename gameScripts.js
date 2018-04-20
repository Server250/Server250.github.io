var codeToGuess = "";
var numAttempts = 8;
var currentDifficulty;

var attemptsLabel;
var inputFields = document.getElementsByName("numInput");

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) 
{
  return Math.floor(Math.random() * Math.floor(max));
}

function initialiseGame(difficulty)
{ 
    numAttempts = 8;
    codeToGuess = "";
    
    if (difficulty>0 && difficulty<=3)
    {
       
        setupUi(difficulty);
       
        // Difficulty of game decides how long code is
        for (var i = 0; i<(4 + (difficulty-1)); i++)
        {
            
            codeToGuess = codeToGuess.concat(getRandomInt(9)+1);
            
        }
    
        //console.log("Code to guess: " + codeToGuess);
    
    }
    else
    {
        
        console.log("ERROR: Difficulty must be 1, 2 or 3.");
        
    }    
    
}

function setupUi(dif)
{
    
    // Enable check button
    document.getElementById("checkButton").disabled = false;
    
    // Hide success text
    document.getElementById("successLabel").classList.add("hidden");
    
    // Reset all inputs
    for (var i = 0; i<6; i++)
    {
        
        clearInField(i);
        inputFields[i].value = "";
        inputFields[i].classList.remove("hidden");

    }
    
    // Remove fields not used
    switch (dif)
    {
        
        case(1):
            inputFields[4].classList.add("hidden");
            inputFields[5].classList.add("hidden");
            currentDifficulty=1;
        break;
        case(2):
            inputFields[5].classList.add("hidden");
            currentDifficulty=2;
        break;
        default:
            currentDifficulty=3;
        
    }
    
    attemptsLabel = document.getElementById("attemptsLabel");
    attemptsLabel.innerHTML = "Attempts: " + numAttempts;
    
}

function clearInField(index)
{
    
    inputFields[index].classList.remove("correct");
    inputFields[index].classList.remove("partialWrong");
    inputFields[index].classList.remove("fullWrong");
    
}

// Check what's correct
function checkCode()
{
    
    var numCorrect = 0;
    
    for (var i = 0; i<(4 + (currentDifficulty-1)); i++)
    {
        
        if (inputFields[i].value != "")
        {
        
            // Isn't fully correct
            if (inputFields[i].value != codeToGuess.charAt(i))
            {
            
                if (codeToGuess.indexOf(inputFields[i].value) >=0)
                {
                
                    // Is partially right
                    clearInField(i);
                    inputFields[i].classList.add("partialWrong");
                
                
                }
                else
                {
                
                    // Is wrong
                    clearInField(i);
                    inputFields[i].classList.add("fullWrong");
                
                }
                        
            }
            else
            {
            
                // Is right
                clearInField(i);
                inputFields[i].classList.add("correct");
                numCorrect++;
            
            }
        
        }
        else
        {
            
            clearInField(i);
            
        }
        
    }
    
    numAttempts--;
    document.getElementById("attemptsLabel").innerHTML = "Attempts: " + numAttempts;
    
    if (numCorrect == (4 + (currentDifficulty-1))) // If all correct
    {
        
        // Make success text shown
        document.getElementById("successLabel").classList.remove("hidden");
        
        endGame();
        
    }
    else if (numAttempts == 0) // If game lost
    {
        
        // Make loss text shown
        document.getElementById("lossLabel").classList.remove("hidden");
        
        endGame();
        
    }
    
}

// Quickly set UI for end of game
function endGame()
{
    
    // Open new game screen
    document.getElementById("difficultyContainer").classList.remove("hidden");
    document.getElementById("controlsContainer").classList.remove("hiddenControls");
    document.getElementById("controlsToHide").classList.remove("hidden");
        
    // Disable check button
    document.getElementById("checkButton").disabled = true;
    
}

// Show the code the user should've guessed when they hover loss text
function toggleLossLabelText(e)
{
    
    switch (e)
    {
        
       case 0:
        document.getElementById("lossLabel").innerHTML = codeToGuess;
       break;
       case 1:
        document.getElementById("lossLabel").innerHTML = "Game Over.";
       break;
        
    }
    
    
}

