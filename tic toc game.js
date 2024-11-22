let boxes= document.querySelectorAll(".box");
let resetbtn= document.querySelector("#reset-btn");
let newGameBtn= document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

let turn0=true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 5],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () =>{
    ture0=true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(turn0){
            box.innerText= "0";
            turn0= false;
        }else{
            box.innerText="X";
            turn0= true;
        }
        box.disabled="true";

        checkWinner();
    });
});

const disableBoxes=() => {
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=() => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

if (winpatterns===9){
    msg.innerText="it's a draw!";
}

const showWinner = (winner) =>{
    msg.innerText= `congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner= ()=>{
    for(let pattern of winpatterns){
        let pos1Val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2val !="" && pos3val !=""){
            if(pos1Val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }
   }
};

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
