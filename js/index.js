// JavaScript Document
$(document).ready(function(){	

	var isMobile = false; //initiate as false
	// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
		isMobile = true;
	}

	var atc_cnt = 0;
	var scrollEvent = true;
	var $atcs = $(".main_wrap article");
	var $lists = $("nav li");

	var $anchors = $(".form > a");
	var $paginations = $(".nav > ul > li");
	var lr_click_Event = false;
	var art_cnt = 0;

	if(!isMobile){
		console.log("desktop");
		$(window).on('mousewheel', function(event) {
			if (event.originalEvent.wheelDelta > 1 && scrollEvent == false && atc_cnt > 0) {
				console.log('Scroll up');
				scrollEvent = true;
				atc_cnt--;
				console.log(atc_cnt);
				atc_act("up");
			}
			else if (event.originalEvent.wheelDelta < 1 && scrollEvent == false && atc_cnt < $atcs.length - 1) {
				console.log('Scroll down');
				scrollEvent = true;
				atc_cnt++;
				console.log(atc_cnt);
				atc_act("down");
			}
			list_hover($lists.eq(atc_cnt));
		});

		$(".button_right").on("click", function(e){
			if(lr_click_Event == true) return false;
			lr_click_Event = true;
			e.preventDefault();
			count_plus();
		});
		$(".button_left").on("click", function(e){
			if(lr_click_Event == true) return false;
			lr_click_Event = true;
			e.preventDefault();
			count_minus();
		});
	}
	else if(isMobile){
		console.log("mobile");
        $atcs.removeAttr("class");
//		$(window).on('swipedown', function(event) {
//			if (scrollEvent == false && atc_cnt > 0) {
//				console.log('Scroll up');
//				scrollEvent = true;
//				atc_cnt--;
//				console.log(atc_cnt);
//				atc_act("up");
//			}
//			else {
//				return false;
//			}
//			list_hover($lists.eq(atc_cnt));
//		});
//		$(window).on('swipeup', function(event) {
//			if (scrollEvent == false && atc_cnt < $atcs.length - 1) {
//				console.log('Scroll down');
//				scrollEvent = true;
//				atc_cnt++;
//				console.log(atc_cnt);
//				atc_act("down");
//			}
//			else {
//				return false;
//			}
//			list_hover($lists.eq(atc_cnt));
//		});

		$(".object_wrap").on("swipeleft", function(e){
			e.preventDefault();
			count_plus();
		});
		$(".object_wrap").on("swiperight", function(e){
			e.preventDefault();
			count_minus();
		});
	}

	$lists.on("mouseenter", function(){
		list_hover($(this));
	});
	$lists.on("mouseleave", function(){
		$lists.eq(atc_cnt).siblings().removeClass("hover");
	});

	function list_hover(elm){
		$lists.eq(atc_cnt).siblings().removeClass("hover");
		elm.addClass("hover");
	}

	$lists.on("click", function(e){
		e.preventDefault();
		e.stopPropagation();
		scrollEvent = true;
		if($(this).index() > atc_cnt || $(this).index() < atc_cnt){
			$atcs.eq(atc_cnt).removeAttr("class").addClass("atc_backward");
			$atcs.eq(atc_cnt).siblings().removeAttr("class");
			console.log(atc_cnt);
			console.log($(this).index());
			atc_cnt = $(this).index();
			var delay_act = setTimeout(function(){
				$atcs.eq(atc_cnt).addClass("atc_cur");
				$atcs.eq(atc_cnt).siblings().removeAttr("class");
				$atcs.eq(atc_cnt-1).addClass("atc_backward");
				$atcs.eq(atc_cnt+1).addClass("atc_under");
			}, 300);
			var callback = setTimeout(function(){
				scrollEvent = false;
				footer_act();
				console.log(atc_cnt);
			}, 700);
			init();
		}
		else if($(this).index() == atc_cnt){
			return false;
		}
		list_hover($lists.eq(atc_cnt));
		console.log(atc_cnt);
		console.log($(this).index());
	});
	
	function atc_act(status){
		if(status == "down"){
			$atcs.removeAttr("class");
			$atcs.eq(atc_cnt+1).addClass("atc_under");
			$atcs.eq(atc_cnt-1).addClass("atc_backward");
			var delay_act = setTimeout(function(){
				$atcs.eq(atc_cnt).addClass("atc_cur");
			}, 300);
		}
		else if(status == "up"){
			$(".atc_cur").addClass("atc_under");
			$(".atc_under").removeClass("atc_cur");
			$atcs.eq(atc_cnt+2).removeClass("atc_under");
			var delay_act = setTimeout(function(){
				$(".atc_backward").addClass("atc_cur");
				$(".atc_cur").removeClass("atc_backward");
				$atcs.eq(atc_cnt-1).addClass("atc_backward");
			}, 300);
		}
		var callback = setTimeout(function(){
			scrollEvent = false;
			footer_act();
			init();
		}, 600);
	}

	function footer_act(){
		if(atc_cnt == $atcs.length - 1){
			$("footer").addClass("show");
		}
		else{
			$("footer").removeClass("show");
		}
	};

	function count_plus(){
		art_cnt = art_cnt == $anchors.length - 1 ? 0 : art_cnt + 1;
		pagination_change(art_cnt);
		slide_img(art_cnt, "all 0.4s");
		console.log(art_cnt);
	}
	function count_minus(){
		art_cnt = art_cnt == 0 ? $anchors.length - 1 : art_cnt - 1;
		pagination_change(art_cnt);
		slide_img(art_cnt, "all 0.4s");
		console.log(art_cnt);
	}

	function slide_img(num, transition_val){
		var backward_num = art_cnt == $anchors.length - 1 ? 0 : art_cnt + 1;
		var back_num = art_cnt == $anchors.length - 2 ? 0 : backward_num + 1;
		var back_back_num = art_cnt == $anchors.length - 3 ? 0 : back_num + 1;
		var forward_num = art_cnt == 0 ? $anchors.length - 1 : art_cnt - 1;
		$(".forward").show(0, function(){
			$anchors.removeClass().css("transition", "none");
			$anchors.eq(forward_num).addClass("forward").css("transition", transition_val);
			$anchors.eq(num).addClass("cur").css("transition", "all 0.4s");
			$anchors.eq(backward_num).addClass("backward").css("transition", transition_val);
			$anchors.eq(back_num).addClass("back").css("transition", transition_val);
			$anchors.eq(back_back_num).addClass("back_back").css("transition", transition_val);
			var st_01 = setTimeout(function(){
				$anchors.eq(forward_num).hide();
				lr_click_Event = false;
			}, 300);
		})
	}

	$anchors.on("click", function(){
		scrollEvent = true;
		var src = $(this).css("background-image");
		console.log(src);
		src = src.split("/images/");
		console.log(src);
		src = src[1].replace('"', '');
		src = src.replace(')', '');
		console.log(src);
		//src = src[0];
		src = "images".concat("/", src);
        console.log(src);
        //alert(src);
		$(".view_bg").show("scale", 300);
		$(".view_bg > img").attr("src", src).delay(300).fadeIn(500, function(){
			var x_left = $(this).offset().left + $(this).width() + 10;
			var x_top = $(this).position().top;
			console.log(x_left, x_top);
			//$(".view_bg > button").css("left", x_left).css("top", x_top).delay(400).fadeIn(400);
			if(!isMobile){
				$(".view_bg > button").css("right", "20px").css("top", "20px").delay(400).fadeIn(400);
			}
			else if(isMobile){
				$(".view_bg > button").css("right", "10px").css("top", "10px").delay(400).fadeIn(400);
			}
            
		});
	})
	$(".view_bg > button").on("click", function(){
		$(".view_bg").hide("scale", 300, function(){
			scrollEvent = false;
		});
		$(".view_bg > img").hide();
		$(this).hide();
	});

	function pagination_change(num){
		$paginations.removeClass("sel");
		$paginations.eq(num).addClass("sel");
	}

	var load_act = (function(){
		var $start_elm = $('.start_elm');
		var $time = 300;
		$start_elm.each(function(idx, elm){
			$(this).delay(idx * $time).animate({ 'opacity': 1 }, $time, function(){
				$(this).removeClass("start_elm");
				console.log(idx);
				if(idx == $start_elm.length - 1){
					scrollEvent = false;
				}
			});
		});
	})();

	function init(){
		$(".forward").hide();
		art_cnt = 0;
		pagination_change(art_cnt);
		slide_img(art_cnt, "none");
	};
	init();
	
});