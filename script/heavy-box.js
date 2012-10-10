$(function () {
	$('div.hevybox-sl div.s-img > a').click(function(){
		$('div.dark').css({
			display:'block',
			'background-image' : 'url(' + $(this).attr('href') + ')'
		},500).animate({
			opacity:1
			},500).click(function(){
			$(this).animate({
				opacity : 0
			},400,'ease-out',function(){
				$(this).css({display : 'none'});
			})
		})
		return false;
	});
});
