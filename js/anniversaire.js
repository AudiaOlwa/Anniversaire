var $buttonElement
$buttonElement = $("h6 button");

 
     // Faire quelque chose avec l'élément <button>
    $buttonElement.on("click", function() {
    	$("#un").css("display", "block"); 
      });
     $("#un").on("click", function() {
    	$("#deux").css("display", "block"); 
      });
     $("#deux").on("click", function() {
    	$("#trois").css("display", "block");
    	$("body > div").css("background-color", "orange");

      });

     

