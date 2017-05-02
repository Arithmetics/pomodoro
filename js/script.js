$(document).ready(function(){
  var clicked = 0;
  var interval;
  var secs = (10);
  $("p").text(secs);
  var cycle;
  var work = true;
  $(".dir").text("work time!");


  $("#reset").click(function(){
    secs = (10);
    work = true;
    $("p").text(secs);
    $('.dir').css('background-color', 'yellow');
    $(".dir").text("work time!");
  })

  $("#start").click(function(){
    if (clicked % 2 == 0) {
      $("#start").text("PAUSE");
      clicked = clicked + 1;

      
      function elapse() {

        if (secs > 0){
        secs -= 1;
        $("p").text(secs);
        } else {
          if (work == false) {
            secs = (10);
            work = true;
            $('.dir').css('background-color', 'yellow');
            $(".dir").text("work time!");
          } else{
            secs = (5);
            work = false;
            $('.dir').css('background-color', 'green');
            $(".dir").text("break time!");
          } 
        }
      }

      cycle = setInterval(function(){elapse() }, 1000);

      $("p").text(elapsedTime);


    } else {
      $("#start").text("START");
      clicked += 1;
      clearInterval(cycle);
    }
  })



  $("#pause").click(function(){

    $("p").toggleClass("red");
  })

});
