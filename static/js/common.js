$(document).ready(function() {
	var navBar = $(".nav-bar");

	function revealNavbar() {
		if ($(window).scrollTop() >= $(".site-header").height() - 48) {
			navBar.addClass("active");
		} else {
			navBar.removeClass("active");
		}
	}
	
	$(window).on("scroll", revealNavbar);
	
	var toggleMenu = $(".toggle-menu"),
		siteNav = $(".site-nav");

	function revealMenu() {
		siteNav.slideToggle(300);
		$(this).find("i").toggleClass("fa-bars fa-times");
	}
	toggleMenu.on("click", revealMenu);
	
	var toggleSearch = $(".toggle-search"),
		inputAndSearch = $(".input-search, .toggle-search");

	function revealSearch() {
		inputAndSearch.toggleClass("active");
		$(".input-search.active").focus();
		$(this).find("i").toggleClass("fa-search fa-times");
	}
	
	toggleSearch.on("click", revealSearch);

	function revealExif() {
		$(".exif").toggleClass("active");
		$(this).find("i").toggleClass("fa-info fa-times");
	}
	$(".toggle-exif").on("click", revealExif);

	$("span.smiles-icons").click(function() {
		$(".smileys").slideToggle()
	});
	
	$("span.page-links-title").click(function() {
		$(".page-links").toggle()
	});
	
	$("[data-toggle='tooltip']").tooltipster();
	
	$(".menu li").hover(function() {
		$(this).children("ul").slideDown();
	}, function() {
		$(this).children("ul").hide();
	});
	
});

$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
		$("#top").fadeIn(1000)
	} else {
		$("#top").fadeOut(1000)
	}
});
$("#top").click(function() {
	$("html,body").animate({
		scrollTop: "0px"
	}, 800);
	return false
});
//边栏状态更新
$(document).ready(function(){
	var c=$('.author_status_inner')
	if(c[0]){
		var a=c.children().length
		setInterval(function(){
			t=c.position().top
			if(t<-(a-2)*100){
				c.css("top","100px")
			}
				c.animate({
					top:"-=100px"
				},1000);	
		},7000);			
	}
});
//文章隐藏区域
$('.btn_dispanel').click(function(){
	$('.dispanel').slideToggle(1000);
});