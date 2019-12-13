/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


window.onload = function(){
    document.getElementById("btnAdd").onclick = clickHandler;
    //document.getElementById('btnAdd').onclick= accountModule;
};
var accountInfoList;
function clickHandler(){
var accountModule = (function(){
    let accountName;
    let accountBalance;
    
    function createAccount(){
        accountName = document.getElementById("accName").value;
        accountBalance = parseFloat(document.getElementById("deposit").value);
        accountInfoList.push({'Account name': accountName},{'Balance': accountBalance});
        var result;
        for(var key in accountInfoList){
            result += key+":" + accountInfoList[key];
        }
        document.getElementById('textArea').value=result;
    }
    return {
        createInterface: createAccount()
    };
    
})();
accountModule.createInterface();
}