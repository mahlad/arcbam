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