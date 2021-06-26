<!DOCTYPE html>
<html lang="en">
  <head>
    <title>
      APP Banco
    </title>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1" name="viewport"/>
    <?php include_once "comp/reglas_css.html";?>
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
    <?php include_once "comp/nav.html";?>
    <div class="w3-main cuerpo" style="margin-left:300px;margin-top:43px; display: none;">
      <?php include_once "comp/header.html";?>
      <?php include_once 'menu_interno/menu_interno.php';?>
      <?php include_once 'cuerpo/cuerpo.php';?>
      <?php //include_once "comp/chat.html";?>
    </div>
    <?php include_once 'comp/sript.html';?>
  </body>
</html>
