function doTheThing(){
  
  var overlay = $("<div id='overlayDIV' title='I warned you! (Click to return to the page)'></div>");
  
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
  
$(document).on("click","div#overlayDIV", function() {
    //console.log("I hear you!");
    $(this).remove(); 
});
  
};


