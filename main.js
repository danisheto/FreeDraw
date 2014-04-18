var canvas=document.getElementById("canvas"),
	context=canvas.getContext("2d"),
	posX,
	posY;
function findPos(){
	posX=e.pageX-this.offsetLeft;
	posY=e.pageY-this.offsetTop;
}
canvas.onmousedown=function(e){
	findPos();
	context.beginPath();
	context.moveTo(posX,posY);
	canvas.onmousemove=function(e){
		findPos();
		context.moveTo(posX,posY);
		context.fillStyle="#000000",
		context.fill();
	}
	canvas.onmouseup=function(){
		context.stroke();
		canvas.onmousemove=false;
	}
}