nx=0;
ny=0;
wlx=0;
wrx=0;
d=0;

function preload(){

}
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(250,150);

    canvas=createCanvas(550, 540);
    canvas.position(1150, 150);
 posenet=ml5.poseNet(video ,modeloaded);
 posenet.on('pose', check);
}

function modeloaded(){
    console.log('MODEL YAY');
}
function check(results){
    if(results.length>0){
        console.log(results);
        
        wlx=results[0].pose.leftWrist.x;

        wrx=results[0].pose.rightWrist.x;

        nx=results[0].pose.nose.x;

        ny=results[0].pose.nose.y;

        d=floor(wlx-wrx);

    }
}
function draw(){
   background('maroon');

   fill("green");
   stroke("pink");
   square(nx,ny,d);
   console.log("left wrist X - "+wlx);
   console.log("right wrist X - "+wrx);
   console.log("Nose X - "+nx);
   console.log("Nose Y - "+ny);
   console.log("Difference - "+d);
   document.getElementById("mmmm1").innerHTML="The size of the length of the square is "+d+"px";
}