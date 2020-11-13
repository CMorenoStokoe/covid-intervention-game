/*

Controller
==========
Description:
This script allows the user the control the app,
changing the view and model.

Use:
This script is called by the main script when the user 
needs to be given the ability to control the view and model.

*/

// Add player response choice button
function addResponseButtons(choices, id){

    /* 
        Expected format for choices:
            {
                label: 'label text',
                action: onclick function(),
            }
    */

    // Create container div for all choices
    var div = document.createElement('DIV');
        document.getElementById(id).appendChild(div);

    // Add player choices
    for(const choice of choices){

        // Create player response button
        var btn = document.createElement('BUTTON');
            btn.innerText = choice.label;
            btn.id = `${id}-choice${Math.random()}`;
            btn.className = 'm-2 btn btn-light';

        // Default actions on buttons
        $(btn).click(function(){
            playerMadeChoice(this, choice); // main.js
        });
        
        // Append to textbox
        div.appendChild(btn);   

    }
    
}

    