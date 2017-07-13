var win_width = $(window).width();
var win_height = $(window).height();
var line_height = $(".line").height();
var c01_img = $(".c01_img").height();
$(".content_main").css({
	"width": win_width + "px",
	"height": win_height + "px"
});

$(".content").css({
    "height" : win_height - line_height - line_height + "px"
    })

$(".c_video").css({
    "height" : c01_img + "px"
})
$(".c_i2").css({
    "height" : c01_img + "px"
})