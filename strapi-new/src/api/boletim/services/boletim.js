'use strict';

/**
 * boletim service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::boletim.boletim');
