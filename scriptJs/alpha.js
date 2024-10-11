// function playNow(){
//   // console.log("now we are playing");
//   // step-1 hide the home page. To hide screen we add "class hidden" 
//   // step -2 show the playground page

//   const homeHidden = document.getElementById('homeScreen');
//   homeHidden.classList.add('hidden');

//   const showPlayGround = document.getElementById('playGround');
//   showPlayGround.classList.remove('hidden');
// }

function continueGame(){
  // step-1 generate a random alphabet
  const RandomAlphabet =getA_RandomAlphabet();
  // console.log(RandomAlphabet)
  // set the random genetated alphabet to the screen.
  const C_Alphabet = document.getElementById('cuttentAlphabet');
  C_Alphabet.innerText = RandomAlphabet;

  setBgById(RandomAlphabet)

}

function playNow(){
  hideElementById('homeScreen');
  showElementById('playGround');
  continueGame();
}