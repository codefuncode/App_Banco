<?php
//  No esta completado
if (isset($_POST['id_pais']) && $_POST['id_pais'] != "") {
   try {

      $id_pais = $_POST['id_pais'];
      $conn    = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      $stmt = $conn->prepare("
      SELECT * FROM pueblo
      WHERE id_pais = :id_pais");
      $stmt->bindParam(':id_pais', $id_pais);
      $stmt->execute();
   } catch (PDOException $e) {
      echo "Error: " . $e->getMessage();
   }
   $conn = null;
}
