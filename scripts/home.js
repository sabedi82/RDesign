$(function() {

  $(".link-Vision").hover(function(){
          $(".section-description").html("Bayyinah’s mission is to enrich individuals, families and institutions by making Arabic and Qur’anic studies accessible to the world. All of our programs offer comprehensive study resources to guide our students toward their educational goals. We strongly believe that education in both")
       }, function(){
           $(".section-description").html("Default mission statement. ")
    });
    $(".link-History").hover(function(){
            $(".section-description").html("Nouman Ali Khan starts Bayyinah from his laptop. He begins teaching Fundamentals of Classical Arabic in the New York and New Jersey areas. Later he launches Tajwid and Reading essentials with Wisam Sharieff.")
         }, function(){
             $(".section-description").html("Default mission statement. ")
      });
      $(".link-Team").hover(function(){
              $(".section-description").html("Write up description about the Team Section.")
           }, function(){
               $(".section-description").html("Default mission statement. ")
        });
        $(".link-Gallery").hover(function(){
                $(".section-description").html("Write up description about the Gallery Section.")
             }, function(){
                 $(".section-description").html("Default mission statement. ")
          });
          $(".link-Blog").hover(function(){
                  $(".section-description").html("Write up description about the Blog Section.")
               }, function(){
                   $(".section-description").html("Default mission statement. ")
            });

  var bodyEl = $("body"),
      navToggleBtn = bodyEl.find(".menu-logo");

      navToggleBtn.on("click", function(e){
        bodyEl.toggleClass("active-nav");
        e.preventDefault();
      });


  //Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  //Build a scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: ".main-section-image",
    triggerHook: "0.1",
    reverse: false
  })
  .setClassToggle(".floating-section-box", "fade-in")
  .addTo(controller)
  .addIndicators({
    name: "floating box",
    colorTrigger: "red",
    colorStart: "white",
    colorEnd: "green"
  });
});
