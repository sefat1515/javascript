//1. getElementById ব্যবহার করে Button দ্বারা Text পরিবর্তন
function textChange1(){
	document.getElementById('p').innerHTML = "Limon";
}

//2. getElementsByClassName ব্যবহার করে Button দ্বারা Text পরিবর্তন
function textChange2(){
	document.getElementsByClassName('p')[1].innerHTML = "Hello SSB";
}

//3. Date() ফাংশন এর ব্যবহার
function dateChange(){
	document.getElementById('date').innerHTML = Date();

}
// 4. var ব্যবার করে repeat() ফাংশন এর ব্যবহার
function repeat(){
	var data = "welcome ";
	document.getElementById('repeat').innerHTML = data.repeat(2);
}
// 5. JS ব্যবহার করে Style পরিবর্তন
function styleChange(){
	document.getElementById('style').style.fontSize = "50px";
	document.getElementById('style').style.color = "red";
	document.getElementById('style').style.border = "2px solid green";
}
// 6. Button দ্বারা image পরিবর্তন
function imgOne(){
	document.getElementById('img').src = "images/html.png";
}
function imgTwo(){
	document.getElementById('img').src = "images/js.png";
}
// onload এর ব্যবহার
function welcome(){
	alert("welcome");
}


// jq

$(document).ready(function(){

	// hide
	$('.hide').click(function(){

		$('#img1').hide();

	});

	// show
	$('.show').click(function(){
		$('#img1').show();
	});

	// toggle
	$('.toggle').click(function(){
		$('#img1').toggle();
	});

});