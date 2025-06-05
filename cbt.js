 import {mathematics} from './mathematics.js';
 import {physics} from './physics.js';
 import {changeColor, changeColor2} from './changeBackground.js';
 import { logInInformation, check} from './cbt-login.js';

 check();

// disabling the cbt button
 let myInput = document.getElementById('cbt2');
    function myTest(){
    myInput.disabled = true;
    }
        myTest();
   //clicking the cbt button 
  document.querySelector('.js-cbt-button').addEventListener('click',()=>{

    myTest();
    
    document.querySelector('.js-subject-heading1').innerHTML= `
    
    <div class="js-subject-heading subject-heading">
              <div class="js-instruction instruction"><marquee class="js-intruction"> Welcome to <span class="quantum">Quantum</span> computer Base test. Click on any subject of your choice and anwer the questions that follows</marquee></div>
              <button class="js-mathematics mathematics">MATHEMATICS</button>
              <button class="js-english english"> ENGLISH</button>
              <button class="js-physics physics"> PHYSICS</button>
              <button class="js-chemistry chemistry">CHEMISTRY</button>
              <a href="calculator.html"><button class="js-back-to-home back-to-home">Home</button></a>
              </div>
    `;
/*
    document.querySelector('.js-instruction').classList.add('instruction2');
  if(document.querySelector('.js-instruction').classList.contains('instruction3')){
    setInterval(()=>{
  
      document.querySelector('.js-instruction').classList.replace('instruction3','instruction2');
      
      
      },500);
    

  };


  if(document.querySelector('.js-instruction').classList.contains('instruction2')){
    setTimeout(()=>{
      document.querySelector('.js-instruction').classList.replace('instruction2','instruction3');
    },1000);
  }
*/

function questionMain(){
  document.querySelector('.js-question-main').innerHTML=`
  <div class="js-question question">
        <div class="js-count-down count-down">
        <div class="count-down-main">
        <div class="js-hour hour"></div>
        <div class="colon1">:</div>
        <div class="js-minute minute"></div>
        <div class="colon2">:</div>
        <div class="js-second second"></div>
        <div class="js-second2 second2">sec</div>
        </div>
  </div>
      <div class="js-warning1 warning1">
      </div>
      <div class="js-subject-selected subject-selected"><button class="js-subject-button subject-button">Mathematics</button></div>
      <div class="js-question-number question-number">${mathematics.questionNumbers.number1}</div>
      <div class="js-question-ask question-ask"> What is the Square root of 4?</div>
      <div class="js-options-main options-main">
      <div class="js-option1-main option1-main">
      <input type="radio" name="selector" id="option1" value="A">
      <label class="js-label1" for="option1">A. 2</label>
  </div>
  <div class="js-option2-main option2-main">
          <input type="radio" name="selector" id="option2" value="B">
          <label class="js-label2" for="option2">B. 4</label>
  </div>
  
          <div class="js-option3-main option3-main">
          <input type="radio" name="selector" id="option3" value="C">
          <label class="js-label3" for="option3">C. 3</label>
  </div>
  
  <div class="js-option2-main option4-main">
            <input type="radio" name="selector" id="option4" value="D">
            <label class="js-label4" for="option4">D. 5</label>
            </div>
  </div>
       
      <div class="js-navigate-button navigate-button">
      <button class="js-previous-button previous-button">Previous</button>
      <button class="js-next-button next-button">Next</button>
      </div>
      <div class="questions">
        <button class="js-question1 question1">1</button>
        <button class="js-question2 question1">2</button>
        <button class="js-question3 question1">3</button>
        <button class="js-question4 question1">4</button>
        <button class="js-question5 question1">5</button>
        <button class="js-question6 question1">6</button>
        <button class="js-question7 question1">7</button>
        <button class="js-question8 question1">8</button>
        <button class="js-question9 question1">9</button>
        <button class="js-question10 question1">10</button>
        <button class="js-question12 question1">11</button>
        <button class="js-question13 question1">12</button>
        <button class="js-question14 question1">14</button>
        <button class="js-question15 question1">15</button>
        <button class="js-question16 question1">16</button>
        <button class="js-question17 question1">17</button>
        <button class="js-question18 question1">18</button>
        <button class="js-question19 question1">19</button>
        <button class="js-question20 question1">20</button>
      
      </div>
      <div>
        <button class="js-submit submit" id="prevent"> Submit Exam</button>
      </div>
  
      </div>
  `
};
questionMain();

let submitPrevent = document.getElementById('prevent');
 function submit2(){
  submitPrevent.disabled = true;
  }
  submit2();
document.querySelector('.js-mathematics').addEventListener('click',()=>{
  questionMain();
  document.querySelector('.js-subject-button').innerHTML='Mathematics';
});

document.querySelector('.js-english').addEventListener('click',()=>{
  document.querySelector('.js-subject-button').innerHTML='English';
});

document.querySelector('.js-physics').addEventListener('click',()=>{
  document.querySelector('.js-subject-button').innerHTML='Physics';
});

document.querySelector('.js-chemistry').addEventListener('click',()=>{
  document.querySelector('.js-subject-button').innerHTML='Chemistry';
});


document.querySelector('.js-submit').addEventListener('click',()=>{
/*
  let option1 = document.getElementById('option1');
  let option2 = document.getElementById('option2');
  let option3 = document.getElementById('option3');
  let option4 = document.getElementById('option4');
  if(option1.checked === true){
    console.log(option1.value);
  }

  if(option2.checked === true){
    console.log(option2.value);
  }

  else if(option3.checked === true){
    console.log(option3.value);
  }

  else if(option4.checked === true){
    console.log(option4.value);
  }
*/
  document.querySelector('.js-warning1').innerHTML=`
      <div class="js-warning warning">
      <button class="js-warning-cancel warning-cancel">x</button>

      <div class="js-warning-message warning-message">
      Do you want to submit exam?
      </div>
      <div class="js-waring-button-box waring-button-box">

      <button class="js-yes-button yes-button">YES</button>
      <button class="js-no-button no-button">NO</button>
      </div>
      </div>
  `;
  document.querySelector('.js-warning-cancel').addEventListener('click',()=>{

    document.querySelector('.js-warning1').innerHTML='';

  });
  document.querySelector('.js-no-button').addEventListener('click',()=>{

    document.querySelector('.js-warning1').innerHTML='';
  });

  document.querySelector('.js-yes-button').addEventListener('click',()=>{

    document.querySelector('.js-question-main').innerHTML='';
    document.querySelector('.js-subject-heading').innerHTML='';
    document.querySelector('.js-subject-heading').classList.remove('subject-heading');
    /*
    document.querySelector('.js-after-subject-main').innerHTML=`
    <div class="js-after-submit-message after-submit-message">
      THANK YOU! YOU CAN NOW LEAVE THE HALL 
    </div>
    `;
*/
  });

});
/*
const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
      });
    });
*/
//PHYSICS
document.querySelector('.js-physics').addEventListener('click', ()=>{
questionMain();
changeColor();
changeColor2();
document.querySelector('.js-physics').addEventListener('keydown', ()=>{
  keyboardPress();
  
});
            displayQuestions1();
            document.querySelector('.js-subject-button').innerHTML='Physics';
              let option1 = document.getElementById('option1');
              let option2 = document.getElementById('option2');
              let option3 = document.getElementById('option3');
              let option4 = document.getElementById('option4');
              // QUESTION1
              function displayQuestions1(){ 
              document.querySelector('.js-question-ask').innerHTML= physics.numberContent.number1Content;
              document.querySelector('.js-label1').innerHTML= physics.number1Options.option1;
              document.querySelector('.js-label2').innerHTML= physics.number1Options.option2;
              document.querySelector('.js-label3').innerHTML= physics.number1Options.option3;
              document.querySelector('.js-label4').innerHTML= physics.number1Options.option4;
              document.querySelector('.js-question-number').innerHTML= '1.';
              }
              document.querySelector('.js-question1').addEventListener('click',()=>{
              option1.name= 'selector1';
              option2.name= 'selector1';
              option3.name= 'selector1';
              option4.name= 'selector1';
                displayQuestions1();
              });
              // QUESTION2 
              document.querySelector('.js-question2').addEventListener('click',()=>{
              option1.name= 'selector2';
              option2.name= 'selector2';
              option3.name= 'selector2';
              option4.name= 'selector2';
              
                document.querySelector('.js-question-ask').innerHTML= physics.numberContent.number2Content;
                document.querySelector('.js-label1').innerHTML= physics.number2Options.option1;
                document.querySelector('.js-label2').innerHTML= physics.number2Options.option2;
                document.querySelector('.js-label3').innerHTML= physics.number2Options.option3;
                document.querySelector('.js-label4').innerHTML= physics.number2Options.option4;
                document.querySelector('.js-question-number').innerHTML='2.';
            });
            // QUESTION3
            document.querySelector('.js-question3').addEventListener('click',()=>{
              document.querySelector('.js-question-ask').innerHTML= physics.numberContent.number3Content;
              document.querySelector('.js-label1').innerHTML= physics.number3Options.option1;
              document.querySelector('.js-label2').innerHTML= physics.number3Options.option2;
              document.querySelector('.js-label3').innerHTML= physics.number3Options.option3;
              document.querySelector('.js-label4').innerHTML= physics.number3Options.option4;
              document.querySelector('.js-question-number').innerHTML='3.';
            });

            // QUESTION4
            document.querySelector('.js-question4').addEventListener('click',()=>{
              document.querySelector('.js-question-ask').innerHTML= physics.numberContent.number4Content;
              document.querySelector('.js-label1').innerHTML= physics.number4Options.option1;
              document.querySelector('.js-label2').innerHTML= physics.number4Options.option2;
              document.querySelector('.js-label3').innerHTML= physics.number4Options.option3;
              document.querySelector('.js-label4').innerHTML= physics.number4Options.option4;
              document.querySelector('.js-question-number').innerHTML='4.';
            });

            // QUESTION5
            document.querySelector('.js-question5').addEventListener('click',()=>{
              document.querySelector('.js-question-ask').innerHTML= physics.numberContent.number5Content;
              document.querySelector('.js-label1').innerHTML= physics.number5Options.option1;
              document.querySelector('.js-label2').innerHTML= physics.number5Options.option2;
              document.querySelector('.js-label3').innerHTML= physics.number5Options.option3;
              document.querySelector('.js-label4').innerHTML= physics.number5Options.option4;
              document.querySelector('.js-question-number').innerHTML='5.';
            });

});

//MATHEMATICS
function displayQuestionMain(){
            function displayQuestions1(){
            document.querySelector('.js-question-ask').innerHTML= mathematics.numberContent.number1Content;
            document.querySelector('.js-label1').innerHTML= mathematics.number1Options.option1;
            document.querySelector('.js-label2').innerHTML= mathematics.number1Options.option2;
            document.querySelector('.js-label3').innerHTML= mathematics.number1Options.option3;
            document.querySelector('.js-label4').innerHTML= mathematics.number1Options.option4;
            document.querySelector('.js-question-number').innerHTML= '1.';
          }
            document.querySelector('.js-question1').addEventListener('click',()=>{
              displayQuestions1(); 
            });
          // QUESTION2
              document.querySelector('.js-question2').addEventListener('click',()=>{
                  document.querySelector('.js-question-ask').innerHTML= mathematics.numberContent.number2Content;
                  document.querySelector('.js-label1').innerHTML= mathematics.number2Options.option1;
                  document.querySelector('.js-label2').innerHTML= mathematics.number2Options.option2;
                  document.querySelector('.js-label3').innerHTML= mathematics.number2Options.option3;
                  document.querySelector('.js-label4').innerHTML= mathematics.number2Options.option4;
                  document.querySelector('.js-question-number').innerHTML='2.';
              });

          //QUESTION3

              document.querySelector('.js-question3').addEventListener('click',()=>{
                document.querySelector('.js-question-ask').innerHTML= mathematics.numberContent.number3Content;
                document.querySelector('.js-label1').innerHTML= mathematics.number3Options.option1;
                document.querySelector('.js-label2').innerHTML= mathematics.number3Options.option2;
                document.querySelector('.js-label3').innerHTML= mathematics.number3Options.option3;
                document.querySelector('.js-label4').innerHTML= mathematics.number3Options.option4;
                document.querySelector('.js-question-number').innerHTML='3.';
            });

          // QUESTION4
            document.querySelector('.js-question4').addEventListener('click',()=>{
              document.querySelector('.js-question-ask').innerHTML= mathematics.numberContent.number4Content;
              document.querySelector('.js-label1').innerHTML= mathematics.number4Options.option1;
              document.querySelector('.js-label2').innerHTML= mathematics.number4Options.option2;
              document.querySelector('.js-label3').innerHTML= mathematics.number4Options.option3;
              document.querySelector('.js-label4').innerHTML= mathematics.number4Options.option4;
              document.querySelector('.js-question-number').innerHTML='4.';
          });
          // QUESTION5

          document.querySelector('.js-question5').addEventListener('click',()=>{
            document.querySelector('.js-question-ask').innerHTML= mathematics.numberContent.number5Content;
            document.querySelector('.js-label1').innerHTML= mathematics.number5Options.option1;
            document.querySelector('.js-label2').innerHTML= mathematics.number5Options.option2;
            document.querySelector('.js-label3').innerHTML= mathematics.number5Options.option3;
            document.querySelector('.js-label4').innerHTML= mathematics.number5Options.option4;
            document.querySelector('.js-question-number').innerHTML='5.';
          });
 };
 displayQuestionMain();
document.querySelector('.js-mathematics').addEventListener('click', ()=>{
  displayQuestionMain();
  changeColor();
  changeColor2();
 
  document.querySelector('.js-mathematics').addEventListener('keydown', ()=>{
  keyboardPress();
  });
    });

//initializing the count down time values
let minute = 58;
let second = 60;
let hour = 1;

document.querySelector('.js-hour').innerHTML = hour;
document.querySelector('.js-minute').innerHTML = minute;
document.querySelector('.js-second').innerHTML = second;

setInterval(() => {
  document.querySelector('.js-second').innerHTML = second--;
  if (second === -1) {
    second = 59;
    document.querySelector('.js-minute').innerHTML = minute--;
  }
  if (minute === -1) {
    minute = 59;
    hour--;
    document.querySelector('.js-hour').innerHTML = hour;
  }
  if (hour === 0 && minute === 0 && second === 59) {
    clearInterval(); // Stop the countdown
  }
}, 1000);


if(document.querySelector('.js-minute').innerHTML === 0){
  document.querySelector('.js-hour').innerHTML = hour--;
}
//Activating the keydown function
 function keyboardPress(){

  if(event.key === 'a'){

    let option1 = document.getElementById('option1');
    if(option1.checked === false){
    option1.checked = true;
    }
  
  };
  
  if(event.key === 'b'){
    let option2 = document.getElementById('option2');
    if(option2.checked === false){
    option2.checked = true;
    }
  
  }
  if(event.key === 'c'){
    let option3 = document.getElementById('option3');
    if(option3.checked === false){
    option3.checked = true;
    }
  
  };
  
  if(event.key === 'd'){
    let option4 = document.getElementById('option4');
    if(option4.checked === false){
    option4.checked = true;
    }
  };
  
 };
 keyboardPress();

document.querySelector('.js-cbt-button').addEventListener('keydown', ()=>{
  keyboardPress();

});
let option1 = document.getElementById('option1');
if(option1.checked === true){
  console.log('hello');
  //document.querySelector('.js-question1').classList.add('question-Number');

};
});
