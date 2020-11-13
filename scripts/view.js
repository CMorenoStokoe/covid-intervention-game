/*

View
====
Description:
This script displays information to the user.

Use:
This script is called by the main script when information 
is needed to be displayed to the user.

*/

// Create container div for main game interface
function createContainerDiv(){

    var div = document.createElement('DIV');
        div.id = 'container-div';
        div.style.height = '80vh';
        div.className = 'd-flex flex-column align-items-end';
    document.body.appendChild(div);

};

// Create progress indicators for goals
function createProgressIndicators(){

    // Create container for progress bars
    var div = document.createElement('DIV');
        div.id = 'progress-div';
        div.style.height = '20vh';
        div.style.padding = '2rem';
        div.className = 'd-flex flex-row justify-content-around';
    document.body.appendChild(div);

    // Add progress bars
    createProgress('goal-covid-progress', 'progress-div', 'COVID risk', 'bg-danger');
    createProgress('goal-economy-progress', 'progress-div', 'Economy', 'bg-warning');
    createProgress('goal-wellbeing-progress', 'progress-div', 'Wellbeing', 'bg-info');

    // Create progress bars (clone)
    function createProgress(id, parent, label, color, templateId='progress_bar_template'){

        // Clone progress bar from existing template with all children and event handlers
        var div = document.getElementById(templateId),
            clone = div.cloneNode(true);
            clone.id = id;
            clone.children[0].className += ` ${color}`; // Set progress color

        // Add label
        var p = document.createElement('P');
            p.innerText = label;
            p.style.textAlign = 'center';

        // Append to parent on DOM
        var containerDiv = document.createElement('DIV');
            containerDiv.style.width = '20%';
            containerDiv.appendChild(clone);
            containerDiv.appendChild(p);
        document.getElementById(parent).appendChild(containerDiv);
    }

};

// Create dialog box
function drawTextbox(text, side, id){

    // Calculate margins to align text on left or right side of screen
    var margins = 'ml-auto';
    if(side == 'left'){margins = 'mr-auto'}

    // Create text box
    var p = document.createElement('P');
        p.id = id;
        p.innerText = text;
        p.className = `speech-bubble-${side} ${margins}`;
    document.getElementById('container-div').appendChild(p);
}

// Update progress and display to player view
function updateProgress(){

    // Update player progress
    setProgress('goal-covid-progress', covid);
    setProgress('goal-economy-progress', economy);
    setProgress('goal-wellbeing-progress', wellbeing);
        
    // Set progress bar
    function setProgress(id, value, range = false){
        
        // Select child progress bar div from parent
        progress = document.getElementById(id).children[0];
        
        // Set range of progress bar
        if(range){
            progress.ariaValueMin = range.min;
            progress.ariaValueMax = range.max;
        }

        // Set current value of progress bar and accompanying label
        progress.ariaValueNow = value;
            progress.style.width = `${value / progress.ariaValueMax * 100}%`;
    }

}

