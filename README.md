# Ejecutar los casos de prueba


## Opción 1: Ejecutar todos los casos de prueba de un feature <br>
Para ejecutar todos los casos de prueba de un Feature especifico, se modificará la siguiente instruccion de código que está en el archivo wdio.conf.js, colocando el nombre del feature correspondiente

![image](https://user-images.githubusercontent.com/107081118/172495551-9426eaa3-b233-4de6-81c1-79ff9440979e.png)

Y por consiguiente se ejcutará el siguiente comando en la terminal: 

#### npx wdio wdio.conf.js
<br>
<hr>
<br>

## Opción 2: ejecutar escenario específico <br> 

Para ejecutar un scenario específico primero se tiene que poner una etiqueta arriba de cada "scenario" como se muestra a continuación:

![image](https://user-images.githubusercontent.com/107081118/172496357-3f832203-6e9a-4ab7-b272-ea77a7a5a711.png)

Si ya tiene etiqueta, entonces no hay problema, luego se tiene que poner el nombre del feature del escenario que quieres ejecutar en el archivo wdio.conf.js 

![image](https://user-images.githubusercontent.com/107081118/172495551-9426eaa3-b233-4de6-81c1-79ff9440979e.png)

Por útlimo se ejecutará el siguiente comando en la terminal:

#### npx wdio --cucumberOpts.tagExpression "@NombreEtiqueta"
