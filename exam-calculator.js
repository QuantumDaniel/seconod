document.body.addEventListener('keyup', () => {

  //civic
  const civic = document.getElementById('civic-ca1');
  if (civic.value < 0) {
    civic.value = '';
  }
  if (civic.value > 10) {
    civic.value = '';
  };
  const civic2 = document.getElementById('civic-ca2');
  if (civic2.value < 0) {
    civic2.value = '';
  }
  if (civic2.value > 20) {
    civic2.value = '';
  };
  const civic3 = document.getElementById('civic-exam');
  if (civic3.value < 0) {
    civic3.value = '';
  }
  if (civic3.value > 70) {
    civic3.value = '';
  };

  //marketing
  const marketing = document.getElementById('marketing-ca1');
  if (marketing.value < 0) {
    marketing.value = '';
  }
  if (marketing.value > 10) {
    marketing.value = '';
  };
  const marketing2 = document.getElementById('marketing-ca2');
  if (marketing2.value < 0) {
    marketing2.value = '';
  }
  if (marketing2.value > 20) {
    marketing2.value = '';
  };
  const marketing3 = document.getElementById('marketing-exam');
  if (marketing3.value < 0) {
    marketing3.value = '';
  }
  if (marketing3.value > 70) {
    marketing3.value = '';
  };

  const maths = document.getElementById('maths-ca1');
  if (maths.value < 0) {
    maths.value = '';
  }
  if (maths.value > 10) {
    maths.value = '';
  };
  const maths2 = document.getElementById('maths-ca2');
  if (maths2.value < 0) {
    maths2.value = '';
  }
  if (maths2.value > 20) {
    maths2.value = '';
  };
  const maths3 = document.getElementById('maths-exam');
  if (maths3.value < 0) {
    maths3.value = '';
  }
  if (maths3.value > 70) {
    maths3.value = '';
  };

  //English
  const english = document.getElementById('english-ca1');
  if (english.value < 0) {
    english.value = '';
  }
  if (english.value > 10) {
    english.value = '';
  };
  const english2 = document.getElementById('english-ca2');
  if (english2.value < 0) {
    english2.value = '';
  }
  if (english2.value > 20) {
    english2.value = '';
  };
  const english3 = document.getElementById('english-exam');
  if (english3.value < 0) {
    english3.value = '';
  }
  if (english3.value > 70) {
    english3.value = '';
  };

  //physics
  const physics = document.getElementById('physics-ca1');
  if (physics.value < 0) {
    physics.value = '';
  }
  if (physics.value > 10) {
    physics.value = '';
  };

  const physics2 = document.getElementById('physics-ca2');
  if (physics2.value < 0) {
    physics2.value = '';
  }
  if (physics2.value > 20) {
    physics2.value = '';
  };

  const physics3 = document.getElementById('physics-exam');
  if (physics3.value < 0) {
    physics3.value = '';
  }
  if (physics3.value > 70) {
    physics3.value = '';
  };

  //chemistry
  const chemistry = document.getElementById('chemistry-ca1');
  if (chemistry.value < 0) {
    chemistry.value = '';
  }
  if (chemistry.value > 10) {
    chemistry.value = '';
  };

  const chemistry2 = document.getElementById('chemistry-ca2');
  if (chemistry2.value < 0) {
    chemistry2.value = '';
  }
  if (chemistry2.value > 20) {
    chemistry2.value = '';
  };
  const chemistry3 = document.getElementById('chemistry-exam');
  if (chemistry3.value < 0) {
    chemistry3.value = '';
  }
  if (chemistry3.value > 70) {
    chemistry3.value = '';
  };

  //chemistry
  const biology = document.getElementById('biology-ca1');
  if (biology.value < 0) {
    biology.value = '';
  }
  if (biology.value > 10) {
    biology.value = '';
  };
  const biology2 = document.getElementById('biology-ca2');
  if (biology2.value < 0) {
    biology2.value = '';
  }
  if (biology2.value > 20) {
    biology2.value = '';
  };
  const biology3 = document.getElementById('biology-exam');
  if (biology3.value < 0) {
    biology3.value = '';
  }
  if (biology3.value > 70) {
    biology3.value = '';
  };

  //agric
  const agric = document.getElementById('agric-ca1');
  if (agric.value < 0) {
    agric.value = '';
  }
  if (agric.value > 10) {
    agric.value = '';
  };
  const agric2 = document.getElementById('agric-ca2');
  if (agric2.value < 0) {
    agric2.value = '';
  }
  if (agric2.value > 20) {
    agric2.value = '';
  };
  const agric3 = document.getElementById('agric-exam');
  if (agric3.value < 0) {
    agric3.value = '';
  }
  if (agric3.value > 70) {
    agric3.value = '';
  };

  //economics
  const economics = document.getElementById('economics-ca1');
  if (economics.value < 0) {
    economics.value = '';
  }
  if (economics.value > 10) {
    economics.value = '';
  };
  const economics2 = document.getElementById('economics-ca2');
  if (economics2.value < 0) {
    economics2.value = '';
  }
  if (economics2.value > 20) {
    economics2.value = '';
  };
  const economics3 = document.getElementById('economics-exam');
  if (economics3.value < 0) {
    economics3.value = '';
  }
  if (economics3.value > 70) {
    economics3.value = '';
  };

});

//Mathematics scores
let mathematicsCa1 = document.getElementById('maths-ca1');
let mathematicsCa2 = document.getElementById('maths-ca2');
let mathematicsCaTotal = document.getElementById('maths-ca-total');
let mathematicsExam = document.getElementById('maths-exam');
let mathematicsExamTotal = document.getElementById('maths-exam-total');
let mathematicsRemark = document.querySelector('.js-maths-remark');
let mathematicsGrade = document.querySelector('.js-maths-grade');

// mathematics function
function mathematics() {
  mathematicsCaTotal.value = parseInt(mathematicsCa1.value) + parseInt(mathematicsCa2.value);
  mathematicsExamTotal.value = parseInt(mathematicsExam.value) + parseInt(mathematicsCaTotal.value);

  if (mathematicsExamTotal.value >= 70) {
    mathematicsRemark.innerHTML = 'EXCELLENT';
    mathematicsGrade.innerHTML = 'A';
  }
  else if (mathematicsExamTotal.value >= 60) {
    mathematicsRemark.innerHTML = 'V.GOOD';
    mathematicsGrade.innerHTML = 'B';
  }
  else if (mathematicsExamTotal.value >= 50) {
    mathematicsRemark.innerHTML = 'GOOD';
    mathematicsGrade.innerHTML = 'C';
  }

  else if (mathematicsExamTotal.value >= 40) {
    mathematicsRemark.innerHTML = 'POOR';
    mathematicsGrade.innerHTML = 'D';
  }

  else if (mathematicsExamTotal.value >= 30) {
    mathematicsRemark.innerHTML = 'WEAK';
    mathematicsGrade.innerHTML = 'E';
  }
  else {
    mathematicsRemark.innerHTML = 'FAIL';
    mathematicsGrade.innerHTML = 'F';
  };
}
// Click function
document.querySelector('.js-calculate').addEventListener('click', () => {
  mathematics();
});

//key fucntion 
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    mathematics();
  }
  if (event.key === 'Escape') {
    clear1();
  }
});
// clear function
function clear1() {
  mathematicsCaTotal.value = '';
  mathematicsCa1.value = '';
  mathematicsCa2.value = '';
  mathematicsExam.value = '';
  mathematicsExamTotal.value = '';
  mathematicsRemark.innerHTML = '';
  mathematicsGrade.innerHTML = '';
}
document.querySelector('.js-clear').addEventListener('click', () => {
  clear1();

});


//english scores
let englishCa1 = document.getElementById('english-ca1');
let englishCa2 = document.getElementById('english-ca2');
let englishCaTotal = document.getElementById('english-ca-total');
let englishExam = document.getElementById('english-exam');
let englishExamTotal = document.getElementById('english-exam-total');
let englishRemark = document.querySelector('.js-english-remark');
let englishGrade = document.querySelector('.js-english-grade');
// english function
function english() {
  englishCaTotal.value = parseInt(englishCa1.value) + parseInt(englishCa2.value);
  englishExamTotal.value = parseInt(englishExam.value) + parseInt(englishCaTotal.value);

  if (englishExamTotal.value >= 70) {
    englishRemark.innerHTML = 'EXCELLENT';
    englishGrade.innerHTML = 'A';
  }
  else if (englishExamTotal.value >= 60) {
    englishRemark.innerHTML = 'V.GOOD';
    englishGrade.innerHTML = 'B';
  }
  else if (englishExamTotal.value >= 50) {
    englishRemark.innerHTML = 'GOOD';
    englishGrade.innerHTML = 'C';
  }

  else if (englishExamTotal.value >= 40) {
    englishRemark.innerHTML = 'POOR';
    englishGrade.innerHTML = 'D';
  }

  else if (englishExamTotal.value >= 30) {
    englishRemark.innerHTML = 'WEAK';
    englishGrade.innerHTML = 'E';
  }
  else {
    englishRemark.innerHTML = 'FAIL';
    englishGrade.innerHTML = 'F';
  };
}
// Click function
document.querySelector('.js-calculate').addEventListener('click', () => {
  english();
});

//key fucntion 
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    english();
  }
  if (event.key === 'Escape') {
    clear2();
  }
});
// clear function
function clear2() {
  englishCaTotal.value = '';
  englishCa1.value = '';
  englishCa2.value = '';
  englishExam.value = '';
  englishExamTotal.value = '';
  englishRemark.innerHTML = '';
  englishGrade.innerHTML = '';
}
document.querySelector('.js-clear').addEventListener('click', () => {
  clear2();
});


//physics scores
let physicsCa1 = document.getElementById('physics-ca1');
let physicsCa2 = document.getElementById('physics-ca2');
let physicsCaTotal = document.getElementById('physics-ca-total');
let physicsExam = document.getElementById('physics-exam');
let physicsExamTotal = document.getElementById('physics-exam-total');
let physicsRemark = document.querySelector('.js-physics-remark');
let physicsGrade = document.querySelector('.js-physics-grade');
// physics function
function physics() {
  physicsCaTotal.value = parseInt(physicsCa1.value) + parseInt(physicsCa2.value);
  physicsExamTotal.value = parseInt(physicsExam.value) + parseInt(physicsCaTotal.value);

  if (physicsExamTotal.value >= 70) {
    physicsRemark.innerHTML = 'EXCELLENT';
    physicsGrade.innerHTML = 'A';
  }
  else if (physicsExamTotal.value >= 60) {
    physicsRemark.innerHTML = 'V.GOOD';
    physicsGrade.innerHTML = 'B';
  }
  else if (physicsExamTotal.value >= 50) {
    physicsRemark.innerHTML = 'GOOD';
    physicsGrade.innerHTML = 'C';
  }

  else if (physicsExamTotal.value >= 40) {
    physicsRemark.innerHTML = 'POOR';
    physicsGrade.innerHTML = 'D';
  }

  else if (physicsExamTotal.value >= 30) {
    physicsRemark.innerHTML = 'WEAK';
    physicsGrade.innerHTML = 'E';
  }
  else {
    physicsRemark.innerHTML = 'FAIL';
    physicsGrade.innerHTML = 'F';
  };
}
// Click function
document.querySelector('.js-calculate').addEventListener('click', () => {
  physics();
});

//key fucntion 
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    physics();
  }
  if (event.key === 'Escape') {
    clear3();
  }
});
// clear function
function clear3() {
  physicsCaTotal.value = '';
  physicsCa1.value = '';
  physicsCa2.value = '';
  physicsExam.value = '';
  physicsExamTotal.value = '';
  physicsRemark.innerHTML = '';
  physicsGrade.innerHTML = '';
}
document.querySelector('.js-clear').addEventListener('click', () => {
  clear3();

});
//chemistry scores
let chemistryCa1 = document.getElementById('chemistry-ca1');
let chemistryCa2 = document.getElementById('chemistry-ca2');
let chemistryCaTotal = document.getElementById('chemistry-ca-total');
let chemistryExam = document.getElementById('chemistry-exam');
let chemistryExamTotal = document.getElementById('chemistry-exam-total');
let chemistryRemark = document.querySelector('.js-chemistry-remark');
let chemistryGrade = document.querySelector('.js-chemistry-grade');
// chemistry function
function chemistry() {
  chemistryCaTotal.value = parseInt(chemistryCa1.value) + parseInt(chemistryCa2.value);
  chemistryExamTotal.value = parseInt(chemistryExam.value) + parseInt(chemistryCaTotal.value);

  if (chemistryExamTotal.value >= 70) {
    chemistryRemark.innerHTML = 'EXCELLENT';
    chemistryGrade.innerHTML = 'A';
  }
  else if (chemistryExamTotal.value >= 60) {
    chemistryRemark.innerHTML = 'V.GOOD';
    chemistryGrade.innerHTML = 'B';
  }
  else if (chemistryExamTotal.value >= 50) {
    chemistryRemark.innerHTML = 'GOOD';
    chemistryGrade.innerHTML = 'C';
  }

  else if (chemistryExamTotal.value >= 40) {
    chemistryRemark.innerHTML = 'POOR';
    chemistryGrade.innerHTML = 'D';
  }

  else if (chemistryExamTotal.value >= 30) {
    chemistryRemark.innerHTML = 'WEAK';
    chemistryGrade.innerHTML = 'E';
  }
  else {
    chemistryRemark.innerHTML = 'FAIL';
    chemistryGrade.innerHTML = 'F';
  };
}
// Click function
document.querySelector('.js-calculate').addEventListener('click', () => {
  chemistry();
});

//key fucntion 
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    chemistry();
  }
  if (event.key === 'Escape') {
    clear4();
  }
});
// clear function
function clear4() {
  chemistryCaTotal.value = '';
  chemistryCa1.value = '';
  chemistryCa2.value = '';
  chemistryExam.value = '';
  chemistryExamTotal.value = '';
  chemistryRemark.innerHTML = '';
  chemistryGrade.innerHTML = '';
}
document.querySelector('.js-clear').addEventListener('click', () => {
  clear4();
});
//biology scores
let biologyCa1 = document.getElementById('biology-ca1');
let biologyCa2 = document.getElementById('biology-ca2');
let biologyCaTotal = document.getElementById('biology-ca-total');
let biologyExam = document.getElementById('biology-exam');
let biologyExamTotal = document.getElementById('biology-exam-total');
let biologyRemark = document.querySelector('.js-biology-remark');
let biologyGrade = document.querySelector('.js-biology-grade');
// biology function
function biology() {
  biologyCaTotal.value = parseInt(biologyCa1.value) + parseInt(biologyCa2.value);
  biologyExamTotal.value = parseInt(biologyExam.value) + parseInt(biologyCaTotal.value);

  if (biologyExamTotal.value >= 70) {
    biologyRemark.innerHTML = 'EXCELLENT';
    biologyGrade.innerHTML = 'A';
  }
  else if (biologyExamTotal.value >= 60) {
    biologyRemark.innerHTML = 'V.GOOD';
    biologyGrade.innerHTML = 'B';
  }
  else if (biologyExamTotal.value >= 50) {
    biologyRemark.innerHTML = 'GOOD';
    biologyGrade.innerHTML = 'C';
  }

  else if (biologyExamTotal.value >= 40) {
    biologyRemark.innerHTML = 'POOR';
    biologyGrade.innerHTML = 'D';
  }

  else if (biologyExamTotal.value >= 30) {
    biologyRemark.innerHTML = 'WEAK';
    biologyGrade.innerHTML = 'E';
  }
  else {
    biologyRemark.innerHTML = 'FAIL';
    biologyGrade.innerHTML = 'F';
  };

}
// Click function
document.querySelector('.js-calculate').addEventListener('click', () => {
  biology();
});

//key fucntion 
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    biology();
  }
  if (event.key === 'Escape') {
    clear5();
  }
});
// clear function
function clear5() {
  biologyCaTotal.value = '';
  biologyCa1.value = '';
  biologyCa2.value = '';
  biologyExam.value = '';
  biologyExamTotal.value = '';
  biologyRemark.innerHTML = '';
  biologyGrade.innerHTML = '';
}
document.querySelector('.js-clear').addEventListener('click', () => {
  clear5();
});

//agric scores
let agricCa1 = document.getElementById('agric-ca1');
let agricCa2 = document.getElementById('agric-ca2');
let agricCaTotal = document.getElementById('agric-ca-total');
let agricExam = document.getElementById('agric-exam');
let agricExamTotal = document.getElementById('agric-exam-total');
let agricRemark = document.querySelector('.js-agric-remark');
let agricGrade = document.querySelector('.js-agric-grade');
// agric function
function agric() {
  agricCaTotal.value = parseInt(agricCa1.value) + parseInt(agricCa2.value);
  agricExamTotal.value = parseInt(agricExam.value) + parseInt(agricCaTotal.value);

  if (agricExamTotal.value >= 70) {
    agricRemark.innerHTML = 'EXCELLENT';
    agricGrade.innerHTML = 'A';
  }
  else if (agricExamTotal.value >= 60) {
    agricRemark.innerHTML = 'V.GOOD';
    agricGrade.innerHTML = 'B';
  }
  else if (agricExamTotal.value >= 50) {
    agricRemark.innerHTML = 'GOOD';
    agricGrade.innerHTML = 'C';
  }

  else if (agricExamTotal.value >= 40) {
    agricRemark.innerHTML = 'POOR';
    agricGrade.innerHTML = 'D';
  }

  else if (agricExamTotal.value >= 30) {
    agricRemark.innerHTML = 'WEAK';
    agricGrade.innerHTML = 'E';
  }
  else {
    agricRemark.innerHTML = 'FAIL';
    agricGrade.innerHTML = 'F';
  };
}
// Click function
document.querySelector('.js-calculate').addEventListener('click', () => {
  agric();
});
//key fucntion 
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    agric();
  }
  if (event.key === 'Escape') {
    clear6();
  }
});
// clear function
function clear6() {
  agricCaTotal.value = '';
  agricCa1.value = '';
  agricCa2.value = '';
  agricExam.value = '';
  agricExamTotal.value = '';
  agricRemark.innerHTML = '';
  agricGrade.innerHTML = '';
}
document.querySelector('.js-clear').addEventListener('click', () => {
  clear6();
});
//economics scores
let economicsCa1 = document.getElementById('economics-ca1');
let economicsCa2 = document.getElementById('economics-ca2');
let economicsCaTotal = document.getElementById('economics-ca-total');
let economicsExam = document.getElementById('economics-exam');
let economicsExamTotal = document.getElementById('economics-exam-total');
let economicsRemark = document.querySelector('.js-economics-remark');
let economicsGrade = document.querySelector('.js-economics-grade');
// economics function
function economics() {
  economicsCaTotal.value = parseInt(economicsCa1.value) + parseInt(economicsCa2.value);
  economicsExamTotal.value = parseInt(economicsExam.value) + parseInt(economicsCaTotal.value);

  if (economicsExamTotal.value >= 70) {
    economicsRemark.innerHTML = 'EXCELLENT';
    economicsGrade.innerHTML = 'A';
  }
  else if (economicsExamTotal.value >= 60) {
    economicsRemark.innerHTML = 'V.GOOD';
    economicsGrade.innerHTML = 'B';
  }
  else if (economicsExamTotal.value >= 50) {
    economicsRemark.innerHTML = 'GOOD';
    economicsGrade.innerHTML = 'C';
  }

  else if (economicsExamTotal.value >= 40) {
    economicsRemark.innerHTML = 'POOR';
    economicsGrade.innerHTML = 'D';
  }
  else if (economicsExamTotal.value >= 30) {
    economicsRemark.innerHTML = 'WEAK';
    economicsGrade.innerHTML = 'E';
  }
  else {
    economicsRemark.innerHTML = 'FAIL';
    economicsGrade.innerHTML = 'F';
  };
}
// Click function
document.querySelector('.js-calculate').addEventListener('click', () => {
  economics();
});
//key fucntion 
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    economics();
  }
  if (event.key === 'Escape') {
    clear7();
  }
});
// clear function
function clear7() {
  economicsCaTotal.value = '';
  economicsCa1.value = '';
  economicsCa2.value = '';
  economicsExam.value = '';
  economicsExamTotal.value = '';
  economicsRemark.innerHTML = '';
  economicsGrade.innerHTML = '';
}
document.querySelector('.js-clear').addEventListener('click', () => {
  clear7();
});



//marketing scores
let marketingCa1 = document.getElementById('marketing-ca1');
let marketingCa2 = document.getElementById('marketing-ca2');
let marketingCaTotal = document.getElementById('marketing-ca-total');
let marketingExam = document.getElementById('marketing-exam');
let marketingExamTotal = document.getElementById('marketing-exam-total');
let marketingRemark = document.querySelector('.js-marketing-remark');
let marketingGrade = document.querySelector('.js-marketing-grade');
// marketing function
function marketing() {
  marketingCaTotal.value = parseInt(marketingCa1.value) + parseInt(marketingCa2.value);
  marketingExamTotal.value = parseInt(marketingExam.value) + parseInt(marketingCaTotal.value);

  if (marketingExamTotal.value >= 70) {
    marketingRemark.innerHTML = 'EXCELLENT';
    marketingGrade.innerHTML = 'A';
  }
  else if (marketingExamTotal.value >= 60) {
    marketingRemark.innerHTML = 'V.GOOD';
    marketingGrade.innerHTML = 'B';
  }
  else if (marketingExamTotal.value >= 50) {
    marketingRemark.innerHTML = 'GOOD';
    marketingGrade.innerHTML = 'C';
  }

  else if (marketingExamTotal.value >= 40) {
    marketingRemark.innerHTML = 'POOR';
    marketingGrade.innerHTML = 'D';
  }
  else if (marketingExamTotal.value >= 30) {
    marketingRemark.innerHTML = 'WEAK';
    marketingGrade.innerHTML = 'E';
  }
  else {
    marketingRemark.innerHTML = 'FAIL';
    marketingGrade.innerHTML = 'F';
  };
}
// Click function
document.querySelector('.js-calculate').addEventListener('click', () => {
  marketing();
});
//key fucntion 
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    marketing();
  }
  if (event.key === 'Escape') {
    clear8();
  }
});
// clear function
function clear8() {
  marketingCaTotal.value = '';
  marketingCa1.value = '';
  marketingCa2.value = '';
  marketingExam.value = '';
  marketingExamTotal.value = '';
  marketingRemark.innerHTML = '';
  marketingGrade.innerHTML = '';
}
document.querySelector('.js-clear').addEventListener('click', () => {
  clear8();
});


//civic scores
let civicCa1 = document.getElementById('civic-ca1');
let civicCa2 = document.getElementById('civic-ca2');
let civicCaTotal = document.getElementById('civic-ca-total');
let civicExam = document.getElementById('civic-exam');
let civicExamTotal = document.getElementById('civic-exam-total');
let civicRemark = document.querySelector('.js-civic-remark');
let civicGrade = document.querySelector('.js-civic-grade');
// civic function
function civic() {
  civicCaTotal.value = parseInt(civicCa1.value) + parseInt(civicCa2.value);
  civicExamTotal.value = parseInt(civicExam.value) + parseInt(civicCaTotal.value);

  if (civicExamTotal.value >= 70) {
    civicRemark.innerHTML = 'EXCELLENT';
    civicGrade.innerHTML = 'A';
  }
  else if (civicExamTotal.value >= 60) {
    civicRemark.innerHTML = 'V.GOOD';
    civicGrade.innerHTML = 'B';
  }
  else if (civicExamTotal.value >= 50) {
    civicRemark.innerHTML = 'GOOD';
    civicGrade.innerHTML = 'C';
  }

  else if (civicExamTotal.value >= 40) {
    civicRemark.innerHTML = 'POOR';
    civicGrade.innerHTML = 'D';
  }
  else if (civicExamTotal.value >= 30) {
    civicRemark.innerHTML = 'WEAK';
    civicGrade.innerHTML = 'E';
  }
  else {
    civicRemark.innerHTML = 'FAIL';
    civicGrade.innerHTML = 'F';
  };
}
// Click function
document.querySelector('.js-calculate').addEventListener('click', () => {
  civic();
});
//key fucntion 
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    civic();
  }
  if (event.key === 'Escape') {
    clear9();
  }
});
// clear function
function clear9() {
  civicCaTotal.value = '';
  civicCa1.value = '';
  civicCa2.value = '';
  civicExam.value = '';
  civicExamTotal.value = '';
  civicRemark.innerHTML = '';
  civicGrade.innerHTML = '';
}
document.querySelector('.js-clear').addEventListener('click', () => {
  clear9();
});

document.querySelector('.js-print-button').addEventListener('click', () => {
  window.print();
});


