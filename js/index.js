$(document).ready(function(){
    $(".menu_hamburger_btn").click(function(){
      $(this).toggleClass("is-active");
          // Define an initial delay in milliseconds
    var initialDelay = 600; // Adjust this value to your preference
      $('.global_menu_list').each(function(index) {
        // Immediately apply initial styles to ensure a consistent starting point
        
        $(this).css({
          'opacity': '0',
          'animation': `all .4s ease-in-out`
        });
        // Apply the animation with delay based on the index
        setTimeout(() => {
          $(this).css({
            'opacity': '1',
            'animation': `all 1.4s ease forwards ${index * 0.6}s`
          });
        }, initialDelay + index * 600); // Delay in milliseconds (200ms between each item)
      });
    });
});
  