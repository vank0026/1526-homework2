// JavaScript Document

var data = document.getElementById("task");

document.getElementById("todo-form").addEventListener("submit", function(ev) {
		ev.preventDefault();	

	if (data.value == "") {
			data.className = "textInvalid";
			alert ("you must put something in the New Task field")
			data.className = "";
	} else {
	

			var newtask = document.getElementById("incomplete").appendChild(document.createElement("li"));
			newtask.innerHTML = data.value;
			newtask.className = "incomplete";
			
				newtask.addEventListener("click", function(ev) {
	
					if (ev.target.className == "incomplete") { 
							ev.target.setAttribute("class", "done"); 
							document.getElementById("done").appendChild(ev.target);
					}else{
							document.getElementById("incomplete").appendChild(ev.target);
							ev.target.setAttribute("class", "incomplete"); 
					};
				}, false);
		
	};

	data.value = "";	

}, false);
