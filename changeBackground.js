
export function changeColor(){
   let option1 = document.getElementById('option1');
    let option2 = document.getElementById('option2');
    let option3 = document.getElementById('option3');
    let option4 = document.getElementById('option4');
  document.getElementById('option1').addEventListener('click',()=>{
          if(option1.checked === true){
            document.querySelector('.js-question1').classList.add('question-Number');
            }
        });
  document.getElementById('option2').addEventListener('click',()=>{
        if(option2.checked === true){
          document.querySelector('.js-question1').classList.add('question-Number');
          }
              });

        document.getElementById('option3').addEventListener('click',()=>{
          if(option3.checked === true){
            document.querySelector('.js-question1').classList.add('question-Number');
            }
  });
        document.getElementById('option4').addEventListener('click',()=>{
          if(option4.checked === true){
            document.querySelector('.js-question1').classList.add('question-Number');
            }

             });
};





export function changeColor2(){
  let option1 = document.getElementById('option1');
   let option2 = document.getElementById('option2');
   let option3 = document.getElementById('option3');
   let option4 = document.getElementById('option4');
 document.getElementById('option1').addEventListener('click',()=>{
         if(option1.checked === true){
           document.querySelector('.js-question2').classList.add('question-Number');
           }
       });
 document.getElementById('option2').addEventListener('click',()=>{
       if(option2.checked === true){
         document.querySelector('.js-question2').classList.add('question-Number');
         }
             });

       document.getElementById('option3').addEventListener('click',()=>{
         if(option3.checked === true){
           document.querySelector('.js-question2').classList.add('question-Number');
           }
 });
       document.getElementById('option4').addEventListener('click',()=>{
         if(option4.checked === true){
           document.querySelector('.js-question2').classList.add('question-Number');
           }

            });
};