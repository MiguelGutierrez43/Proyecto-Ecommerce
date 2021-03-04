/*=====================================
VARIABLES
======================================*/
var item = 0;

var itemPaginacion = $("#paginacion li");

var interrupirCiclo = false;

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