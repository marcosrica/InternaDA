---
outline: deep
---

# VueJS

Vue es un framework de javascript (y typescript) para el frontend que se suele usar en conjunto con node y express. Tiende a ser muy flexible en su organización, permitiendo abstracciones y una especie de construcción a base de "bloques de lego" que lo hace muy sencillo de mantener. Es el que se usó, por ejemplo, para construir [MejoraDA](/servicios/mejorada).

::: info 
Como Vue se monta sobre node, la configuración básica del proyecto vendrá determinada por este framework
:::

## Trabajar con un proyecto de Vue
Una vez finalizada toda la configuración inicial del proyecto, (para esta parte, referir a la [documentación oficial](https://vuejs.org/guide/introduction.html)), todo lo que se va a poder manipular que tenga que ver con este framework se encontrará dentro de la carpeta **src/**.

Aparecerá un archivo llamado **App.vue**, en el que tendremos la configuración básica de la aplicación. En este fichero es donde montaremos todo lo que afecte a la aplicación en conjunto, no a una página.

::: info
Es importante notar que Vue está pensado siguiendo el formato SPA (single page application), según el cual no debería haber subrutas. Por ello, en teoría, toda la aplicación debería estar montada sobre ese fichero _App.vue_. Sin embargo, esto deja de ser práctico en cuanto el servicio alcanza un tamaño mínimo, por lo que existe una dependencia (_vue-router_) que permite convertir el servicio en una aplicación de múltiples páginas
:::

## Estructura básica de un fichero _.vue_
Un fichero vue vacío luce tal que así:
```vue
<script>
    //Aquí va todo tu código js del componente, 
    //como si estuviera en su fichero propio
</script>

<template>
    <!-- Aquí se introduce el html asociado a la página o componente -->
</template>

<style>
    /** Aquí se introducen los estilos css de la página o componente */
</style>
```

Es importante notar que esta es la configuración básica, pero tanto a la piezas _script_ como  _style_ se le pueden pasar parámetros para variar ligeramente su funcionamiento:

- Parámetros de ```<script>```:
    - _lang_: este parámetro permite cambiar el lenguaje en el que será interpretado el script. Se utiliza principalmente para usar typescript
    ```vue
    <script lang="ts">
        //Tu código en typescript
    </script>
    ```

    - _setup_: este parámetro marca el script como "inicializador" del componente. Normalmente, un bloque ```<script>``` a secas solo se ejecutará la primera vez que se importe el componente. Sin embargo, si le añadimos la etiqueta _setup_, este se ejecutará cada vez que se cree una nueva instancia del componente
    ```vue
    <script setup>
        //Este código se ejecutará cada vez 
        //que se instancie el componente al que va asociado
    </script>
    ```

- Parámetros de ```<style>```:
    - _scoped_: este parámetro hace que los estilos definidos en el bloque solo puedan afectar al html que viva en el mismo fichero, nunca a código externo
    
    ::: warning
    Si pretendes cambiar estilos globales, como puede ser _html_, _body_, _head_, etc., no puedes ponerle este parámetro al bloque. Además, es buena práctica definir estos cambios únicamente en el fichero App.vue.
    ::: 