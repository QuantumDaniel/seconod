let score=JSON.parse(localStorage.getItem('score'))||{
  wins:0,
  losses:0,
  ties:0
};

updateScoreElement();

/*if (!score){
score={
  wins:0,
  losses:0,
  ties:0
}
}
*/
function playGame(playerMove){
const computerMove=pickComputerMove();
let result='';
if (playerMove==='scissors'){  
  if (computerMove==='rock'){
result='you loose';
}
else if (computerMove==='paper'){
  result='you win';
}
else if (computerMove==='scissors'){
  result='tie';
}

} 
 if(playerMove==='paper'){
  if (computerMove==='rock'){
  result='you win';
  }
  else if (computerMove==='paper'){
    result='tie';
  }
  else if (computerMove==='scissors'){
    result='you loose';
  } 

}
  if (playerMove==='rock'){
  if (computerMove==='rock'){
  result='tie';
  }
  else if (computerMove==='paper'){
    result='you loose';
  }
  else if (computerMove==='scissors'){
    result='you win';
  }
  
}

if(result === 'you win'){
score.wins ++;

} else if(result==='you loose'){
score.losses ++;

} else if(result==='tie'){
score.ties ++;
}

localStorage.setItem('score',JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML = result ;

document.querySelector('.js-move').innerHTML 
= `You
 <img src=" botton/${playerMove}-emoji.png"
 class="move-icon">
 
<img src=" botton/${computerMove}-emoji.png"
class="move-icon>"
computer`;
}

function updateScoreElement(){
  document.querySelector('.js-score')
  .innerHTML = `wins:${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

}


function pickComputerMove(){
  const randomNumber=Math.random();
  let computerMove='';
  if (randomNumber>0 && randomNumber<1/3){
    computerMove='rock';

  }
  else if(randomNumber>=1/3 && randomNumber<2/3){
    computerMove='paper';
  } 
  else if(randomNumber>=2/3 && randomNumber <1){
  computerMove='scissors';

} return(computerMove);
}

