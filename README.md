# Jorge News Scrapper

## Description

Se pide realizar una pequeña aplicación (DailyTrends) que muestre un feed de noticias. Este feed es un agregador de noticias de diferentes periódicos. DailyTrends es un periódico que une las portadas de los periódicos número uno.
					
Cuando un usuario abre DailyTrends, se encuentra con las 5 noticias de portada de El Pais y El Mundo del día en el que lo abre, además se pueden añadir noticias a mano desde la aplicación.

## Tasks

- Crea un proyecto con una arquitectura de ficheros básica, gasta un framework si lo consideras oportuno.
- Crea un modelo Feed que tenga los atributos: title, body, image, source y publisher.
- Crea un controlador que se encargue de gestionar a los servicios CRUD del modelo.
- Crea un “servicio de lectura de feeds” que extraiga por técnicas de web scraping (no lectura de fuentes RSS) a cada uno de los periódicos en busca de su noticia de portada y que la guarde en un Feed.
- Crear un controlador que devuelva los feeds de hoy con su título, descripción, imagen, fuente y el periódico donde se ha publicado.
- Crea una vista listado de Feeds que consuman las noticias.
- Crea una vista detalle de Feed que se pueda editar y borrar.
- Crea una vista de creación de Feed.

### Extra Tasks

- Representa en un dibujo la arquitectura de la aplicación.
- Usa todas las buenas prácticas que conozcas.
- Haz los tests que consideres necesarios.
- Usa el motor de estilos que más te guste.

### License

Nest is [MIT licensed](LICENSE).
