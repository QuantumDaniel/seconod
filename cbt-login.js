
export let logInInformation = {n1:{
    Username:'Quantum',
    password:'practice',
},
n2:{
  Username:'',
  password:'',
},
n3:{
  Username:'',
  password:'',
},
n4:{
  Username:'',
  password:'',
},
n5:{
  Username:'',
  password:'',
}
};

function keyCheck(){
  let  information1 = document.querySelector('.js-user-name');
  let  information2 = document.querySelector('.js-password');
  if(information1.value === 'Quantum' && information2.value === 'practice'){
    document.querySelector('.js-wrong-information').classList.remove('wrong-information');
    document.querySelector('.js-log-in-details-main').innerHTML='';
    let myInput = document.getElementById('cbt2');
  function myTest(){
  myInput.disabled = false;
  document.querySelector('.js-welcome1').innerHTML=`
   <div class="welcome">welcome ${information1.value}</div>`;
  };
      myTest();
  } 
  else {
    document.querySelector('.js-wrong-information').classList.add('wrong-information');
    document.querySelector('.js-wrong-information').innerHTML= '* Wrong Password or Username!*';
  }

  if(information1.value === ''&& information2.value === ''){
    document.querySelector('.js-wrong-information').innerHTML= '* Username and password are void*';
  }

};
export function check(){
  document.querySelector('.js-log-in-button').addEventListener('click',()=>{
      document.querySelector('.js-welcome').innerHTML=`
       <div class="welcome">welcome Quantum</div>`;
   keyCheck();
  }); 

  document.body.addEventListener('keydown',()=>{
    if(event.key === 'Enter'){
  keyCheck();
    }
  });
}
  