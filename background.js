// JavaScript Document

				var canvas = document.getElementById("canvas");
				var ctx = canvas.getContext("2d");
				//var h = document.getElementById("head").offsetHeight;
				//var f = document.getElementById("foot").offsetHeight;
				canvas.width = document.getElementById("canvasSection").clientWidth;
				canvas.height = document.getElementById("canvasSection").clientHeight;
				var font_size = 10;
				var columns = canvas.width/font_size;
				var drops = [];
				for (let x=0; x<columns; x++)
					drops[x] = 1;
				var matrix = "01";
				var columns = 0;
				matrix = matrix.split("");
				
				window.addEventListener('resize', resizeCanvas, false);
			
				function resizeCanvas()
				{
					canvas.width = document.getElementById("canvasSection").clientWidth;
					canvas.height = document.getElementById("canvasSection").clientHeight;
					columns = canvas.width/font_size;
					for (let x=0; x<columns; x++)
					drops[x] = 1;
				}resizeCanvas();
			
				function draw()
				{
					ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
					ctx.fillRect(0,0,canvas.width, canvas.height);
					ctx.fillStyle="#0ff";
					ctx.font = font_size + "px arial";
					
					for (let i=0; i<drops.length; i++)
						{
							var text = matrix[Math.floor(Math.random()*matrix.length)];
							ctx.fillText(text, i*font_size, drops[i]*font_size);
							if ((drops[i]*font_size > canvas.height) && (Math.random()>0.975))
								{
									drops[i]=0;
								}
							drops[i]++;
						}
				}
				
				setInterval(draw, 35);
