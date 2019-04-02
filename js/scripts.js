$(document).ready(function(){
  $("form#luck_quiz").submit(function(event){
    event.preventDefault();
    // var totalbad = $("input:checkbox[name=bad-luck]:checked").length;
    // alert(totalBad);
    // var totalGood = $("input:checkbox[name=bad-luck]:checked").length;
    // alert(totalGood);

    // $("input:checkbox[name=bad-luck]:checked").each(function(){
    // badLuckTotal = parseInt($(this).val());
var badLuckTotal = ($("input:checkbox[name=bad-luck]:checked").length);
var goodLuckTotal = ($("input:checkbox[name=good-luck]:checked").length);
alert(badLuckTotal)
alert(goodLuckTotal)
alert(badLuckTotal + goodLuckTotal)
    //
    // });
    // $("input:checkbox[name=good-luck]:checked").each(function(){
    //   goodLuckTotal = parseInt($(this).val());
    // });


    if (badLuckTotal < goodLuckTotal) {
      $('#luck-responses').append("Good fortune");
    } else if (badLuckTotal === goodLuckTotal) {
      $('#luck-responses').append("neutral fortune");
    } else if (badLuckTotal > goodLuckTotal) {
      $('#luck-responses').append("bad fortune");
    }
    //
    //
    //
    //   $('#luck-responses').append( + "<br>");
    // });
    // // $("#fun-responses").show();
    // // $("input:checkbox[name=good-luck]:checked").each(function(){
    // //   var goodLuckTotal = $(this).val();
    // //   $('#fun-responses').append(funTransportationMode + "<br>");
    // // });
    // $('#luck_quiz').hide();
  });
});
