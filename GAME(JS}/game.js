let useascore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");    //access all div
const msg =document.querySelector("#msg");       //acc msg
const useascorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice =()=>{
    const options = ["rock","paper","scissor"];    //array
    const randidx =Math.floor(Math.random()*3);   //random no.
    return options[randidx];
};

const drawgame = () =>{
    // console.log("game was draew.");
    msg.innerText = "game was draw . play again";
    msg.style.backgroundColor = "#081b31";
};
const showwinner = (userwin,userchoice,compchoice) => {
    if (userwin){
        useascore ++;
        useascorepara.innerText = useascore;                                                   
        msg.innerText = `you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";

    }else{
        compscore ++;
        compscorepara.innerText = compscore;
        msg.innerText =`you lose! ${userchoice} beats your ${compchoice}`;
        msg.style.backgroundColor = "red";
    }
};

     //genarate user choice
const playgame =(userchoice) =>{               //new fnx 
    // console.log("user choice =",userchoice);   //user choice
    //generate computer choice
    const compchoice =gencompchoice();
    // console.log("comp choice=",compchoice);

    if (userchoice === compchoice) {
        //draw game
    drawgame(); //fx call
    }else{
        let userwin = true;
        if (userchoice === "rock") {
            //scissor and paper
            userwin = compchoice === "paper"?false:true;
        }else if (userchoice === "paper"){
            //rock and scissor
            userwin = compchoice === "scissor"?false:true;
        }else {
             userwin =compchoice ==="rock" ?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }

};

choices.forEach((choice)=>{
    choice.addEventListener("click", () =>{

        const userchoice = choice.getAttribute("id");     //access attribute

        console.log("choice was clicked",userchoice);
        playgame(userchoice);
    });
});