const container = document.querySelector("#container");
const btn = document.querySelector("#create");
function getSideSize (){
    let size = parseInt(prompt("Please enter the size of grid side (1-100)", "1"));
    while (Number.isNaN(size)) {
        size = parseInt(prompt("Enter a number between 1 and 100", "1"));
    }
    return size;
}
btn.addEventListener("click", ()=>{
    container.innerHTML = "";
    let sideSize = getSideSize();
    
    const squareCount = sideSize * sideSize;
    const squareWidth = (100 / sideSize);
        for (let i = 0; i < squareCount; i++){
            let square = document.createElement("div");
            square.className = "square";
            square.style.flexBasis = `calc(${squareWidth}% - 2px)`;
            square.textContent = `${i}`;
            container.appendChild(square);
        }
    
});