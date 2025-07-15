var center = document.createElement('center')
// board elements
let chessBoard = document.createElement('board')
// chessbaord array filling 64 spaces
const boardArr = [
	[
		'light-rook',
		'light-knight',
		'light-bishop',
		'light-queen',
		'light-king',
		'light-bishop2',
		'light-knight2',
		'light-rook2',
	],
	[
		'light-pawn',
		'light-pawn',
		'light-pawn',
		'light-pawn',
		'light-pawn',
		'light-pawn',
		'light-pawn',
		'light-pawn',
	],
	[null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null],
	[
		'dark-pawn',
		'dark-pawn',
		'dark-pawn',
		'dark-pawn',
		'dark-pawn',
		'dark-pawn',
		'dark-pawn',
		'dark-pawn',
	],
	[
		'dark-rook',
		'dark-knight',
		'dark-bishop',
		'dark-queen',
		'dark-king',
		'dark-bishop2',
		'dark-knight2',
		'dark-rook2',
	],
]

for (let y = 0; y < 8; y++) {
	// creating tr
	let row = document.createElement('tr')

	for (let x = 0; x < 8; x++) {
		console.log(boardArr[y][x])

		// creating cell
		let cell = document.createElement('td')
		cell.classList.add('cell')

		// if it's not null, then show chess piece
		if (boardArr[y][x]) cell.classList.add(boardArr[y][x])

		// white cells
		if ((y + x) % 2 == 0) {
			// class attribute for all white cells
			cell.classList.add('light-cell')
			row.appendChild(cell)
		}
		// black cells
		else {
			cell.classList.add('dark-cell')
			row.appendChild(cell)
		}
	}
	// append tr
	chessBoard.appendChild(row)
}
center.appendChild(chessBoard)
document.body.appendChild(center)
