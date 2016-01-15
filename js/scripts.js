$(function() {
  $("button.begin").click(function() {
    $("#question1").show();
  });

  $("#firstNext").click(function() {
    if ($("input:radio[name='climateQuestion']:checked").length == 0 ) {
       alert('Nothing is checked!');
    } else {
      $('#question2').show();
      $("#question1").hide();
    }
    });

    $("#secondNext").click(function() {
      if ($("input:radio[name='activityQuestion']:checked").length == 0 ) {
         alert('Nothing is checked!');
      } else {
        $('#question3').show();
        $("#question2").hide();
      }
      });

    $("#thirdNext").click(function() {
      if ($("input:radio[name='personalityQuestion']:checked").length == 0 ) {
         alert('Nothing is checked!');
      } else {
        $('#question4').show();
        $("#question3").hide();
      }
      });

    $("#fourthNext").click(function() {
      if ($("input:radio[name='sightsQuestion']:checked").length == 0 ) {
         alert('Nothing is checked!');
      } else {
        $('#question5').show();
        $("#question4").hide();
      }
      });

    $("#submit").click(function() {
      if ($("input:radio[name='childrenQuestion']:checked").length == 0 ) {
         alert('Nothing is checked!');
      } else {
        $('#freiburgResult').show();
        $("#question5").hide();
      }
      });

    //
    // $("#thirdNext").click(function() {
    //   if ($("input:radio[name='sightsQuestion']:checked").length == 0 ) {
    //      alert('Nothing is checked!');
    //   } else {
    //     $('#question5').show();
    //     $("#question4").hide();
    //   }
    //   });


    event.preventDefault();





});
