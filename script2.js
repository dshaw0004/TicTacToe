const boxes = document.querySelectorAll(".col-4");
const winnername = document.getElementById("winner-name");
const line = document.getElementById("line");
const wrongTurn = document.querySelector("#wrong-turn");
let turn = 1;
let gameover = false;

const l = (box1, rotate) => {
	line.style.top = `${box1.offsetTop + box1.clientHeight / 2}px`;
	line.style.left = `${box1.offsetLeft + box1.clientWidth / 2}px`;
	line.style.width = `${rotate !== 45 ? "240px" : "340px"}`;
	line.style.height = "6.9px";
	line.style.transform = `rotateZ(${rotate}deg)`;
	// console.log({ top, left });
};

function winner(a) {
	if (a === "X") {
		winnername.textContent = "player X";
	} else if (a === "O") {
		winnername.textContent = "player O";
	}
	gameover = true;

	document.querySelector(".dialog").show();
}

const check = () => {
	const combination = [
		[0, 1, 2, 0],
		[0, 3, 6, 90],
		[0, 4, 8, 45],
		[6, 7, 8, 0],
		[2, 5, 8, 90],
		[1, 4, 7, 90],
		[3, 4, 5, 0],
		[2, 4, 6, 135],
	];

	combination.forEach((c) => {
		if (
			boxes[c[0]].textContent === boxes[c[1]].textContent &&
			boxes[c[0]].textContent === boxes[c[2]].textContent &&
			boxes[c[0]].textContent
		) {
			winner(boxes[c[0]].textContent);
			l(boxes[c[0]], c[3]);
		}
	});
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
	line.style.width = "0";
	line.style.height = "0";
	gameover = false;
	document.querySelector(".dialog").close();
});

document.querySelector(".close-dialog").addEventListener("click", () => {
	document.querySelector(".dialog").close();
});
