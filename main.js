img='';
status='';

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cococsd',modelLoaded);
}

function preload(){
    img=loadImage('dog_cat.jpg');
}

function draw(){
    image(img,0,0,640,420);
    text("dog",45,75);
    stroke('#FF0000');
    rect(30,60,450,350);
    noFill();
    text("cat",320,120);
    noFill();
    stroke('#FF0000');
    rect(300,90,270,320)

}


function modelLoaded(){
    console.log('model is loaded');
    status=true;
    objectDetector.detect(img,gotResult);
}


function gotResult(error,results){
    if (error)
    console.error(error);

    else 
    console.log(results);
}