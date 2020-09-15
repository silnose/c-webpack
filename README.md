# WEBPACK

---

Webpack es un empaquetador para Javascript y sus amigos. Convierte módulos con dependencias en archivos estáticos que los navegadores entienden.

Nos permite empaquetar, optimizar los diferentes módulos Javascript y sus dependencia en nuestro proyecto. Es usado en proyectos basados en Javascript como: React, Vue, Angular entre otros.

## Getting Started / Empecemos

### Prerequisites / Requisitos Previos

- [x] Node.js

- [x] Webpack

  > npm install webpack@4.32.2 --save-dev --save-exact
  > (OR)
  > npm i webpack@4.32.2 -D -E
  > npx webpack -v ( To double check the version )

- [x] Webpack-CLI (command line interface)
  > npm i webpack-cli@3.3.2 -D -E

## Lerning New Stuffs / Aprendiendo cosas Nuevas

### First Bundle by Comand line / Nuestro Primer Bundle via linea de comando

> npx webpack --entry ./index.js --output ./bundle --mode development

### webPack.config.js

To make our life easier and avoid typing huge command, webpack.config.js is on the rescue.

This file allows us to import modules using commonJS format and receives at least 2 configurations,
entry and output

Entry Point: The path of our file inside our JS APP to be proceeded by webpack. We can have multiple entry points.

Output: The out path where out bundle is going to be generated with all our files specified as entry points

---

Este archivo permite importar módulos usando el formato commonJS y recibe por lo menos dos configuraciones básicas, un entry y un output.

Entry Point: Es la ruta del archivo principal de nuestra aplicación JS a ser procesado por Webpack. Se pueden tener varios Entry Points.
Output: Es la ruta de salida donde va a generar nuestro bundle con todos nuestros archivos especificados como Entry Points empaquetados en uno sólo.

### Config by default and custom / configuraciones por defecto y personalizadas

Folder/Carpeta: external

### Multi Entry Points / Múltiples puntos de entrada

Folder/Carpeta: multi-entry-point

Use case: websites with multiples pages

---

Caso de uso : sitios con multiples paginas queremos generar un bundle por c/u

### Loaders

Folder/Carpeta: css-style-loaders

> npm i css-loader@2.1.1 style-loader@0.23.1 -D -E

(...)

---

Por ahora solo interpretamos JS con webpack. Los Loaders son la funcionalidad que nos da Webpack para interpretar tipos de archivos no soportados de forma nativa por Javascript (css, png, .gif, sass etc...).

### Plugins

Folder/Carpeta: plugins

> npm i mini-css-extract-plugin@0.7.0 html-webpack-plugin@3.2.0 -D -E

(...)

Los Plugins sirven para extender las capacidades de webpack y dar más poder a los loaders.

### Dev Server / Servidor de desarrollo

Folder/Carpeta: webpack-dev-server

> npm i -D -E webpack-dev-server@3.5.1

> webpack --config ./webpack-dev-server/webpack.config.js --watch // ( without web-dev-server)

> webpack-dev-server --config ./webpack-dev-server/webpack.config.js ( with dev-server re-build and re-load)

Finally open http://localhost:8080/

---

webpack-dev-server es un CLI (command line interface) que se puede usar para hacer un entorno de desarrollo de manera sencilla, ya que de manera nativa recargará los archivos que se modifiquen en tiempo real.

Para configurar el webpack-dev-server puedes agregar un objeto llamado devServer dentro de tu webpack y configurar cosas como:

- hot: Activa el HotModuleReplacementPlugin que muestra los cambios sin actualizar la página
- port: Al crear un servidor de prueba con webpack-dev-server éste tomará por defecto el puerto 8080, acá podrás cambiar el puerto.
- open: Abrirá el navegador al iniciar el servidor
- allowedHosts: Dominios que permitirá el servidor utilizar Etc…

## Hot module replacement

Folder/Carpeta: hot-module-repacement

(..)

---

Hot Module Replacement (HMR) es un plugin de Webpack que permite intercambiar, agregar o eliminar módulos en tiempo de ejecución, sin una recarga completa de la página.
.
Para activarlo lo tienes que importar desde webpack, agregarlo como plugin y en el devServer agregar la propiedad hot

## Babel

Folder/Carpeta: babel

> npm i -D -E @babel/core@7.4.5 babel-loader@8.0.6 @babel/preset-env@7.4.5 @babel/plugin-transform-runtime@7.4.4  
> npm i --save -E @babel/runtime@7.4.5
> (...)

---

Para poder usar Javascript moderno y tener una buena Developer Experience sin afectar la User Experience, existe Babel. Babel transpila nuestro código moderno de Javascript a una una versión que todos los navegadores pueden entender.

## JSX

Folder/Carpeta: jsx

> npm i -E react@16.8.6 react-dom@16.8.6
> npm i -D -E babel/preset-react@7.0.0

(..)

---

JSX es un lenguaje de templates para React que permite definir componentes con un código muy similar al HTML, pero no existe navegador que entienda JSX. Afortunadamente Babel puede transpilar el código JSX de nuestros archivos JS a código que el navegador.

## Webpack Images, Fonts, Videos

Folder/Carpeta: url-loaders

> npm i url-loader@1.1.2 -D -E
> npm i file-loader@3.0.1 -D -E

## (...)

Para soportar la importación de archivos binarios en nuestro código Javascript cómo lo son: fuentes, imágenes y videos, podemos usar url-loader.

url-loader transforma archivos a un cadena de texto base64 para que carguen dentro de nuestros archivos Javascript y así ahorrarnos un request al servidor por cada archivo transformado.

Debemos tomar en cuenta que sólo nos conviene convertir archivos pequeños, ya que archivos muy grandes podrían hacer nuestro archivo bundle muy pesado. Es por esto que la opción limit del url-loader sirve para asignar el peso máximo que un archivo puede tener para ser transformado en base64.

## Preprocessors / Preprocesadores

Folder/Carpeta: url-loaders

> npm i -D -E sass-loader@7.1.0 stylus-loader@3.0.2 less-loader@5.0.0 postcss-loader@3.0.0
> npm i stylus@0.54.5 less@3.9.0 node-sass@4.12.0 -D -E
> npm i postcss-nested@4.1.2 -D -E

---

Es una práctica común usar preprocesadores de CSS como: Sass, Less, Stylus y hasta PostCSS. Webpack permite integrar estos preprocesadores en su configuración a través de loaders, sólo ten cuidado con las peerDependencies que son dependencias que el loader espera estén instaladas previamente, como el caso de stylus para stylus-loader.

# Code Splitting

Folder/Carpeta: prevent-duplication
(...)

---

Es útil dividir nuestro código en diversos archivos y a veces enteros proyectos, pero no queremos cargar nuestra aplicación de más multiplicando el peso de alguna dependencia al utilizarla en diferentes partes de la aplicación, para eso utilizamos el módulo de optimización con splitChunks en webpack.<https://webpack.js.org/plugins/split-chunks-plugin/>

La propiedad _chunk_ de splitChunks puede recibir cualquiera de estos tres parámetros:

- initial: indica a webpack que optimice solo los módulos que son importados de forma no dinámica.
- async: webpack optimizará solo aquellos que son cargados de forma no-dinámica.
- all: indica a webpack que optimice, lo mejor que pueda, los módulos sin importar si son cargados de forma dinámica o no-dinámica.

La propiedad _name_ indica el modulo que voy a exportar donde se va a agrupar todo lo repetido

La propiedad _minSize_ indicaremos el tamaño minimo que deben tener los chunk para ser agrupados ( )

## Dynamic Link Library

Folder/Carpeta: dll

---

Para hacer el build más rápido vamos a aplicar la técnica de dynamic link library.

“Una Dynamic Link Library (DLL) es un conjunto de librerías comunes que no cambian frecuentemente por lo que se hace un build por adelantado de las mismas para no re-empaquetar cada vez que hacemos build de nuestra aplicación.”.

Happy Coding :)

## Dynamic imports

Folder/Carpeta: dll

> npm i -D -E @babel/plugin-syntax-dynamic-import@7.2.0

On demand assets

---

Importar modulos solo cuando el usuario lo necesita.
