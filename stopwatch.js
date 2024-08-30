let seconds = 0;
let minutes = 0;
 let hours = 0;
 
 const stopwatch = () =>{
    seconds = seconds + 1;
    if (seconds < 60){
        seconds = 0;
        minutes = minutes + 1;
    }
     
     if (minutes < 60){
        minutes = 0;
        hours = hours + 1;   
    }
}

const interval = setInterval(stopwatch,1000);

