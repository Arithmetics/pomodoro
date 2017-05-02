$(document).ready(function(){
  var clicked = 0;
  var interval;
  var secs = (25*60);

  var display = new Date(null);
  display.setSeconds(secs);
  display = (String(display)).substring(19,25);

  $("p").text(display);
  var cycle;
  var work = true;
  $(".dir").text("work time!");

////////////////////////////////////////////////////
  $("#reset").click(function(){
    secs = (25*60);
    work = true;
    var display2 = new Date(null);
    display2.setSeconds(secs);
    display2 = (String(display2)).substring(19,25);
    $("p").text(display2);
    $('.dir').css('background-color', 'yellow');
    $(".dir").text("work time!");
  })

  ////////////////////////////////////////////////

  $("#start").click(function(){
    if (clicked % 2 == 0) {
      $("#start").text("PAUSE");
      clicked = clicked + 1;

      
      function elapse() {

        if (secs > 0){
        secs -= 1;
        var display3 = new Date(null);
        display3.setSeconds(secs);
        display3 = (String(display3)).substring(19,25);
        $("p").text(display3);
        } else {
          if (work == false) {
            secs = (10);
            work = true;
            $('.dir').css('background-color', 'yellow');
            $(".dir").text("work time!");
          } else{
            secs = (5*60);
            work = false;
            $('.dir').css('background-color', 'green');
            $(".dir").text("break time!");
          } 
        }
      }

      cycle = setInterval(function(){elapse() }, 1000);

      
    } else {
      $("#start").text("START");
      clicked += 1;
      clearInterval(cycle);
    }
  })

//////////////////////////////////////////////

  

});
