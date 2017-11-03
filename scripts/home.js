$(function () {

    $(".link-Vision").hover(function () {
        $(".section-description").html(" Since 2005, Bayyinah Institute has been sharing the message and language of the Quran with the world")
    }, function () {
        $(".section-description").html(" Since 2005, Bayyinah Institute has been sharing the message and language of the Quran with the world")
    });
    $(".link-History").hover(function () {
        $(".section-description").html("A chronology of Bayyinah Institute")
    }, function () {
        $(".section-description").html(" Since 2005, Bayyinah Institute has been sharing the message and language of the Quran with the world")
    });
    $(".link-Team").hover(function () {
        $(".section-description").html("An introduction to the dedicated team and creative minds that make up Bayyinah Institute")
    }, function () {
        $(".section-description").html(" Since 2005, Bayyinah Institute has been sharing the message and language of the Quran with the world")
    });
    $(".link-Gallery").hover(function () {
        $(".section-description").html("A photo gallery featuring traveling seminars, behind-the-scenes, and student life")
    }, function () {
        $(".section-description").html(" Since 2005, Bayyinah Institute has been sharing the message and language of the Quran with the world")
    });
    $(".link-Blog").hover(function () {
        $(".section-description").html("A series of posts highlighting our programs and tackling relevant issues for Muslims everywhere ")
    }, function () {
        $(".section-description").html(" Since 2005, Bayyinah Institute has been sharing the message and language of the Quran with the world")
    });

    var bodyEl = $("body"),
        navToggleBtn = bodyEl.find(".menu-logo"),
        displayed = true,
        toggle_menu = function (e) {
            $("body").find("section.hidden").removeClass('hidden');
            setTimeout(function(){bodyEl.toggleClass("active-nav")}, 10);
            displayed = !displayed;
            if (e) {
                e.stopPropagation();
                e.preventDefault();
            }
        };
    $("#email").on("click", function(e){
        e.stopPropagation();
    });

    navToggleBtn.on("click", toggle_menu);
    var path = window.location.pathname;
    var page = path.split("/").pop();
    console.log(page);
    if (page == 'index.html' || page == '') {
        $(".link-Vision>a").toggleClass('bold');
        if (typeof(Cookies) != "undefined") {
            var val = Cookies.get('b_com_menu'); // => 'value'
            if (val != "1") {
                //bodyEl.toggleClass("active-nav");
                toggle_menu();
                bodyEl.find("section.hidden").removeClass('hidden');
                console.log(Cookies.set("b_com_menu", "1"));
                $(".section-description").html(" Since 2005, Bayyinah Institute has been sharing the message and language of the Quran with the world")
            }
        }
    }else if(page == "history.html"){
        $(".link-History>a").toggleClass('bold');
    }else if(page == "team.html"){
        $(".link-Team>a").toggleClass('bold');
    }else if(page == "Gallery.html"){
        $(".link-Gallery>a").toggleClass('bold');
    }else if(page == "Blog.html"){
        $(".link-Blog>a").toggleClass('bold');
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


    $(window).click(function (e) {
        if (e.target.type == 'email' || e.target.type == 'submit'){
            return;
        }
        if (e.target.tagName.toLowerCase() == "a" && e.target.getAttribute('target') == "_blank"){
            return;
        }
        if (!displayed) {
            bodyEl.toggleClass("active-nav");
            displayed = !displayed;
        }
    });
    function init() {
        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 50,
                header = $(document.querySelector("header"));
            if (distanceY > shrinkOn) {
                header.addClass('smaller')
            } else {
                if (header.hasClass("smaller")) {
                    header.removeClass("smaller");
                }
            }
        });
        window.addEventListener('resize', function(e){
            $(".photo-title").removeClass('padding-left-17');
            var big_blogs = $(".photo-block").filter(function () {
                return $(this).width() > 343;
            });
            $.each(big_blogs, function(idx){
                var element = $(big_blogs[idx]);
                var title = element.find(".photo-title");
                if (!title.hasClass('padding-left-17')){
                    title.addClass('padding-left-17');
                }
            });
        });
    }
    window.onload = init();
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

    if ($("#gallery").attr('id') == 'gallery') {
        jQuery("#gallery").unitegallery({
            tile_enable_shadow:false,
            tile_enable_border:true,
            tiles_space_between_cols:15,
            tiles_justified_space_between:15,
            tiles_col_width:235,
            tile_border_color: "#ffffff",
            tile_enable_outline:false,
            theme_gallery_padding:15,
            tiles_type: "justified"

        });
    }
});
