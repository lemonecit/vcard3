






   document.getElementById("enable_socialLinks").addEventListener("click", function(){
     document.getElementsByClassName('container_overlay')[0].style.visibility = 'visible';

   });


   var element = document.createElement("div");
   element.id = 'closeWindow';
   var el = document.getElementById('closeWindow'); //

      el.addEventListener("click", function(){
         document.getElementsByClassName('container_overlay')[0].style.visibility = 'hidden';

       });
