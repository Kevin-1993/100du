$(function(){
	//城市选择
	$(".city").on("click",">button",function(){
		$(".city").find("button").removeAttr("class");
		$(this).attr("class","focus");
	});
	//导航栏焦点获取
	$(".search_nav").on("click",">button",function(){
		$(".search_nav").find("button").removeAttr("class");
		$(this).attr("class","nav-focus");
	});
	//
	$(".shop_top").on("click",">a",function(){
		$(".shop_top").find("a").removeClass("shop-focus")
		$(this).addClass("shop-focus");
		$(".hot_shop>ul").removeClass("block");
		$(".hot_shop>ul").eq($(this).index()).addClass("block");
	})
})

$(function(){
	$(".btn_1").click(function(){
		$(".transportation_line").css("background", "url(imgs/transportation_1.png) no-repeat  center bottom")});
	$(".btn_2").click(function(){
		$(".transportation_line").css("background", "url(imgs/transportation_2.png) no-repeat  center bottom")});
	$(".btn_3").click(function(){
		$(".transportation_line").css("background", "url(imgs/transportation_3.png) no-repeat  center bottom")});
	$(".btn_4").click(function(){
		$(".transportation_line").css("background", "url(imgs/transportation_4.png) no-repeat  center bottom")});
	$(".btn_5").click(function(){
		$(".transportation_line").css("background", "url(imgs/transportation_5.png) no-repeat  center bottom")});
})
