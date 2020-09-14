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

(..)

---

Hot Module Replacement (HMR) es un plugin de Webpack que permite intercambiar, agregar o eliminar módulos en tiempo de ejecución, sin una recarga completa de la página.
.
Para activarlo lo tienes que importar desde webpack, agregarlo como plugin y en el devServer agregar la propiedad hot
