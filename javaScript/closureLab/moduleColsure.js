(function(){
    
window.onload = function(){
  document.getElementById("buttonClick").onclick = accessPrivateRudy;
  document.getElementById("button").onclick = clickHandler;
  addAcc = accountModule();  
};

 

var rubyTimer = (function () {
    var timer = null;  // stores ID of interval timer
    function startRudy() {
        if (timer === null) {
            timer = setInterval(rudy, 1000);
        } else {
            clearInterval(timer);
            timer = null;
        }
    }

    function rudy() {   // called each time the timer goes off
        document.getElementById("output").innerHTML += " Rudy!";
    }
    
    return {
        returnRudy: function(){
            startRudy();
        }
    };
})();


function accessPrivateRudy(){
    rubyTimer.returnRudy();
}

var accountModule = (function () {
    var accountName = "";
    var deposit = 0;
    var accounts = [];

    
    function Account(accountName, deposit){
        this.name = accountName;
        this.deposit = deposit;
        this.show = function(){
            return "Account name : " + this.name + "    Balance : " + this.deposit;
        };
    }
    return function(){
        return{
            createAccount: function (account, depo) {

                let a = new Account(account, depo);
                accounts.push(a);
            },   
            print: function(element){
                element.value = "";
                  for(let i=0; i<accounts.length; i++){
                     element.value+= accounts[i].show()+"\n";
                }
            }
        };
    };
})();

var addAcc;

function clickHandler(){
    var form = document.getElementById("form");
    var textArea = document.getElementById("textArea");

    form.onsubmit = submit;

    function submit() {
        var name = document.getElementById("accountName").value;
        var balance = document.getElementById("deposit").value;
       
        addAcc.createAccount(name , balance);

        addAcc.print(textArea);       
        form.reset();
        return false;
    }
}
})();