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

$(".media li, .m_p").css({
	"height": c01_img + "px"
})

function media_on() {
	var media_l = (".media li").lenght();
	$(".media").css({
		"width": 400 * media_l + "px"
	});
}

$(".on_btn").click(function () {
	$(".media").css({
		"width" : "100%"
	});
	$(".media li").animate({
		"margin-left" : "0px",
	});
});
