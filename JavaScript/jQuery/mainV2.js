(function($,undefined){
		$(function(){

			$('h2').each(function(){
				var text=$(this).text();
				$('.target').append('<option>'+text+'</option>')
			})

			$('.target').change(function(){
				var value=this.value;
				$('p').hide();
				$('h2').each(function(){
					if($(this).text()==value){
						var posThis=$(this).position().top;
						$('html, body')
													.stop()
													.animate({scrollTop:posThis},1000);
						$(this).next().slideDown();
					}
				})				
			})

			$('h2').click(function(){
				$(this).next().slideToggle();
			})

			
		})
	})(jQuery);