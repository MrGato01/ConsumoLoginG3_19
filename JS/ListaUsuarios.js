var UrlApiGetAll = 'http://localhost:5003/listaUsuarios/getAll';

$(document).ready(function(){
    CargarProductos();
});

function CargarProductos() {
    $.ajax({
        url:UrlApiGetAll,
        type:'GET',
        datatype:'JSON',
        success: function (response) {
            var MiItems = response;
            var Valores = '';
            for (i = 0; i < MiItems.length; i++) {
                Valores +=
                '<tr>'+
                '<td>'+ MiItems[i].codigousuario +'</td>'+
                '<td>'+ MiItems[i].nombre +'</td>'+
                '<td>'+ MiItems[i].apellido +'</td>'+
                '<td>'+ MiItems[i].contrasena +'</td>'+
                '<td>'+ MiItems[i].email +'</td>'+
                '<td>'+ MiItems[i].estado +'</td>'+
                '<td>'+ MiItems[i].ultimafechaingreso +'</td>'+
                '<td>'+ MiItems[i].contrasenaexpira +'</td>'+
                '<td>'+ MiItems[i].diascaducidad +'</td>'+
                '<td>'+ MiItems[i].rol +'</td>'+
                '<td>'+ MiItems[i].numerointentoincorrectos +'</td>'+
                '<td>'+ MiItems[i].fecharegistro +'</td>'+
                $('#datosusuario').html(Valores);
            }
        }
     });
}