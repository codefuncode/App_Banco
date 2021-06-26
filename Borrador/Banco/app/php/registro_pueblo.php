<?php

//  Condicional  que detecta  si la variable existe o esta vacía
if ((isset($_POST['nombre_pueblo']) && $_POST["nombre_pueblo"] != "") &&
    (isset($_POST['id_pais']) && $_POST["id_pais"] != "" && $_POST["id_pais"] != "inicial")) {
    //  El valor de la variable global a una variable
    // regular pata manejar el dato.
    $nombre_pueblo = $_POST['nombre_pueblo'];
    $id_pais       = $_POST['id_pais'];
    $id_pais       = (int) $id_pais;
    // Se incluyen los datos de conexión a la base de
    include_once "../conexion/conexion.php";

    try {

        $conn =
        new PDO(
            "mysql:host=$servername;dbname=$dbname",
            $username,
            $password);

        $conn->setAttribute(
            PDO::ATTR_ERRMODE,
            PDO::ERRMODE_EXCEPTION);
        //  Consulta para seleccionar el dato  que vamos a insertar y determinar si existe o no  para tomar una decisión.
        $stmt_seleccion = $conn->prepare(
            "SELECT * FROM pueblo
            WHERE nombre_pueblo = :nombre_pueblo
            AND id_pais = :id_pais"
        );

        $stmt_seleccion->bindParam(
            ':nombre_pueblo',
            $nombre_pueblo,
            PDO::PARAM_STR
        );
        $stmt_seleccion->bindParam(
            ':id_pais',
            $id_pais,
            PDO::PARAM_INT
        );

        //  Ejecución de la primera consulta y verificamos si fue exitosa
        if ($stmt_seleccion->execute()) {
            // Agregamos el valor de las filas afectadas a una variable
            $filas_afectadas = count($stmt_seleccion->fetchAll());
            // Verificamos si el valor es igual a cero lo que
            // sanguifica que no hay coincidencias en la consulta
            // por ende no existe la combinación  de datos
            // requeridos en la consulta
            if ($filas_afectadas == 0) {
                //  Creamos el cursor de la conexión anterior
                // para realizar una nueva consulta sin problemas
                $stmt_seleccion->closeCursor();

                //  Todo lo demás es para insertar.
                $stmt_insercion =
                $conn->prepare(
                    "INSERT INTO pueblo (nombre_pueblo,id_pais )
                VALUES (:nombre_pueblo, :id_pais )"
                );

                $stmt_insercion->bindParam(
                    ':id_pais',
                    $id_pais,
                    PDO::PARAM_INT
                );
                $stmt_insercion->bindParam(
                    ':nombre_pueblo',
                    $nombre_pueblo,
                    PDO::PARAM_STR
                );
                $stmt_insercion->execute();
                //  Todo salo bien  el dato fue insertado
                $respuesta = array(
                    "respuesta" => "si");

                echo json_encode($respuesta);

            } else {
                //  Aquí el error es por que existe ele dato
                $respuesta = array(
                    "respuesta" => "no");

                echo json_encode($respuesta);
            }

        } else {

            $respuesta = array(
                "respuesta" => "error");

            echo json_encode($respuesta);
        }

    } catch (PDOException $e) {

    }
    $conn = null;

} else {
    // Por ahora no sementaremos los tipos de
    // errores ya que en todas las respuestas
    // clasificadas como error podemos agregar
    // otro atributo notificando a JavaScripr
    // cual fue el error si de datos o del
    // servidor como tal
    $nombre_pueblo = $_POST['nombre_pueblo'];
    $id_pais       = $_POST['id_pais'];

    $respuesta = array(
        "respuesta"     => "error",
        "nombre_pueblo" => $nombre_pueblo,
        "id_pais"       => $id_pais);

    echo json_encode($respuesta);

}
