
		var scoreApp,button;
		var nameP;

		var gameGo = false;
		var SCORE = 0;

		document.body.onload = addElement()

		window.onload = function(){

				function focusMethod(){
					document.getElementById('input').focus();
				};
				focusMethod();

				scoreApp = function(scorer){

					var score = document.getElementById('score').innerHTML;

					score = +score + scorer;

					document.getElementById('score').innerHTML = score;

				};

			document.getElementById("button")
				.addEventListener("click", function(event){

						event.preventDefault();

						if(input.value != ''){

							nameP = input.value;

							//io.send(input.value);
							console.log('NAME send to server..')

							gameGo = true;

							document.body.background = "";
							document.getElementById("form-client").style = "display:none"

							var styleCssText = "z-index:120;position:absolute;color:blue;"
							document.getElementById("div-one").style.cssText = styleCssText + "right:150px;";
							document.getElementById("div-two").style.cssText = styleCssText + "right:100px;";

							document.title = "Game"
						}
			})};


			function addElement(){

					var div = document.createElement("div");
						div.setAttribute('id','div-one');
					var h1 = document.createElement("h1");
						h1.innerHTML = " SCORE: ";					// SCORE

					div.appendChild(h1);

					div.style.cssText = "display:none"

					document.body.appendChild(div);

					var div = document.createElement("div");
						div.setAttribute('id','div-two');
					var h1 = document.createElement("h1");
						h1.setAttribute('id','score')
						h1.innerHTML = 0;					// SCORE

					div.appendChild(h1);

					div.style.cssText = "display:none"

					document.body.appendChild(div);
					console.log("DIV append...");
				};
