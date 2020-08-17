$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(100, function(){
		$(this).remove();
	});
	
});

$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> " + todoText + "</li>");
		$(this).val("");
	}
});

$(".fas").click(function(){
	$("input[type='text']").fadeToggle(100);
	$(this).toggleClass("fa-plus")
	$(this).toggleClass("fa-minus")
})
