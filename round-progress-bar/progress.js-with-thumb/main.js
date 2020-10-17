// changed original code for more flexibility
// date: 2020-20-04
// getting css variable
const colorProgressbar = getComputedStyle(document.documentElement).getPropertyValue('--color-progress-bar');
//getting progress from html
const progressBarContainer = document.querySelector('#container');
const progress = (progressBarContainer.getAttribute('data-progress')) / 100;
// getting duration from html and converting to int
const duration  = parseInt(progressBarContainer.getAttribute('data-duration'));
// getting strokewidth from css and converting to int
const strokeWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--stroke-width'));
// end insert code

const QUARTER_R = Math.PI / 2;
const otherBall = document.getElementById('other-ball');

const containerWidth = document.getElementById('container').offsetWidth;
const lineWidthInPixels = strokeWidth / 100 * containerWidth;
// Radius is from circle's exact center to the middle of the line
const radius = (containerWidth - lineWidthInPixels) / 2
const center = (containerWidth / 2);
      
const circle = new ProgressBar.Circle('#container', {
    color: colorProgressbar, // insert css variable
    easing: 'easeInOut',
    duration: duration,
    strokeWidth: strokeWidth,
    step: function(state, bar) {
      
	    // Calculate the center of #other-ball
        // https://stackoverflow.com/a/5301009/1446092
        const angleR = bar.value() * 2 * Math.PI - QUARTER_R;
        const x = radius * Math.cos(angleR) + center;
		const y = radius * Math.sin(angleR) + center;
        otherBall.style.left = x + 'px';
        otherBall.style.top = y + 'px';
    }
});

circle.animate(progress); // Number from 0.0 to 1.0
