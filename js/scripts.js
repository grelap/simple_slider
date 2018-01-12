$(document).ready(function() {

  const carousel = $("#carousel");
  const carouselList = carousel.find("ul.photo");
  const carouselMenu = carousel.find("ul.dots");
 
  carouselList.find("li").each(function() { 
    carouselMenu.append("<li></li>");
  });

  const dots = carouselMenu.find("li");
  dots.first().addClass("active");

  //zmiana slajdu
  function slideChange(slide) {
    carouselList.stop().animate({ "left": -604 * slide });
    dots.removeClass("active").eq(slide).addClass("active");
    console.log(slide);
  };

  //zmiana slajdu kropką
  dots.click(function() {
    if (!$(this).hasClass("active")) {
      const blink = $(this).index();
      slideChange(blink);
    }
  });

  //prawy guzik
  $("#btn-right").click(function() {
    let target = dots.siblings(".active").index();
    target == (dots.length - 1) ? target = 0 : target += 1;
    slideChange(target);
    console.log("kliknales prawy guzik");
  });

  //lewy guzik
  $("#btn-left").click(function() {
    let target = dots.siblings(".active").index();
    target == 0 ? target = (dots.length - 1) : target -= 1;
    slideChange(target);
    console.log("kliknales lewy guzik");
  });

});