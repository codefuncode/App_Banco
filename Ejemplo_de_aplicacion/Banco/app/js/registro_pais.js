function registro_pais(argument) {

    let btn_regustrar =
        document.querySelector(
            ".registro_pais .btn_registrar_pais"
        );

    let nombre_pais =
        document.querySelector(
            ".registro_pais [name='nombre_pais']"
        );

    nombre_pais.value = "";

    let modal_registro_paisl =
        document.getElementById("modal_registro_pais");
    modal_registro_paisl.style.display = "none";

    btn_regustrar.addEventListener(
        "click",
        function(argument) {

            let url =
                "php/registro_pais.php";

            let data = {
                "nombre_pais": nombre_pais.value
            };

            $.post(url, data, function(data) {
                const myArr = JSON.parse(data);
                // console.log(myArr.respuesta);

                modal_registro_pais(myArr.respuesta);

            });
            // console.log('btn_regustrar');
        });
    //  Función trabaja todo lo relacionado al mensaje modal al usuario 
    function modal_registro_pais(argument) {

        let modal_registro_pais_mensaje_titulo =
            document.querySelector(
                "#modal_registro_pais .modal_registro_pais_mensaje_titulo"
            );
        let modal_registro_pais_mensaje_cuerpo =
            document.querySelector(
                "#modal_registro_pais .modal_registro_pais_mensaje_cuerpo p"
            );
        let modal_registro_pais_mensaje_pie =
            document.querySelector(
                "#modal_registro_pais .modal_registro_pais_mensaje_pie p"
            );
        let img_modal_registro_pais =
            document.querySelector(
                "#modal_registro_pais .img_modal_registro_pais"
            );

        let btn_cerrar_modal_registro_pais =
            document.getElementById("btn_cerrar_modal_registro_pais");

        let modal_registro_pais =
            document.getElementById("modal_registro_pais");

        modal_registro_pais.style.display = "block";

        let lcono_estatus = '';
        let mensaje_titulo = "";
        let mensaje_cuerpo = "";
        let mensaje_pie = "";

        if (argument == "si") {
            lcono_estatus = 'img/aprobado.png';
            mensaje_titulo = "Excelente";
            mensaje_cuerpo = "La inserción del dato fue almacenado correctamente en la base de datos ";
            mensaje_pie = "Respuesta exitosa";
        } else if (argument == "no") {
            lcono_estatus = 'img/icono_advertencia.png';
            mensaje_titulo = "Advertencia";
            mensaje_cuerpo =
                "Al parecer el dato ingresado ya existe en la base de datos, por favor diríjase a la sección correspondiente y verifique si ese dato existe ";
            mensaje_pie = "Advertencia del servidor ";
        } else if (argument == "error") {
            lcono_estatus = 'img/error.png';
            mensaje_titulo = "Error";
            mensaje_cuerpo = "Verifique los datos ingresados, por alguna razón el servidor no ha podido procesar su petición ";
            mensaje_pie = "Error al procesar los datos ";
        }

        img_modal_registro_pais.src = lcono_estatus;
        img_modal_registro_pais.addEventListener("load", function(argument) {
            modal_registro_pais_mensaje_titulo.innerHTML = mensaje_titulo;
            modal_registro_pais_mensaje_cuerpo.innerHTML = mensaje_cuerpo;
            modal_registro_pais_mensaje_pie.innerHTML = mensaje_pie;

        });

        btn_cerrar_modal_registro_pais.addEventListener("click", function(argument) {
            modal_registro_pais.style.display = "none";

        });
    }

}