function doTheThing(){
  
  var overlay = $("<div id='overlayDIV'></div>")
  
  $("button#nope").click(function(){
    $("div#container").before(overlay);
    $("div#overlayDIV").css({
      'background-image':'url("Resources/static.gif")',
      'position':'fixed',
      'width':'100%',
      'height':'100%',
      'top':'0px',
      'left':'0px',
      'z-index':'1000'
    });
  });

  $("div#overlayDIV").click(function() {
    $("div#overlayDIV").remove();
  });
  
};
