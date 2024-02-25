function onclickbutton(){
    var caja1 = document.getElementById("nombre")
    caja1.addEventListener("DOMContentLoaded", function(){})
    if (caja1.value.length == 0){
        window.alert("Hola a ninguno")
    }
    else{
        window.alert("Hola a " + caja1.value)
    }

}