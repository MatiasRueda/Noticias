# Noticias

![Static Badge](https://img.shields.io/badge/Estado%20-%20Terminado%20-%20green)

## Introducción
Esta app ofrece al usuario un breve panorama de la actualidad, ofreciendo las noticias mas relevantes o de mayor popularidad. Además de permitirle buscar la sección de noticias que este mismo desee. 
Como un añadido extra agregue una pequeña sección de opciones para que pueda elegir el tema que este desee ( blanco o negro ). 


## Tabla de contenido
* [Introducción](#Introducción)
* [Tabla de contenido](#Tabla-de-contenido)
* [Tipo de proyecto](#Tipo-de-proyecto)
* [Capturas de pantalla](#Capturas-de-pantalla)
* [Estrategias](#Estrategias)
* [Tecnologías utilizadas](#Tecnologías-utilizadas)
* [Estructura](#Estructura)
* [Instalación](#Instalación)
* [Uso](#Uso)


## Tipo de proyecto
Proyecto individual.

## Capturas de pantalla 
<p align="center">
<img src="https://i.postimg.cc/LstR2n8j/Whats-App-Image-2024-03-13-at-4-01-20-AM-1.jpg" width=200/>
<img src="https://i.postimg.cc/JnKLHvJn/Whats-App-Image-2024-03-13-at-4-01-20-AM.jpg" width=200/>
<img src="https://i.postimg.cc/j5RT5tDm/Whats-App-Image-2024-03-13-at-4-01-20-AM-2.jpg" width=200/>
</p>

## Estrategias
### Smart y Dumb Component
Se separaron los componentes que se utilizan en el proyecto en smart  y dumb component según la responsabilidad que tengan. Esto lo hice con el objetivo de obtener un código mas conciso y una mejor legibilidad </br> 
**Smart**:  Tendrán la lógica del componente, operaciones complejas , gestionan eventos y acciones del usuario.</br>
**Dumb**: No manejan la lógica, se encargan únicamente de la presentación.


### Carpeta Auxiliar
En esta carpeta guardo distintas funciones o variables constantes que usare a lo largo de todo el proyecto, de esta forma evito repetir código y con las variable contantes definidas evito tener cadenas mágicas 


### Carpeta Type
Aca guardo distintos types que utilizo duranto todo el proyecto

### Utilizo useContext
Dentro de la carpeta context guardo distintos useContext que voy utilizando a lo largo de todo el proyecto, de esta forma evito estar pasando como parametros dichas variables.


## Tecnologías utilizadas
  - React native
  - Typescript
## Estructura 

```
Noticias
├─ .gitignore
├─ .vscode
│  └─ .react
├─ app.json
├─ App.tsx
├─ assets
│  ├─ adaptive-icon.png
│  ├─ favicon.png
│  ├─ icon.png
│  └─ splash.png
├─ babel.config.js
├─ eas.json
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ auxiliar
│  │  ├─ recomendaciones.ts
│  │  └─ seccionValida.ts
│  ├─ components
│  │  ├─ dumb
│  │  │  ├─ DCargando.tsx
│  │  │  ├─ DColor.tsx
│  │  │  ├─ DMasVista.tsx
│  │  │  ├─ DNoticia.tsx
│  │  │  ├─ DRecomendaciones.tsx
│  │  │  ├─ DTitulo.tsx
│  │  │  └─ DTituloOpciones.tsx
│  │  └─ smart
│  │     ├─ SFBusqueda.tsx
│  │     ├─ SMasVistos.tsx
│  │     ├─ SNavigation.tsx
│  │     ├─ SNInicio.tsx
│  │     ├─ SNMasVistos.tsx
│  │     ├─ SNoticias.tsx
│  │     ├─ SOpciones.tsx
│  │     └─ SSBuscar.tsx
│  ├─ context
│  │  ├─ EstadoContext.tsx
│  │  ├─ SectionContext.tsx
│  │  └─ TemaContext.tsx
│  ├─ hook
│  │  └─ useObtenerNoticia.tsx
│  ├─ screens
│  │  ├─ Buscar.tsx
│  │  ├─ Inicio.tsx
│  │  ├─ MasVistos.tsx
│  │  ├─ Opciones.tsx
│  │  └─ Seccion.tsx
│  └─ types
│     └─ type.ts
└─ tsconfig.json

```

## Instalación 
Antes de descargar o clonar el repositorio es necesario que usted instale Node (https://nodejs.org/en). </br>
Una vez descargado o clonado el repositorio, abra la terminal en la ruta donde se encuentra el proyecto y escriba el siguiente comando.
```
npm i
```
Esto instalara las dependencias que necesite el proyecto

## Uso
En caso de haber seguido los pasos de la instalación solo debe ejecutar el siguiente comando:
```
npm run start
```
y seguir las instrucciones en pantalla

En caso de saltarse los paso de instalación y querer probar la app para le dejo el link para su descarga en **android**: 
<a href="https://expo.dev/artifacts/eas/dsYKucBnRzX1oAy6S3B8fY.apk">APK</a>


</br>

> [!NOTE]
> Recuerde que es una APK así que es necesario dar permisos para poder instalarla

