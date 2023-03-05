let hour=document.getElementById('hour')
let min=document.getElementById('min')
let sec=document.getElementById('sec')

const timeChange=()=>{
    setInterval(()=>{
        let date=new Date()
// console.log(date.getHours);
        let hours=date.getHours();
        let mins=date.getMinutes();
        let secs=date.getSeconds();
        let meridian=(hours>=12)?`pm`:`am`;
        hours=(hours>12)?hours-12:hours;
        if(hours<10){
            hours=`0${hours}`
        }
        if(mins<10){
            mins=`0${mins}`
        }
        if(secs<10){
            secs=`0${secs}`
        }
        console.log(hours,mins,secs)
        hour.innerText=`${hours}`;
        min.innerText=`${mins}`;
        sec.innerText=`${secs}`;
        ampm.innerText=`${meridian}`
    },1000)
}
timeChange();
