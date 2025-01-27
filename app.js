console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let chance = "X"
let isWon= false;
let ismusicplay=false
mute.addEventListener("click",()=>{
    if(!ismusicplay){
        music.play();
        document.querySelector("#line").style.display="none"
        ismusicplay=true;
    }
    else{
        music.pause();
        document.querySelector("#line").style.display="block"
        ismusicplay=false;
    }
   

})
//change chance
const changeTurn = ()=>{
    return chance === "X"? "0": "X"
}
//check win
const checkWin=()=>{
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    let textbox=document.getElementsByClassName("boxtext");
    win.forEach(e=>{
        if((textbox[e[0]].innerText===textbox[e[1]].innerText) && (textbox[e[2]].innerText===textbox[e[1]].innerText) && (textbox[e[0]].innerText!=="")){
            document.querySelector(".info").innerText= textbox[e[0]].innerText +" Won";
            isWon=true;
            document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "200px";
        }
        
    })
}

let boxes = document.getElementsByClassName("box");
//here box are collected by classname attribute instead of uery selector because class name gives html collection which can be further transformed in to array by using array.from(argument);

//foreach ke bina agar directly ye logic lagta to jara soch ke dekho kahi pe bhi click karoge aur sare box pe ye function karne ki koshis karega jabki for each ek bari me ek hi aata hai;

Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = chance;
            chance = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isWon){
                document.querySelector(".info").innerText  = "Turn for " + chance;
            }
        }
    })
})

reset.addEventListener("click",(el)=>{
    let boxtexts=document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(elemet=>{
        elemet.innerText="";

    });
    chance="X";
    isWon=false;
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + chance;
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "0px"
})
