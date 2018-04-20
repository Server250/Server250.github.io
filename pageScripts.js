function inputLimit(callerField)
{

    // Regex to limit to numbers
    callerField.value = callerField.value.match(/^\d+$/);
    
}

function toggleControlsMenu()
{

    var menu = document.getElementById("controlsContainer");
    
    if (menu.classList.contains("hiddenControls"))
    {
    
        menu.classList.remove("hiddenControls");
        document.getElementById("controlsToHide").classList.remove("hidden");
        
    }
    else
    {
        
        menu.classList.add("hiddenControls");
        document.getElementById("controlsToHide").classList.add("hidden");
        document.getElementById("difficultyContainer").classList.add("hidden");
    
    }

}

function toggleNewGameMenu()
{

    var menu = document.getElementById("difficultyContainer");
    
    if (menu.classList.contains("hidden"))
    {
    
        menu.classList.remove("hidden");
    
    }
    else
    {
    
        menu.classList.add("hidden");
    
    }

}

function helpHider(type)
{
    
    switch (type)
    {
        
        case 0:
            document.getElementById("helpContainer").classList.add("hidden");
        break;
        case 1:
            document.getElementById("helpContainer").classList.remove("hidden");
        break;
        
    }
    
}
