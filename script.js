let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-button");
let msgcontainer=document.querySelector(".msg-cont");
let msg=document.querySelector("#msg");
let newbutton=document.querySelector("#new");

let turn0=true;
msgcontainer.classList.add("hide");
const winnigpat = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],  
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
     console.log("clicked box");   
     if(turn0) {
        box.innerText="x";
        turn0=false;
     }
     else{
        box.innerText="O";
        turn0=true;
     }

    box.disabled=true;


    checkWinner();

    });
    });

    const disablebuttons=()=>{
        boxes.forEach((box)=>{
            box.disabled=true;
        });
    };

    const enablebuttons=()=>{
        boxes.forEach((box)=>{
            box.disabled=false;
            box.innerText="";
        });};    

    
    const showwinner=(winner)=>{
        msg.innerText="Player "+winner+" wins!";
        msgcontainer.classList.remove("hide");
        disablebuttons();
       
    };
      const showdraw=()=>{
        msg.innerText="It's a draw!";
        msgcontainer.classList.remove("hide");
        disablebuttons();
    };

    const checkWinner = () => {
        let winnerFound = false;
    
        for (let pattern of winnigpat) {
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;
    
            if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
                showwinner(pos1);
                winnerFound = true;
                return; // Exit early if we found a winner
            }
        }
    
        // If no winner, check for draw
        let allFilled = true;
        boxes.forEach((box) => {
            if (box.innerText === "") {
                allFilled = false;
            }
        });
    
        if (allFilled && !winnerFound) {
            showdraw();
        }
    };
    
          
           
           const resetgame=()=>{
            msgcontainer.classList.add("hide");
            enablebuttons();
            turn0=true;
            
            };
            
           newbutton.addEventListener("click",resetgame);
        reset.addEventListener("click", resetgame);
