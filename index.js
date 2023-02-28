
const timercontainer = document.getElementById("timer");


const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const castButton = document.getElementById("cast");

let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let flag =true;
let timer;

// function stopwatch(){
//     hour.innerHTML = updateTime(hours)
//     minute.innerHTML = updateTime(minutes)
//     second.innerHTML = updateTime(seconds)
//     milisecond.innerHTML = updateTime(miliseconds)

// };

function startTime(){
    if(flag){

        timer = setInterval(() => {

            miliseconds += 10;
            if(miliseconds == 1000){
                miliseconds = 0;
                seconds++;
        
            }
            if(seconds == 60){
                seconds = 0;
                minutes++;
            }
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
            timercontainer.innerText=`${hours} : ${minutes} : ${seconds} : ${miliseconds}`;
        flag=false;
        },10);
    }
}

function stopTime(){
    clearInterval(timer);
    flag=true;
}

function resetTime(){
    clearInterval(timer);
    hours = 0;
    minutes=0;
    seconds=0;
    miliseconds=0;
    timercontainer.innerText = `00 : 00 : 00 : 000`
    flag=true;
    
}
function castTime(){

}

function updateTime(time){
return (time < 10? "0" : "") +time;
}

startButton.addEventListener("click", startTime);
stopButton.addEventListener("click", stopTime);
resetButton.addEventListener("click", resetTime);
castButton.addEventListener("click", casttTime);