 <?php
// En este fichero se realizan los  pasos necesarios para
// devolver todos los países existentes en la base de datos
if (isset($_POST['func']) && $_POST["func"] == "todo") {
   // Estructura try carch
   try {
      include_once "../conexion/conexion.php";
      // Utilizamos la clase PDO de PHP para trabajar con base de
      // datos esta estructura recibe parámetros de conexión
      // Lo cual están declarados en el fichero que
      // se incluye en la linea anterior
      // Para ver mas sobre la case puede dirigirse a la documentación oficial aquí
      // https://www.php.net/manual/en/pdo.construct.php
      $conn =
      new PDO(
         "mysql:host=$servername;dbname=$dbname",
         $username,
         $password);

      $conn->setAttribute(
         PDO::ATTR_ERRMODE,
         PDO::ERRMODE_EXCEPTION);

      $stmt = $conn->prepare(
         "SELECT * FROM pais"
      );
      // Ejecución de la consulta
      $stmt->execute();
      // Verificamos cuantos récords afectados
      // Este dato también lo pudimos enviar la cliente
      // para mostrar cuantos  registros tenemos en la
      // base datos. En este caso lo usaremos solo para
      // saber si hay o no hay registros.
      $count = $stmt->rowCount();

      // Solo si es igual a cero lo insertara
      if ($count > 0) {

         $datos = $stmt->fetchAll();
         // Le pasamos una matriz  como valor el primer valor de
         // esta denominado "respuesta"sera determinante en el
         // condicional que se debe construir con JavaScript del
         // lado del cliente sea almacenado directamente. Este
         // segundo atributo puede tener mas de un valor por lo
         // que es importante tener un condicional que controle
         // esta respuesta del lado del cliente
         $respuesta = array(
            "respuesta" => "si",
            "datos"     => $datos);
         // escribimos el dato  que desplegara en caso de entrar dentro del condicional
         // para conocer mas sobre json_encode dirigirse al siguiente enlace
         echo json_encode($respuesta);

      } else {
         // En caso de que no existan datos en el momento de la consulta
         $respuesta = array(
            "respuesta" => "no",
         );

         echo json_encode($respuesta);
      }
   } catch (PDOException $e) {

   }
   $conn = null;
}
