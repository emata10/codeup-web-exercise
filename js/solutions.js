"use strict"

function isTrue() {
    return true;
  }
  if(isTrue() === true) {
      console.log('Check function returns true')
  } else{
      console.log('the function does Not return true')
  }

  function isTrue() {
      return false
  }
   if(isTrue() === false) {
          console.log('Check function returns false')
  } else{
          console.log('the function does not return false')
  }
   function isTrue() {
            return false;
   }
       if(isTrue() === false){
                console.log('Check function returns true')
         } else{
              console.log('the function does Not return false')
         }

        function isTrue() {
            console.log(null);

}