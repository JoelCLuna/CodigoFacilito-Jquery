(function ($) {
    $.fn.vscroll = function () {
        var video = $(this);
        var alto = video.height();
        var ancho = video.width();
      $(window).scroll(function () {
         var posicion = $(window).scrollTo();
         console.log(posicion);
         if (posicion>=400){
             video.css({position: "fixed", width:"200", height:"160px", bottom:"10px",left:"10px"});
         }
         else{
           video.css({position: "relative", width:ancho, height:alto});
         }
      });
    };
}(JQuery));