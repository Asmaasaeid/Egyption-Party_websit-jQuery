//////////////////////////////////////////////start  section 1 (open)////////////////////////////////////////////
$(".open").click(() => {
    if ($("#navbar").css("width") == "250px") {
  
      $("#navbar").width("0px");
      $("#homeInfo").css("margin-left", "0px");
  
    } else {
      $("#navbar").css("width", "250px");
      $("#homeInfo").css("margin-left", "250px");
    }
  });
  
  $(".close").click(() => {
    $("#navbar").width("0px");
    $("#homeInfo").css("margin-left", "0px");
  });
   
////////////////////////////////////////////// end  section 1 (open)///////////////////////////////////////////////
 
////////////////////////////////////////////// start section 2///////////////////////////////////////////////////////////////////

$(document).ready( ()=> {
    $(".div_1").css("display", "block");
    $("#singers h3").click(function () {
      $(this).next().slideToggle(500);
      $("#singers div").not($(this).next()).slideUp(500);
    });
  });


///////////////////////////////////////////////////end section 2///////////////////////////////////////////////////////////////////////////////////
let countDownDate= new Date("Dec 20 ,2023").getTime();
  
  let counter =setInterval(()=>{
  
  let dateNow=new Date().getTime();
  
  
   let dateDiff= countDownDate-dateNow;
   

  let day = Math.floor(dateDiff / (1000*60*60*24));
  let hour =Math.floor(dateDiff % (1000*60*60*24)/(1000*60*60)); 
  let minute =Math.floor(dateDiff%(1000*60*60)/(1000*60)); 
  let second =Math.floor(dateDiff%(1000*60)/(1000)); 
  
  document.getElementById("days").innerHTML=`${day} D`;
  document.getElementById("hours").innerHTML=`${hour} h`;
  document.getElementById("minutes").innerHTML=`${minute} m`;
  document.getElementById("seconds").innerHTML=`${second} s`;
  },1000)
  

  /*================================================= start  textarea ================================================== */
  $( ()=> {
    var num = 100;
    $("textarea").keyup(function () {
      var length = $(this).val().length;
      console.log(length)
      var character = num - length;
      if (character <= 0) {
        $("#char").text("your available character finished");
      } else {
        $("#char").text(character);
      }
    });
  });

/*===================================================== end  textarea ============================================================== */
















