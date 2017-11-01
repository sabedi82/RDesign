$(function () {

    $(".link-Vision").hover(function () {
        $(".section-description").html(" Since 2005, Bayyinah Institute has been sharing the message and language of the Quran with the world")
    }, function () {
        $(".section-description").html("")
    });
    $(".link-History").hover(function () {
        $(".section-description").html("A chronology of Bayyinah Institute")
    }, function () {
        $(".section-description").html(" ")
    });
    $(".link-Team").hover(function () {
        $(".section-description").html("An introduction to the dedicated team and creative minds that make up Bayyinah Institute")
    }, function () {
        $(".section-description").html("")
    });
    $(".link-Gallery").hover(function () {
        $(".section-description").html("A photo gallery featuring traveling seminars, behind-the-scenes, and student life")
    }, function () {
        $(".section-description").html("")
    });
    $(".link-Blog").hover(function () {
        $(".section-description").html("A series of posts highlighting our programs and tackling relevant issues for Muslims everywhere ")
    }, function () {
        $(".section-description").html("")
    });

    var bodyEl = $("body"),
        navToggleBtn = bodyEl.find(".menu-logo"),
        displayed = true,
        toggle_menu = function (e) {
            bodyEl.toggleClass("active-nav");
            displayed = !displayed;
            if (e) {
                e.stopPropagation();
                e.preventDefault();
            }
        };

    navToggleBtn.on("click", toggle_menu);
    var path = window.location.pathname;
    var page = path.split("/").pop();
    console.log(page);
    if (page != 'index.html') {
        toggle_menu();
    }


    //Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    //Build a scene
    var ourScene = new ScrollMagic.Scene({
        triggerElement: ".main-section-image, .about-section-image",
        triggerHook: "0.1",
        reverse: false
    })
        .setClassToggle(".floating-section-box, .about-floating-section-box", "fade-in")
        .addTo(controller);
    /*.addIndicators({
     name: "floating box",
     //colorTrigger: "red",
     //colorStart: "white",
     //colorEnd: "green"
     });*/


/* Blog border animation */
    $( ".blog-card" ).hover(
      function() {
        $( this ).find(".blog-border" ).css( "left" , "0%" );
      }, function() {
        $(this).find(".blog-border" ).css( "left", "-100%" );
      }
    );


    $(window).click(function () {
        if (displayed) {
            bodyEl.toggleClass("active-nav");
            displayed = !displayed;
        }
    });
});

$(document).ready(function() {
    // Configure/customize these variables.
    var showChar = 192;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Read More >";
    var lesstext = "Show less";


    $('.more').each(function() {
        var content = $(this).html();

        if(content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);

            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

            $(this).html(html);
        }

    });

    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
