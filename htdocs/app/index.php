<!DOCTYPE html>
<html lang="en">
   <head>
      <title>
         APP Banco
      </title>
      <meta charset="utf-8"/>
      <meta content="width=device-width, initial-scale=1" name="viewport"/>
      <!--
      Todas las etiquetas CSS  para vincular a este documento.
      Deseas agregar solo crea ;la hoja de estilos en el directorio
      correspondiente y agrega etiqueta {<link>} en el directorio
      componentes en el fichero {css.html}
       -->
      <?php include_once 'comp/css.html';?>
      <!--
         Aquí agregamos todos los sript de JavaScript  para ser usados en el documento
       -->
      <?php include_once "comp/head_sript.html";?>
   </head>
   <body class="w3-light-grey">
      <div class="w3-bar w3-top w3-black w3-large" style="z-index:4">
         <button class="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onclick="w3_open();">
            <i class="fa fa-bars">
            </i>
            Menú
         </button>
         <span class="w3-bar-item w3-right">
            Banco en linea
         </span>
      </div>
      <!--  Panel de navegación principal del documento  -->
      <?php include_once "comp/nav.html";?>
      <!--  Cuerpo del documento  -->
      <div class="w3-main cuerpo" style="margin-left:300px;margin-top:43px; display: none;">
         <!--
            Cabecera del documento
         -->
         <?php include_once "comp/header.html";?>
         <!--
         Sección llamada cuerpo con la intención
         de utilizar un solo fichero como referencia
         para la incorporación de nuevos componentes   -->
         <?php include_once 'cuerpo/cuerpo.php';?>
         <!--
         Sección destinada para servicio de
         mensajería interna dentro de la aplicación
             -->
         <?php include_once "comp/chat.html";?>
      </div>
      <!--
         Secciona para incluir ficheros javascript
       -->
      <?php include_once 'comp/sript.html';?>
   </body>
</html>
