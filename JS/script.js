$(document).ready(function () {

    $('#btnSend').click(function () {

        var errores = '';

        $('#modal_wrap').css("border-radius", "10px", "background-color", "#004aad");
        // Validado Nombre ==============================
        if ($('#names').val() == '') {
            errores += '<p><i class="fas fa-user-alt"></i>Escriba un nombre</p>';
            $('#names').css("border-bottom-color", "#004aad")
        } else {
            $('#names').css("border-bottom-color", "#004aad")
        }

        // Validado email ==============================
        if ($('#email').val() == '') {
            errores += '<p><i class="fas fa-at"></i>Escriba su email </p>';
            $('#email').css("border-bottom-color", "#004aad")
        } else {
            $('#email').css("border-bottom-color", "#004aad")
        }

        // Validado Mensaje ==============================
        if ($('#mensaje').val() == '') {
            errores += '<p><i class="fas fa-envelope xdpad"></i>Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#004aad")
        } else {
            $('#mensaje').css("border-bottom-color", "#004aad")
        }

        // ENVIANDO MENSAJE ============================
        if (errores == '' == false) {
            $('#modal_wrap').css("border-radius", "10px");
            var mensajeModal = '<div class="modal_wrap" id="modal_wrap">' +
                '<div class="mensaje_modal">' +
                '<h3>Errores encontrados</h3>' +
                errores +
                '<span id="btnClose">Cerrar</span>' +
                '</div>' +
                '</div>'

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================

        $('#btnClose').css("border-color", "##004aad");
        $('#btnClose').css("background-color", "##004aad");
        $('#btnClose').click(function () {
            $('.modal_wrap').remove();
        });
    });

});