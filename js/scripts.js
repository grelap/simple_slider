$(document).ready(function(){

  let carousel = $("#carousel");
  let carouselList = carousel.find("ul.photo");
  let carouselMenu = carousel.find("ul.dots");

  carouselList.find("li").each(function(){
    carouselMenu.append('<li></li>');
  });

  let dots = carouselMenu.find("li");
  dots.first().addClass("active");

  dots.click(function(){
    if (!$(this).hasClass("active")){
      let target = $(this).index();
      console.log(target);
      slideChange(target);
    }
  });

  //zmiana slajdu
  function slideChange(target){
    carouselList.stop().animate({'left': -604 * target});
    dots.removeClass("active").eq(target).addClass("active");
  };

  //prawy guzik		
    $("#btn-right").click(function(){
      target = dots.siblings(".active").index();
      target == (dots.length - 1) ? target = 0 : target += 1;
        slideChange(target);
      console.log('kliknales prawy guzik');
    });

  //lewy guzik
    $("#btn-left").click(function(){
      target = dots.siblings(".active").index();
      target == 0 ? target = (dots.length - 1) : target -= 1;
        slideChange(target);
      console.log('kliknales lewy guzik');
   });

});