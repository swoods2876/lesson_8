$(document).ready(function(){

    $("#ball").click(function(){
        $("#demo").slideDown("slow");
    });

    $("#ball2").click(function(){
        $("#demo2").slideDown("slow");
    });

    $("#ball3").click(function(){
        $("#demo3").slideDown("slow");
    });

    $("#ball4").click(function(){
        $("#demo4").slideDown("slow");

    });
       
    

      $(".container").click(function open(){ 
        $('html,body').animate({


    scrollTop: 'toggle', 
        scrollTop: $(".container").offset().top + 600
}, 1000); 

    scrollTop: $(".container").offset().top - 600
}, 1000); 



  

      
 }

  




    });

    



 



