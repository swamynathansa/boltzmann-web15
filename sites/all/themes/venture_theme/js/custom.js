jQuery(document).ready(function(){
jQuery(".news").click(function(){
  jQuery(".news-wrapper ul").toggle();
});
jQuery("a[rel]").overlay({
	closeOnClick: false,
	mask: { 
		color: '#000',
		closeSpeed: 500
	}
});
jQuery('.bxSlider').bxSlider({
slideMargin:40,
hideControlOnEnd: true,
adaptiveHeight: true,
pager: false,
controls: true,
auto: true
});
});
