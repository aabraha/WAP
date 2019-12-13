/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = function(){
  document.getElementById("clicked").onclick=startRudy; 
};

var rudyTimer = (function(){
    let timer = null;
    function startType(){
        if(timer === null){
            timer = setInterval(afterTimer, 2000);
        }
        else{
            clearInterval(timer);
            timer = null;
        }
    }
    
    function afterTimer(){
           
        document.getElementById("output").innerHTML += "Rudy";
    }
    return {
        rudyReturn: function(){
            startType();
        }
    };
})();
function startRudy(){
    rudyTimer.rudyReturn();
}

/*function delayMsg() {
    setTimeout(booyah, 5000);
    document.getElementById("output").innerHTML = "Wait for it...";
}
function booyah() {
    // called when the timer goes off
    document.getElementById("output").innerHTML = "BOOYAH!";
}
 * 
 */
//==========timeInterval=============//
/*timer = null; // stores ID of interval timer
function delayMsg2() {
    if (timer === null) {
        timer = setInterval(rudy, 1000);
    } 
    else {
        clearInterval(timer);
        timer = null;
    }
}
function rudy() { // called each time the timer goes off//
document.getElementById("output").innerHTML += "Rudy!";
}
 * 
 */



