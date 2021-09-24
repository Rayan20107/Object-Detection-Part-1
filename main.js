teddybear=""

colourr=Math.floor(Math.random()*256);

colourg=Math.floor(Math.random()*256);

colourb=Math.floor(Math.random()*256);

function preload()
{
    teddybear=loadImage("teddybear.jpg");
}

function draw()
{
    image(teddybear, 0, 0, 640, 420);
    fill(colourr, colourg, colourb);
    text("Teddy Bear", 120, 75);
    noFill();
    stroke(colourr, colourg, colourb);
    rect(110, 50, 400, 310);
}

function setup()
{
    canvas=createCanvas(640, 420);
    canvas.center();
    document.getElementById("status").innerHTML="Object detecting";
}