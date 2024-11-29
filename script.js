const container = document.querySelector("#container");


function makeSquares(rowCount){
    const squareCount = rowCount * rowCount;
    const squareWidth = ((1 / rowCount) * 99.9);
    for (let i = 0; i < squareCount; i++){
        let square = document.createElement("div");
        square.className = "square";
        square.style.flexBasis = `calc(${squareWidth}% - 2px)`;
        container.appendChild(square);
    }
}
makeSquares(20);