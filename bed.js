img = "";
objects = [];
status = "";

function preload() {
    img = loadImage('bed.jpg');
}
function setup() {
    canvas = createCanvas(650, 450);
    canvas.center();
    Object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting the Object";
}

function modelLoaded() {
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
    if(error){
        console.log(error);
    }
    console.log(results);
}

function draw() {
   
}