const card = document.querySelectorAll(".tiles")
const front = document.querySelectorAll(".front")
const container = document.querySelector('.container')
const score = document.querySelector('.score span')
const movesLabel = document.querySelector('.moves');
let timerLabel = document.querySelector('.timer')
let moves = 0;
let seconds = 0;
let timerId;





/* created a function that reshuffles the images randomly */

shuffleImage();
clicking();
startTimer();

/*shuffling images */

function shuffleImage() {
    card.forEach(c=>{
        const num = [...Array(card.length).keys()]
        const random = Math.floor(Math.random()*card.length)

        c.style.order = num[random]
    })
}

function clicking(){

    for(let i =0; i<card.length; i++){
        front[i].classList.add('show')

        setInterval(() => {
            front[i].classList.remove('show')
        }, 2000);

        card[i].addEventListener('click' ,()=>{

            front[i].classList.add('flip')
           const filppedCard = document.querySelectorAll('.flip')

            if(filppedCard.length == 2){

                container.style.pointerEvents ='none'
                
                setInterval(() => {
                    
                    container.style.pointerEvents ='all'
                }, 1000);
 
                match(filppedCard[0] , filppedCard[1]);
                moves++;
                movesLabel.textContent = moves;
            }
        })
    }
}
function match(cardOne , cardTwo){

    if(cardOne.dataset.index == cardTwo.dataset.index){

        score.innerHTML = parseInt(score.innerHTML) + 1
       
        cardOne.classList.remove('flip') 
        cardTwo.classList.remove('flip') 
        cardOne.classList.add('match')
        cardTwo.classList.add('match')

    }else{

        setTimeout(() => {
            
            cardOne.classList.remove('flip') 
            cardTwo.classList.remove('flip') 
        }, 1000);
    }
}

function startTimer() {
    timerId = setInterval(() => {
      seconds++;
      timerLabel.textContent = formatTime(seconds);
    }, 1000);
  }
  
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${padZero(minutes)}:${padZero(remainingSeconds)}`;
  }
  
  function padZero(num) {
    return num.toString().padStart(2, '0');
  }