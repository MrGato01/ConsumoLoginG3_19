var UrlApiLogin = 'http://localhost:5003/loginusuario/post';

function IniciarSesion() {
    var User = document.getElementById('txtId').value;
    var Contra = document.getElementById('txtPass').value;

    if (User === '' || Contra === '') {
        alert("Por favor ingrese usuario y contraseña.");
        return;
    }

    var datosCliente = {
        codigousuario: User,
        contrasena: Contra
    };

    var datosClienteJson = JSON.stringify(datosCliente);

    $.ajax({
        url: UrlApiLogin,
        type: 'POST',
        data: datosClienteJson,
        dataType: 'json',
        contentType: 'application/json',

        success: function(response) {
            if (response.autenticado === true) {
                alert("Usuario autenticado");
                window.location.href = 'Home.html';
            } else {
                alert("Usuario y/o contraseña inválida");
            }
        },
    });
}