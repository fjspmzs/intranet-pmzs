/**
 * efetivomil controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::efetivomil.efetivomil",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
      try {
        const entity = await strapi.db
          .query("api::efetivomil.efetivomil")
          .findOne({
            where: { id: id },
            populate: ["fotodomil"],
          });

        if (!entity) {
          return ctx.notFound("efetivomil não encontrado");
        }
        // Custom sanitize function
        const sanitizeEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizeEntity);
      } catch (error) {
        console.log(error);
        return ctx.internalServerError("Erro ao buscar efetivomil");
      }
    },

    async updateOne(ctx) {
      const { id } = ctx.params;
      const { data } = ctx.request.body;
   console.log(data)
      try {
        // Busca o efetivomil pelo id
        const entity = await strapi.db
          .query("api::efetivomil.efetivomil")
          .findOne({
            where: { id: id },
            populate: ["fotodomil"],
          });

        if (!entity) {
          return ctx.notFound("efetivomil não encontrado");
        }
        console.log(entity);
        // Atualiza a entidade com os dados do corpo
        const updatedEntity = await strapi.db
          .query("api::efetivomil.efetivomil")
          .update({
            where: { id: id },
            data:data, 
          });
          console.log(updatedEntity);
          // Verifica se a entidade foi realmente atualizada
    if (!updatedEntity) {
        return ctx.internalServerError("Erro ao atualizar efetivomil");
    }  
        // Utiliza o método findOne para obter a entidade atualizada e já sanitizada
        const sanitizedEntity = await strapi.entityService.findOne(
          "api::efetivomil.efetivomil",
          updatedEntity.id  );

        // Retorna a entidade sanitizada diretamente
        ctx.body = sanitizedEntity;
        return  ctx.body;
      } catch (error) {
        console.log(error);
        ctx.internalServerError("Erro ao atualizar efetivomil");
      }
    },
  })
);
