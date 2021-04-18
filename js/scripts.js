$(document).ready(function(){
  $(".fig1").click(function(){
    $(this).hide()
    $("#description1").show();
  });
  $("#description1").click(function(){
    $(this).hide()
    $(".fig1").show();
  });
  $(".fig2").click(function(){
    $(this).hide()
    $("#description2").show();
  });
  $("#description2").click(function(){
    $(this).hide()
    $(".fig2").show();
  });
  $(".fig3").click(function(){
    $(this).hide()
    $("#description3").show();
  });
  $("#description3").click(function(){
    $(this).hide()
    $(".fig3").show();
  });
  $('.submit').click(function () {
        var name = $('#nameInput').val();
        var email = $('#emailInput').val();
        var comment = $('#floatingTextarea');
        var key ='c8fbd9a0cf3958e02be2822e55cfbfc5-us4';
        alert('Hi ' + name + ', we have received your message. Thank you for reaching out to us.');
  });
});
