let divs = document.getElementsByClassName("lts");
let leftdiv = document.querySelector("#left");
let rightdiv = document.querySelector("#right");
let div;

for(div of divs) {
    div.addEventListener("dragstart", (e) => {
        let sele = e.target;
        rightdiv.addEventListener("dragover", (e) => {
            e.preventDefault();
        })
        rightdiv.addEventListener("drop", () => {
            rightdiv.appendChild(sele);
            sele = null;
        })
        leftdiv.addEventListener("dragover", (e) => {
            e.preventDefault();
        })
        leftdiv.addEventListener("drop", () => {
            leftdiv.appendChild(sele);
            sele = null;
        })
    })
}