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
/*-----------Bottom Content slideshow on projects---------*/
$(function(){
	var bcsp=$('div.projects > section'),
		bcsp_pic=$('div.projects > section div.bigpic'),
		bcsp_txt=$('div.projects > section div.bigtxt'),
		bcsp_total=$('div.projects > section div.bigpic > div').length,
		curentSlide=0;
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
		(autoplay=bcsp.onmouseout=function(){
			if(auto) return;
			auto=setInterval(nextslide,2500);
		})();
		stopauto=bcsp.onmouseover=function(){
			clearInterval(auto);
			auto=false;
		};
});