console.log("Welcome to CC's Portfolio Site")
//Exercise 2.1-Intro to Java Script-Task

$('#heading-text').text('How to create a hamburger menu with jQuery');

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
        var isMobileBreakpoint = window.innerWidth <= 641

    if (x.className === 'navtoggle' && isMobileBreakpoint) {
        x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }
}
//Exercise 2.3-JavaScript Libraries & Plugins-Task
