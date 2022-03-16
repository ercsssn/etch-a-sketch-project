let gridContainer = document.querySelector('.container')

for (let i = 1; i <= 1225; i++) {                 //This for loop will create the grid
    let gridBox = document.createElement('div');
    gridBox.setAttribute('class', 'box');
    gridBox.style.cssText = 'height:16px; width:16px;';
    gridContainer.appendChild(gridBox);
}

function changeColor(e) {
    let oneBox = e.target;
    oneBox.classList.add('boxhover');
}

let allBox = gridContainer.querySelectorAll('div');
allBox.forEach(box => box.addEventListener('mouseover', changeColor));




