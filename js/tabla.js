
for(let i=1;i<=64;i++){
    document.getElementById(i).addEventListener("mouseover",meterAlDiv,false);
    document.getElementById(i).addEventListener("mouseout",sacardelDiv,false);
}

function meterAlDiv(event){
    var datos=getHexagramById(event.currentTarget.id);
    document.getElementById("hexagrama-descripcion-nombre-hover").innerHTML=datos.id+". "+datos.nombre;
}

function  sacardelDiv(){
    //Aqui manejas el otro div
    document.getElementById("hexagrama-descripcion-nombre-hover").innerHTML="";
}