
window.onload= function (){
  // var socialPro = document.getElementsByClassName("this_socialLinks");



  document.getElementById("enable_socialLinks").addEventListener("click", function(){
    document.getElementsByClassName('container_overlay')[0].style.visibility = 'visible';

  });


  if (typeof close_Window !== 'undefined') {

      document.getElementById("close_Window").addEventListener("click", function(){
        document.getElementsByClassName('container_overlay')[0].style.visibility = 'hidden';

      });
  }



}
