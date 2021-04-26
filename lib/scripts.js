function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

jQuery(document).ready(function($) {

	$("body").on('keydown', function(e) {
		var senhaAtual   = $("#senhaAtualNumero");
		var senhaNormal  = $("#senhaNormal");
		var senhaPrior   = $("#senhaPrioridade");
		var ultimaSenha  = $("#ultimaSenhaNumero");
		var audioChamada = $("#audioChamada");

        if(e.keyCode == 39){
        	ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaNormal.val()) + 1;
            senhaAtual.html(pad(senha, 4));
            senhaNormal.val(pad(senha, 4));
            audioChamada.trigger("play");
        }
        if(e.keyCode == 65){
            senha = parseInt(senhaNormal.val()) - 1;
            senhaAtual.html(pad(senha, 4));
            senhaNormal.val(pad(senha, 4));
        }
        if(e.keyCode == 38){
        	ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaPrior.val().replace("P","")) + 1;
            senhaAtual.html("P" + pad(senha, 3));
            senhaPrior.val("P" + pad(senha, 3));
            audioChamada.trigger("play");
        }
        if(e.keyCode == 83){
            senha = parseInt(senhaPrior.val().replace("P","")) - 1;
            senhaAtual.html("P" + pad(senha, 3));
            senhaPrior.val("P" + pad(senha, 3));
        }
    });
});