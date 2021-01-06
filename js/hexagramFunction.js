//*********************************
// Variables Globales
//*********************************
var hexagramas=data; //JSON obtenido de hexagramas.js

//*********************************
// Funciones
//*********************************

/**
 * Funcion para obtener los datos de un hexagrama dado un arreglo con los valores que representen las lineas yin (7) & yang (8)
 * 
 * @param {int[]} arreglo Arreglo de longitud 6 con valor de hexagrama.
 * @return {Object} Retorna objeto con datos del hexagrama (id,nombre,descripcion,inferiorT,superiorT,valor)
 *                  Si no existe regresa objeto con id=0 y valor ingresado.
 * @throws {length} Lanza error si el arreglo no es de 6 valores.
 */
function getHexagramByValue(arreglo){
    if(arreglo.length!=6)
        throw "Error: Solo se admite arreglo de 6 valores"

    var tiagramaInferior=arreglo.slice(0,3);
    var tiagramaSuperior=arreglo.slice(3,7);
    var datosHexagrama = new Object();
    var encontrado=false;

    datosHexagrama.valor=arreglo.slice();

    for(inferiorT of hexagramas.inferiorT){
        if(equalsArrays(inferiorT.valorInfT,tiagramaInferior)){
            for(hexagrama of inferiorT.hexagramas){
                if(equalsArrays(hexagrama.valorSupT,tiagramaSuperior)){
                    datosHexagrama.id=hexagrama.id;
                    datosHexagrama.descripcion=hexagrama.descripcion;
                    datosHexagrama.nombre=hexagrama.nombre;
                    datosHexagrama.superiorT=hexagrama.superiorT;
                    datosHexagrama.inferiorT=inferiorT.nombre;
                    encontrado=true;
                    break;
                }
            }
            break;
        }
    }
    
    if(!encontrado)
        datosHexagrama.id=0;

    return datosHexagrama;
}

/**
 * Funcion para obtener los datos de un hexagrama dado su id 
 * 
 * @param {int} id Numero de id del hexagrama a buscar 
 * @return {Object} Retorna objeto con datos del hexagrama (id,nombre,descripcion,inferiorT,superiorT,valor)
 *                  Si no existe regresa objeto con id=0
 */
function getHexagramById(id){
    var tabla=hexagramas.inferiorT;
    var datosHexagrama = new Object();
    var encontrado=false;

    for(fila of tabla){
        for(celda of fila.hexagramas){
            if(celda.id==id){
                datosHexagrama.id=celda.id;
                datosHexagrama.descripcion=celda.descripcion;
                datosHexagrama.nombre=celda.nombre;
                datosHexagrama.superiorT=celda.superiorT;
                datosHexagrama.inferiorT=fila.nombre;
                datosHexagrama.valor=fila.valorInfT.concat(celda.valorSupT);
                encontrado=true;
            }
        }
    }
    
    if(!encontrado)
        datosHexagrama.id=0;

    return datosHexagrama;
}


/**
 * Funcion para comparar dos arreglos y verficar si son identicos
 * (Para ser identicos deben de tener los mismos valores en el mismo orden y mismo tamaño)
 * 
 * @param {int[]} array1 Primer arreglo 
 * @param {int[]} array2 Segundo arreglo
 */
function equalsArrays(array1,array2){
    var ar1=array1.slice(); //Copia array1
    var ar2=array2.slice(); //Copia array2
    if(ar1.length==0 && ar2.length==0)
        return true;
    else
        if(ar1.shift()==ar2.shift())
            return equalsArrays(ar1,ar2);
        else
            return false;
}