console.log("Welcome to CC's Portfolio Site")
//Exercise 2.1-Intro to Java Script-Task

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }    
}
//Exercise 2.3-JavaScript Libraries & Plugins-Task