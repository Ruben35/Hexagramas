for(let i=1;i<=64;i++){
    document.getElementById(i).addEventListener("mouseover",meterAlDiv,false);
    document.getElementById(i).addEventListener("mouseout",sacardelDiv,false);
}

function meterAlDiv(event){
    var datos = getHexagramById(event.currentTarget.id);
    document.getElementById('hexagrama-descripcion-tabla').style.visibility = 'visible';
    document.getElementById("hexagrama-descripcion-tabla-nombre-hover").innerHTML = datos.id+". "+datos.nombre;
    document.getElementById("hexagrama-descripcion-tabla-hover").innerHTML = datos.descripcion;
}

function  sacardelDiv(){
    //Aqui manejas el otro div
    document.getElementById('hexagrama-descripcion-tabla').style.visibility = 'hidden';
    document.getElementById("hexagrama-descripcion-tabla-nombre-hover").innerHTML="";
    document.getElementById("hexagrama-descripcion-tabla-hover").innerHTML = "";
}