let startEl = document.getElementById('start');
let stopEl = document.getElementById('stop');
let resetEl = document.getElementById('reset');

var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

let hrEl = document.getElementById('hr');
let minEl = document.getElementById('min');
let secEl = document.getElementById('sec');
let countEl = document.getElementById('count');

let timer = false;

startEl.addEventListener("click",()=>{
    timer = true;
    stopWatch();
})

stopEl.addEventListener("click",()=>{
    timer = false;
})

resetEl.addEventListener("click",()=>{
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    hrEl.innerHTML = "00";
    minEl.innerHTML = "00";
    secEl.innerHTML = "00";
    countEl.innerHTML = "00";
})


function stopWatch() {
    if (timer == true) {
        count++;
  
        if (count == 100) {
            sec++;
            count = 0;
        }
  
        if (sec == 60) {
            min++;
            sec = 0;
        }
  
        if (min == 60) {
            hr++;
            min = 0;
            sec = 0;
        }
  
        let hrString = hr;
        let minString = min;
        let secString = sec;
        let countString = count;
  
        if (hr < 10) {
            hrString = "0" + hrString;
        }
  
        if (min < 10) {
            minString = "0" + minString;
        }
  
        if (sec < 10) {
            secString = "0" + secString;
        }
  
        if (count < 10) {
            countString = "0" + countString;
        }
  
        hrEl.innerHTML = hrString;
        minEl.innerHTML = minString;
        secEl.innerHTML = secString;
        countEl.innerHTML = countString;
        setTimeout(stopWatch, 10);
    }
}