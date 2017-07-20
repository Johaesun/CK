var win_width = $(window).width();
var win_height = $(window).height();
var line_height = $(".line").height();
var c01_img = $(".c01_img").height();
$(".content_main").css({
    "width": win_width + "px",
    "height": win_height + "px"
});

$(".content").css({
    "height": win_height - line_height + "px"
})

$(".content").eq(0).css({
    "height": win_height - line_height - 100 + "px"
})

$(".media li").css({
    "height": c01_img + "px"
})

$(".media_c span").click(function () {
    if ($(this).hasClass("on_btn")) {
        $(this).removeClass("on_btn");
        $(this).addClass("close_btn");
        $(".on_h2").html("Close");
        $(".on_btn").html("&larr;");
        $(".media").animate({
            "width": "100%",
            "margin-right": "0",
            "right": "0",
        });
        $(".media li").animate({
            "margin": "0px",
        });
        $(".media").addClass("li_h");
        $(".li_h").children("li").mouseover(function () {
        });
    } else {
        $(this).removeClass("close_btn");
        $(this).addClass("on_btn");
        $(".media").removeClass("li_h");
        $(".on_h2").html("Open");
        $(".on_btn").html("&rarr;");
        $(".media").animate({
            "width": "472.25px",
            "margin-right": "200px",
            "right": "200px",
        });
        $(".media li").animate({
            "margin-right": "-400px"
        });
        $(".li_h li").mouseover(function () {
            $(this).css({
                "background": "none;"
            });
        });
        
    }
});
