let activePlayer, chosenName1, chosenName2, chosenScore;
let currentScore = 0;
let roundScores = [0, 0];
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");


document.querySelector(".game-btn").addEventListener("click", ()=>{
 
    chosenName1 = document.getElementById("chosenName1").value;
    chosenName2 = document.getElementById("chosenName2").value;
    chosenScore = document.getElementById("chosenScore").value;
    
    chosenName1 ? chosenName1 : chosenName1 = "PLAYER 1";
    chosenName2 ? chosenName2 : chosenName2 = "PLAYER 2";
    chosenScore ? chosenScore : chosenScore = "100";
    
    document.querySelector(".overlay").style.display="none";
    document.querySelector(".container").style.display= "block";
    
   init(); 
})

function init(){
    activePlayer=1;
    document.querySelector('.dice-img').style.display="none";
    player1.textContent= chosenName1;
    player2.textContent= chosenName2;
    score1.textContent="0";
    score2.textContent="0";
    document.getElementById("roundScore1").textContent="0";
    document.getElementById("roundScore2").textContent="0";
    document.querySelector('.hold--box').style.display="block";
    document.querySelector('.roll-dice--box').style.display="block";
    roundScores =[0, 0];
}

document.querySelector('.roll-dice--box').addEventListener("click", ()=>{  
 
        document.querySelector('.dice-img').style.display="block";

        var rand = Math.ceil(Math.random()*6); 
        currentScore+=rand;
        document.querySelector('.dice-img').src=`img/d${rand}.png`;
        document.querySelector(`#score${activePlayer}`).textContent= currentScore;

        if(rand===6){
            currentScore = 0;
            score1.textContent="0";
            score2.textContent="0";
            activePlayer===1 ? activePlayer=2 : activePlayer=1;
            document.querySelector(".player-1").classList.toggle("active");
            document.querySelector(".player-2").classList.toggle("active");
            
        }
})

document.querySelector('.hold--box').addEventListener("click", ()=>{
    roundScores[(activePlayer-1)] += currentScore;
        document.getElementById(`roundScore${activePlayer}`).textContent= roundScores[(activePlayer-1)];
    if(roundScores[0]<chosenScore && roundScores[1]<chosenScore){
        score1.textContent="0";
        score2.textContent="0";
        activePlayer===1 ? activePlayer=2 : activePlayer=1;
        document.querySelector(".player-1").classList.toggle("active");
        document.querySelector(".player-2").classList.toggle("active");
        
        currentScore=0;
     } else{
        document.getElementById(`player${activePlayer}`).textContent= "WINNER!";
        document.getElementById(`player${activePlayer}`).classList.add("winner");
        document.querySelector('.hold--box').style.display="none";
        document.querySelector('.roll-dice--box').style.display="none";
    }
})


document.querySelector('.new-game--box').addEventListener("click", ()=>{
init();
})

