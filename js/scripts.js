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

var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(success => {
        status.innerHTML = "Thanks for your message!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem."
      });
    }
    form.addEventListener("submit", handleSubmit)