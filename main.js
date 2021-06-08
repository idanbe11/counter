var count = 1;
var countEl = document.getElementById("count");

function plus(){  
	count++;
	countEl.value = count;
  if (count > 8) {
	  document.getElementById('notice').innerHTML = "We currently don't have this quantity readily available which may impact our turn-around time.";
	}
}
function minus(){
  if (count > 1) {
	count--;
	countEl.value = count;
	if (count < 8) {
	  document.getElementById('notice').innerHTML = "";
	}
  }  
}

