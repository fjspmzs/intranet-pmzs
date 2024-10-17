// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  EXPRESS_FORM: 'http://localhost:3000/feedback',

  ASSETS_PICS: 'http://10.56.19.152/assets/pics/',
  ASSETS_WEATHER: 'http://10.56.19.152/weather',
  ASSETS_SVG: 'http://10.56.19.152/assets/svg/',
  ASSETS_MD: 'http://10.56.19.152/assets/markdown/',

  STRAPI_API: 'http://10.56.19.154',
  OPERACOES_API: 'http://10.56.19.154/api/operacoes',
  POP_API: 'http://10.56.19.154/api/pops',
  NEWS_API: 'http://10.56.19.154/api/noticias?populate=*',
  SINGLE_NEWS: 'http://10.56.19.154/api/noticias',
  NIVER_API: 'http://10.56.19.154/api/familias',
  AVISOS_API: 'http://10.56.19.154/api/avisos',
  GALERIA_API: 'http://10.56.19.154/api/galerias?populate=*',

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
