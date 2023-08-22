var UrlApiLogin = 'http://localhost:5003/usuario/ingresar/:codigousuario/:contrasena';


function IniciarSesion() {
    
  
        var User = document.getElementById('txtId');
        var Contra = document.getElementById('txtPass');
        var encontrado = false;
        
        if (User.value=='') {
            alert("El elemento está vacío.");
        } else {
            if (encontrado === true) { alert("Usuario autenticado"); } else {
        
                alert("Usuario y/o contraseña invalida");
            }

            var datosCliente = {
                codigousuario :User.value,
                contrasena : Contra.value
            };
        
            var datosClienteJson = JSON.stringify(datosCliente);
            $.ajax({
                url: UrlApiLogin,
                type: 'POST',
                data: datosClienteJson,
                datatype: 'JSON',
                contentType: 'application/json',
        
                success: function (response) {
                   
                   encontrado = true; 
                    
                   
                }
        
            })
         
        }
        
      
}