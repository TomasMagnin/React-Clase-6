import React from 'react'

export default function TestPromesas() {

   let pago = new Promise((res, rej) => {});  // A la promesa siempre hay que ponerle la funcion, por lo nenos vacia asi no nos da error en la consola. Como resultado en la consola nos devuelve una variable de tipo promessa, que va estar en pendeiente.
      setInterval(() => {                     // Setea un intervalo, para que se ejecute cada cierto tiempo.
        console.log(pago);
      }, 1000);                               // cada un segundo nos ejecuta la funcion, la funcion setInterval.

  return (
    <div>TestPromesas</div>
  )
}
