$(document).ready(function(){
  var clicked = 0;
  var interval;

  $("#reset").click(function(){
    var bob = new Date(null);
    date.setSeconds(0);
    date.setMinutes(0);
    var time = String(date).substring(19,24);
    $("p").text(time);
  })

  $("#start").click(function(){
    if (clicked % 2 == 0) {
      $("#start").text("PAUSE");
      clicked = clicked + 1;

      var startTime = new Date().getTime();
      var currentTime = new Date().getTime();
      var elapsedTime = new Date();

      function elapse() {
        var currentTime = new Date().getTime();
        elapsedTime = new Date(currentTime -startTime);
        elapsedTime = String(elapsedTime).substring(19,24);
        $("p").text(elapsedTime);
      }

      bob = setInterval(function(){elapse() }, 10);
      $("p").text(elapsedTime);


    } else {
      $("#start").text("START");
      clicked += 1;
      clearInterval(bob);
    }
  })



  $("#pause").click(function(){

    $("p").toggleClass("red");
  })

});
