<?php
//  No esta completado
if (isset($_POST['id_pais']) && $_POST['id_pais'] != "") {
   try {
      include_once "../conexion/conexion.php";
      $id_pais = $_POST['id_pais'];
      $conn    = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      $stmt = $conn->prepare("
      SELECT * FROM pueblo
      WHERE id_pais = :id_pais");
      $stmt->bindParam(':id_pais', $id_pais);
      $stmt->execute();
      $datos     = $stmt->fetchAll();
      $respuesta = array(
         "respuesta" => "si",
         "datos"     => $datos);
      // escribimos el dato  que desplegara en caso de entrar dentro del condicional
      // para conocer mas sobre json_encode dirigirse al siguiente enlace
      echo json_encode($respuesta);
   } catch (PDOException $e) {
      echo "Error: " . $e->getMessage();
   }
   $conn = null;
}
