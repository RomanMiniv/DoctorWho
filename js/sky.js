$(document).ready(function () {

	function fSetRandNumber (min, max) {
		return (Math.floor(Math.random() * ((max + 1) - min)) + min);
	}

	// creating moon

	let moonTime = 50000;

	function fMoonAnim () {
		
		let moonOffset = 10;

		$("<div class='moon'></div>").appendTo("body").css({
			"position" : "absolute",
			"z-index" : "-1",
			"top" : (moonOffset + "px"),
			"left" : (moonOffset + "px"),
			"width" : "50px",
			"height" : "50px",
			"background-color" : "silver",
			"box-shadow" : "0px 0px 50px silver",
			"border-radius" : "50%"
		});

		let directionLeft = parseInt($("body").css("width")) - parseInt($(".moon").css("width")) - moonOffset;

		$(".moon").animate({
			left : (directionLeft + "px")
		}, moonTime, "linear", function () {
			$(this).remove();
		});	

	}
	fMoonAnim();

	setInterval(fMoonAnim, moonTime + 2000);

	// creating stars

	let numberStars = fSetRandNumber(20,40);
	let starSize = 2;

	for (let i = 0; i < numberStars; i++) {
		
		let starMaxTopPos = parseInt($("body").css("height")) - starSize;
		let starMaxLeftPos = parseInt($("body").css("width")) - starSize;

		$("<div class='star'></div>").appendTo("body").css({
			"position" : "absolute",
			"z-index" : "-2",
			"top" : (fSetRandNumber(starSize, starMaxTopPos) + "px"),
			"left" : (fSetRandNumber(starSize, starMaxLeftPos) + "px"),
			"width" : (starSize + "px"),
			"height" : (starSize + "px"),
			"background-color" : "#fff",
			"border-radius" : "50%",
			"display" : "none"
		}).show(500);

	}

	// moving stars with mouse

	let checkPosMouse = true;
	let changeOffset = true;
	let xMouse, yMouse;
	let starOffset = 0;
	let stepMouse = 50;
	let movementTime = 4000;

	$("body").on("mousemove", function (e) {
		
		if (checkPosMouse) {
			xMouse = e.pageX;
			yMouse = e.pageY;
			checkPosMouse = false;
			changeOffset = true;
		}
		
		if ((xMouse >= (e.pageX + stepMouse)) || (e.pageX >= (xMouse + stepMouse))) {
			// direction horizontal
			
			if (changeOffset) {

				changeOffset = false;
				
				for (let i = 0, maxOffset; i < numberStars; i++) {
				
					maxOffset = parseInt($("body").css("width")) - starSize;
					starOffset = fSetRandNumber(0, maxOffset);

					$(".star:eq(" + i + ")").animate({
						left : (starOffset + "px")
					}, movementTime);

				}

				setTimeout(function () {
					checkPosMouse = true;
				}, movementTime + 500);	

			}

		}
		else if ((yMouse >= (e.pageY + stepMouse)) || (e.pageY >= (yMouse + stepMouse))) {
			// direction vertical
			
			if (changeOffset) {

				changeOffset = false;
				
				for (let i = 0, maxOffset; i < numberStars; i++) {
				
					maxOffset = parseInt($("body").css("height")) - starSize;
					starOffset = fSetRandNumber(0, maxOffset);

					$(".star:eq(" + i + ")").animate({
						top : (starOffset + "px")
					}, movementTime);

				}

				setTimeout(function () {
					checkPosMouse = true;
				}, movementTime + 500);	

			}

		}

	});

});
