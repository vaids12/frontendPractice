console.log("testas")


$(document).ready(function () {

    $("#toggleBox").click(function (e) {
        e.preventDefault();
        $("#square").toggle();
    })

  

    $("#height").click(function (e) {
        e.preventDefault();
        if($("#square").css("height") === "200px") {
             $("#square").css({"height": "280px", "top": "10px",});
        }else{
            $("#square").css({"height": "200px","top": "50px",});
        };
       
    });

    $("#width").click(function (e) {
        e.preventDefault();
        if($("#square").css("width") === "200px") {
             $("#square").css({"width": "400px",});
        }else{
            $("#square").css({"width": "200px",});
        };
       
    });

    $("#center").click(function (e) {
        e.preventDefault();
        if($("#square").css("right") === "50px") {
             $("#square").css({"right": "50%", });
        }else{
            $("#square").css({"right": "50px", "top": "50px",});
        };
       
    });

    $("#position").click(function (e) {
        e.preventDefault();
        if($("#square").css("top") === "50px") {
             $("#square").css({"top": "250px", "right": "50%"});
        }else{
            $("#square").css({"top": "50px", "right": "50px",});
        };
       
    });

  $(".iconButton i").click(function(e){
    e.preventDefault();
    $("#navbar").toggle();
  });

  $(".colorDiv").click(function(e){
    e.preventDefault();
    function color(){
        return "rgb("+Math.ceil( Math.random()*255)+", "+Math.ceil( Math.random()*255)+", "+Math.ceil( Math.random()*255)+")";
    };

    let color1 = color();
    let color2 = color();
    let color3 = color();
    let color4 = color();
    let color5 = color();

    $("#color1").css({
        "background-color": color1,
    });

    $("#color2").css({
        "background-color": color2,
    });

    $("#color3").css({
        "background-color": color3,
    });

    $("#color4").css({
        "background-color": color4,
    });

    $("#color5").css({
        "background-color": color5,
    });

    $("#color1").text(color1);
    $("#color2").text(color2);
    $("#color3").text(color3);
    $("#color4").text(color4);
    $("#color5").text(color5);

   
  })


    


});