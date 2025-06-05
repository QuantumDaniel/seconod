
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';


  setInterval(() => {
    const today = dayjs();
    const timeDisplay= today.format('h:mm:ss A');
      //document.querySelector('.js-time-display').innerHTML=`${timeDisplay}`;
    },1000 );


    






document.querySelector('.js-calculator-button').addEventListener( 'click',()=>{

  let calculation='';
  

  document.querySelector('.js-main-body').innerHTML= `
  <div class=" js-sub-body sub-body">

    
        <div class=" js-sub-sub-body sub-sub-body">
         <button title= " Cancel"  class=" js-cancel-button cancel-button">X</button>
             <div class="js-display-answer display-answer">

             <div class="calculator-title js-calculator-title">QUANTUM CALCULATOR <div class="js-time-display time-display"></div></div>
                  <div class="calculator-input js-calculator-input"></div>
                  <div class="calculator-answer js-calculator-answer"></div>

        



                      </div>
                           <div class="js-buttons-main buttons-main">
                            <button class="js-buttons-inverse buttons">1/x</button>
                            <button class="js-buttons-close-bracket buttons">Mod</button>
                            <button class="js-cancel buttons">AC</button>
                            <button class="buttons js-buttons-delete">DEL</button>
                            
                      <div class="row2"> 
                        <button class=" js-buttons-percentage buttons">%</button>
                        <button class="js-buttons-square buttons">x^2</button>
                        <button class="js-buttons-square-root buttons">√x</button>
                        <button class="js-buttons-division buttons">÷</button>
            
                      </div>
                      <div class="row2"> 
                        <button class="js-buttons7 buttons">7</button>
                        <button class="js-buttons8 buttons">8</button>
                        <button class="js-buttons9 buttons">9</button>
                        <button class="js-buttons-multiplication buttons">X</button>
                      </div>

                      <div class="row2"> 
                        <button class="js-buttons4 buttons">4</button>
                        <button class="js-buttons5 buttons">5</button>
                        <button class="js-buttons6 buttons">6</button>
                        <button class="js-buttons-addition buttons">+</button>
                      </div>

                      <div class="row2"> 
                        <button class="js-buttons1 buttons" >1</button>
                        <button class="js-buttons2 buttons">2</button>
                        <button class="js-buttons3 buttons">3</button>
                        <button class="js-buttons-subtraction buttons">-</button>
                      </div>

                      <div class="row2"> 
                        <button class="js-buttons-plus-or-equal-to buttons">±</button>
                        <button class="js-buttons0 buttons">0</button>
                        <button class="js-buttons-dot buttons">.</button>
                        <button class="js-buttons-equal-to buttons">=</button>
                      </div>

                      <div class="row2"> 
                      
                      </div>
                 </div>
        </div>
  `;           /*
                document.querySelector('.js-message-main').innerHTML=
                `
                <div class="message"> This Calculator is designed and implemented by <span> QUANTUM DANIEL</span></div>
                
                `;
                */

                        document.querySelector('.js-message-main').classList.add('js-head2');
                        document.querySelector('.js-head').classList.add('js-style');
                        document.querySelector('.js-cancel-button').addEventListener('click',()=>{
                        document.querySelector('.js-message-main').classList.remove('js-style');
                        document.querySelector('.js-message-main').innerHTML= '';
                        document.querySelector('.js-main-body').innerHTML= '';
    });
          document.querySelector('.js-buttons1').addEventListener('click',()=>{

                    calculation+= '1';
                    document.querySelector('.js-calculator-input').innerHTML= calculation;
                    let replaceM = calculation.replace("*","×");
                    document.querySelector('.js-calculator-input').innerHTML= replaceM;
                    let replaceD = calculation.replace("/","÷");
                    document.querySelector('.js-calculator-input').innerHTML= replaceD;

                    setTimeout(()=>{
                      document.querySelector('.js-calculator-answer').innerHTML= eval(calculation);
                    },300);
                    

                    document.querySelector('.js-buttons1').classList.add('change-background-color');

                    setTimeout(()=>{

                  document.querySelector('.js-buttons1').classList.remove('change-background-color');
                    

                    
                    },200);
                    
                    
                  });


        document.querySelector('.js-buttons2').addEventListener('click',()=>{

                calculation+= '2';
                document.querySelector('.js-calculator-input').innerHTML= calculation;
                let replaceM = calculation.replace("*","×");
                document.querySelector('.js-calculator-input').innerHTML= replaceM;
                let replaceD = calculation.replace("/","÷");
                document.querySelector('.js-calculator-input').innerHTML= replaceD;

                    setTimeout(()=>{
                      document.querySelector('.js-calculator-answer').innerHTML= eval(calculation);
                    },300);
            
        });
                
                  document.querySelector('.js-buttons3').addEventListener('click',()=>{

                    calculation+= '3';
                    document.querySelector('.js-calculator-input').innerHTML= calculation;
                    let replaceM = calculation.replace("*","×");
                    document.querySelector('.js-calculator-input').innerHTML= replaceM;
                    let replaceD = calculation.replace("/","÷");
                    document.querySelector('.js-calculator-input').innerHTML= replaceD;

                        setTimeout(()=>{
                          document.querySelector('.js-calculator-answer').innerHTML= eval(calculation);
                        },300);
                        
                    });

                        document.querySelector('.js-buttons4').addEventListener('click',()=>{

                        calculation+= '4';
                        let replaceMod = calculation.replace("%", "Mod");
                        let replaceM = calculation.replace("*","×");
                        let replaceD = calculation.replace("/","÷");
                      
                        document.querySelector('.js-calculator-input').innerHTML= replaceMod;
                        document.querySelector('.js-calculator-input').innerHTML= replaceM;
                        document.querySelector('.js-calculator-input').innerHTML= replaceD;

                            setTimeout(()=>{
                              document.querySelector('.js-calculator-answer').innerHTML= eval(calculation);
                            },300);
                            
                          });

                          document.querySelector('.js-buttons5').addEventListener('click',()=>{

                          calculation+= '5';
                          document.querySelector('.js-calculator-input').innerHTML= calculation;
                          let replaceM = calculation.replace("*","×");
                          document.querySelector('.js-calculator-input').innerHTML= replaceM;
                          let replaceD = calculation.replace("/","÷");
                          document.querySelector('.js-calculator-input').innerHTML= replaceD;

                                setTimeout(()=>{
                                  document.querySelector('.js-calculator-answer').innerHTML= eval(calculation);
                                },300);
                                  
                          });


                            document.querySelector('.js-buttons6').addEventListener('click',()=>{

                            calculation+= '6';
                            document.querySelector('.js-calculator-input').innerHTML= calculation;
                            let replaceM = calculation.replace("*","×");
                                    document.querySelector('.js-calculator-input').innerHTML= replaceM;
                                        let replaceD = calculation.replace("/","÷");
                                              document.querySelector('.js-calculator-input').innerHTML= replaceD;

                            setTimeout(()=>{
                              document.querySelector('.js-calculator-answer').innerHTML= eval(calculation);
                            },300);
                            
                            });

                          document.querySelector('.js-buttons7').addEventListener('click',()=>{

                          calculation+= '7';
                          document.querySelector('.js-calculator-input').innerHTML= calculation;
                          let replaceM = calculation.replace("*","×");
                                              document.querySelector('.js-calculator-input').innerHTML= replaceM;
                                              let replaceD = calculation.replace("/","÷");
                                                            document.querySelector('.js-calculator-input').innerHTML= replaceD;

                          setTimeout(()=>{
                            document.querySelector('.js-calculator-answer').innerHTML= eval(calculation);
                          },300);
                          
                          });

                                document.querySelector('.js-buttons8').addEventListener('click',()=>{

                              calculation+= '8';
                              document.querySelector('.js-calculator-input').innerHTML= calculation;
                              let replaceM = calculation.replace("*","×");
                                              document.querySelector('.js-calculator-input').innerHTML= replaceM;
                                              let replaceD = calculation.replace("/","÷");
                                        document.querySelector('.js-calculator-input').innerHTML= replaceD;
                                    setTimeout(()=>{
                                document.querySelector('.js-calculator-answer').innerHTML= eval(calculation);
                              },300);  
                            });
                            
                                  document.querySelector('.js-buttons9').addEventListener('click',()=>{

                                    calculation+= '9';
                                    document.querySelector('.js-calculator-input').innerHTML= calculation;
                                    let replaceM = calculation.replace("*","×");
                                              document.querySelector('.js-calculator-input').innerHTML= replaceM;
                                              let replaceD = calculation.replace("/","÷");
                                                            document.querySelector('.js-calculator-input').innerHTML= replaceD;
                                    setTimeout(()=>{
                                      document.querySelector('.js-calculator-answer').innerHTML= eval(calculation);
                                    },300);
                                    
                                      });

                      document.querySelector('.js-buttons0').addEventListener('click',()=>{

                        calculation+= '0';
                        let replaceD = calculation.replace("/","÷");
                        let  replaceM = calculation.replace("*","×");
                                      document.querySelector('.js-calculator-input').innerHTML= replaceD;
 
                      document.querySelector('.js-calculator-input').innerHTML= replaceM;
                              setTimeout(()=>{
                          document.querySelector('.js-calculator-answer').innerHTML= eval(calculation);
                        },300);
                        
                          });

                              document.querySelector('.js-buttons-dot').addEventListener('click',()=>{

                              calculation+= '.';
                              document.querySelector('.js-calculator-input').innerHTML= calculation;
                            });
                            
                              document.querySelector('.js-buttons-equal-to').addEventListener('click',()=>{
                                
                                let evaluate = eval(calculation);
                                  calculation = evaluate;
                                document.querySelector('.js-calculator-answer').innerHTML= calculation;

                                if(calculation === ''){
                                  document.querySelector('.js-calculator-answer').innerHTML= "input is empty";
                                }

    
                              });
                                      
                                    document.querySelector('.js-buttons-addition').addEventListener('click',()=>{

                                      calculation += '+';
                                      document.querySelector('.js-calculator-input').innerHTML= calculation;
                                    });


                                    document.querySelector('.js-buttons-subtraction').addEventListener('click',()=>{

                                      calculation += '-';
                                      document.querySelector('.js-calculator-input').innerHTML= calculation;
                                    });

                                        document.querySelector('.js-buttons-multiplication').addEventListener('click',()=>{
                                        
                                      calculation += '*';
                                      let replaceM = calculation.replace("*","×");
                                      document.querySelector('.js-calculator-input').innerHTML= replaceM;
                                      
                                      });

                                      document.querySelector('.js-buttons-division').addEventListener('click',()=>{

                                      calculation += '/';
                                      let replaceD = calculation.replace("/","÷");
                                           document.querySelector('.js-calculator-input').innerHTML= replaceD;
                                    });

                                   
                                    document.querySelector('.js-buttons-delete').addEventListener('click',()=>{

                                    let value = document.querySelector('.js-calculator-input').innerHTML;
                                    let input = [ 
                                      {calculation:`${value}`}

                                    ];
                                    input.forEach((number)=>{
                                    console.log(number);
                                    console.log(input.length);
                                    });
                                      
                              
                                      
                                      
                                           
                                    });

                                    document.querySelector('.js-buttons-percentage').addEventListener('click',()=>{

                                    calculation+='/100';
                                      
                                      document.querySelector('.js-calculator-answer').innerHTML=eval(calculation);
                                      if(calculation.includes(2)|| calculation.includes(3)){;
                                      console.log('strong password');
                                      }
                                      
                                           
                                    });


                                    document.querySelector('.js-buttons-square').addEventListener('click',()=>{

                                        document.querySelector('.js-calculator-answer').innerHTML=(calculation)**2;    
                                      });


                                      document.querySelector('.js-buttons-close-bracket').addEventListener('click',()=>{

                                        calculation+='%';
                                        let replaceMod = calculation.replace("%", "Mod");
                                          document.querySelector('.js-calculator-input').innerHTML=replaceMod;
                                          
                                               
                                        });

                                          document.querySelector('.js-buttons-square-root').addEventListener('click',()=>{

                                            document.querySelector('.js-calculator-answer').innerHTML=Math.sqrt(calculation);
                                            document.querySelector('.js-calculator-input').innerHTML='√'+ calculation;
                                            
                                                 
                                          });

                                          document.querySelector('.js-buttons-inverse').addEventListener('click',()=>{
                                            
                                                 document.querySelector('.js-calculator-answer').innerHTML= 1/calculation;
                                                
                                          });
      
      
    
  
                                    

                                    
                                  
                                document.querySelector('.js-cancel').addEventListener('click',()=>{
                                  calculation= '';
                                  document.querySelector('.js-calculator-input').innerHTML= calculation;
                                  document.querySelector('.js-calculator-answer').innerHTML= calculation;
                                  
                                });
                                
          });

          

          
        
                    
          
    
    
    
          




      
            
            
            
           
  
          


         
        

                   