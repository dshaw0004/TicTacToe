
let turn = 1;
let text = 'X';

function winner(a) {
	if (a === 'X') {

		$("#end").text("player 1 wins");
		$("#end").show();
		//$("span").off("click");
	}
	else if (a === '0') {
		$("#end").text("~~~~ player 2 wins ~~~~");
		$("#end").show();
		//$("span").off("click");

	}
}


function check() {
	const box1 = $(".box1").text();
	const box2 = $(".box2").text();
	const box3 = $(".box3").text();
	const box4 = $(".box4").text();
	const box5 = $(".box5").text();
	const box6 = $(".box6").text();
	const box7 = $(".box7").text();
	const box8 = $(".box8").text();
	const box9 = $(".box9").text();

	if ((box1 === box2 && box1 === box3) || (box1 === box4 && box1 === box7) || (box1 === box5 && box1 === box9)) {
		winner(box1);
	}
	else if ((box9 === box7 && box9 === box8) ||
		(box9 === box6 && box9 === box3)) {
		winner(box9);
	}
	else if ((box5 === box2 && box5 === box8) || (box5 === box4 && box5 === box6) || (box3 === box5 && box5 === box7)) {
		winner(box5);
	}
}


$("span").click(function() {
	$("#player").css("text-align", "center");
	if ($(this).is(':empty')) {

		if (turn == 1) {
			$(this).text(text);
			text = '0';
			turn = 2;
			$("#player").text("Player 2, your turn");
		}
		else {
			$(this).text(text);
			text = 'X';
			turn = 1;
			$("#player").text("Player 1, your turn");
		}
	}
	else {
		$("#wrong-turn").css("visibility","initial");
		$(this).css({ 'color': '#ff0000' })
		setTimeout(function() {
			$("#wrong-turn").css("visibility","hidden");
			$(this).css("color", "#000000");
		}, 1500);
	}
	check();
});


$("#reset").click(function() {
	$(".box1, .box2, .box3, .box4, .box5, .box6, .box7, .box8, .box9").text("");
	turn = 1;
	text = 'X';
	$("#player").text("Player 1, your turn");
	$("#end").hide();
	//$("span").on("click", function(){});
})