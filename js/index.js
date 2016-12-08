$(function(){
	// 轮播自动播放
	$("#myCarousel").carousel({
		// 自动4秒播放
		interval:4100,
	})
	
	// 产品轮播自动播放
	$("#product").carousel({
		interval:false,
	})

	$("#application1").carousel({
		interval:false,
	})

	$("#application2").carousel({
		interval:false,
	})

	$("#application3").carousel({
		interval:false,
	})

	$("#application4").carousel({
		interval:false,
	})
   
})

$(document).ready(function(){
	$(".product-nav").find(".product").on("click",function(){
		var index = $(this).index();
		$(this).addClass("active").siblings(".product").removeClass("active");
		$("#product").find(".item").eq(index).addClass("active").siblings(".item").removeClass("active");
	})

	$(".application .row").find("div").on("click",function(){
		var index = $(this).index();
		$(this).addClass("active").siblings("div").removeClass("active");
		$(".application").find(".app-col").eq(index).addClass("active").siblings(".item").removeClass("active");
	})
})