


//*|||-------|||-------|||-------|||-------|||-------|||-------VARIABLES-------|||-------|||-------|||-------|||-------|||-------|||

    -LET: alcance de un ambito en particular
    -CONST: una vez inicializada y asignado un valor, no se puede cambiar. 
    -VAR: alcance Global y de Funcion

//*-------------------------------------------------------------------------------------------------------------------------------------------



//*|||-------|||-------|||-------|||-------|||-------|||-------STRING-------|||-------|||-------|||-------|||-------|||-------|||

    cadena de caracteres, secuencia de caracteres, 3 formas de inicializar.

    --DECLARACION--

    COMILLAS SIMPLES: ' '
    COMILLAS DOBLES: " "
    COMILLAS INVERTIDAS: “ “

    let str1 = 'Hola, esto es un string con comillas simples.';
    let str2 = String ("Hola, esto es un string con comillas dobles.");
    let str3 = new String (“Hola, esto es un string con comillas
    invertidas.”);


    --METODOS--
    String.length: devuelve cantidad caracteres
    String.charAt(int i): devuelve el caracter de la posicion de i
    var mensaje = String.concat("Hola", nombre);: concatena 2 Strings
    String.toUpperCase: Convierte el string en MAYUSCULA
    String.toLowerCase: Convierte el string en MINUSCULA.
    String.slice(int start, int end): devuelve una porcio del String especifciada de una posicion a la otra
    String.substring(start, end): igual a silce pero permite valores negativos
    String.indexOf(subCadena, fromIndex): devuelve la primera posicion donde se encuentre la subcadena, o -1 si no lo encuentra
    String.lastIndexOf(subCadena, fromIndex): igual que indexOf pero desde el final
    String.replace(cadenaARemplazar, nuevoString): reemplaza el primer parametro por el segundo en el string.



-------------------------------------------------------------------------------------------------------------------------------------------


|||-------|||-------|||-------|||-------|||-------OPERADORES-------|||-------|||-------|||-------|||-------|||-------|||-------|||-------
Prioridades de orden de operadores...

-1 parentesis
-2 exponente()
-3 multiplicacion, division, modulo. (de izquierda a derecha)
-4 suma, resta. (de izquierda a derecha)
-5 operadores de concatenacion
-6 operadores de comparacion (==, !=, <,>, <=, >=,etc)
-7 operadores logicos (&&, ||), (&& tiene mas prioridad que ||)
-8 asignaciones (=, +=, -=, etc)

-------------------------------------------------------------------------------------------------------------------------------------------

 |||-------|||-------|||-------|||-------|||-------OBJETOS LITERALES-------|||-------|||-------|||-------|||-------|||-------|||-------
    Se declaran con {} y son pares "clave-valor" separadas por coma , ...




-SIMPLE-

    var objetoPrueba = {

        nombre : 'santiago',
        apellido : 'ude',
        edad : 20,
        altura : 1.87,
        peso : 250
    }


-CON OBJETO DENTRO-

var objetoPrueba = {

        nombre : 'santiago',
        apellido : 'ude',
        edad : 20,
        altura : 1.87,
        peso : 250,
        notas :{
            matematica : 3,
            biologia : 4,
            ed_fisica : 8,
            historia : 10
        }
    }


-CON FUNCION Y OBJETO-

var objetoPrueba = {

        nombre : 'santiago',
        apellido : 'ude',
        edad : 20,
        altura : 1.87,
        peso : 250,
        notas : {
            matematica : 3,
            biologia : 4,
            ed_fisica : 8,
            historia : 10
        }
        saludar: function(){
            console.log('Hola como estas?, mi nombre es ${this.nombre}') // console.log('Hola como estas?, mi nombre es ' + this.nombre)
        }

    }


-ESTRUCTURA COMPLEJA-

    var empresa = {

        nombre: 'Mcdonald',
        area: 'Food & Beverage',
        empleados: [

            {nombre: 'ramiro',
            apellido: 'funes mori',
            edad: 33}
            ,
            {nombre: 'juan sebastian',
            apellido: 'veron',
            edad: 55
            }
            ,
            {nombre: 'fernando',
            apellido: 'cavenaghi',
            edad: 26
            }

        ]
    }


---CAMBIAR/MODIFICAR VALORES DEL OBJETO---
2 formas...

-CON ":" -> persona.nombre = 'rodrigo';
-CON "[]" -> persona["nombre"] = 'rodrigo';


-------------------------------------------------------------------------------------------------------------------------------------------

|||-------|||-------|||-------|||-------|||-------"use strict"-------|||-------|||-------|||-------|||-------|||-------|||-------|||-------

es un llamado para que, el bloque de codigo seguido o archivo de codigo, cuente con ciertas restricciones 
para un codigo mas seguro y robusto.

Por ejemplo --no permite las declaraciones implicitas(no permite declaraciones sin var,let,const)


--Object.freeze--
1: Transforma un objeto totalmente inmutable, no puede agregar, eliminar ni modificar ningun dato.
2: Propiedades NO configurables, no se pueden cambiar los atributos
3: Recursiva, Si el objeto contiene propiedades que tambien son objetos, tambien se les aplica el Object.freeze



--Object.seal--

1: inmutabilidad parcial, permite modificar las propiedades existentes, pero no agregar nuevas o eliminar.
2: Propiedades no configurables
3: Recursiva.


-------------------------------------------------------------------------------------------------------------------------------------------

|||-------|||-------|||-------|||-------|||-------OBJETO CONSTRUCTOR-------|||-------|||-------|||-------|||-------|||-------|||-------
Funcion para crear/construir nuevos objetos...
new + nombre CONSTRUCTOR

~~ Si agregas un atributo sin el this permite crear una especie de privacidad o encapsulamiento que no se consigue de manera nativa en JS~~


EJEMPLO:

function Persona(nombre,apellido,edad,altura,peso){


    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.infoAdicional;{
    
    this.altura = altura;
    this.peso = peso;
    
    };
    
    this.darInfo = function(){
    
    console.log(`Mi nombre es ${this.nombre + ' ' + this. apellido} y tengo ${this.edad} anios, peso ${this.peso} kg y mido ${this.altura}m. Un gusto.`)
    
    };
    
    }


-------------------------------------------------------------------------------------------------------------------------------------------

|||-------|||-------|||-------|||-------|||-------TIPOS DATOS COMPUESTOS-------|||-------|||-------|||-------|||-------|||-------|||-------

1 OBJECT: Coleccion de pares {clave : valor}.
2 ARRAY: Lista ordenada de elementos de cualquier tipo, indexada con indices desde 0
3 FUNCTION: Es un objeto de primera clase, que puede retornar algo que se le asigne a una variable, que imprima algo,etc
4 DATE: Se utiliza para manejar Horas y Fechas
5 RegExp (expresiones regulares): son variables que almacenan una especie de reestriccion que se usa para coincidir una cadena de texto con una ESTRUCTURA
6 MAP: coleccion de pares {clave: valor} claves de cualquier tipo
7 SET: conjunto de valores, no permite duplicados.
8 WEAKMAP: similar a MAP pero las claves son solo objetos y si no se referencian por un tiempo se borran
9 WEAKSET:similar a SET pero los elementos son solo objetos y si no se referencian se borran.

-------------------------------------------------------------------------------------------------------------------------------------------

        
|||-------|||-------|||-------|||-------|||-------ARRAYS-------|||-------|||-------|||-------|||-------|||-------|||-------|||-------|||-------


Metodos:


Array.length : devuelve la cantidad de elementos del array (longitud)

-AGREGAR
Array.push(element) : agrega un elemento al final del array.
array[index] = num : agrega un elemento num en la posicion index.
array.unshift(element): agrega un elemento al principio del array. 

-ELIMINAR
array.shift(): elimina el primer elemento del arreglo.
array.splice(2,1): elimina de la posicion 2, 1 elemento en adelante.
array.splice(2) : elimina desde la posicion 2 hasta el final del array.

-RECORRER/FILTRAR
array.forEach(num =>{funcionamientos...}) : recorre el array por completo
array.filter(numero => numero > 2) : devuelve un array con los elementos mayores a 2.
array.map(numero => numero > 2) : devuelve con array con la cantidad de booleanos, que tenga de elementos el array usado. (true los mayores a 2, false los menores o iguales)

array.concat(otroarray) : une los arrays


|||-------|||-------|||-------|||-------|||-------SET-------|||-------|||-------|||-------|||-------|||-------|||-------|||-------|||-------

const set1 = new Set();
//elimina automaticamente los duplicados
//busquedas rapidas

Metodos:

.add(): agregar un elemento
.delete(): para eliminar un elemento
for of: para recorrer y cortar con un return
forEach(): para recorrer por completo
.has(): devuelve true si contiene lo que le pasamos por parametro o false de lo contrario.

[...estudiantes].some((estudiante) => estudiante.legajo === legajoBuscado); //devuelve true si existe (legajoBuscado se declara antes).

[...estudiante].find((estudiante) => estudiante.legajo === legajoBuscado); //devuelve el estudiante con ese legajo



|||-------|||-------|||-------|||-------|||-------MAP-------|||-------|||-------|||-------|||-------|||-------|||-------|||-------|||-------

//coleccion de pares clave-valor
//claves de cualquier tipo
//objetos: claves solo tipo String...
//mantiene el orden de insercion
//tiene metodos reservados solamente para map

Metodos:

.set(key,value): se agrega la key y el valor
.get(key) : devuelve el valor de la key pasada.
.get(key).nombre = 'santiago': actualizamos el campo nombre del objeto guardado en la key pasada.
.delete(key) = eliminar la par clave-valor con la key pasada.
.forEach((e) => console.log(e));: mostraro todos los pares del Map

[...estudiantesMap.values()].find( (e) => e.legajo === 3);: busca dentro de los values el objeto que tenga como legajo el 3 y lo retorna





-------------------------------------------------------------------------------------------------------------------------------------------

|||-------|||-------|||-------|||-------|||-------MATH-------|||-------|||-------|||-------|||-------|||-------|||-------|||-------|||-------


-Redondeo y Truncamiento:
Math.round(valor): Redondea al entero mas cercano. (puede usar un argumento para especificar la cantida de decimales a redondear)
Math.floor(valor): Truncar para abajo.
Math.ceil(valor): Truncar para arriba.

-Valor Absoluto
Math.abs(valor): devuelve el valor absoluto de un numero (distancia hasta el 0).

-Potencia y Raiz
Math.pow(base, exponente) : potencias base a la exponente
Math.sqrt(num): raiz cuadrada del numero pasado por parametro

-Aleatoriedad
Math.random(): genera un numero aleatorio entre 0 y 1.
Math.random() * (max - min) + min : devuelve un numero entre min (incluido) y max

-Maximo y Minimo
Math.max(num1, num2, num3): encontrar el valor maximo de un conjunto de numeros. (Math.max(...Array))
Math.min(num1, num2, num3): encontrar el valor minimo de un conjunto de numeros.Math.min(...Array)

-PI
Math.PI(): Devuelve el numero PI completo

|||-------|||-------|||-------|||-------|||-------FUNCTION-------|||-------|||-------|||-------|||-------|||-------|||-------|||-------|||-------

DECLARACION DE FUNCION: function nombreFuncion(parametro1,parametro2){
    ..
    ..              (TIENE HOISTING)
    ..  
    codigo...
    ..
    ..
} 

EXPRESION FUNCION: const sumar2 = function(parametro1,parametro2){
    ..
    ..              (NO TIENE HOISTING, SE DECLARA ANTES DE USARLA)
    ..
    codigo...      
    ..
    ..
} 


ARROW FUNCTION(expresion):


const saludar = (parametros) =>{
 
 funcionamiento

}


TEORIA:

metodo != funcion

metodo esta relacionado al objeto, en la POO
funcion es un bloque de codigo que puede o no retornar y recibir parametros


|||-------|||-------|||-------|||-------|||-------PROTOTYPE-------|||-------|||-------|||-------|||-------|||-------|||

~Mecanismo que permite a los objetos heredar propiedades y metodos de otros objetos~
~Cada objeto tiene un prototype que es otro objeto del cual hereda metodos y propiedades~

1° : cuando se crea un constructor de Persona por ejemplo.
2° : se le puede agregar un metodo o atributo al prototype del constructor
3° : Persona.prototype.saludar = function(){ console.log(`Hola, mi nombre es ${this.nombre} como estas?`) }


~~ Es mas eficiente usar un prototype para la funcion constructora de un objeto, en vez de declarar la funcion dentro del objeto.
   Es mas eficiente en terminos de memoria~~



|||-------|||-------|||-------|||-------|||-------CLASES-------|||-------|||-------|||-------|||-------|||-------|||


~ Se introdujeron en JS en 2015 para una sintaxis mas similar a los desarrolladores que venian de otro lenguaje de POO~


~~1° Definicion~~: class NombreClase {

(palabra reservada "constructor")
constructor(param1,param2){

    this.param1 = param1;
    this.param2 = param2;
}

mostrar() {

    clg(....);
}

}

~~2° Privacidad-encapsulamiento~~:

usar # antes del nombre del atributo.

class NombreClase {

#param1;

(palabra reservada "constructor")
constructor(param1,param2){

    this.#param1 = param1;
    this.param2 = param2;
}

mostrar() {

    clg(....);
}

}


3° Metodos get() y set():

~ Acceder a los atributos private~
~No es necesario con los atributos que no son private (basta con poner objet.nombreAtributo)~

[Si, por ejemplo, edad fuera private...]

----------------------------------------------
getEdad(){
return this.#edad;
}
----------------------------------------------

----------------------------------------------
setEdad(nuevaEdad){

if(nuevaEdad != null & nuevaEdad >= 0){
    this.#edad = nuevaEdad;
}
else{
    console.log(`No se puede cargar una edad vacia o menor a 0`)
}
}
----------------------------------------------

[  VENTAJAS:
~~Encapsulamiento y seguridad

~~Control de las propiedades: permite validar y controlar los accesos o cambios en los atributos

~~Facilidad de uso
]


|||-------|||-------|||-------|||-------|||-------CALLBACKS-------|||-------|||-------|||-------|||-------|||-------|||


Son funciones que se pasan como argumentos a otras funciones y se ejecutan cuando se completa una tarea o evento en particular.


//CON FUNCION FLECHA:

function modify(array, callback) {

    array.push('negro'); // el evento

    callback(); //se ejecuta la funcion cuando se hace el evento
}


const names = ['santiago', 'gianella', 'facundo'];

//SE LE PASA UNA FUNCION FLECHA CREADA EN EL MOMENTO
modify(names, callback = () => {

    console.log('El array fue modificado');

})//se le pasa el callback como funcion flecha, o se puede pasar una funcion ya declarada/expresada




//CON FUNCION EXPRESADA/DEFINIDA:


function modify(array, callback) {

    array.push('negro'); // el evento

    callback(); //se ejecuta la funcion cuando se hace el evento
}


function callback(){

console.log('El array fue modificado');

}

modify(names,callback);



|||-------|||-------|||-------|||-------|||-------MODULARIZAR-------|||-------|||-------|||-------|||-------|||-------|||

-----------------METODO 1-------------------------------------------------------------------------

1° PASO: El script debe tener type = "module"

2°: En el .js que contenga funciones de otros .js se usa el import
import {} from "path";

3°: En las funciones, clases de otros .js se usa el export antes de la declaracion

---------------METODO 2---------------------------------------------------------------------------------------

2°: hacer las funciones en el js que va a exportarlas. YU en vez de poner export function...

3° usar "export default nombreFuncion;"

---------------METODO 3---------------------------------------------------------------------------------------

2°: ponerle export a las funciones que se quieran exportar

3°: a la hora de importar la sintaxis va a ser asi "import * as calculadora from "./producto/producto.js""

Y el nombre despues del as es como el nombre de una clase, cuando quieras usar las funciones hay que usar "calculadora.nombreFuncion"



|||-------|||-------|||-------|||-------|||-------DOM-------|||-------|||-------|||-------|||-------|||-------|||

"Document Object Model" (modelo de objetos del documento):

-Represent la estructura del documento HTML que permite manipular los elementos de la pagina web.
-Se crea automaticamente cuando se crea la pagina en el navegador
-Organiza los elementos en una estructura de arbol, cada elemento HTML es un nodo

----------------------------------------------------------------DOCUMENT-------------------------------------------------------------------------------------
    Representa el objeto central, todo el documento HTML.

METODOS DE DOCUMENT:

-getElementById(id): Accede a un elemento HTML por su id, retorna null si no lo encuentra
-getElementByClassName(classname):devuelve una lista de elementos que correspondan a la clase especifica, se accede por indice a cada elemento
-getElementByTagName(tagName): devuelve una lista de elementos con un nombre de etiqueta especifico
-querySelector(selector): devuelve el primer elemento que coincida con el selector (.nombreClase),(#id);
-querySelectorAll(selector):devuelve una lista de todos los elementos que correspondan a ese selector.

ATRIBUTOS MAS UTILIZADOS:

-document.title: permite acceder al titulo de la pagina y modificarlo
-document.body: accede al elemento <body> 
-document.cookie: permite leer y escribir cookies del navegador
-document.documentElement: representa el elemento raiz del documento, <html>
-document.head: accede al elemento <head>, donde se incluyen los metadatos y links a scripts o hojas de estilo.


DOCUMENTS.FORMS

Devuelve una collection (array) con las referencias a los formularios en orden de aparicion del documento HTML

ACCESO:

    Al formulario:
        -por indice numerico: | var formulario = document.forms[0];
        -por nombre: | var formulario = document.forms["miFormulario"];

    A elementos del forumario:
        -aceder al campo de texto: var campoTexto = formulario.elements["miCampoTexto"];
        -acceder al boton de enviar: var btnEnviar = fromulario.elements["botonEnviar"]
        
ITERAR FORMULARIOS:

    -Se puede iterar los formularios con un for:

        for(let i = 0; i < formularios.lenght;i++){

            console.log(formularios[i].name);

        }


VALIDAR FORMULARIO:

    -var campoNombre = formularios.elements["nombre"]

    if(campoNombre = ""){

        alert("Ingrese un nombre, nombre vacio invalido");
        return false; //no se envia el form, si el campo esta vacio
    }

----------------------------------------------------------------MODIFICAR ELEMENTOS HTML----------------------------------------------------------------------------

-Un parrafo:
            var parrafo = document.getElementById('miParrafo');
            parrafo.textContent = 'djfkasdjfkdlsjafkajdsfkajsdkfjdasfkjdaskfajsdf'

-SRC de una imagen:
            var imagen = document.getElementById('miImagen');
            imagen.src = 'imagen2.jpg';

-HREF de un link:
            var link = document.getElemenById('miLink');
            link.href = 'https//www.nuevoVinculo.com';

-class de un elemento:
            var element = document.getElementById('elemento');
            element.classname = 'container1';

----------------------------------------------------------------TRAVERSING-------------------------------------------------------------------------------------------

Se refiere a la accion de recorrer y navegar por la estructura jerarquica de un documento HTML utilizando JS.

ACCESO:

    A elementos hijos: Se usan propiedades como 'childNodes', 'firstChild', 'lastChild' o metodos como querySelector, querySelectorAll...
        
        -   var element = document.getElementById['miElemento']
            var primerHijo = element.firstChild;


    A elementos hermanos: propiedades como 'nextSibling' y 'previousSibling', elementos que comparten el mismo padre.
        
        -   var element = document.getElementById('miElement');
            var hermanoSig = document.nextSibling;
            var hermanoAnt = document.previousSibling;

    Al padre de un elemento: propiedad 'parentNode'

        -   var element = document.getElementById('miElement');
            var padreElement = element.parentNode;


RECORRER ELEMENTOS:

    Recorrer Lista:

        -   var lista = document.getElementByTagName('li');
            for(let i = 0; i < lista.lenght;i++){

                console.log(lista[i].textContent);

            }


----------------------------------------------------------------appendChild y removeChild-------------------------------------------------------------------------------------------

-Son metodos utilizados para agregar o eliminar elementos HTML en el arbol del documento.
-Utiles para la manipulacion dinamica de elementos de una pagina web


    -'appendChild':
        -Agrega un nodo como hijo de otro nodo, un parrafo a un div, un li a un ul...
            
            var nuevoParrafo = document.createElement('p');
            nuevoParrafo.textContent = "Este es un nuevo parrafo..safdsafasdf"

            var contenedor = document.getElementById('container1'); //selecciona el elemento que va a ser padre del nuevo nodo
            contenedor.appendChild(nuevoParrafo); //inserta el nuevo nodo



    -'removeChild':
        -Elimina un nodo hijo, lo desenlaza del nodo padre

            var elementoEliminar = document.getElementById('aEliminar'); //elemento que quiere eliminar
            var elementoPadre = elementoEliminar.parentNode; //busca al padre del elemento a eliminar

            elementoPadre.removeChild(elementoEliminar); //llama al padre y elimina al hijo que habiamos seleccionado en la primer linea



----------------------------------------------------------------onClick-------------------------------------------------------------------------------------------

-Es un evento de JS que se dispara cuando se hace click en un elemento HTML.


1~ En el doc HTML crea el button: <button id = "miBoton">Haz click en mi</button>

2~ var boton = document.getElementById('miBoton');

3~ 
/1/
boton.onClick = () =>{
    alert('hiciste click en el botoon')
}

/2/
boton.onClick = function(){

alert('hiciste click en el botoon')
}


----------------------------------------------------------------'addEventListener'-------------------------------------------------------------------------------------------

-Se le pasa por parametro el evento y la funcion que uno quiere que realice cuando se cumpla el evento, es mas versatil que el onClick

1~ var boton = document.getElementById('miBoton');

2~ .addEventListener(evento, function);

    .addEventListener('click', () =>{

        alert('tocaste mi boton, muchas gracias')

    })



----------------------------------------------------------------EVENTO-------------------------------------------------------------------------------------------

-Accion que sucede en el navegador web y que puede ser detectada y manejada por el codigo de JS.
-Estas acciones las puede realizar tanto el usuario como hacer click en el boton, como el navegador al cargar una pagina por ejemplo

-Se puede usar .addEventListener(event, function);


------------------------DOMContentLoaded------------------------

Es un evento en JS que se dispara cuando el HTML ha sido completamente cargado y parseado, es decir que toda la estuctura HTML esta disponible para ser manipulada por JS.

Es util para manipular eventos que puedan pasar antes que se carguen todos los elementos multimedia, enlaces,etc.

-Utilizacion

document.addEventListener('DOMContentLoaded', () =>{
//se ejecutara este codigo cuando el documento este totalmente cargado

//se puede ingresar a elementos del HTML

const miBoton = document.getElementById('myButton');
miBoton.addEventListener('click', () =>{

    alert('gracias por hacer click en el boton');

})
})


LISTA DE EVENTOS:

    Mouse:
        -'click': cuando se hace click en el elemento
        -'mouseover','mouseout': cuando el cursos entra y sale de un elemento
        -'mousedown', 'mouseup': cuando se presiona y se libera un boton del raton mientras esta sobre un elemento.

    Teclado:
        -'keydown', 'keyup': cuando se presiona y se suelta una tecla del teclado mientras un elemento tiene el foco, como un campo de entrada de texto
        
    Formulario:
        -'submit': se dispara cuando se envia un formulario
        -'input', 'change': se dispara cuando se cambia el valor de un campo de entrada de texto u otro elemento de formulario
        
    Windows:
        -'load': cuando se ha cargado completamente la pagina web
        -'resize': cuando se cambia el tamanio de la ventana del navegador
        -'scroll': cuando se desplaza la pagina

    Tiempo:
        -'setTimeOut', 'setInterval': no son eventos en si, pero se utilizan para ejecutar un codigo con retrado o intervalos regulares
    
    Arrastrar y Soltar:
        -'dragstart', 'dragover', 'dragenter', 'dragleave', 'dragend', 'drop': Se utilizan en elementos que pueden arrastrarse y soltarse, como imagenes o elementos de lista

    Medios:
        -'play', 'pause' y 'ended': se utilizan en elementos de medios, como elementos de audio y video, para controlar la reproduccion.

    Enfoque:
        -'focus', 'blur': cuando un elemento obtiene o pierde el foco, como un campo de entrada de texto
    
    Errores:
        -'error': cuando se produce un error al cargar un recurso, como una imagen o un script.

    Historial:
        -'popstate': cuando cambia el estado del historial del navegador

        

----------------------------------------------------------------OBJETO EVENT--------------------------------------------------------------------------------------------------------------------------

-Representa un evento que ha ocurrido en la pagina web.
-Contiene info detallada sobre el evento, tipo, el elemento del DOM que desencadeno el evento, coordenadas en la pantalla, teclas presionadas, etc.\
-Se pasa como parametro a la funcion de manejo de eventos cuando se produce un evento.
-Podes usar la info del evento para tomar decisiones o realizar acciones en respuesta al evento


PROPIEDADES de 'event':
    
    -event.type: contiene el tipo de evento que ocurrio, 'click', 'input', 'keydown', etc.
    -event.target: Se refiere al elemento del DOM que genero el evento.
    -event.clientX y event.clientY: proporcionan las coordenadas X e Y del puntero del mouse en la pantalla cuando ocurrio el evento
    -event.key: (en eventos de teclado) muestra que teclas se pulsaron.
    -event.preventDefault(): Se utiliza para evitar el comportamiento predeterminado del evento. Por ejemplo se puede usar en el evento click en un enlace para que no cargue
    -event.stopPropagation(): Sirve para detener la propagacion del evento a traves de la jerarquia de elementos del DOM.


----------------------------------------------------------------EVENT BUBBLING--------------------------------------------------------------------------------------------------------------------------

-Se refiere a la propagacion de eventos desde el elemento objetivo del evento hacia arriba a traves de jerarquia de elementos HTML
-Para evitar el burbujeo de eventos, se puede utilizar el metodo 'event.stopPropagation()' en el manejador de eventos para detener la propagacion del evento en una fase especifica.

En caso de que un boton este dentro de un div dentro de otro div y todos tienen un event 'click', en caso de clickear el boton, se ejecutan los 3 eventos de los elementos padre.

Para detener esta propagacion se usa esto:

boton.addEventListener('click', (event) =>{

event.stopPropagation();
alert('blablablablablabla');

})

----------------------------------------------------------------IIFE--------------------------------------------------------------------------------------------------------------------------
Se conoce como una funcion autoejecutable o autoinvocada. Se utiliza para encapsular un fragmento de codigo dentro de una funcion anonima y ejecutarlo inmediatamente despues de la 
definicion.
-se necesita envolver la funcion entre parentesis y agregar () al final

(function(){

    let x = 10;
    console.log(x); //solo se accede a x dentro de la IIFE

})();

-Con el let y const se soluciona el tema del encapsulamiento pero se sigue usando en situaciones especificas.


----------------------------------------------------------------ASINCRONIA Y SINCRONIA-------------------------------------------------------------------------------------------------------------------------

SINCRONIA:
    -Las funciones se ejecutan una atras de otra, linea por linea
    -Necesita que se ejecute y se termine de ejecutar la funcion anterior para empezar con la ejecucion de otra funcion
       

ASINCRONIA:
que se realicen ejecuciones de funciones por mas que no se hayan terminado de ejecutar las anteriores
----------------------------------------------------------------PROMESAS-------------------------------------------------------------------------------------------------------------------------

-Son asincronicas, permiten que el codigo continue ejecutandose sin bloquearse mientras se espera que se resuelva una tarea asincrona.
-No son bloqueantes, significa que el codigo no se detiene a esperar que se resuelva una promesa. Se ejecuta una funcion de retorno callback cuando la promesa se resuelve o se rechaza

3 estados:
    -Pending (pendiente): estado default, la promesa esta en curso y todavia ni ha terminado ni ha sido rechazada
    -Fullfilled (resuelta): la operacion fue resuelta y completada con exito, tiene un resultado asociado.
    -Reject (rechazada): la ejecucion fallo y la promise tiene el especifico error o fallo y tiene un motivo asociado.
            
    function obtenerDatos(){


    EJEMPLO
    const promise = new Promise((resolve, reject) =>{


    setTimeout(() => {
        
        const exito = false;
        if(exito){

            const arreglo = [
                {id:1, titulo: 'pelicula 1'},
                {id:2, titulo: 'pelicula 2'},
                {id:3, titulo: 'pelicula 3'}
            ]

            resolve(arreglo);
        }
        else{

            reject('fallo por un motivo x');
        }
    }, 2000);
})

return promise;
}


-----1° FORMA-----

obtenerDatos()
.then(arreglo => {console.log('arreglo', arreglo);})
.catch(error => { console.log('error al obtener el arreglo:', error);})

-----2° FORMA-----


async function getData mostrandoData(){

    const datas = await getData();
    console.log(datas);
}



ASYNC /AWAIT:
    
    async:
        Se utiliza antes de la palabra reservada function y quiere decir que esa funcion va a ser asincrona

    await:
        Se utiliza dentro de una funcion async para esperar que una promesa se resuelva


----------------------------------------------------------------FETCH-------------------------------------------------------------------------------------------

-devuelve una promise
-tiene como parametro la url


----------------------------------------------------------------TABLAS-------------------------------------------------------------------------------------------

tr: filas
th: celdas
thead: cabecera




























