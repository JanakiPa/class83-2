// canvas=document.getElementById('myCanvas');
// ctx=canvas.getContext("2d");


// color="red";

// ctx.beginPath();
// ctx.strokeStyle=color;
// ctx.lineWidth=2;
// ctx.arc(200,200,40,0,2*Math.PI);
// ctx.stroke();

// canvas.addEventListener("mousedown", my_mousedown);
// function my_mousedown(e)
// {
//     color= document.getElementById("color").value;
//     console.log(color);

//     mouse_x=e.clientX-canvas.offsetLeft;
//     mouse_y=e.clientY-canvas.offsetTop;

//     console.log("X = " + mouse_x + ",Y = " + mouse_y);
//     circle(mouse_x,mouse_y);
// }
// function circle(mouse_x,mouse_y)
// {
//     ctx.beginPath();
// ctx.strokeStyle=color;
// ctx.lineWidth=2;
// ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
// ctx.stroke();
// }


var canvas = document.getElementById("myCanvas");
var control = canvas.getContext("2d");
var color = "purple";
var width = 3;
var mouseEvent= "empty";
var current_x_postion, current_y_postion, last_x_position, last_y_position;
canvas.addEventListener("mousedown",a_function);
function a_function(e){
    mouseEvent="mouseDown";
    color=document.getElementById('color_1').value;
    width=document.getElementById('width').value;
}
canvas.addEventListener("mouseup",another_function);
function another_function(e){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",another2_function);
function another2_function(e){
    mouseEvent="mouseleave";
}canvas.addEventListener("mousemove",another3_function);
function another3_function(e){
    current_x_postion=e.clientX-canvas.offsetLeft;
current_y_postion=e.clientY-canvas.offsetTop;
if(mouseEvent=="mouseDown"){
    control.beginPath();
    control.color=color;
    control.lineWidth=width;
    control.moveTo(last_x_position, last_y_position);
    control.lineTo(current_x_postion, current_y_postion);
    control.stroke();
}
last_x_position=current_x_postion;
last_y_position=current_y_postion;
}
function clearArea()
{
    control.clearRect(0, 0, canvas.width, canvas.height);
 }
