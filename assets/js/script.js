$(document).ready(function(){

	// Links internos suaves para o menu
	$('.menu a[href^="#"]').on('click', function(e) {
		e.preventDefault();
		var id = $(this).attr('href'),
				targetOffset = $(id).offset().top;
				
		$('html, body').animate({ 
			scrollTop: targetOffset - 100
		}, 500);
	});

	// Links internos suaves para o menu mobile
	$('.menu-mobile a[href^="#"]').on('click', function(e) {
		e.preventDefault();
		var id = $(this).attr('href'),
				targetOffset = $(id).offset().top;
				
		$('html, body').animate({ 
			scrollTop: targetOffset - 100
		}, 500);
	});

	// Valida formulário de pesquisa 
	$("#pesquisa-form").submit(function(e){

		e.preventDefault();

		var pesquisa = $("#pesquisa").val();

		if (pesquisa == "") {
			swal("Ops!", "Preencha o campo de busca por favor.", "warning");
		} else {
			swal("Parabéns!", "Você pesquisou!", "success");	
			$("#pesquisa-form input").val("");
		}

	});

	// Valida formulário de contato
	$("#contato-form").submit(function(e){

		e.preventDefault();

		var nome = $("#nome").val();
		var email = $("#email").val();
		var telefone = $("#telefone").val();
		var mensagem = $("#mensagem").val();

		if (nome == "" || email == "" || telefone == "" || mensagem == "") {
			swal("Ops!", "Preencha todos os campos por favor.", "warning");
		} else {
			swal("Parabéns!", "Você enviou o formulário!", "success");	
			$("#contato-form input").val("");
			$("#contato-form textarea").val("");
		}

	});

	// Valida o formulário da newsletter
	$("#form-newsletter").submit(function(e){

		e.preventDefault();

		var newsletter = $("#newsletter").val();

		if (newsletter == "") {
			swal("Ops!", "Preencha o campo com seu e-mail!", "warning");
		} else {
			swal("Parabéns!", "Você assinou a newsletter!", "success");	
			$("#form-newsletter input").val("");
		}

	});

	// Fecha menu mobile ao carregar a página
	$("#mobile-nav").hide();

	// Exibir menu mobile
	$(".down-menu").click(function(){

		$("#mobile-nav").fadeToggle("slow");

	});	

});