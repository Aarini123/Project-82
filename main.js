var mouse_event="empty";
canvas=document.getElementById("BlankCanvas");
ctx=canvas.getContext("2d");
var color="purple";
var width_line=2;
var lastPosition_X,lastPostion_Y;
canvas.addEventListener("MouseDown",Down_mouse);

function Down_mouse(e) {
    color=document.getElementById("Color_text").value;
    width_line=document.getElementById("Width_line").value;
    radius=document.getElementById("radius_input").value;
    mouse_event="MouseDown";
}

canvas.addEventListener("mousemove",Move_mouse);

function Move_mouse(e) {
current_of_postion_X=e.clientX-canvas.offsetLeft;
current_of_postion_Y=e.clientY-canvas.offsetTop;
if(mouse_event=="MouseDown"){
console.log("Current position of x and y coordinates =");
console.log("x = " + current_of_postion_X +  "y =" + current_of_postion_Y);
ctx.beginPath();
ctx.stroke.Style=color;
ctx.lineWidth=width_line;
ctx.arc(current_of_postion_X,current_of_postion_Y,0,2* Math.PI);
ctx.strokeStyle();
}
lastPostion_X=currentpostion_X;
lastPostion_Y=currentpostion_Y;
}
function clear_Area() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
