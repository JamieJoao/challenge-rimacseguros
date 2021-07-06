# RETO TÉCNICO HACKING CHALLENGE

## Descripción

Este proyecto es corresponde a la etapa de evaluación de habilidades técnicas de frontend.
El cual tiene las siguientes características:

* ReactJS y Typescript
* SASS
* Grid System Layout
* Código limpio y escalable
* Consumo de API https://jsonplaceholder.typicode.com/
* La UI se rige por el diseño https://www.figma.com/file/EI5Bqma6XRMiL3SYDJdZAV/Hacking-Challenge-2021?node-id=2%3A7

## Lanzar proyecto

Luego de clonar el proyecto, ejecutar los siguientes comandos en orden
```
npm i
npm start
```

## Librerías

* react-router-dom: Paquete para el enrutamiento y navegación entre páginas

```js
npm install react-router-dom
```
* classnames: Paquete que me permite juntar varias clases en una sola cadena

```js
npm i classnames
```
* formik: Paquete para manejar y validar formularios

```js
npm i formik
```
* react-dropdown: Paquete para dropdowns personalizables

```js
npm i react-dropdown
```
* validator: Paquete para validar cadenas, lo uso junto con formik

```js
npm i validator
```
* axios: Paquete para manejar peticiones http a alguna API

```js
npm i axios
```


## Estructura

# src

* [api/](.\src\api)
  * [axiosDB.ts](.\src\api\axiosDB.ts)
* [assets/](.\src\assets)
  * [icons/](.\src\assets\icons)
    * [gl_arrow_down.svg](.\src\assets\icons\gl_arrow_down.svg)
    * [gl_arrow_up.svg](.\src\assets\icons\gl_arrow_up.svg)
    * [gl_check.svg](.\src\assets\icons\gl_check.svg)
    * [gl_phone-20x20.svg](.\src\assets\icons\gl_phone-20x20.svg)
    * [icon_car.svg](.\src\assets\icons\icon_car.svg)
    * [icon_damage.svg](.\src\assets\icons\icon_damage.svg)
    * [icon_perdidatotal.svg](.\src\assets\icons\icon_perdidatotal.svg)
    * [icon_theft.svg](.\src\assets\icons\icon_theft.svg)
    * [logo-rimac.svg](.\src\assets\icons\logo-rimac.svg)
    * [vehicular-flexible-logo.svg](.\src\assets\icons\vehicular-flexible-logo.svg)
  * [images/](.\src\assets\images)
    * [img-1-background.svg](.\src\assets\images\img-1-background.svg)
    * [img-1-mobile.svg](.\src\assets\images\img-1-mobile.svg)
    * [img-1.svg](.\src\assets\images\img-1.svg)
    * [img-3.svg](.\src\assets\images\img-3.svg)
    * [img-4.svg](.\src\assets\images\img-4.svg)
* [components/](.\src\components)
  * [common/](.\src\components\common)
    * [Button/](.\src\components\common\Button)
      * [Button.module.sass](.\src\components\common\Button\Button.module.sass)
      * [index.tsx](.\src\components\common\Button\index.tsx)
    * [Checkbox/](.\src\components\common\Checkbox)
      * [Checkbox.module.sass](.\src\components\common\Checkbox\Checkbox.module.sass)
      * [index.tsx](.\src\components\common\Checkbox\index.tsx)
    * [Input/](.\src\components\common\Input)
      * [index.tsx](.\src\components\common\Input\index.tsx)
      * [Input.module.sass](.\src\components\common\Input\Input.module.sass)
    * [index.ts](.\src\components\common\index.ts)
  * [layout/](.\src\components\layout)
    * [Container/](.\src\components\layout\Container)
      * [Container.module.sass](.\src\components\layout\Container\Container.module.sass)
      * [Container.tsx](.\src\components\layout\Container\Container.tsx)
    * [Grid/](.\src\components\layout\Grid)
      * [Grid.module.sass](.\src\components\layout\Grid\Grid.module.sass)
      * [Grid.tsx](.\src\components\layout\Grid\Grid.tsx)
    * [Header/](.\src\components\layout\Header)
      * [Header.module.sass](.\src\components\layout\Header\Header.module.sass)
      * [Header.tsx](.\src\components\layout\Header\Header.tsx)
    * [AppState.tsx](.\src\components\layout\AppState.tsx)
    * [index.ts](.\src\components\layout\index.ts)
    * [MultipleProvider.tsx](.\src\components\layout\MultipleProvider.tsx)
* [constants/](.\src\constants)
  * [index.ts](.\src\constants\index.ts)
  * [parameters.ts](.\src\constants\parameters.ts)
  * [regex.ts](.\src\constants\regex.ts)
  * [routeNames.ts](.\src\constants\routeNames.ts)
* [context/](.\src\context)
  * [session/](.\src\context\session)
    * [SessionContext.tsx](.\src\context\session\SessionContext.tsx)
  * [theme/](.\src\context\theme)
    * [index.ts](.\src\context\theme\index.ts)
    * [ThemeContext.tsx](.\src\context\theme\ThemeContext.tsx)
* [hooks/](.\src\hooks)
  * [index.ts](.\src\hooks\index.ts)
  * [useBreakpoint.ts](.\src\hooks\useBreakpoint.ts)
  * [useFetch.ts](.\src\hooks\useFetch.ts)
  * [useTheme.ts](.\src\hooks\useTheme.ts)
* [routes/](.\src\routes)
  * [index.ts](.\src\routes\index.ts)
  * [MainRoute.tsx](.\src\routes\MainRoute.tsx)
* [styles/](.\src\styles)
  * [global.sass](.\src\styles\global.sass)
  * [_mixins.sass](.\src\styles\_mixins.sass)
  * [_variables.scss](.\src\styles\_variables.scss)
* [types/](.\src\types)
  * [index.ts](.\src\types\index.ts)
  * [responses.ts](.\src\types\responses.ts)
* [utils/](.\src\utils)
  * [index.ts](.\src\utils\index.ts)
* [views/](.\src\views)
  * [CarData/](.\src\views\CarData)
    * [CarData.module.sass](.\src\views\CarData\CarData.module.sass)
    * [CarDataView.tsx](.\src\views\CarData\CarDataView.tsx)
    * [index.ts](.\src\views\CarData\index.ts)
  * [Home/](.\src\views\Home)
    * [Home.module.sass](.\src\views\Home\Home.module.sass)
    * [HomeView.tsx](.\src\views\Home\HomeView.tsx)
    * [index.ts](.\src\views\Home\index.ts)
  * [PlanBuild/](.\src\views\PlanBuild)
    * [index.ts](.\src\views\PlanBuild\index.ts)
    * [PlanBuildView.tsx](.\src\views\PlanBuild\PlanBuildView.tsx)
  * [Thanks/](.\src\views\Thanks)
    * [index.ts](.\src\views\Thanks\index.ts)
    * [ThanksView.tsx](.\src\views\Thanks\ThanksView.tsx)
* [index.tsx](.\src\index.tsx)
* [react-app-env.d.ts](.\src\react-app-env.d.ts)
* [reportWebVitals.ts](.\src\reportWebVitals.ts)
* [RimacApp.tsx](.\src\RimacApp.tsx)
