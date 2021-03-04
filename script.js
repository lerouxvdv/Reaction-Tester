var reactionStyle = document.getElementById("reactionSpace").style;
			
			var timeStart = new Date();
			
			timeStart = timeStart.getTime();
			
			function setRandomness() {
			
				var size = Math.round((Math.random() * 100));
				
				var y = Math.round((Math.random() * 100));
				
				var reactionHeight = Math.round((Math.random() * 600));
				
				var reactionWidth = Math.round((Math.random() * 1200));
				
				var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
				
				reactionStyle.width = "" + ((2*size)+100) + "px";
				reactionStyle.height = "" + ((2*size)+100) + "px";
				reactionStyle.backgroundColor = randomColor;
				reactionStyle.position = "relative";
				reactionStyle.top = reactionHeight + "px";
				reactionStyle.left = reactionWidth + "px";
				
				displayTimeout = ((Math.random() * 1500));
				
				var dateClick = new Date();
				
				timeStart = dateClick.getTime();
										
				if (y < 50) {
				
				reactionStyle.borderRadius = "0%"
				
				
				} else {
			
				reactionStyle.borderRadius = "50%";
				
				}
				
				if (document.getElementById("reactionSpace").style.backgroundColor == "white"){
				
				document.getElementById("reactionSpace").style.backgroundColor = "#000000";
				
				}
				
				else {
				
				}
				
				
			}
		
			var displayTimeout = ((Math.random() * 1000));
			
			

			function Timing() {
			
			var dateEnd = new Date();
			
			timeEnd = dateEnd.getTime();
			
			document.getElementById("reactionSpace").style.backgroundColor = "white"; 
			
			setTimeout(setRandomness,displayTimeout);
			
			document.getElementById("time").innerHTML = "Your time: " + ((timeEnd - timeStart)/1000) + "s";
		
			}
		
			document.getElementById("reactionSpace").onclick = Timing;