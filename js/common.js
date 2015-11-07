$(document).ready(function() {

	function heightDetect() {
		$("body").css("height", $(window).height());
		$(".main").css("height", $(window).height());
		$(".content").css("height", $(window).height());
		$(".content").css("width", $(window).width());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	clearInterval(animation);
	animate_hover_logo_dection(this,true);

	var animation;
	var imgHeight = 300;
	var numImgs = 4;
	var cont = 0;
	function animate_hover_logo_dection(obj,dir){


		animation = setInterval(function(){
			var position =  -1 * (cont*imgHeight);
			$(obj).find('.content img').css('margin-top', position);
			cont++;
			if(cont == numImgs){
				cont = 0;
				position = 0;
			}
			if(cont > numImgs){
				cont = 0;
				$(obj).find('.content img').css('margin-top', 0);
			}
			if(cont < 0){
				cont = 0;
				$(obj).find('.content img').css('margin-top', 0);
			}
		},50);
	}



setTimeout(animate_hover_logo_dection1(),500);


	var animation1;
	var imgHeight1 = 42;
	var numImgs1 = 5;
	var cont1 = 0;
	function animate_hover_logo_dection1(){

		animation1 = setInterval(function(){
			var position1 =  -1 * (cont1*imgHeight1);
			$('.button img').css('margin-top', position1);
			cont1++;
			if(cont1 == numImgs1){
				cont1 = 4;
				position1 = -168;
			}
			if(cont1 > numImgs1){
				cont1 = 4;
				$('.button img').css('margin-top', -168);
			}
			if(cont1 < 0){
				cont1 = 4;
				$('.button img').css('margin-top', -168);
			}
		},100);
	}
		var animation2 = setInterval(function(){
			cont1=0;
			clearInterval(animation1);
			animate_hover_logo_dection1();},2000);

	$(".popup-open").click(function(){
		$(".popup").css("opacity", "1");
		$(".popup").css("z-index", "10");
		$(".logo").css("opacity", "0");
	});
	$(".close").click(function(){
		$(".popup").css("opacity", "0");
		$(".logo").css("opacity", "1");
		$(".popup").css("z-index", "1");
	});

	$(".about").click(function(){
		$(".about").addClass("active");
		$(".send").removeClass("active");
		$(".contact-cont").css("display","none");
		$(".about-cont").css("display","block");
	});
	$(".send").click(function(){
		$(".send").addClass("active");
		$(".about").removeClass("active");
		$(".about-cont").css("display","none");
		$(".contact-cont").css("display","block");
	});
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(10).fadeOut("slow");

});
