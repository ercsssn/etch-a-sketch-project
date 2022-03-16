function createGrid(e) {

    removeUsedGrid();
    
    askBoxNumber();

    for (let i = 1; i <= boxPerSide*boxPerSide; i++) {      //This for loop will create new grid
        let gridBox = document.createElement('div');
        gridBox.setAttribute('class', 'box');
        gridBox.style.cssText = `height:${560/boxPerSide}px; width:${560/boxPerSide}px;`; //560 refers to the container display size
        gridContainer.appendChild(gridBox);
    }

    let allBox = gridContainer.querySelectorAll('div');
    allBox.forEach(box => box.addEventListener('mouseover', changeColor, {once:true})); //add event listener to each grid box
}

function changeColor(e) {
    let oneBox = e.target;
    oneBox.classList.add('boxhover');
}

function askBoxNumber() {
    while (true) {
        let popUp = prompt('Enter number of grid box per side:');
        boxPerSide = parseInt(popUp);
    
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
}

function removeUsedGrid() {
    if (boxPerSide > 0) {
        let grid = gridContainer.querySelectorAll('div');
        grid.forEach(elem => elem.remove());
    }
}

let gridContainer = document.querySelector('.container');

let boxPerSide;

let resetButton = document.querySelector('.title button');
resetButton.addEventListener('click', createGrid);


