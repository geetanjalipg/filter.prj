var nosex = "";
var nosey = "";


function preload() {

}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);



}
function modelloaded() {
    console.log("posenet is intialized");

}
function gotposes(results) {
    if (results.length > 0) {
        console.log(results);

        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;

        console.log("nose x= ",nosex," nose y=", nosey);
    }
}
function draw() {
    image(video, 0, 0, 300, 300);
}
function snapshot() {
    save("filter.png")
}
