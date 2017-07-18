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

$(".on_btn").click(function () {
    $(".on_h2").html("Close");
    $(".on_btn").html("&larr;");
	$(".media").animate({
		"width" : "100%",
        "margin-right" : "0",
        "right" : "0",
	});
	$(".media li").animate({
		"margin" : "0px",
	});
    $(".on_btn").addClass("close_btn");
    $(".on_btn").removeClass("on_btn");
});
$(".close_btn").click(function(){
    $(".on_h2").html("Open");
    $(".on_btn").html("&rarr;");
    $(".media").animate({
       "width" : "472.25px",
        "margin-right" : "200px",
        "right" : "200px",
    });
    $(".media li").animate({
        "margin-right" : "-400px"
    });
    $(this).addClass(".on_btn");
    $(this).removeClass("close_btn");
});