// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  EXPRESS_FORM: 'http://localhost:3000/feedback',

  ASSETS_PICS: 'http://localhost:3000/assets/pics/',
  ASSETS_WEATHER: 'http://localhost:3000/weather',
  ASSETS_SVG: 'http://localhost:3000/assets/svg/',
  ASSETS_MD: 'http://localhost:3000/assets/markdown/',

  STRAPI_API: 'http://localhost:1337',
  OPERACOES_API: 'http://localhost:1337/api/operacoes',
  POP_API: 'http://localhost:1337/api/pops',
  NEWS_API: 'http://localhost:1337/api/noticias?populate=*',
  SINGLE_NEWS: 'http://localhost:1337/api/noticias',
  NIVER_API: 'http://localhost:1337/api/aniversariantes',
  AVISOS_API: 'http://localhost:1337/api/avisos',
  GALERIA_API: 'http://localhost:1337/api/galerias?populate=*',

  INTRANET: 'http://10.56.19.133',
  REPOSITORIO: 'http://10.56.19.159/webdav',

  CARGA_UPLOAD: 'http://10.56.19.152:5000/upload'

}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
