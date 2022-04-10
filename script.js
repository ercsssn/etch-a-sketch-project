function createGrid(e) {

    removeUsedGrid();
    
    askBoxNumber();

    for (let i = 1; i <= boxPerSide*boxPerSide; i++) {      //This for loop will create new grid
        let gridBox = document.createElement('div');
        gridBox.setAttribute('class', 'box');
        gridBox.setAttribute('data-opacity',0);
        gridBox.style.cssText = `background: white; height:${560/boxPerSide}px; width:${560/boxPerSide}px;`; 
        gridContainer.appendChild(gridBox);    //560 refers to the container display size
    }
        //maybe add an if else statement here if random color or shading mode
    let allBox = gridContainer.querySelectorAll('div');
    allBox.forEach(box => box.addEventListener('mouseover',shadeBox)); //add event listener to each grid box
}

function changeColor(e) {
    let oneBox = e.target;
    let randomColor = Math.floor(Math.random()*16777215).toString(16); //this expression generates a hexadecimal output
    oneBox.style.cssText = `background-color: #${randomColor}; height:${560/boxPerSide}px; width:${560/boxPerSide}px;`;
}

function shadeBox(e) {
    let oneBox = e.target;
    currentOpacity = parseFloat(oneBox.getAttribute('data-opacity'));
    currentOpacity = currentOpacity + 0.1;
    oneBox.style.cssText = `background-color: rgba(0,0,0,${currentOpacity}); height:${560/boxPerSide}px; width:${560/boxPerSide}px;`;
    oneBox.setAttribute('data-opacity',currentOpacity);
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
