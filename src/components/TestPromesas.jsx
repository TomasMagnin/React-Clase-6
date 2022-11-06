import React from 'react'

export default function TestPromesas() {

  console.log("1");

  let pago = new Promise((res, rej) => {     // A la promesa siempre hay que ponerle la funcion, por lo nenos vacia asi no nos da error en la consola. Como resultado en la consola nos devuelve una variable de tipo promessa, que va estar en pendeiente. El metodo resol  "res" es por si se resuelve positivamente y el metotdo rejected "rej" es por si nos tira error.
      /* setInterval(() => {                     // Setea un intervalo, para que se ejecute cada cierto tiempo.
        console.log(pago);
      }, 1000); */                               // cada un segundo nos ejecuta la funcion, la funcion setInterval.
      setTimeout(() => {                      // setTimeout, Posterga algo en el tiempo
        console.log("4");
        res("Genial Pago !!!!!!");            // En este apartado o uso res o uso reg. el resultado va ser pending ya que usamos una promesa y ademas el  delay de 2seg emtonces se ejecuta primero el consolelog. Estas dos funciones se ejecutan aparte del codigo en otra pila por ser asyncronica.
        //rej("Fallo todooo")
        
      }, 3000)                                // Seteamos 2seg
  });

   // console.log(pago);                        // Tener en cuenta que el pago siempre se va mostrar en pendiente por usar asyncronia

  
  /*  Solucion  para usar callbacks y usar asimncronias una vez que esten resueletas.*/
  // Una vez creada la promesa hacemos una callback, pero nunca sabemos cuando fue ejecutada, eso es una callback.

  console.log("2");

  pago.then((res) => {                          // Ejecutamos esta funcion que tambien es asincronauna una vez que se ejecuta la promesa, es una accion luego de otr accion.
    console.log("5");
    console.log(res);                           // Notar que no le indicamos cuando hacer el console log, se jecuta cuando se cumple la promesa.
    return res // Si queremos usar varios .then podemos pasar la respuespa la otros asi, sino nos daria error.
  })
  .catch((e) => {                               // Si la promesa se resuelve mal usamos el catch.  
    console.log(e);
    console.log("El ultimo catch del error");
  })
  .finally( () => {                             // Cuando se termine de resolver la cadena, .tehn y .catch, mas alla del resultado por lo general se ejecuta una funcion al ultimo.
    console.log("Aca si termino");
  })                                    
   
 // Podriamos usar otro setTimeout con mas tiempo para atrapar el primer setTimeout, pero no es lo optimo. 




/* ***  MAP  *** */


// Un map tranforma un array por otro array con modificaiones.



// DESAFIO de CLASE


let pagox = new Promise((res, rej) => {     
  setTimeout(() => {                      
    console.log("4");
    res({id: 1000, name: "tomi"});            
    //rej("Fallo todooo") 
  }, 1000)                               
});

  pagox
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.error(e);
    })
    .finally(() => {
      console.log("Se termino todo");
    });




 console.log("3");  


let numero = 0;
let nombre = "tomi";
let persona = {id: 100, name: "tomi", edad: 30};    // No se puede meter objetos ni array directatamente en las etiquetas
let array = [
              {id: 100, name: "tomi", edad: 30},
              {id: 100, name: "tomi", edad: 30},
              {id: 100, name: "tomi", edad: 30},
            ];

/* let array2 = [                                      // Esta es la forma de meter un array en el html
                <>
                  <p>id: 100</p>
                  <p>name: tomi</p>
                  <p>edad: 30</p>
                  </>,

                  <>
                  <p>id: 100</p>
                  <p>name: tomi</p>
                  <p>edad: 30</p>
                  </>,

                  <>
                  <p>id: 100</p>
                  <p>name: tomi</p>
                  <p>edad: 30</p>
                </>,
              ]; */



// Con la funcion map vamos un a crear un array igual al array2 pero dinamicamente.

// Por lo general se hace el map en la etiqueta dentro del return
 array = array.map((item) => {                   // Siempre los metodos modernos no rompen el array original sino crean uno muevo
  return (
      <>
        <p style={{ backgroundColor: "orange"}}>id: {item.id}</p>
        <p>name: {item.name}</p>
        <p>edad: {item.edad}</p>
      </>
  );

});


  return (
    <div>TestPromesas
      <div>{numero}</div>
      <div>{nombre}</div>
      <div>{array}</div> 
       {/* <div>{array2}</div>
      <div>{persona}</div>*/}
    </div>

  )
}



// VER LOS ULTIOMOS 5 MINUTOS DE LA CLASE EXPLICA LA CONSIGNA