function hideElementById(elementId){
  const element =document.getElementById(elementId);
  element.classList.add('hidden');
}

function showElementById(elementId1){
  const element1 = document.getElementById(elementId1);
  element1.classList.remove('hidden');
}

function setBgById(elementId){
  const ele = document.getElementById(elementId);
  ele.classList.add('bg-orange-400');
}
function removeBgById(elementId){
  const ele = document.getElementById(elementId);
  ele.classList.remove('bg-orange-400');
}

function getA_RandomAlphabet(){
  // get or crate an alphabet array.
  const alphabetString = 'abcdefghijklmnopqrstuvwxyx';
  const alphabets =alphabetString.split('');
  

  // get a random index 0-25;
  const randomNum = Math.random()*25;
  const index = Math.round(randomNum);

  const alphabetz = alphabets[index];
  return alphabetz;
  
}