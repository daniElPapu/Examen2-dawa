import Joi from 'joi'

const accountId = Joi.string().regex(/^[0-9a-fA-F]{24}$/)

export const accountIdSchema = Joi.object({
  id: accountId.required(),
})
export const getAllAccountsSchema = Joi.object({
})
export const createAccountSchema = Joi.object({
  numero: Joi.string().required(),
  saldo: Joi.number().precision(2).positive().required(),
  clave: Joi.string().required(),
  titular: accountId.required()
})


