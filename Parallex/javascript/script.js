

var xd;


function myFunc(){
//var id = setInterval("menuChange", 100);
xd = setInterval(menuChange,50);

console.log("helo o");

//var sect = document.getElementByC('section1').style.top;
//sect = 20+'px';
//document.getElementsByClassName('section1').style.top = 20+'px';
//console.log(sect);

if(xd){
	console.log("variable set");
}

console.log("exiting this function");

}

function dropdown(x){

	document.getElementsByClassName("options")[x].style.display = "block";
	document.getElementsByClassName("options")[x].style.top = 61+'px';

}

function nodropdown(x){
	document.getElementsByClassName("options")[x].style.display = "none";

}


