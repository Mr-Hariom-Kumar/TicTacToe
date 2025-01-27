console.log("Welcome to tictactoe")
let music=new Audio("Music.mp3")
let turn=new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3")
let chance="X";
//change chance
const changeTurn=()=>{
    return chance==="X"?"0":"X"
}
//check win
const checkWin=()=>{

}
//gamelogic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext')
    boxtext.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=chance;
            chance=changeTurn();
            turn.play();
            checkWin();

        }
    })
})