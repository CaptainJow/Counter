const daysEL = document.getElementById("day") ; 
const hoursEL = document.getElementById("hour") ; 
const minutesEL = document.getElementById("minute") ; 
const secondsEL = document.getElementById("second") ; 

const wanted_date = "1 jan 2022"; 

function countdown(){
    const currentDate = new Date() ; 
   const  new_wanted_date = new Date(wanted_date) ; 
    const seconds = (new_wanted_date - currentDate)/1000 ; 
    const days = Math.floor( seconds/86400 ) ; 
    const hours = Math.floor(seconds/3600) %24 ; 
    const minutes = Math.floor(seconds/60) %60 ; 
    const secondsss = Math.floor(seconds)%60 ; 

    daysEL.innerHTML = days ; 
    hoursEL.innerHTML = hours  ; 
    minutesEL.innerHTML = minutes ; 
    secondsEL.innerHTML = secondsss ; 

}

function punk(time){
    return time <10 ?("0${time}") : time ; 
}
countdown() ; 
setInterval(countdown,1000);
