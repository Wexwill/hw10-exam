let btnLeft = document.querySelector('.left'),
    btnRight = document.querySelector('.right'),
    headerBot = document.querySelector('.header_bot_wraper'),
    left = 0;

btnRight.addEventListener('click', function(event) {
    if (left <= -2320 ) left = 0;
    else left = left - 1160;
    headerBot.style.left = left +'px';

})
btnLeft.addEventListener('click', function(event) {
    if (left >= 0) left = -2320;
    else left = left + 1160;
    headerBot.style.left = left +'px';
})

