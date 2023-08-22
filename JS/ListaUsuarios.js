var UrlApiGetAll = 'http://localhost:5003/listaUsuarios/getAll';

$(document).ready(function(){
    CargarUsuarios();
});

function convertirFecha(fecha) {
    var dateObject = new Date(fecha);
    var year = dateObject.getFullYear();
    var month = String(dateObject.getMonth() + 1).padStart(2, '0');
    var day = String(dateObject.getDate()).padStart(2, '0');
    var hours = String(dateObject.getHours()).padStart(2, '0');
    var minutes = String(dateObject.getMinutes()).padStart(2, '0');
    var seconds = String(dateObject.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}


$(document).ready(function() {

    function convertirFecha(fecha) {
        var dateObject = new Date(fecha);
        var year = dateObject.getFullYear();
        var month = String(dateObject.getMonth() + 1).padStart(2, '0');
        var day = String(dateObject.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}-${hours}:${minutes}:${seconds}`;
    }
});

function CargarUsuarios() {
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
                '<td>'+ convertirFecha(MiItems[i].ultimafechaingreso) +'</td>'+
                '<td>'+ MiItems[i].contrasenaexpira +'</td>'+
                '<td>'+ MiItems[i].diascaducidad +'</td>'+
                '<td>'+ MiItems[i].rol +'</td>'+
                '<td>'+ MiItems[i].numerointentoincorrectos +'</td>'+
                '<td>'+ convertirFecha(MiItems[i].fecharegistro) +'</td>'+
                '</tr>';
            }
            $('#datosusuario').html(Valores);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('Error:', textStatus, errorThrown);
        }
     });
}