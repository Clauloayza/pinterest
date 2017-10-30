$.fn.pinterest = function(listImagePinterest)
{
	if (listImagePinterest.length !== 0)
	{
		for (var i = 0; i < listImagePinterest.length; i++)
		{
			let contImage = '<img class="contImage" frameborder="0" allowfullscreen/>'+'<p class="textimg">Hello, Fashionable gals......summer is here, rigth! And, if...</p>';
			let url = 'https://i.pinimg.com/' + listImagePinterest[i];

			let $cont_img = $(contImage);
			$cont_img.attr('src', url);
			$(this).append($cont_img);
		};
	}
	else
	{
		$(this).html('no hay videos');
	}
}