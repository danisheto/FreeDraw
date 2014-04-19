function id(str){
	return document.getElementById(str);
}
//color picker css
smallColor.onclick=function(){
	smallColor.className="";
	smallColorImg.style.width="100%";
	smallColorImg.style.height="100%";
	smallColorExtra.style.display="inline-block";
}
smallColorDone.onclick=function(){
	smallColor.className="tools";
	smallColorImg.style.width="16px";
	smallColorImg.style.height="16px";
	smallColorExtra.style.display="none";
}


var canvas=document.getElementById("canvas"),posX,posY;
var context=canvas.getContext("2d");
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
	canvas.onmouseup=function(){
		context.closePath();
		canvas.onmousemove=false;
	}
}