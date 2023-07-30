$(document).ready(function(){
    $('.repeater').repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show:function(){
            $(this).slideDown();
        },
        hide: function(deleteElement){
            $(this).slideUp(deleteElement);
            setTimeout(() => {
                generateCV();
            }, 500);
        },
        isFirstItemUndeletable: true
    })
})

document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById("imagebtn");
    const linksDiv = document.getElementById("linksDiv");
  
    image.addEventListener("click", function() {
      linksDiv.style.display = "block";
    });
  
    // If you want the links div to be hidden again when you click anywhere outside of it
    document.addEventListener("click", function(event) {
      if (event.target !== imagebtn && event.target !== linksDiv) {
        linksDiv.style.display = "none";
      }
    });
  });
  