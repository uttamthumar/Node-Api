import joi from "@hapi/joi";

const schema = {
  user: joi.object({
    firstName: string().max(100).require(),
  }),
};

module.exports = {
  schema,
};
