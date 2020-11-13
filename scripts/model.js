/*

Model
=====
Description: 
This script processes the data behind the game.

Use:
This script is called by the main script when data processing
is required.

*/

// Random events
const randomEvents = [
    {
        text: 'COVID-19 levels are on the rise',
        choices: [
            {
                label: 'Lock down',
                action: function(){covid -= 10; wellbeing -= 10},
            },
            {
                label: 'Do not lock down',
                action: function(){covid += 10; wellbeing += 10},
            },
        ]
    },
    {
        text: 'Hospitals are critically low on bed space',
        choices: [
            {
                label: 'Lock down',
                action: function(){covid -= 20; wellbeing -= 10; economy -= 10;},
            },
            {
                label: 'Do not lock down',
                action: function(){covid += 20; wellbeing += 10},
            },
        ]
    },
    {
        text: 'Businesses are reporting falling profits',
        choices: [
            {
                label: 'Open pubs',
                action: function(){covid += 10; economy += 10},
            },
            {
                label: 'Close pubs',
                action: function(){covid -= 10; economy -= 10},
            },
        ]
    },
    {
        text: 'The WHO reports that masks are effective at reducing transmission',
        choices: [
            {
                label: 'Enforce mask wearing',
                action: function(){covid -= 10; wellbeing -= 10},
            },
            {
                label: 'Let people make up their own mind',
                action: function(){covid += 20;},
            },
        ]
    },
]