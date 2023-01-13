var square=document.querySelectorAll(".square");
var reset=document.querySelector("#reset");
var message=document.querySelector("#message");
var body=document.querySelector("body");
header=document.querySelector("header");
var color=[];
var winColor,winIndex,goal,header;
var numSquare=6;
setSquareColor(numSquare);



for(var i=0;i<numSquare;i++)
{
    square[i].addEventListener("click",function(){
        
        if(winColor==this.style.backgroundColor)
            convertAll(winColor);
        else{
            this.style.backgroundColor=body.style.backgroundColor;
            message.textContent="Try Again!";
            message.style.color="red";
        }
    }
    )
}

function convertAll(winColor)
{
    for(var i=0;i<numSquare;i++)
    {
        square[i].style.backgroundColor=winColor.toString();
        header.style.backgroundColor=winColor.toString();
        reset.textContent="Play Again?";
        message.textContent="Correct";
        message.style.color=winColor.toString();
    }
   
}

function rgbGen(){
    var red=Math.floor(Math.random()*(256));
    var green=Math.floor(Math.random()*(256));
    var blue=Math.floor(Math.random()*(256));
    var genColor ="rgb("+red.toString()+", "+green.toString()+", "+blue.toString()+")";
    return genColor;
}

function setSquareColor(numSquare)
{
    document.querySelector("header").style.backgroundColor="steelblue";
    color.length=numSquare;
    // Generating 6 colours
    for(var i=0;i<numSquare;i++)
    {
        color[i]=rgbGen();
    }
    // Setting all 6 colour to the square
    for(var i=0;i<numSquare;i++)
    {
        square[i].style.backgroundColor=color[i].toString();
    }
    winIndex=Math.floor(Math.random()*(color.length));
    winColor=color[winIndex];
    document.querySelector("#goal").textContent=color[winIndex];
    message.textContent="";
}

reset.addEventListener("click",function(){
    setSquareColor(numSquare);
    reset.textContent="New Colours";
})