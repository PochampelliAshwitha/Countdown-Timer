let timer;
let hoursInput = document.getElementById('hours');
let minutesInput = document.getElementById('minutes');
let secondsInput = document.getElementById('seconds');
let timerDisplay = document.getElementById('timerDisplay');
let audio = new Audio('sounds/alarm.mp3'); 

function startTimer() {
  clearInterval(timer);
  let hours = parseInt(hoursInput.value) || 0;
  let minutes = parseInt(minutesInput.value) || 0;
  let seconds = parseInt(secondsInput.value) || 0;
  let totalTime = hours * 3600 + minutes * 60 + seconds;
  if (totalTime > 0) {
    updateTimer(totalTime); 
    changeButtonColor('start', '#4CAF50');
  }
}
function stopTimer() {
  clearInterval(timer);
  changeButtonColor('stop', '#f44336');
}
function resetTimer() {
  clearInterval(timer);
  hoursInput.value = '0';
  minutesInput.value = '0';
  secondsInput.value = '0';
  timerDisplay.textContent = '00:00:00';
  changeButtonColor('reset', '#ff9800');
}
function restartTimer() {
  clearInterval(timer);
  startTimer(); 
  changeButtonColor('restart', '#2196f3');
}
function updateTimer(totalTime) {
  let remainingTime = totalTime;
  timer = setInterval(function() {
    let hours = Math.floor(remainingTime / 3600);
    let minutes = Math.floor((remainingTime % 3600) / 60);
    let seconds = remainingTime % 60;
    timerDisplay.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
    if (remainingTime === 0) {
      clearInterval(timer);
      audio.play(); 
      changeButtonColor('start', '#4CAF50');
    } else {
      remainingTime--; 
    }
  }, 1000);
}
function formatTime(time) {
  return time < 10 ? '0' + time : time;
}
function changeButtonColor(buttonClass, color) {
  document.querySelector('.controls button.' + buttonClass).style.backgroundColor = color;
}
