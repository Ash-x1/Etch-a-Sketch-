const divMain = document.querySelector("#divMain");
//const divGrid = document.createElement("div");
//divMain.appendChild(divGrid);
function draw(){
    for(let i = 0; i < 16; i++){
        const divGrid = document.createElement("div");
        divGrid.style.height= "16px";
        divGrid.style.width= "16px";
        divGrid.style.border= "white 2px solid";
        //divGrid.style.background= "black";
        divMain.appendChild(divGrid);
    }
    return;
}
draw();
console.log(draw);