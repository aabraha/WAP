/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*global ANIMATIONS*/

"use strict";
window.onload = function () {

    document.getElementById("animationFontSize").onchange = function () {
        document.getElementById("textArea").style.fontSize = document.getElementById("animationFontSize").value;

    };

    document.getElementById("animationOptions").onchange = function () {
        document.getElementById("textArea").value = ANIMATIONS[document.getElementById("animationOptions").value];
    };

    document.getElementById("startAnimation").onclick = startAnimation;
    document.getElementById("stopAnimation").onclick = stopAnimation;
    document.getElementById("changeAnimationInterval").onclick = changeAnimationInterval;
};

var timer = null;
var framesCout = 0;
var animationArrFrames = [];

function startAnimation() {
    document.getElementById("startAnimation").disabled = true;
    document.getElementById("animationOptions").disabled = true;
    document.getElementById("stopAnimation").disabled = false;
    animationArrFrames = document.getElementById("textArea").value.split("=====\n");
    if (timer === null) {
        if (document.getElementById("changeAnimationInterval").checked) {
            timer = setInterval(draw, 50);
        } else {
            timer = setInterval(draw, 250);
        }
    }
}
function stopAnimation() {
    document.getElementById("startAnimation").disabled = false;
    document.getElementById("animationOptions").disabled = false;
    document.getElementById("stopAnimation").disabled = true;
    clearInterval(timer);
    timer = null;
    document.getElementById("textArea").value = animationArrFrames.join("=====\n");
    framesCout = 0;
}
function changeAnimationInterval() {
    var status = document.getElementById("changeAnimationInterval");
    if (timer !== null) {
        if (status.checked) {
            clearInterval(timer);
            timer = setInterval(draw, 50);
        } else {
            clearInterval(timer);
            timer = setInterval(draw, 250);
        }
    }
}

function draw() {
    var txtArea = document.getElementById("textArea");

    if (framesCout < animationArrFrames.length) {
        txtArea.value = animationArrFrames[framesCout];
        framesCout++;
    } else {
        txtArea.value = animationArrFrames[0];
        framesCout = 1;
    }
}