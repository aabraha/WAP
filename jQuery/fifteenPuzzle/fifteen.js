$(document).ready(function() {
    init();
});
var emptyDim = (function() {
                    var x = 300;
                    var y = 300;
                    return {
                        setX : function(xDim) {
                            x = xDim;
                        },
                        setY : function(yDim) {
                            y = yDim;
                        },
                        getX : function() {
                            return x;
                        },
                        getY : function() {
                            return y;
                        }
                    };
                })();
var positions = (function() {
                    var x = [["00","10","20","30"],
                             ["01","11","21","31"],
                             ["02","12","22","32"],
                             ["03","13","23","33"]];
                    return {
                        getDim : function(num) {
                            return x[(num-1)%4][Math.floor((num-1)/4)];
                        }
                    };
                })();
init = function() {
    var puzzleArea = $('puzzlearea');
    var divs = $("#puzzlearea div");
    var empty =[];
      
    // initialize each piece
    for (var i=0; i< divs.length; i++) {
        var div = divs[i];
        
        // calculate x and y for this piece
        var x = ((i % 4) * 100) ;
        var y = (Math.floor(i / 4) * 100) ;

        // set basic style and background
        $(div).addClass("puzzlepiece");
        $(div).css("left",x + 'px');
        $(div).css("top", y + 'px');
        $(div).css("background-image", 'url("background.jpg")');
        $(div).css("background-position", -x + 'px ' + (-y) + 'px');
        
        // store x and y for later
        div.x = x;
        div.y = y; 
        $(div).click(moveEvent);
        $(div).hover(highlight);
    }
    $("#shufflebutton").click(shufflepuzzle);        
};

removeMessage = function(){
    $("#message").remove();
};

displayMessage= function(){
    removeMessage();
    $("<p id='message'>Congratulations you won!!</p>").insertAfter("h1");
    $("p#message").css("color","Green");
    $("p#message").css("font-size","2em");
    $("p#message").css("font-weight","bold");
};

checkSolveStatus = function() {
    var puzzleArea = $('#puzzlearea');
    var divs = $("#puzzlearea div");
    // initialize each piece
    let i=0; 
    let status = true;
    while (status && i<divs.length) {
        let div = divs[i];
        let currentPosition = ($(div).position().top/100) + "" +($(div).position().left/100);
        if (positions.getDim(parseInt($(div).text())) !== currentPosition){
            status = false;
        }        
        i++;
    } 
    if (status) {
        displayMessage();
    }     
};

moveEvent = function() {
        movePiece(this);
        checkSolveStatus();
};

movePiece = function(elem) {
    var x = $(elem).position().left;
    var y = $(elem).position().top;
    if((Math.abs(x - emptyDim.getX())===100 || Math.abs(y-emptyDim.getY())===100) 
        && (x === emptyDim.getX() || y === emptyDim.getY())){
        $(elem).css("left",emptyDim.getX() + 'px');
        $(elem).css("top", emptyDim.getY() + 'px');
        $(elem).css("background-image", 'url("background.jpg")');
        $(elem).css("background-position", -emptyDim.getX() + 'px ' + (-emptyDim.getY()) + 'px');
        emptyDim.setX(x);
        emptyDim.setY(y);
        elem.x = emptyDim.getX();
        elem.y = emptyDim.getY();
        removeHoverProperty();
    }
      
};

highlight = function() {
    var x = $(this).position().left;
    var y = $(this).position().top;
    if((Math.abs(x - emptyDim.getX())===100 || Math.abs(y-emptyDim.getY())===100) 
        && (x === emptyDim.getX() || y === emptyDim.getY())){
        $(this).addClass("movablepiece");
    }
};

removeHoverProperty = function() {
    var divs = $(".movablepiece");
    for (var i = divs.length - 1; i >= 0; i--) {
        div =divs[i];
        let x = $(div).position().left;
        let y = $(div).position().top;
        if(!((Math.abs(x - emptyDim.getX())===100 || Math.abs(y-emptyDim.getY())===100) 
            && (x === emptyDim.getX() || y === emptyDim.getY()))){
            $(div).removeClass("movablepiece");
        }
    }
};

shufflepuzzle = function() {
        removeMessage();
        let xDim;
        let yDim;
        let currentPossibleMoves = [];
        let numberMoves = Math.floor(Math.random()*50)+10;
        let i = 0, counter = 0;
        while(counter <= numberMoves){
            i = 0;
            xDim = emptyDim.getX();
            yDim = emptyDim.getY();
            if((xDim - 100)>=0){
                currentPossibleMoves[i++] = {x: xDim - 100, y: yDim};
            }
            if ((yDim - 100)>=0){
                currentPossibleMoves[i++] = {x: xDim, y: yDim - 100};
            }
            if((xDim + 100) <= 300){
                currentPossibleMoves[i++] = {x: xDim + 100, y: yDim};
            }
            if ((yDim + 100) <= 300){
                currentPossibleMoves[i++] = {x: xDim, y: yDim + 100};
            }
            let randomMove = Math.floor(Math.random() * currentPossibleMoves.length);
            let currentMove = $(".puzzlepiece").filter(function() {
                return $(this).position().top === currentPossibleMoves[randomMove].y 
                        && $(this).position().left === currentPossibleMoves[randomMove].x;
            }).eq(0);
            if(currentMove.length){
                movePiece(currentMove);
            }
            counter++;
        }
        console.log(numberMoves);
};