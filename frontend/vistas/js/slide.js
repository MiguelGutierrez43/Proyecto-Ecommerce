/*=====================================
VARIABLES
======================================*/
var item = 0;

var itemPaginacion = $("#paginacion li");

var interrupirCiclo = false;

var imgProducto = $(".imgProducto");

var titulos1 = $("#slide h1");

var titulos2 = $("#slide h2");

var titulos3 = $("#slide h3");

/*=====================================
ANIMACION INICIAL
======================================*/

$(imgProducto[item]).animate({"top": -10 + "%", "opacity": 0},100)
$(imgProducto[item]).animate({"top": 30 + "px", "opacity": 1},600)

$(titulos1[item]).animate({"top": -10 + "%", "opacity": 0},100)
$(titulos1[item]).animate({"top": 30 + "px", "opacity": 1},600)

$(titulos2[item]).animate({"top": -10 + "%", "opacity": 0},100)
$(titulos2[item]).animate({"top": 30 + "px", "opacity": 1},600)

$(titulos3[item]).animate({"top": -10 + "%", "opacity": 0},100)
$(titulos3[item]).animate({"top": 30 + "px", "opacity": 1},600)

/*=====================================
PAGINACIÓN
======================================*/
$("#paginacion li").click(function(){

    item = $(this).attr("item")-1;
    
    movimientoSlide(item);
})

/*=============================================
AVANZAR
=============================================*/

function avanzar() {

    if (item == 3){

        item = 0;
    }else{

        item++
    }

    movimientoSlide(item);
}

$("#slide #avanzar").click(function() {

    avanzar();

})

/*=============================================
RETROCEDER
=============================================*/

$("#slide #retroceder").click(function() {

    if (item == 3){

        item = 0;
    }else{

        item--
    }
    
    movimientoSlide(item);
})

/*=====================================
MOVIMIENTO SLIDE
======================================*/

function movimientoSlide(item) {

    $("#slide ul").animate({"left" : item * -100 + "%"}, 300)

    $("#paginacion li").css({"opacity" :.5})

    $(itemPaginacion[item]).css({"opacity" :.1})

    interrupirCiclo = true;

    $(imgProducto[item]).animate({"top": -10 + "%", "opacity": 0},100)
    $(imgProducto[item]).animate({"top": 30 + "px", "opacity": 1},600)
    
}

/*=====================================
INTERVALO
======================================*/

setInterval(function () {

    if(interrupirCiclo){

        interrupirCiclo = false;

    }else{

        avanzar();

    }
    
},3000)