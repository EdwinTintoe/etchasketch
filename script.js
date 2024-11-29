const container = document.querySelector("#container");
const btn = document.querySelector("#create");

btn.addEventListener("click", ()=>{
    container.innerHTML = "";
    let sideSize = parseInt(prompt("Please enter the size of grid side (1-100)", "1"));
    while (Number.isNaN(sideSize)) {
        sideSize = parseInt(prompt("Enter a number between 1 and 100", "1"));
    }
    
    const squareCount = sideSize * sideSize;
    const squareWidth = ((1 / sideSize) * 99.9);
        for (let i = 0; i < squareCount; i++){
            let square = document.createElement("div");
            square.className = "square";
            square.style.flexBasis = `calc(${squareWidth}% - 2px)`;
            container.appendChild(square);
        }
    
});