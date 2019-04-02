$(document).ready(function(){
  $("form#luck_quiz").submit(function(event){
    event.preventDefault();
    $("#luck-responses").show();
    var totalbad $("input:checkbox[name=bad-luck]:checked").length;
    alert(totalBad);
    $("input:checkbox[name=bad-luck]:checked").each(function(){
      var badLuckTotal = $(this).val();
    $("input:checkbox[name=good-luck]:checked").each(function(){
      var goodLuckTotal = $(this).val();



      $('#luck-responses').append( + "<br>");
    });
    // $("#fun-responses").show();
    // $("input:checkbox[name=good-luck]:checked").each(function(){
    //   var goodLuckTotal = $(this).val();
    //   $('#fun-responses').append(funTransportationMode + "<br>");
    // });
    $('#luck_quiz').hide();
  });
});
