## Patada inicial

Este es un proyecto donde ire plasmando mis practicas de programación con Ionic Framework, Capacitor y Angular enfocado a temas de Ajedrez.

Debido a mi stack tecnológico me enfocare principalmente en ambientes Android y Web, aunque también se podría usar en IOS en algunos casos particulares.

<br>

## Configuración inicial

utilizando el comando `ionic start` creamos un proyecto de ionic con angular y capacitor eligiendo la plantilla blank.

Elimine el directorio `src/app/home` debido a que las paginas las almacenare en `src/app/pages`. También modifique el archivo `src/app/app-routing.module.ts` para que apunte a la ruta de las paginas.
 
<br>

## Estructura del proyecto

Ahora para generar las rutas relativas mas relevantes del proyecto, modificamos el archivo `tsconfig.json` y agregamos las siguientes lineas al objeto `compilerOptions`:

```json
"paths": {
  "@guards/*": ["src/guards/*"],
  "@pages/*": ["src/app/pages/*"],
  "@services/*": ["src/app/services/*"],
  "@models/*": ["src/app/models/*"],
  "@utils/*": ["src/app/utils/*"],
  "@environments/*": ["src/environments/*"]
}
```

Cada página funciona como un módulo de Angular, y se organiza con sus correspondientes componentes, buscando seguir el patrón de diseño expuesto  [aquí](https://medium.com/notasdeangular/arquitectura-de-componentes-en-angular-761e9226fd9f) por [Vanessa Marely Aristizabal Angel](https://twitter.com/vanessamarely).

<br>

## Claves y secretos

Para evitar que las claves y secretos de los servicios que utilicemos se suban a github, vamos a crear un archivo `src/environments/private/keys.ts` que contendrá las claves y secretos de los servicios que utilicemos. Este archivo no se subirá a github.

```typescript
// src/environments/private/keys.ts
export const keys = {
    firebase: {
        ... // Aquí van las claves de firebase
    },
    servicio2: {
        ... // Aquí van las claves de servicio2
    }
};

```

Ahora en el archivo `.gitignore` agregamos la siguiente linea para que no se suba el archivo `src/environments/private/keys.ts` a github.

```
// .gitignore
...
src/environments/private/keys.ts
```

La estructura de los archivos de claves y secretos es la siguiente:

```typescript
// src/environments/private/keys.ts
export const keys = {
    // ... Claves y secretos de los servicios
};
```

## Primera página

Para dejar la aplicación lista para empezar a trabajar, vamos a crear una página de inicio, como lo primero con que haremos sera trabajar con la cámara, crearemos una pagina  `pages/photos` utilizando standalone component.
El contenido de la pagina, es igual al de la pagina que se crea por defecto
    


<br>

## Tabla de contenido

* [Firebase auth Google](#1-firebase-auth-google)

<br>


### 1/ Firebase auth Google
Aquí vamos a habilitar la autenticación con Google. para luego permitir a los usuarios identificarse en nuestra aplicación.