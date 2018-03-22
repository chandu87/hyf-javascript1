console.log("step 2");

$(document).ready(function()
    {
            $("#step2").click(function(){
                if($("h2").text()=="Green")
                {
                $("h2").text("Red");
                $("h2").css("background","red");
                $("h2").fadeOut(2000);
                }
                else if($("h2").text()=="Red")
                {
                    $("h2").text("Green");
                    $("h2").css("background","Green");
                    $("h2").fadeIn(2000);
                }
            });  
        }

);