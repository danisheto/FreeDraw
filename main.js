var canvas=document.getElementById("canvas"),canvasPosX,canvasPosY,colorPosX,colorPosY,huePos,hueBarX,hue,saturation,brightness,lightness, saturationHSL;
hue=360;
saturationHSL=100;
brightness=0;
lightness=0;
saturation=100;
function satBriPicker(){
	if(colorPosX<=256 && colorPosX>=0 && colorPosY<=256 && colorPosY>=0){
		saturation=(colorPosX/256*100).toFixed(0);
		brightness=100-(colorPosY/256*100).toFixed(0);
		lightness=(2-(saturation/100))*(brightness/100)*50;
		saturationHSL=(saturation/100)*(brightness/100)/(((lightness/50)<=1)?(lightness/50):2-(lightness/50));
		color.style.backgroundColor="hsl("+hue+","+(saturationHSL*100)+"%,"+(lightness)+"%)";
		saturationInput.value=saturation;
		brightnessInput.value=brightness;
		selectedColor.style.right=256-colorPosX+10+"px";
		selectedColor.style.bottom=256-colorPosY-5+"px";
	}else{
		stopMovingSelector();
	}
}
function huePicker(){
	if(huePos>=0 && huePos<=256 && huePosX>=1 && huePosX<=20){
		hue=(huePos/256*360).toFixed(0);
		hueInput.value=hue;
		color.style.backgroundColor="hsl("+hue+","+(saturationHSL*100)+"%,"+(lightness)+"%)";
		smallColorImg.style.backgroundColor="hsl("+hue+",100%,50%)";
		SatBri.style.backgroundColor="hsl("+hue+",100%,50%)";
		document.getElementsByClassName("arrow")[0].style.bottom=256-huePos-5+"px";
		document.getElementsByClassName("arrow")[1].style.bottom=256-huePos-5+"px";
	}else{
		stopMovingHueBar();
	}
}
function stopMovingSelector(){
	SatBriSpan.onmousemove=null;
}
function stopMovingHueBar(){
	hueSection.onmousemove=null;
}
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
		satBriPicker(e);
		SatBriSpan.onmousemove=function(e){
			colorPosX=e.pageX-this.offsetLeft-42;
			colorPosY=e.pageY-this.offsetTop-39;
			satBriPicker(e);
		}
		SatBriSpan.onmouseup=stopMovingSelector;
	}
	hueBar.onmousedown=function(e){
		huePos=e.pageY-this.offsetTop-39;
		huePosX=e.pageX-hueSection.offsetLeft-54;
		huePicker();
		hueSection.onmousemove=function(e){
			huePos=e.pageY-this.offsetTop-39;
			huePosX=e.pageX-hueSection.offsetLeft-54;
			huePicker();
		}
		hueBar.onmouseup=stopMovingHueBar;
	}
	doneColorPicker.onclick=function(){
		colorpickerLarge.style.display="none";
		context.strokeStyle="hsl("+hue+","+(saturationHSL*100)+"%,"+(lightness)+"%)";
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
