var UrlApiInsert = 'http://localhost:5003/usuario/post';


$(document).ready(function() {
    var diasCaducidadInput = $('#diacaducidad');
    var checkbox = $('#conexpira');
    diasCaducidadInput.attr('disabled', 'disabled');

    checkbox.change(function() {
        if (checkbox.prop('checked')) {
            diasCaducidadInput.attr('placeholder', 'Dias de caducidad (predeterminado 20)');
            diasCaducidadInput.removeAttr('disabled');
        } else {
            diasCaducidadInput.attr('placeholder', 'No existe tiempo de caducidad');
            diasCaducidadInput.val('');
            diasCaducidadInput.attr('disabled', 'disabled');
        }
    });
});



function RegistrarUsuario() {
    var codigoUsuario = $('#cousuario').val();
    var nombre = $('#nombre').val();
    var apellido = $('#apellido').val();
    var contrasena = $('#contrasena').val();
    var email = $('#email').val();
    var rol = $('#rol').val() || 'Usuario';
    var diasCaducidad = $('#conexpira').prop('checked') ? $('#diacaducidad').val() || '20' : '0';

    if (codigoUsuario === '' || nombre === '' || apellido === '' || contrasena === '' || email === '') {
        alert('Por favor, complete los primeros 5 campos.');
        $(window).scrollTop(0)
        return;
    }

    if (!validarCodigoUsuario(codigoUsuario)) {
        alert('El codigo de usuario solo puede contener letras.');
        $('#cousuario').val('');
        $(window).scrollTop(0);
        return;
    }

    if (codigoUsuario.length > 12) {
        alert('El Codigo de usuario no puede tener más de 12 caracteres.');
        $(window).scrollTop(0);
        return;
    }

    if (!validarNombreYApellido()) {
        return;
    }


    var datosusuario = {
        CodigoUsuario: codigoUsuario,
        Nombre: nombre,
        Apellido: apellido,
        Contrasena: contrasena,
        Email: email,
        Estado: $('#estado').prop('checked'),
        ContrasenaExpira: $('#conexpira').prop('checked'),
        DiasCaducidad: diasCaducidad,
        Rol: rol,
    };

    var datosusuariojson = JSON.stringify(datosusuario);


    $.ajax({
        url: UrlApiInsert,
        type: 'POST',
        data: datosusuariojson,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function(response){
            alert('Usuario registrado de forma exitosa');
            $('#Miformulario').submit();
        },
        error : function(textError, errorThrown){
            alert('Error: ' + textError + errorThrown);

        }
    });

}

function validarCodigoUsuario(codigoUsuario) {
    var letrasRegex = /^[A-Za-z]+$/;
    return letrasRegex.test(codigoUsuario);
}

function validarNombreApellido(texto) {
    var letrasRegex = /^[A-Za-z]+$/;
    return letrasRegex.test(texto);
}

function validarNombreYApellido() {
    var nombre = $('#nombre').val();
    var apellido = $('#apellido').val();

    if (!validarNombreApellido(nombre)) {
        alert('El nombre solo puede tener letras.');
        $('#nombre').val('');
        $(window).scrollTop(0);
        return false;
    }

    if (!validarNombreApellido(apellido)) {
        alert('El apellido solo puede tener letras.');
        $('#apellido').val('');
        $(window).scrollTop(0);
        return false;
    }

    return true;
}