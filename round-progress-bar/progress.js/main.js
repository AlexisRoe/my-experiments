window.onload = function onLoad() {
    var circle = new ProgressBar.Circle('#progress', {
        /* configuration */
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut'
    });

    /* modified by me, getting the value directly from the html */
    const progressbar = document.querySelector('#progress');
    let progress = (progressbar.getAttribute('data-progress')) / 100;
    /* end of insert code */

    circle.animate(progress);
};