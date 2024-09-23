/*
Media pirámide izquierda
Ejercicio
Crea una función llamada media_piramide_izquierda que reciba un número altura como parámetro 
y muestre en la consola la parte izquierda de una pirámide con esa altura.

Ejemplos:

media_piramide_izquierda(3)
  *
 **
***

media_piramide_izquierda(5)
    *
   **
  ***
 ****
*****
La función no debe retornar valor alguno, utiliza console.log() para mostrar el patrón. 
Asegúrate de que tu función funcione correctamente incluso para casos donde la altura sea 1.
*/

/* Escribe tu código aquí */
function media_piramide_izquierda(altura){
let asteriscos;
  for (let i = 1; i <= altura; i++) {
     asteriscos="";
     
      for (let j = 1;  j <= altura-i; j++) {
      asteriscos+=' ';
    }

    for (let j = 1; j <= i; j++) {
      asteriscos+='*';
    }
        console.log(asteriscos);
  }
}
/* Fin */

media_piramide_izquierda(4)
media_piramide_izquierda(2)
media_piramide_izquierda(1)
media_piramide_izquierda(6)

/*
Salida:
    *
    **
    ***
    ****
    
  *
  **
  
 *
 
      *
      **
      ***
      ****
      *****
      ******
*/