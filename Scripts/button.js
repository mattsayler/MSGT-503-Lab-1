function doTheThing(){
  
  var overlay = $("<div id='overlayDIV'></div>");
  
  $("button#nope").click(function() {
    $("div#container").before(overlay);
    $("div#overlayDIV").css({
      'background-image':'url("Resources/matrix1.gif")',
      'position':'fixed',
      'width':'100%',
      'height':'100%',
      'top':'0px',
      'left':'0px',
      'z-index':'1000'
    });
  });
  
  $("#overlayDIV").on("click","div", function(event) {
    $(this).remove();
  });

};
