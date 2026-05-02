# Mejorada, un medio para la superación de todos

MejoraDA es un servicio de recogida de sugerencias construido las tecnologías de Nodejs y Vitejs sobre un framework de typescript.

El proyecto se organiza en dos grandes bloques (que se corresponden con las dos carpetas que hay en la raíz del directorio):
el frontend y el backend.

## Frontend
Se construye usando node y Vite, siguiendo una estructura estilo "bloques de lego" que permite mezclar y reorganizar componentes para crear los distintos
apartados gráficos, a la vez que te aseguras de que la página mantenga una única identidad visual y haces que todo sea más fácil de mantener.
Todo el contenido de la paǵina se encuentra dentro de la carpeta "_src_", aunque hay una serie de archivos
a la misma altura que dicha carpeta, a los cuales conviene prestarle algo de atención:
- <b>keys.ts:</b> fichero con la url del backend, para conectar ambos bloques del proyecto.
- <b>index.html:</b> punto de entrada a la aplicación, configurado por vite por defecto. En principio no tienes por qué tocarlo

### Dentro de src
La carpeta "_src_" tiene varios archivos en su raíz que debemos mencionar:
- <b>App.vue:</b> El punto de entrada al proyecto que sí que vamos a tocar. En este fichero están incluido el módulo que permite realizar el enrutado,
así como una configuración css básica que da consistencia al resto de la página (Principalmente fija la tipografía y elimina los márgenes, dando esa sensación
de aplicación a pantalla completa estilo SPA).
- <b>Colors.css:</b> Archivo de css que centraliza todos los colores de la página para darle un estilo consistente y fácil de editar. Si se quieren hacer
modificaciones al esquema de colores de la página, hay que modificar este documento.
- <b>App.ts:</b> Punto de entrada a la ejecución de la página desde un comando. Crea la aplicación, le coloca el CSS global del fichero anterior, y lanza todo

Más allá de estos ficheros, la estructura general del proyecto desde el directorio "_src_" debería verse tal que así:

```text
src/
├── assets/
├── components/
│   ├── AdminPages
│   ├── BaseComponents
│   └── BuildingBlocks
├── interfaces/
├── router/
└── Utilities
```

* <b>assets</b> tiene imágenes estáticas servidas al navegador. En este caso, tan solo tiene el logotipo de la delegación
* <b>components</b> guarda las "piezas de lego" que decíamos anteriormente. Sus subcarpetas <b>BaseComponents</b> y <b>BuildingBlocks</b> contienen todos los bloques pequeñitos y medianos,
mientras que tanto en <b>AdminPages</b> como en la propia carpeta _components_ se encuentran las "puestas en escena"
* en <b>interfaces</b> se guardan pequeños archivos _typescript_ con clases correspondientes a los datos que se mandan al backend en las peticiones
* <b>router</b> guarda un único archivo, que es el que gestiona el enrutado en el frontend
* <b>utilities</b> tiene la clase _PetitionMaker_, que es la encargada de hacer todas las peticiones


## Backend
Se construye usando node y typescript, y todo su contenido se encuentra alojado en la carpeta "_src_", a excepción del archivo <b>keys.ts</b>, que es el encargado de almacenar las
credenciales para entrar en la base de datos

### Dentro de src
El backend está organizado en las siguientes carpetas que cuelgan de "_src_":

```text
src/
├── components/
│   ├── Auth
│   └── PetitionResolvers
└── Utilities
```

* en <b>components/auth</b> se encuentra el código responsable de comprobar la identidad del usuario que inicie sesión.
* en <b>components/PetitionResolvers</b> se encuentran todas las funciones responables de resolver las peticiones que haga el frontend, pero no gestionan directamente con la base de datos.
La clase encargada de interactuar con la base de datos se encuentra en la raíz (<b>components</b>), y es Database.ts
* en <b>interfaces</b> hay códigos breves que estructuran la información que se devuelve con las peticiones del frontend.