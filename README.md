# Mayoral Frontend Assignment

|  Desktop | Mobile |
|:--------:|:------:|
| ![Desktop](./.github/desktop.png) | ![Mobile](./.github/mobile.png)  |

Maquetar las imágenes adjuntas y tener en cuenta los diferentes cortes en móvil y escritorio. La prueba deberá estar subida en un repositorio de GitHub.

Tecnologías/Librerías requeridas:

-	React
-	Typescript
-	Next.js

Funcionalidad a implementar:

- Separa en componentes de una forma óptima y organizada
- La vista debe asemejarse lo más parecido posible a las fotos adjuntas
- Implementar búsqueda de productos por nombre
- Consumir un JSON con los datos de productos (JSON local o externo)
- Cambiar la vista con los iconos indicados en la foto: 
  - Escritorio de 4 a 3 elementos
  - Móvil de 3 a 2 elementos
- Implementar lógica y diseño de un componente “ordenar” (precio ascendente y descendente)
- Crea los test unitarios que creas conveniente


## Consideraciones técnicas

- Se ha optado por utilizar `@testing-library/user-event` para lanzar los eventos de usuario en los tests. Esta decisión se tomó debido a que simula de manera más precisa el comportamiento final del usuario en comparación con `fireEvent`.

- Se realizaron ajustes en el archivo `jest.config.js` para asegurar la correcta configuración de la ruta hacia `tsconfig.json`. Además, se agregó una condición para evitar errores en caso de que no haya `paths` definidos.

- Se ha incluido el dominio de Mayoral para las imagenes en el archivo `next.config.js`.

- Para la capa de API, se ha optado por utilizar las API Routes de NextJs. Se ha creado la carpeta `api` dentro de `pages`, lo que permite simular el uso de una API externa de manera sencilla y transparente.

- Se han añadido los scripts `test` y `test:watch` para lanzar los tests.