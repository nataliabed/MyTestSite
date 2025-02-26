let isDarkMode = false; // Track background state
let isRotated = false; // Track rotation state

function changeBackground() {
    if (!isDarkMode) {
        console.log('Switching to dark mode');
        $('body').css({
            'backgroundColor': 'black',
            'color': 'white'
        });
    } else {
        console.log('Switching to light mode');
        $('body').css({
            'backgroundColor': 'pink',
            'color': 'black'
        });
    }
    isDarkMode = !isDarkMode; // Toggle state
}

function rotate() {
    if (!isRotated) {
        console.log('Rotating');
        $('body').css({
            'transform': 'rotate(5deg)',
            'transition': '0.5s ease'
        });
    } else {
        console.log('Rotating back');
        $('body').css({
            'transform': 'rotate(0deg)',
            'transition': '0.5s ease'
        });
    }
    isRotated = !isRotated; // Toggle state
}
