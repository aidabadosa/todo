 
 var newTaskInput = document.getElementById("newtask")
 newTaskInput.addEventListener ("keypress",function(evt) {
 	if (evt.keycode===13){
 		newtask();
 	}
 });
