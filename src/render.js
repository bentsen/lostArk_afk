import { robot } from 'robotjs';
import { remote } from 'electron';

/*GLOBALS START*/
const buttonStart = document.getElementById('start');

const buttonClose = document.getElementById('close');

const spinner = document.getElementById('spinner')

let interval = null;
/*GLOBALS END*/

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
async function start()
{     
    interval = setInterval(() => {
        move();
    }, (Math.random() * (900000 - 600000)) + 600000);
}
/*Cursor moves and click*/ /*NOT DONE*/
function move()
{
    console.log("move er started");
    const height = window.screen.availHeight + 100/2;
    const width = window.screen.availWidth - 100/2; 

    const x = (Math.random() * (100 - 0) + 0) + width;
    const y = (Math.random() * (100 - 0) + 0) + height;

    robot.moveMouse(x,y);
    robot.mouseClick();
}
/*Stop program*/
function stop()
{
    clearInterval(interval);
}