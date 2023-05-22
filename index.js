function shuffleCards() {
    var container = document.querySelector('.tiles');
    var cards = Array.from(container.children);
  
    for (var i = cards.length - 1; i > 0; i--) {
      var randomIndex = Math.floor(Math.random() * (i + 1));
      container.appendChild(cards[randomIndex]);
    }
  }
  var startButton = document.getElementById('startButton');
startButton.addEventListener('click', shuffleCards);

var timerElement = document.getElementById('timer');
var startButton = document.getElementById('startButton');
var stopButton = document.getElementById('stopButton');
var startTime, intervalId;

function startTimer() {
    startTime = Date.now();
    intervalId = setInterval(updateTimer, 1000); 
    startButton.disabled = true; 
  }

  function stopTimer() {
    clearInterval(intervalId);
    startButton.disabled = false; 
  }
  function updateTimer() {
    var elapsedTime = Math.floor((Date.now() - startTime) / 1000); 

    
    var minutes = Math.floor(elapsedTime / 60);
    var seconds = elapsedTime % 60;
    // made the minutes and seconds to start with zero
    var minutesString = minutes < 10 ? '0' + minutes : minutes.toString();
    var secondsString = seconds < 10 ? '0' + seconds : seconds.toString();

    timerElement.textContent = minutesString + ':' + secondsString;
  }

  startButton.addEventListener('click', startTimer);
