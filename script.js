const blockEl = document.getElementById('block');
const vericalPosition = document.getElementById('position-y');
const horizontalPosition = document.getElementById('position-x');
const blockSize = document.getElementById('size');
const shapeSelector = document.getElementById('shape-select');
const okBtn = document.getElementById('ok-btn');
const rgbaR = document.getElementById('rgba-r');
const rgbaG = document.getElementById('rgba-g');
const rgbaB = document.getElementById('rgba-b');
const rgbaA = document.getElementById('rgba-a');
const rgbaContainer = document.querySelector('.rgba-container');
const rgbaInputs = rgbaContainer.querySelectorAll('input');

// Vertical Position Changer
vericalPosition.addEventListener('change', function () {
	blockEl.style.top = vericalPosition.value + 'px';
});

// Horizontal Position Changer
horizontalPosition.addEventListener('change', function () {
	blockEl.style.left = horizontalPosition.value + 'px';
});

// Size Changer
blockSize.addEventListener('change', function () {
	blockEl.style.transform = 'scale(' + blockSize.value + ')';
});

// Shape Changer
okBtn.addEventListener('click', function () {
	let shapeOption = shapeSelector.value;
	if (shapeOption === '1') {
		blockEl.style.borderRadius = '0';
	} else if (shapeOption === '2') {
		blockEl.style.borderRadius = '50%';
	}
});

// Background Color Changer
for (let i = 0; i < rgbaInputs.length; i++) {
	rgbaInputs[i].addEventListener('change', function () {
		blockEl.style.backgroundColor =
			"rgba(" + rgbaR.value + "," + rgbaG.value + "," + rgbaB.value + "," + rgbaA.value + ")";
	});
}
