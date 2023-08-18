var UrlApiInsert = 'http://localhost:5003/usuario/post';


function RegistrarUsuario(){
    var datosusuario={
    CodigoUsuario : $('#cousuario').val(),
    Nombre : $('#nombre').val(),
    Apellido : $('#apellido').val(),
    Contrasena : $('#contrasena').val(),
    Email : $('#email').val(),
    Estado : $('#estado').prop('checked'),
    ContrasenaExpira : $('#conexpira').prop('checked'),
    DiasCaducidad : $('#diacaducidad').val(),
    Rol : $('#rol').val(),
    NumeroIntentoIncorrectos : $('#nintentos').val(),
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