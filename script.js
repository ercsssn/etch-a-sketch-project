let gridContainer = document.querySelector('.container');
let boxPerSide;

while (true) {
    let popup = prompt('Enter number of grid box per side:');
    boxPerSide = parseInt(popup);

    if (boxPerSide > 100) {
        alert('Too large');
        continue;
    }else if (boxPerSide < 0) {
        alert('Enter a valid number');
        continue;
    }else if (boxPerSide > 0 && boxPerSide < 100){
        break;
    } else {
        alert('Enter a valid input');
    }
}

for (let i = boxPerSide; i <= boxPerSide*boxPerSide; i++) {                 //This for loop will create the grid
    let boxSize = boxPerSide * 16;
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




