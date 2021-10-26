$(document).ready(function () {
        //плавный переход по якорю 
      var $page = $('html, body');
        $('a[href="#block-2"]').click(function() {
          $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
      });
      var $page = $('html, body');
        $('a[href="#block-3"]').click(function() {
          $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
      });
      var $page = $('html, body');
        $('a[href="#block-5"]').click(function() {
          $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
      });
      var $page = $('html, body');
        $('a[href="#block-7"]').click(function() {
          $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
      });
//кнопка прокрутка наверх
  var btn = $(".arrow-up");    
          $(".arrow-up").click(function(e) {
            e.preventDefault();
          $("body,html").animate({scrollTop:0},700);
          }); 
});