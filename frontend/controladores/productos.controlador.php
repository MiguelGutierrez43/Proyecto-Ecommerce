<?php

class ControladorProductos{

    public function ctlMostrarCategorias(){

        $tablas = "categorias";

        $respuesta = ModeloProductos::mdlMostrarCategorias($tabla);

        return $respuesta;

    }
}