$(document).ready(function(){
  if(!Modernizr.svg) {
    var images = $('img[data-png-fallback]');
    images.each(function() {
      $(this).attr('src', $(this).data('png-fallback'));
    });
  }

  if (window.devicePixelRatio > 1) {
    var lowresImages = $('img.querying-javascript');

    lowresImages.each(function(i) {
      var lowres = $(this).attr('src');
      var highres = lowres.replace(".", "@2x.");
      $(this).attr('src', highres);
    });
  }
});

$(window).load(function() {
  var images = $('img.html-sizing-with-javascript');
  images.each(function(i) {
    $(this).width($(this).width() / 2);
  });
});
