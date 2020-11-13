/*

Main
====
Description:
btnElement is the main script which controls the model, view
and controller for the game.

Use:
btnElement script is run on page load.

*/

// Goal variables
var economy = 50;
var covid = 50;
var wellbeing = 50;

// Initialise game
window.onload = function(){

    // Initialise view
    createProgressIndicators(); // Progress indicators for player goals
    createContainerDiv(); // Container for main game interface
    
    // Draw welcome message
    const welcomeMessage = `
        Welcome to a COVID-19 game prototype. 
        
        You play as a public health officer and you 
        will have to make choices in response to events 
        during the COVID-19 pandemic.

        You will have to manage trade-offs to ensure that 
        the country's COVID-19 risk, economy and the wellbeing 
        of the public stay in acceptable levels.

        Keep an eye on the bars at the top of the screen!

    `
    drawTextbox(welcomeMessage, 'left', 'welcomeMessage'); 

    // Add start button    
    addResponseButtons([{
        label: 'Start!',
        action: function(){}, 
    }], 'welcomeMessage');

}

// Generate random events
function randomEvent(){

    // Randomly select event
    const randomEvent = randomEvents[Math.floor(Math.random() * Math.floor(randomEvents.length))]; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

    // Display event to player
    const id = `randomEvent-${Math.random()}`
        drawTextbox(randomEvent.text, 'right', id);
        addResponseButtons(randomEvent.choices, id);
}

// Action on player making an intervention
function playerMadeChoice(btnElement, choice){
    
    // Get button choice id
    const id = btnElement.id;

    // Highlight chosen choice and disable others
    for(child of $(btnElement).parent().children()){
        
        // Highlight choice
        if(!(child.id == id)){
            $(child).removeClass('btn-light');
            $(child).addClass('btn-success');
        }

        // Disable further choices
        $(child).attr('disabled', true);
    }

    // Simulate effects of player choice
    choice.action();
        // Within min-max value range
        covid = Math.max(Math.min(covid,100),0);
        economy = Math.max(Math.min(economy,100),0);
        wellbeing = Math.max(Math.min(wellbeing,100),0);
        console.log(`COVID = ${covid}`, `Economy = ${economy}`, `Wellbeing = ${wellbeing}`)

    // Relay effects to player view
    updateProgress();

    // Get new random event
    randomEvent();

    // Scroll down window
    $("#container-div").animate({ scrollTop: $("#container-div")[0].scrollHeight }, 1000);

    // Check for lose condition
    if(covid>=100){alert('You lose! COVID-19 cases rose too high!')}
    if(economy<=0){alert('You lose! The economy crashed too far!')}
    if(wellbeing<=0){alert(`You lose! The public's wellbeing fell too much!`)}
}