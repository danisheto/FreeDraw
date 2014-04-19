var canvas=document.getElementById("canvas"),posX,posY;
var context=canvas.getContext("2d");
window.onresize=function(){
	// canvas.setAttribute('width',window.innerWidth-10);
	// canvas.setAttribute("height",window.innerHeight-27-30);
	context.canvas.width=window.innerWidth
	context.canvas.height=window.innerWidth-27;
}
window.onresize.apply();
//color picker css
smallColor.onclick=function(){
	colorpickerLarge.style.display="block"
}


canvas.onmousedown=function(e){
	posX=e.pageX-this.offsetLeft;
	posY=e.pageY-this.offsetTop;
	context.beginPath();
	context.moveTo(posX,posY);
	canvas.onmousemove=function(e){
		posX=e.pageX-this.offsetLeft;
		posY=e.pageY-this.offsetTop;
		context.lineTo(posX,posY);
		context.stroke();
	}
	function stopDrawing(){
		context.closePath();
		canvas.onmousemove=false;
	}
	canvas.onmouseup=function(){
		context.closePath();
		canvas.onmousemove=false;
	};
	canvas.onmouseout=function(){
		context.closePath();
		canvas.onmousemove=false;
	};
}
