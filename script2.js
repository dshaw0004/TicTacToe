const boxes = document.querySelectorAll(".col-4");
const winnername = document.getElementById("end");
const wrongTurn = document.querySelector("#wrong-turn");
let turn = 1;

function winner(a) {
	if (a === "X") {
		winnername.textContent = "~~~~ player 1 wins ~~~~";
	} else if (a === "0") {
		winnername.textContent = "~~~~ player 2 wins ~~~~";
	}
	winnername.style.visibility = "visible";
}

const check = () => {
	let box1 = boxes[0].textContent;
	let box2 = boxes[1].textContent;
	let box3 = boxes[2].textContent;
	let box4 = boxes[3].textContent;
	let box5 = boxes[4].textContent;
	let box6 = boxes[5].textContent;
	let box7 = boxes[6].textContent;
	let box8 = boxes[7].textContent;
	let box9 = boxes[8].textContent;

	if (
		(box1 === box2 && box1 === box3) ||
		(box1 === box4 && box1 === box7) ||
		(box1 === box5 && box1 === box9)
	) {
		winner(box1);
	} else if (
		(box9 === box7 && box9 === box8) ||
		(box9 === box6 && box9 === box3)
	) {
		winner(box9);
	} else if (
		(box5 === box2 && box5 === box8) ||
		(box5 === box4 && box5 === box6) ||
		(box3 === box5 && box5 === box7)
	) {
		winner(box5);
	}
	return;
};

boxes.forEach((box) => {
	box.addEventListener("click", async () => {
		let text = turn === 1 ? "X" : "O";
		if (box.textContent === "") {
			box.textContent = text;
			check();
			turn = turn === 1 ? 2 : 1;
			document.querySelector(
				"#player"
			).textContent = `Player ${turn}, it's your turn`;
		} else {
			wrongTurn.style.visibility = "visible";
			box.style.color = "#ff0000";
			await setTimeout(() => {
				wrongTurn.style.visibility = "hidden";
				box.style.color = "#000000";
			}, 1500);
		}
	});
});

document.getElementById("reset").addEventListener("click", () => {
	boxes.forEach((box) => {
		box.textContent = "";
	});
	turn = 1;
	document.querySelector(
		"#player"
	).textContent = `Player ${turn}, it's your turn`;
	winnername.style.visibility = "hidden";
});
