$(function(){ 

    $(".section-home").show(500); 
    $(".section-projects").hide();
    $(".section-graphics").hide();
    $(".section-about").hide();

    $(".link-home").on("click", function(){

        $(".section-home").show(500);
        $(".section-projects").hide(500);
        $(".section-graphics").hide(500);
        $(".section-about").hide(500);
    });
    $(".link-projects").on("click", function(){

        $(".section-home").hide(500);
        $(".section-projects").show(500);
        $(".section-graphics").hide(500);
        $(".section-about").hide(500);
    });
    $(".link-graphics").on("click", function(){

        $(".section-home").hide(500);
        $(".section-projects").hide(500);
        $(".section-graphics").show(500);
        $(".section-about").hide(500);
    });
    $(".link-about").on("click", function(){

        $(".section-home").hide(500);
        $(".section-projects").hide(500);
        $(".section-graphics").hide(500);
        $(".section-about").show(500);
    });
});