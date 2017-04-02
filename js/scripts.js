$(document).ready(function(){

   var carouselList = $("#carousel ul");
   
      function slideChangeNext(){
         carouselList.animate({'marginLeft':-600}, firstSlideMove);
      };
      // setInterval(slideChangeNext, 5000);
     
      function firstSlideMove(){
         var firstItem = carouselList.find("li:first");
         var lastItem = carouselList.find("li:last");
         lastItem.after(firstItem);
         carouselList.css({marginLeft:0});
     }; 
    
     function slideChangePrev(){
         carouselList.animate({'marginLeft':600}, lastSlideMove);
      };
      
    function lastSlideMove(){
         var firstItem = carouselList.find("li:first");
         var lastItem = carouselList.find("li:last");
         firstItem.before(lastItem);
         carouselList.css({marginLeft:0});     
     };


     $('#btn-right').click(function(){
         console.log('kliknales prawy guzik');
         slideChangeNext();
     });
     $('#btn-left').click(function(){
         console.log('kliknales lewy guzik');
         slideChangePrev();

     });

});