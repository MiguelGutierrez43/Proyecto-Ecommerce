<!DOCTYPE html>
<html lang="es">
<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0,
    maximum-scale=1.0, user-scalable=no">

    <meta name="title" content="Tienda Virtual">

    <meta name="description" content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Quos aliquid obcaecati, numquam atque tempore quo consequuntur.">

    <meta name="keywords" content="Lorem, ipsum, dolor, sit, amet, consectetur, adipisicing, elit.,
    Quos, aliquid, obcaecati">

    <title>Proyecto Ecommerce</title>

    <?php

        $icono = ControladorPlantilla::ctrEstiloPlantilla();

        echo '<link rel="icon" href="http://localhost/undurraga-ti/Proyecto-Ecommerce/backend/'.$icono["icono"].'">';

        /*========================================================
        MANTENER LA RUTA FIJA DEL PROYECTO
        =========================================================*/

        $url = Ruta::ctrRuta();
       

    ?>

    <link rel="stylesheet" href="<?php echo $url; ?>vistas/css/plugins/bootstrap.min.css">

    <link rel="stylesheet" href="<?php echo $url; ?>vistas/css/plugins/font-awesome.min.css">

    <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">

	<link href="https://fonts.googleapis.com/css?family=Ubuntu|Ubuntu+Condensed" rel="stylesheet">

    <link rel="stylesheet" href="<?php echo $url; ?>vistas/css/plantilla.css">

    <link rel="stylesheet" href="<?php echo $url; ?>vistas/css/cabezote.css">

    <script src="<?php echo $url; ?>vistas/js/plugins/jquery.min.js"></script>

    <script src="<?php echo $url; ?>vistas/js/plugins/bootstrap.min.js"></script>

</head>
<body>
<?php

/*========================================================
CABEZOTE
=========================================================*/

include "modulos/cabezote.php";

$rutas = array();
$ruta = null;

if(isset($_GET["ruta"])){

    $rutas = explode("/", $_GET["ruta"]);

    $item = "ruta";
    $valor = $rutas[0];

    $rutasCategorias = ControladorProductos::ctrMostrarCategorias($item, $valor);

    if($rutas[0] == $rutasCategorias["ruta"]){

        $ruta = $rutas[0];
    };

    if($ruta !=null){

        include "modulos/productos.php";    
    }else{

        include "modulos/error404.php";
    }
}

?>

<script src="<?php echo $url; ?>vistas/js/cabezote.js"></script>

<script src="<?php echo $url; ?>vistas/js/plantilla.js"></script>


</body>
</html>