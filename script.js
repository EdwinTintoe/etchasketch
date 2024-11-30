const container = document.querySelector("#container");
const btn = document.querySelector("#create");
const instructions = document.querySelector("#instructions");


function getSideSize (){
    let size = parseInt(prompt("Please enter the size of grid side (1-100)", "1"));
    while (Number.isNaN(size)) {
        size = parseInt(prompt("Enter a number between 1 and 100", "1"));
    }
    return size;
}
function getRandomHexRGB (){
    // obtain a random value for RGB as hex string to feed to css color
    let randomDecimal = Math.floor(Math.random() * (255 * 255 * 255));
    let randomHex = randomDecimal.toString(16);
    return randomHex
}

btn.addEventListener("click", ()=>{
    container.innerHTML = "";
    let sideSize = getSideSize();
    const squareCount = sideSize * sideSize;
    const squareWidth = (100 / sideSize);
    
// creating grid of squares
    for (let i = 0; i < squareCount; i++){
            let square = document.createElement("div");
            square.className = "square";
            square.style.flexBasis = `calc(${squareWidth}%)`;
            container.appendChild(square);
        }
// coloring and opacity
    for (const square of container.children){
            let i = 0
            square.addEventListener("mouseover", ()=>{
                square.style.backgroundColor = `#${getRandomHexRGB()}`
                
            }, {once : true});
            square.addEventListener("mouseover", ()=>{
                i++
                square.style.opacity = `${10 * i}%`;
            })
        };
    container.style.border = "2px solid black"

    const para = document.createElement("h2");
    
    para.textContent = "Move your mouse over the pad to color it in. You can make a new pad any time by clicking the button again. If your computer struggles to process the coloring, make a smaller pad.";
    instructions.appendChild(para);
    

    
});
