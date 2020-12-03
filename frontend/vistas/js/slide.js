/*=====================================
VARIABLES
======================================*/
var item = 0;

/*=====================================
PAGINACIÓN
======================================*/
$("#paginacion li").click(function(){

    item = $(this).attr("item");
    console.log("item", item);
})