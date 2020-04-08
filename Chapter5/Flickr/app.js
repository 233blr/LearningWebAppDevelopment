var main = function () {
  "use strict";
  var url =
    "http://api.flickr.com/services/feeds/photos_public.gne?tags=dog&format=json&jsoncallback=?";
  $.getJSON(url, function (flickrResponse) {
    //console.log(flickrResponse);
    flickrResponse.items.forEach(function (photo) {
      //console.log(photo.media.m);
      var $img = $("<img>").hide();
      $img.attr("src", photo.media.m);
      $("main .photos").append($img);
      $img.fadeIn();
    });
  });
};
$(document).ready(main);
