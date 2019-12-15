/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
	var mazeState = false;
        //Mouse Enter ID start event//
	$("#start").mouseenter(function() {
		$(".boundary").removeClass("youlose");
		$("h2").text("Maze Started");
		mazeState = true;
	});
        //Mouse out of ID start or inside event//
	$("#start").mouseout(function(e) {
		if (e.relatedTarget.tagName === "BODY") {
			$(".boundary").each(function(){
				$(".boundary").addClass("youlose");
			});
			$("h2").text("You lose!");
			mazeState = false;
		}
		else{
			$("h2").text("Inside Maze");
			$(".boundary").removeClass("youlose");
			mazeState = true;
		}
	});
        //Mouse over the boundary class//
	$(".boundary").mouseover(function() {
		$(".boundary").addClass("youlose");
		$("h2").text("You lose");
	});
        //Mouse touched the end ID//
	$("#end").mouseover(function() {
		if (mazeState) {
			$("h2").text("You win!");
			$(".boundary").removeClass("youlose");
		}
		else{
                    $("h2").text("You lose");
		}
			mazeState = false;
	});
});
