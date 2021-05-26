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
export const abonarAccountSchema = Joi.object({
  numero:Joi.string().required(),
  abono: Joi.number().precision(2).positive().required(),
})
export const desembolsarAccountSchema = Joi.object({
  numero: Joi.string().required(),
  retiro: Joi.number().precision(2).positive().required(),
  clave: Joi.string().required(),
})
export const transferirAccountSchema = Joi.object({
  numero: Joi.string().required(),
  numeroDestino: Joi.string().required(),
  cantidad: Joi.number().precision(2).positive().required(),
  clave: Joi.string().required(),
})
export const saldoAccountSchema = Joi.object({
  numero: Joi.string().required(),
  clave: Joi.string().required(),
})

