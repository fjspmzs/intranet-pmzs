import { factories } from "@strapi/strapi";
import { Context } from "koa";

interface ProfissionalUpdateBody {
  data: {
    nome: string;
    primeironome: string;
    email: string;
    telefonecelular: string;
    vilaId: number;
    data_nascimento: string;
    nome_especialidadde: string;
  };
  files: {
    fotodoesp?: File | File[];
  };
}

export default factories.createCoreController("api::profissional.profissional", ({ strapi }) => ({
  async findOne(ctx: Context) {
    const { id } = ctx.params;
    try {
      const entity = await strapi.db
        .query("api::profissional.profissional")
        .findOne({
          where: { id: id },
          populate: ["fotodoesp"],
        });

      if (!entity) {
        return ctx.notFound("Profissional não encontrado");
      }

      const sanitizeEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizeEntity);
    } catch (error) {
      console.log(error);
      return ctx.internalServerError("Erro ao buscar profissional");
    }
  },

  async updateOne(ctx: Context) {
    try {
      const { id } = ctx.params;
      const  data : ProfissionalUpdateBody = JSON.parse(ctx.request.body.data);
      const fotodoesp = ctx.request.files?.['files.fotodoesp'];

      console.log("Dados recebidos:", data);
      console.log("Imagem recebida:", fotodoesp);

      // Ajusta o formato da data de nascimento
      // if (data.data_nascimento) {
      //   const [day, month, year] = data.data_nascimento.split('/');
      //   data.data_nascimento = `${year}-${month}-${day}`;
      // }

      // Busca o profissional pelo id
      const entity = await strapi.db
        .query("api::profissional.profissional")
        .findOne({
          where: { id: id },
          populate: ["fotodoesp"],
        });

      if (!entity) {
        return ctx.notFound("Profissional não encontrado");
      }

      console.log("Entidade encontrada:", entity);

      // Atualiza a entidade com os dados do corpo
      const updatedEntity = await strapi.db
        .query("api::profissional.profissional")
        .update({
          where: { id: id },
          data: data,
        });

      // Se uma nova imagem foi enviada, faça o upload e associe-a
      if (fotodoesp) {
        const uploadService = strapi.plugins['upload'].services.upload;
        const uploadedFiles = await uploadService.upload({
          data: { fileInfo: { alternativeText: '', caption: '', name: File.name } },
          files: fotodoesp
        });

        const newImageId = uploadedFiles[0].id;

        await strapi.db.query("api::profissional.profissional").update({
          where: { id: id },
          data: {
            fotodoesp: newImageId,
          }
        });
      }

      // Utiliza o método findOne para obter a entidade atualizada e já sanitizada
      const sanitizedEntity = await strapi.db
        .query("api::profissional.profissional")
        .findOne({
          where: { id: id },
          populate: ["fotodoesp"],
        });

      ctx.body = sanitizedEntity;
    } catch (error) {
      console.log(error);
      ctx.internalServerError("Erro ao atualizar profissional");
    }
  },
}));
