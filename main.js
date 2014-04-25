$(document).on('ready', function() {

	$('.btn').on('click',function() {
		// console.log ('Ok');
		return false;
	});

	$('.btn').on('click',function() {
		// console.log("ok");
		var quote = $("textarea.quote").val();
		var author = $("input.author").val();
		var star = $("input.star").val();
		// $('ul').append('<li class="result" data-rating=' + star + '>' + '" ' + quote +' "' + ' ~ ' + author + '. (Star Rating: ' + star + ')</li>' ) ;
		$('ul').append('<li class="result"> <span class="hidestar">' 
			+ star + '</span>' + '" ' + quote +' "' + ' ~ ' + author 
			+ '. (Star Rating: ' + star + ')</li>') ;	


	// Auto-sorting
	function sortEm(a,b){
  		return parseInt($('span', a).text()) < parseInt($('span', b).text()) ? 1 : -1;
	}

	$('li').sort(sortEm).prependTo($('ul#quotes'));


	});

	});	

	// $("#doSort").click(function() {
 //    // store the li items
 //    // console.log('hi');
 //    var items = $('ul li').get();

 //    	items.sort(function(a, b) {
 //        	var valueA = $(a).find("span").text();
 //        	var valueB = $(b).find("span").text();

 //        	if (valueA < valueB) return -1;
 //        	if (valueA > valueB) return 1;
 //        	return 0;
 //    	});
	// });


	



