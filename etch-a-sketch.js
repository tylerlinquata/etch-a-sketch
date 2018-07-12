const container = document.querySelector('#container');

drawGrid(16, 'blue');

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
	let size = prompt("How large should the grid be?");
	let color = prompt("What color do you want to use?");
	drawGrid(size, color);
})

container.setAttribute('style', 'display:grid; grid-template-columns:repeat(16, 1fr);');

function drawGrid(size, color) {
	container.innerHTML = '';

	for(let index = 1; index <= (size * size); index++) {
		container.style.gridTemplateColumns = 'repeat(' + size + ', 1fr)';
		let newDiv = document.createElement('div');
		newDiv.id = 'div' + index;
		newDiv.className = 'box';
		newDiv.addEventListener('mouseenter', () => {
			newDiv.style.backgroundColor = color;
		});
		container.appendChild(newDiv);
	}
}