// Header background change function

(function() {
    // Immediately invoked function expression (IIFE)
      const header = document.querySelector('.header');
      // Finding the first element in the document with the given selector and attributing it to the variable
        window.onscroll = () => {
            // Giving the trigger for the following condition to check
        if (window.pageYOffset > 100) {
            // If the window scroll on Y axis (verticals) goes past 100px
            // ! Decided to multiply the distance by 2 (initially 50px)
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
}());