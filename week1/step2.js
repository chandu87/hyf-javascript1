console.log("step 2");

$(document).ready(function()
    {   
        // hiding all containers
        $("#step1-container").hide();
        $("#step2-container").hide();

        // on click response functionalities
            $("#fadetoggle-button").click(function(){
                $("#fadetoggle-area").fadeToggle();
            });  
        
            //image fadein and fadeout
            $("#fadeinbutton").click(function(){
                $("img").fadeIn(2000);
            });
            $("#fadeoutbutton").click(function(){
                $("img").fadeOut(2000);
            });

            //slidetoggle for containers
            $("#step1-heading").click(function(){
                $("#step1-container").slideToggle();
            });
            $("#step2-heading").click(function(){
                $("#step2-container").slideToggle();
            });
            
            // creating fade toggle with single button using fadein fadeout
            $("#fadeinout-button").click(function(){
                if($("#fadeinout-text").text()=="Welcome")
                {
                $("#fadeinout-text").text("Bye");
                $("#fadeinout-text").fadeOut(2000);
                }
                else if($("#fadeinout-text").text()=="Bye")
                {
                    $("#fadeinout-text").text("Welcome");
                    $("#fadeinout-text").fadeIn(2000);
                }

            });
            
    }
);