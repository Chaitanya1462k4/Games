let userscore = 0;
let computerscore = 0;

const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let score=document.querySelector("#you");
const Computer=document.querySelector("#computer");

const gencompchocie=()=>{
    const opt=["rock", "paper", "scissors"];
    ranidx=Math.floor(Math.random()*3);
    return opt[ranidx];
}


const draw=()=>{
      msg.innerText="It's a draw";
      msg.style.backgroundColor="Black";
      msg.style.color="white";
    console.log("It's a draw");
}

    const showwinner=(winner)=>{
        if(winner){
         userscore++;
         score.innerText= userscore;

         msg.innerText="User is the winner";
         msg.style.backgroundColor="green";
         msg.style.color="white";
        console.log("User is the winner");
        
     }
     else{
         computerscore++;
         Computer.innerText= computerscore;
        console.log("Computer is the winner");
         msg.style.backgroundColor="red";
         msg.style.color="white";
        msg.innerText="Computer is the winner";
     }
    }

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
         console.log("User choice: ", userchoice);
         const compchoice=gencompchocie();
        console.log("Computer choice: ", compchoice);
        let winner =true;

     if(userchoice === compchoice){
        //Draw
        draw();
     }
     else{
       
        if(userchoice==="rock"){

            winner= compchoice==="paper"?false:true;
     }
     else if(userchoice==="paper"){
        winner= compchoice==="rock"?true:false;

     }
     else if(userchoice==="scissors"){
        winner= compchoice==="paper"?true:false;
     }
      showwinner(winner);
    }

     
    });
});