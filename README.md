# RETO TÉCNICO HACKING CHALLENGE

## Descripción

Este proyecto es corresponde a la etapa de evaluación de habilidades técnicas de frontend.
El cual tiene las siguientes características:

* ReactJS y Typescript
* Metodología MET (orientado a componentes)
* SASS
* Grid System Layout
* Código limpio y escalable
* Consumo de API https://jsonplaceholder.typicode.com/
* La UI se rige por el diseño https://www.figma.com/file/EI5Bqma6XRMiL3SYDJdZAV/Hacking-Challenge-2021?node-id=2%3A7

## Librerías

* react-router-dom: Enrutamiento y navegación entre páginas

```js
npm install react-router-dom
```

## Estructura

# src

* [assets/](.\src\assets)
  * [icons/](.\src\assets\icons)
    * [gl_phone-20x20.svg](.\src\assets\icons\gl_phone-20x20.svg)
    * [icon_car.svg](.\src\assets\icons\icon_car.svg)
    * [icon_damage.svg](.\src\assets\icons\icon_damage.svg)
    * [icon_perdidatotal.svg](.\src\assets\icons\icon_perdidatotal.svg)
    * [icon_theft.svg](.\src\assets\icons\icon_theft.svg)
    * [Logo RIMAC.svg](.\src\assets\icons\Logo RIMAC.svg)
    * [vehicular-flexible-logo.svg](.\src\assets\icons\vehicular-flexible-logo.svg)
  * [images/](.\src\assets\images)
    * [img-1-background.svg](.\src\assets\images\img-1-background.svg)
    * [img-1-mobile.svg](.\src\assets\images\img-1-mobile.svg)
    * [img-1.svg](.\src\assets\images\img-1.svg)
    * [img-3.svg](.\src\assets\images\img-3.svg)
    * [img-4.svg](.\src\assets\images\img-4.svg)
* [components/](.\src\components)
  * [common/](.\src\components\common)
    * [index.ts](.\src\components\common\index.ts)
  * [layout/](.\src\components\layout)
    * [index.ts](.\src\components\layout\index.ts)
* [constants/](.\src\constants)
  * [index.ts](.\src\constants\index.ts)
  * [routeNames.ts](.\src\constants\routeNames.ts)
* [hooks/](.\src\hooks)
  * [index.ts](.\src\hooks\index.ts)
* [routes/](.\src\routes)
  * [index.ts](.\src\routes\index.ts)
  * [MainRoute.tsx](.\src\routes\MainRoute.tsx)
* [state-management/](.\src\state-management)
* [types/](.\src\types)
* [utils/](.\src\utils)
  * [index.ts](.\src\utils\index.ts)
* [views/](.\src\views)
  * [CarData/](.\src\views\CarData)
    * [CarDataView.tsx](.\src\views\CarData\CarDataView.tsx)
    * [index.ts](.\src\views\CarData\index.ts)
  * [Home/](.\src\views\Home)
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