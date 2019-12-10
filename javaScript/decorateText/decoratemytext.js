/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = function(){
    var buttonClicked = document.getElementById("biggerDecoration");
    buttonClicked.onclick = setTimer;
    var checkboxChecked = document.getElementById("blingCheckbox");
    checkboxChecked.onchange = bling;
};

function setTimer(){
	setInterval(biggerDecoration, 500);
}
function biggerDecoration() {
	var fontSize = document.getElementById('textArea').style.fontSize;
	if(!fontSize){
		fontSize = "12pt";
	}
	document.getElementById('textArea').style.fontSize = (parseInt(fontSize) + 2) + "pt";
        /*alert(fontSize);*/
}
function bling(){
	if(document.getElementById('blingCheckbox').checked){
		document.getElementsByTagName('body')[0].style.backgroundImage = "url(https://courses.cs.washington.edu/courses/cse190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)";
		document.getElementById('textarea').style.fontWeight = "bold";
		document.getElementById('textarea').style.color = "green";
		document.getElementById('textarea').style.textDecoration = "underline";
	}
	else{
		document.getElementsByTagName('body')[0].style.backgroundImage = "";
		document.getElementById('textarea').style.fontWeight = "normal";
		document.getElementById('textarea').style.color = "black";
		document.getElementById('textarea').style.textDecoration = "none";

	}
}