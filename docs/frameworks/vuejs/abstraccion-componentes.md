---
outline: deep
---

# Componentes en Vue

Siguiendo el estilo de etiquetas propio de HTML, Vue te permite construir componentes complejos y reutilizarlos a lo largo de todo el proyecto.

::: info
Por _etiquetas_, nos referimos a la estructura de árbol anidado que tienen todos los ficheros .html
```html
<body class="etiqueta">
    <p> Esto es una etiqueta </p>

    <button> Esto también es una etiqueta </button>
</body>
```
:::

## Definir un componente

Los componentes se definen a través de ficheros propios. Igual que el proyecto entero cuelga de `App.vue`, 
tenemos la libertad de crear todos los ficheros que queramos. Por convenio, es mejor agrupar todos estos
componentes dentro de una carpeta `/components`, que esté a su vez dentro de `/src`