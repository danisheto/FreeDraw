var canvas=document.getElementById("canvas"),canvasPosX,canvasPosY,colorPosX,colorPosY,huePos,hueBarX;
var context=canvas.getContext("2d");
window.onresize=function(){
	context.canvas.width=window.innerWidth
	context.canvas.height=window.innerHeight-52;
}
window.onresize.apply();
//color picker css
smallColor.onclick=function(){
	colorpickerLarge.style.display="block";
	SatBriSpan.onmousedown=function(e){
		colorPosX=e.pageX-this.offsetLeft-42;
		colorPosY=e.pageY-this.offsetTop-39;
		selectedColor.style.right=256-colorPosX+10+"px";
		selectedColor.style.bottom=256-colorPosY-5+"px";
		SatBriSpan.onmousemove=function(e){
			colorPosX=e.pageX-this.offsetLeft-42;
			colorPosY=e.pageY-this.offsetTop-39;
			if(colorPosX<=256 && colorPosX>=0 && colorPosY<=256 && colorPosY>=0){
				selectedColor.style.right=256-colorPosX+10+"px";
				selectedColor.style.bottom=256-colorPosY-5+"px";
			}else{
				stopMovingSelector();
			}
		}
		function stopMovingSelector(){
			SatBriSpan.onmousemove=null;
		}
		SatBriSpan.onmouseup=stopMovingSelector;
	}
	hueBar.onmousedown=function(e){
		huePos=e.pageY-this.offsetTop-39;
		huePosX=e.pageX-hue.offsetLeft;
		document.getElementsByClassName("arrow")[0].style.bottom=256-huePos-5+"px";
		document.getElementsByClassName("arrow")[1].style.bottom=256-huePos-5+"px";
		hue.onmousemove=function(e){
			huePos=e.pageY-this.offsetTop-39;
			huePosX=e.pageX-hue.offsetLeft-54;
			if(huePos>=0 && huePos<=256 && huePosX>=1 && huePosX<=20){
				document.getElementsByClassName("arrow")[0].style.bottom=256-huePos-5+"px";
				document.getElementsByClassName("arrow")[1].style.bottom=256-huePos-5+"px";
			}else{
				stopMovingHueBar();
			}
		}
		function stopMovingHueBar(){
			hue.onmousemove=null;
		}
		hueBar.onmouseup=stopMovingHueBar;
	}
}


canvas.onmousedown=function(e){
	canvasPosX=e.pageX-this.offsetLeft;
	canvasPosY=e.pageY-this.offsetTop;
	context.beginPath();
	context.moveTo(canvasPosX,canvasPosY);
	canvas.onmousemove=function(e){
		canvasPosX=e.pageX-this.offsetLeft;
		canvasPosY=e.pageY-this.offsetTop;
		context.lineTo(canvasPosX,canvasPosY);
		context.stroke();
	}
	function stopDrawing(){
		context.closePath();
		canvas.onmousemove=null;
	}
	canvas.onmouseup=stopDrawing;
	canvas.onmouseout=stopDrawing;
}
