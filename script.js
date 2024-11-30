const container = document.querySelector("#container");
const btn = document.querySelector("#create");


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
        for (let i = 0; i < squareCount; i++){
            let square = document.createElement("div");
            square.className = "square";
            square.style.flexBasis = `calc(${squareWidth}%)`;
            container.appendChild(square);
        }
        for (const square of container.children){
            square.addEventListener("mouseover", ()=>{
                square.style.backgroundColor = `#${getRandomHexRGB()}`
  
            });
        }
   
    
});
