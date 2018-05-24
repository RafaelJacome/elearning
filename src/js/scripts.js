$(document).ready( function(){
    if( $(".progress").length ) {
        var bar = $(".progress");
        var total = bar.attr("data-total");
        var fill = bar.attr("data-fill");
        fill = (fill / total)*100;
        bar.find("div").css("width", fill+"%");
        
    }

    if($.fancybox) {
        $.fancybox.defaults.buttons = [
            "share",
            "download",
            "close"
        ]
    }
   


    $(".slider").slick({
        arrows: false,
        dots: true,
        fade: true
    });

    if($(".bar").length) {
        $(".bar").each( function(){
           var progress = $(this).attr("data-progress");
           $(this).find('div').css("width",progress+"%");
        })
    }

    $(".nav").click(function () {
        if (!$(this).hasClass("Opened")) {
            event.stopPropagation();
            $(this).addClass("Opened");
            if (!$('.navOpen').length) {
                $('main, footer').css("transform", "translateX(-300px)");
                $('.mobileMenu').css("transform", "translateX(0px)").addClass("navOpen");
                $('html, body').css("overflow", "hidden");
                $('main, footer').css("opacity", "0.5");
            }
        }
    });

    $(document).on("click", "main, footer, .Opened", function () {
        if ($('.navOpen').length) {
            event.preventDefault();
            $('main, footer').css("transform", "translateX(-0px)");
            $('.mobileMenu').css("transform", "translateX(300px)").removeClass("navOpen");
            $(".mobileMenu").animate({ scrollTop: 0 }, "slow");
            $('html, body').css("overflow", "auto");
            $('main, footer').css("opacity", "1");
            $(".nav").removeClass("Opened");
        }
    });

    $(".mobileMenu .options li").click(function(){
        var arrow = $(this).find(".fa-angle-down")[0];
        var children = $(this).find("ol")[0];
        if(children) {
            if(children.className == "open"){
                children.style.height = 0;
                children.className = "";
                arrow.style.transform = "rotate(0deg)";
            } else {
                children.style.height = children.scrollHeight+"px";
                children.className = "open";
                arrow.style.transform = "rotate(180deg)";
            }

        }
    });

    $('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});

    
});
