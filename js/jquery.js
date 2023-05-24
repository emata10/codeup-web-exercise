"use strict";

 $(function() {
     const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA', 'Enter'];
     let konamiCodePosition = 0;

     $(document).on('keydown', function(event) {
         if (event.key === konamiCode[konamiCodePosition]) {
             konamiCodePosition++;
         } else {
             konamiCodePosition = 0;
         }

         if (konamiCodePosition === konamiCode.length) {
             alert('Konami code entered!');
             konamiCodePosition = 0;
         }
     });
 });







