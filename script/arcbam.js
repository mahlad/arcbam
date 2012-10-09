/*-----------tile slideshow on home---------*/
storyBoard = {
	puzzel1 : {
		delay : 0,
		target : '.pone',
		keyframe : 'puzzel1',
		due : 1000,
		ease : 'ease-out'
	},
	puzzel2 : {
		delay : 500,
		target : '.ptow',
		keyframe : 'puzzel2',
		due : 1000,
		ease : 'ease-out'
	},
	puzzel3 : {
		delay : 1000,
		target : '.pthree',
		keyframe : 'puzzel3',
		due : 1000,
		ease : 'ease-out'
	},
	puzzel4 : {
		delay : 1500,
		target : '.pfour',
		keyframe : 'puzzel4',
		due : 1000,
		ease : 'ease-out'
	}
};

$(function(){
	$.tween(storyBoard);
});
/*-----------fadeloop slideshow on home---------*/

$(function(){
	$('div.content > div.fade').fadeLoop(1000);
});
/*-----------Bottom Content slideshow on projects for bigpart---------*/
$(function(){
	var bcsp=$('div.projects > section.bigpart'),
		bcsp_pic=$('div.projects > section.bigpart > div.bigpic'),
		bcsp_txt=$('div.projects section.bigpart div.bigtxt'),
		bcsp_total=$('div.projects section.bigpart div.bigpic > div').length,
		bcsp_smallpart=$('div.projects > section.smallpart'),
		bcsp_minpic=$('div.projects > section.smallpart ul'),
		bcsp_spic=$('div.projects section.smallpart > ul.btn > li'),
		bcsp_btn=$('div.projects div.btn'),
		bcsp_prev=$('section.smallpart div.prev'),
		bcsp_next=$('section.smallpart div.next'),
		total=$('div.projects section.smallpart > ul.btn > li').length,
		curentSlide=0,
		curentminpic=0;
		(bcsp_go2slide=function(n){
			if(n>bcsp_total-1)n=0;
			bcsp_pic.css({'right':-490*n+'px'});
			bcsp_txt.css({'right':-490*n+'px'});
			curentSlide=n;
			//alert(n);
		})(0);// set active of first li

		nextslide=function(){
			//alert(1);
			bcsp_go2slide(curentSlide+1);
		};
		
		var auto=false;
		(autoplay=function(){
			if(auto) return;
			auto=setInterval(nextslide,2500);
		})();
		stopauto=function(){
			clearInterval(auto);
			auto=false;
		};

		bcsp.mouseout(autoplay);
		bcsp.mouseover(stopauto);
		
		//button part
		bcsp_next_minpic=function(m){
			bcsp_minpic.css({'right':-80*m+'px'});
			curentminpic=m;	
		};
		bcsp_next.click(function(){
			bcsp_next_minpic(curentminpic+1);
		});
		bcsp_prev.click(function(){
			bcsp_next_minpic(curentminpic-1);
		});
		bcsp_smallpart.mouseover(function(){
			bcsp_btn.css({opacity:1});
		});	
		bcsp_smallpart.mouseout(function(){
			bcsp_btn.css({opacity:0});
		});	

		bcsp_spic.mouseover(function(){
			bcsp_btn.css({opacity:1});
			
			stopauto();
			bcsp_go2slide($(this).index());
		});
		bcsp_smallpart.mouseout(function(){
			bcsp_btn.css({opacity:0});
			autoplay();
		});
		

});