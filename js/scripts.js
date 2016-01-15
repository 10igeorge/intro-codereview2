$(function() {

  // Was trying to make a loop that would add ":checked" to each radio so that I wouldn't have to take out each variable but spent 1.5+ hours on trying to get the console to register the variables and couldn't get it to work

  // var blanks = ["input#tropical", "input#coldsnowy", "input#temperate", "input#hiking", "input#skiing", "input#clubbing", "input#lounging", "input#outdooradventurer", "input#partyanimal", "input#tourist", "input#castles", "input#ocean", "input#nature", "input#cities", "input#yesChildren", "input#noChildren"];
  // blanks.forEach(function(blank) {
  //   var checks = $(":checked").val();
  // });

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
      var tropical = $('#tropical:checked').val();
      var coldsnowy = $('#coldsnowy:checked').val();
      var temperate = $('#temperate:checked').val();
      var hiking = $('#hiking:checked').val();
      var skiing = $('#skiing:checked').val();
      var clubbing = $('#clubbing:checked').val();
      var lounging = $('#lounging:checked').val();
      var outdooradventurer = $('#outdooradventurer:checked').val();
      var partyanimal = $('#partyanimal:checked').val();
      var tourist = $('#tourist:checked').val();
      var castles = $('#castles:checked').val();
      var ocean = $('#ocean:checked').val();
      var nature = $('#nature:checked').val();
      var yesChildren = $('#yesChildren:checked').val();
      var noChildren = $('#nochildren').val();
      //
      // var
      // var skiing = $('#skiing:checked').val();
      // var hiking = $('#hiking:checked').val();
      // var
      if ($("input:radio[name='childrenQuestion']:checked").length == 0 ) {
         alert('Nothing is checked!');
       } else if (coldsnowy && skiing && castles && tourist ) {
         $("#swedenResult").show();
       } else if (temperate && hiking && outdooradventurer && nature && yesChildren) {
         $("#seychellesResult").show();
       } else if (tropical && ocean && lounging && clubbing && partyanimal) {
         $("#seychellesResult").show();
       } else {
        $('#freiburgResult').show();
        $("#question5").hide();
      }
  });
});
