/*=====================================
VARIABLES
======================================*/
var item = 0;

/*=====================================
PAGINACIÓN
======================================*/
$("#paginacion li").click(function(){

    item = $(this).attr("item")-1;
    
    movimientoSlide(item);
})

/*=====================================
MOVIMIENTO SLIDE
======================================*/

function movimientoSlide(item) {

    $("#slide ul").animate({"left" : item * -100 + "%"}, 1000);
    
}