// Header background change function

(function() {
    // Immediately invoked function expression (IIFE)
      const header = document.querySelector('.header');
      // Finding the first element in the document with the given selector and attributing it to the variable
        window.onscroll = () => {
            // Giving the trigger for the following condition to check
        if (window.pageYOffset > 50) {
            // If the window scroll on Y axis (verticals) goes past 50px
            header.classList.add('header_active');
                // Start using the property'header_active', which is set in CSS
         } else {
            header.classList.remove('header_active');
            // Making sure to remove the background when the header returns back
         }
    };
}());

//  Burger handler function

(function() {
    const burgerItem = document.querySelector('.burger');
    // Creating a variable and attributing burger menu with it
    const menu = document.querySelector('.header__nav');
    // See above
    const menuCloseItem = document.querySelector('.header__nav-close');
    // Creating a similar variable for closing function
    // To check if the variale is chosen correctly, write console.log(burgerItem) and check it in the browswer page using devtools (should be on top)
    const menuLinks = document.querySelectorAll('.header__link');
    // Creating a variable for closing the burger menu after activating links in it
        burgerItem.addEventListener('click', ()=> {
    // Creating an event to listen to while clicking, and then adding another function
    // To check if the 'click' function is working, write console.log(1) and check the result in the browswer page using devtools (should be on top)
        menu.classList.add('header__nav_active');
    // See above
    });
    menuCloseItem.addEventListener('click', ()=> {
    // See above
        menu.classList.remove('header__nav_active');
        // Remove the previously added mobile menu to restore the initial view
    });
    if (window.innerWidth <= 767) {
        // Create a condition when screen width is below 768px
        // Check the code by putting console.log('1');, if ok proceed to next stage
        for (let i = 0; i < menuLinks.length; i++) {
            // Create a cycle to go through menu links
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header__nav_active');
                // For each menu link click, remove the active state of the burger menu
            });
        }
    }
}());

// Scroll to anchors
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        // Searchin for 'header' selector in HTML
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());