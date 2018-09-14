$('#addTodo').click(function(){
	if($('li#input').css('display') === "none"){
		$('li#input').slideDown(700, function(){
			$(this).fadeIn(500);
			$(this).css('display', 'list-item');
		});
	}else{
		$('li#input').slideUp(700, function(){
			$(this).fadeOut(500);
			$(this).css('display', 'none');
		});
	}
});

$('ul#todoList').on('click', 'button', function(){
	$(this).parent('li.todo').remove();
});

$('ul#todoList').on('mouseenter', 'li', function(){
	$(this).find('button#delete').css('display', 'inline-block');
});

$('ul#todoList').on('mouseleave', 'li', function(){
	$(this).find('button#delete').css('display', 'none');
});


$('input').keypress(function(event){
	if(event.which === 13){
		var content = $(this).val();
		$(this).val("");
		$('ul#todoList').append('<li class="todo"><button id="delete"><i class="far fa-trash-alt"></i></button><span>' + content + '</span></li>');
	}
});

$('ul#todoList').on('click', 'li', function(){
	$(this).find('span').toggleClass("done");
});

$('input').focus(function(){
	$(this).toggleClass('focus');
});

$('input').focusout(function(){
	$(this).toggleClass('focus');
});

