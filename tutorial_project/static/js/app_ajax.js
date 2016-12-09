$(document).ready(function() {

	$('#likes').click(function(){
		console.log('worked')
		var catid;
		catid = $(this).attr("data-catid");

	//Pulls out cat_id^
		$.get('/like_category/', {category_id: catid}, function(data){
					$('#like_count').html(data);
					$('#likes').hide();
				});
	})

	$('#suggestion').keyup(function(){
			var query;
			query = $(this).val();
			$.get('/suggest_category/', {suggestion: query}, function(data){
				$('#cats').html(data);

			});
		});

	$('.rango-add').click(function(){
		var catid = $(this).attr("data-catid");
		var url = $(this).attr("data-url");
		var title = $(this).attr("data-title");
		var user = $(this).attr("data-user");
		var me = $(this)
		console.log('worked')
		$.get('/auto_add_page/', {category_id: catid, url: url, title: title, user: user}, function(data){
			$('#pages').html(data);
			me.hide();

		});
});
});