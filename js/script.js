// js
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


// jq and jq ui

$(document).ready(function(){
	// jq
	// hw1
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





	// jq
	// show
	$('.exp-1 #show').click(function(){
		$('.exp-1 img').show();
	})
	// hide
	$('.exp-1 #hide').click(function(){
		$('.exp-1 img').hide();
	})
	// fadeout
	$('.exp-1 #toggle').click(function(){
		$('.exp-1 img').toggle();
	})
	// fadeout
	$('.exp-1 #fadeout').click(function(){
		$('.exp-1 img').fadeOut();
	})
	// fadein
	$('.exp-1 #fadein').click(function(){
		$('.exp-1 img').fadeIn();
	})
	// fadeto
	$('.exp-1 #fadeto').click(function(){
		$('.exp-1 img').fadeTo(1000, .5);
	})
	// slideToggle
	$('.exp-1 #slideToggle').click(function(){
		$('.exp-1 img').slideToggle()
	})
	// blur
	$('.exp-1 #blur').click(function(){
		$('.exp-1 img').blur();
	})
	


	// jq ui
	// Draggable
	$( "#draggable" ).draggable();
	// resizeable
	$( "#resizable" ).resizable();
	// selectable
	$( "#selectable" ).sortable();
	// accordian
	$( "#accordion" ).accordion({
	      collapsible: true
	    });
	// autocomplete
	var data = [
	      "sefat",
	      "habib",
	      "labib",
	    ];
	    $( "#tags" ).autocomplete({
	      source: data
	    });
	    
	    // datepicker
	    $( "#datepicker" ).datepicker();
	    $( "#menu" ).menu();
});

