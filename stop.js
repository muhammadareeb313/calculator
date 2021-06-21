
var min=0
var sec =0
var msec=0;
var stopwatch;
var minutes=document.getElementById('min')
var seconds=document.getElementById('sec')
var miliseconds=document.getElementById('msec')
function start(){
    stopwatch = setInterval(function(){
        msec++
        miliseconds.innerHTML=msec
        if(msec>=100){
            sec++
            seconds.innerHTML=sec
            msec=0
        }else if(sec>=60){
            min++
            minutes.innerHTML=min
            sec=0
        }
},10)
var a = document.getElementById('start').disabled=true
}
function pause(){
clearInterval(stopwatch)
var b = document.getElementById('start').disabled=false
}
function reset(){ 
    var min=0
    var sec =0
    var msec=0;
    minutes.innerHTML = min
    seconds.innerHTML = sec
    miliseconds.innerHTML = msec

}