// Initiate variables
const progressBarFull = document.getElementById('progressBarFull');
let counter = 2; // 20%
const max = 10;


// function for higher the value

progressBarFull.style.width = `${(counter / max) * 100}%`;