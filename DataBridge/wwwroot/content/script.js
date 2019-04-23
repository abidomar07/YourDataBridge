

window.onscroll = function () { myFunction() };

function myFunction() {
  if (document.body.scrollTop > 135 || document.documentElement.scrollTop > 135) {
    document.getElementById("demo").className = "nav_container2";
  } else {
    document.getElementById("demo").className = "nav_container1";
  }
}

		var myIndex = 0;
		carousel();
		
		function carousel() {
		  var i;
		  var x = document.getElementsByClassName("mySlides");
		  for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";  
		  }
		  myIndex++;
		  if (myIndex > x.length) {myIndex = 1}    
		  x[myIndex-1].style.display = "block";  
		  setTimeout(carousel, 3000); 
		}
	
function showText()
{

	document.getElementById("text1").style.display="block";
}


function hide()
{
	document.getElementById("text1").style.display="none";
}