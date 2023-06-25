document.addEventListener('DOMContentLoaded', function() {
    var calendarImages = ['./img/calendarMay.png', './img/calendarJune.png', './img/calendarJuly.png'];
    var currentImageIndex = 0;

    var leftButton = document.querySelector('.left-img');
    var rightButton = document.querySelector('.right-img');
    var calendarImage = document.querySelector('.calendar-img');

    leftButton.addEventListener('click', function() {
        if(calendarImage.src.includes('calendarMay')) return;
        else if(calendarImage.src.includes('calendarJuly')){
            currentImageIndex = (currentImageIndex-1) % 3;
            calendarImage.src = calendarImages[currentImageIndex]; 
            currentImageIndex--; 
        }
        else {
            currentImageIndex = (currentImageIndex);
            calendarImage.src = calendarImages[currentImageIndex];
        } 
    });

    rightButton.addEventListener('click', function() {
        if(calendarImage.src.includes('calendarJuly')) {
            return;
        }
        currentImageIndex = (currentImageIndex === 2) ? 0 : currentImageIndex + 1;
        calendarImage.src = calendarImages[currentImageIndex];
    });
});