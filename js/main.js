(function() {
    // Immediately invoked function expression (IIFE).
      const header = document.querySelector('.header');
      // Finding the first found element in the document with the given selector and attributing it to the variable
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