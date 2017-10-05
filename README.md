### Cifrado César

#### Enunciado
Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha.

###### Pseudocódigo 

Introducción a la función:

Paso 1: Declaramos la función y especificamos dos parámetros dentro de los paréntesis separados por comas, para determinar las dos funciones que queremos ejecutar (cifrar y descifrar).

Paso 2: Utilizamos un bucle Do...While en este caso, porque queremos que la función se ejecute al menos una vez,
ya que es necesario pedir un dato del usuario.

Paso 3: Declaramos una variable "request" equivalente a la petición que le hacemos al usuario por medio de un Prompt, para que muestre un mensaje en la pantalla y pida al usuario la opción que desea (1. cifrar o 2. descifrar).

paso 4: Luego aplicando un If para poder declarar diferentes condiciones, en este caso, si el usuario desea Cifrar una frase deberá ingresar un valor específico y con ese parametro indicamos que nos de como resultado ingresar a la función Cipher y asi mismo con la opción descifrar.

paso 5: Con un Else aplicamos esta misma declaración para determinar que no se ejecutará la función si no se cumplen los valores o se ingresa un campo vacío, en este caso le indicamos que devuelva un alert para que el usuario sepa que debe ingresar una opción valida.

paso 6: Finalmente lo cerramos con la declaración While para indicar que la función se ejecute miestras la respuesta del usuario sea alguna de las opciones dadas anteriormente.

Para Cifrar:

paso 7: Luego de que el usuario ingresa el valor deseado, pasa a la función que determinamos como resultado de cada If y Else If, en caso de ingresar 1) entrará a la función Cipher que tiene 2 parámetros a seguir, "text" que es la frase que ingresará el usuario para ser cifrada y el parámetro Shift al cual le introducimos un valor de 33 que es lo que queremos que se desplace por el texto.

Paso 8: Declaramos una variable "ask" para pedir al usuario una frase a cifrar, esto por medio de un prompt.

Paso 9: Declaramos otra variable para indicar la frase que usuario nos entrega con el nombre de "sentence" y le damos valor no definido sólo con comillas "".

Paso 10: Luego por medio de un For indicamos que variable i, itere sobre la variable ask, entonces indicamos que la variable "sentence" sea igual a variable i y le aplicamos el método charCodeAt con indice 0 para que pase por la frase y la codifique desde ese punto y le restamos el desplazamiento con un + Shift.

Paso 11: Entonces a la "sentence" osea, frase ingresada más le agregamos la formula para que cifre, indicamos que sea una texto por medio del String. y a la frase le sacamos el residuo de 26 que corresponde a las letras de alfabeto y al resultado le sumamos 65.
Esto aplica para descifrar de la misma forma con la diferencia de que en vez de sumar 65 se los restamos.

Paso12: Finalmente, pedimos que devuelva un alert, con la frase ingresada ya cifrada.



###### Diagrama de Flujo: https://imgur.com/OkNHI8R




