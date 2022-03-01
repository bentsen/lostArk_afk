//import { robot } from 'robotjs';  //dosent work
import { remote } from 'electron';

const buttonStart = document.getElementById('start');

const buttonClose = document.getElementById('close');

const spinner = document.getElementById('spinner')

let timeOut;

/*Start or Stop program*/ 
buttonStart.addEventListener('click', event => {
    if(buttonStart.innerHTML === "Start"){
        buttonStart.textContent = 'Stop';
        spinner.style.display = "block";
        start();
    }
    else if(buttonStart.innerHTML === "Stop")
    {
        buttonStart.textContent = 'Start';
        spinner.style.display = "none";
        stop();
    }
});

/*Close program*/
buttonClose.addEventListener('click', event => {
    let w = remote.getCurrentWindow();
    w.close();
});

/*Timer for when next move will occur*/
function start()
{   
     timeOut = setInterval(() => {
        console.log("habibi");
    }, (Math.random() * (900 - 600)) + 600);
}

/*Cursor moves and click*/ /*NOT DONE*/
function move()
{
    console.log("move er started");
    const height = window.screen.availHeight + 100/2;
    const width = window.screen.availWidth - 100/2; 

    //TODO make a 'rectangle' for the poistions that the cusor will be able to click

    const x = (Math.random() * (100 - 0) + 0) + width;
    const y = (Math.random() * (100 - 0) + 0) + height;

    robot.moveMouse(x,y);
    robot.mouseClick();
}
/*Stop program*/
function stop()
{
    clearInterval(timeOut);
}