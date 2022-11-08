const boxes = document.querySelectorAll(".col-4");
const winnername = document.getElementById("end");
const l = document.getElementById("line");
const wrongTurn = document.querySelector("#wrong-turn");
let turn = 1;
let gameover = false;

const line = (box1, box2) => {
	let top = box1.offsetTop + box1.clientHeight / 2;
	let left = box1.offsetLeft + box1.clientWidth / 2;
	l.style.top = `${top}px`;
	l.style.left = `${left}px`;
	l.style.bottom = `${box2.offsetTop + box2.clientHeight / 2}px`;
	l.style.right = `${box2.offsetLeft + box2.clientWidth / 2}px`;
	// console.log({ top, left });
};

function winner(a, box1, box2) {
	if (a) {
		if (a === "X") {
			winnername.textContent = "~~~~ player 1 wins ~~~~";
		} else if (a === "O") {
			winnername.textContent = "~~~~ player 2 wins ~~~~";
		}
		gameover = true;
		// line(box1, box2);
	}
	winnername.style.visibility = "visible";
}

const check = () => {
	// let box1 = boxes[0].textContent;
	// let box2 = boxes[1].textContent;
	// let box3 = boxes[2].textContent;
	// let box4 = boxes[3].textContent;
	// let box5 = boxes[4].textContent;
	// let box6 = boxes[5].textContent;
	// let box7 = boxes[6].textContent;
	// let box8 = boxes[7].textContent;
	// let box9 = boxes[8].textContent;

	if (
		boxes[0].textContent === boxes[1].textContent &&
		boxes[0].textContent === boxes[2].textContent &&
		boxes[0].textContent
	) {
		winner(boxes[0].textContent, boxes[0], boxes[2]);
	} else if (
		boxes[0].textContent === boxes[3].textContent &&
		boxes[0].textContent === boxes[6].textContent &&
		boxes[0].textContent
	) {
		winner(boxes[0].textContent, boxes[0], boxes[6]);
	} else if (
		boxes[0].textContent === boxes[4].textContent &&
		boxes[0].textContent === boxes[8].textContent &&
		boxes[0].textContent
	) {
		winner(boxes[0].textContent, boxes[0], boxes[4]);
	} else if (
		boxes[8].textContent === boxes[6].textContent &&
		boxes[8].textContent === boxes[7].textContent &&
		boxes[8].textContent
	) {
		winner(boxes[8].textContent, boxes[6], boxes[8]);
	} else if (
		boxes[8].textContent === boxes[5].textContent &&
		boxes[8].textContent === boxes[2].textContent &&
		boxes[8].textContent
	) {
		winner(boxes[8].textContent, boxes[2], boxes[8]);
	} else if (
		boxes[4].textContent === boxes[1].textContent &&
		boxes[4].textContent === boxes[7].textContent &&
		boxes[4].textContent
	) {
		winner(boxes[4].textContent, boxes[1], boxes[7]);
	} else if (
		boxes[4].textContent === boxes[3].textContent &&
		boxes[4].textContent === boxes[5].textContent &&
		boxes[4].textContent
	) {
		winner(boxes[4].textContent, boxes[3], boxes[5]);
	} else if (
		boxes[2].textContent === boxes[4].textContent &&
		boxes[4].textContent === boxes[6].textContent &&
		boxes[4].textContent
	) {
		winner(boxes[4].textContent, boxes[2], boxes[6]);
	}
	return;
};
const clickFunction = async (box) => {
	let text = turn === 1 ? "X" : "O";
	if (box.textContent === "") {
		box.textContent = text;
		check();
		turn = turn === 1 ? 2 : 1;
		document.querySelector(
			"#player"
		).textContent = `Player ${turn}, it's your turn`;
	} else {
		wrongTurn.show();
		box.style.color = "#ff0000";
		await setTimeout(() => {
			wrongTurn.close();
			box.style.color = "#000000";
		}, 1500);
	}
};
const nothing = (box) => {
	console.log("game is paused");
};
boxes.forEach((box) => {
	box.addEventListener("click", () => {
		gameover ? nothing(box) : clickFunction(box);
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
	// winnername.textContent = "";
	gameover = false;
});
