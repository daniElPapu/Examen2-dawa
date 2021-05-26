import  MongoAccountsRepository  from './infraestructure/MongoAccountsRepository'
import getAllAccounts from './application/getAllAccounts'
import createAccount from './application/createAccount'
import getOneAccount from './application/getOneAccount'
import editAccount from './application/editAccount'
import abonarOneAccount from './application/abonarOneAccount'
import desembolsarOneAccount from './application/desembolsarOneAccount'
import transferirOneAccount from './application/transferirOneAccount'
import movimientosAllAccount from './application/movimientosAllAccount'
import getSaldoOneAccount from './application/getSaldoAccount'
import getSaldoAllAccount from './application/getSaldoAllAccount'
const AccountsRepository = new MongoAccountsRepository()

/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const getAccounts = async (_, res, next) => {
  try {
    const query = getAllAccounts({ AccountsRepository })
    const accounts = await query()
    res.status(200).json({
      data: accounts,
      message: 'Accounts listed',
    })
  } catch (e) {
    next(e)
  }
}
export const newAccount= async (req,res,next)=>{
    try {
        const query = createAccount({ AccountsRepository })
        const account = await query(req.body)
        res.status(200).json({
          data: account,
          message: 'Account added',
        })
    } catch (e) {
        next(e)
    }
}
export const getAccount= async (req,res,next)=>{
  try {
      const query = getOneAccount({ AccountsRepository })
      const account = await query(req.params)
      res.status(200).json({
        data: account,
        message: 'Account obtain',
      })
  } catch (e) {
      next(e)
  }
}
export const getSaldoAccount= async (req,res,next)=>{
  try {
      const query = getSaldoOneAccount({ AccountsRepository })
      const account = query(req.body)
      if (typeof account == "string"){
        res.status(300).json({
          message: account,
        })
      }else{
        res.status(200).json({
          data: account.saldo,
          message: 'Saldo obtenido',
        })
      }
  } catch (e) {
      next(e)
  }
}
export const getSaldosAccount= async (req,res,next)=>{
  try {
      const query = getSaldoAllAccount({ AccountsRepository })
      const account = query(req.body)
      if (typeof account == "string"){
        res.status(300).json({
          message: account,
        })
      }else{
        res.status(200).json({
          data: account,
          message: 'Saldos obtenido',
        })
      }
  } catch (e) {
      next(e)
  }
}
export const updateAccount= async (req,res,next)=>{
  try {
      const query = editAccount({ AccountsRepository })
      const account = await query(req.params)
      res.status(201).json({
        data: account,
        message: 'Account updated',
      })
  } catch (e) {
      next(e)
  }
}
export const deleteAccount= async (req,res,next)=>{
  try {
      const query = deleteOneAccount({ AccountsRepository })
      const account = await query(req.params)
      res.status(201).json({
        data: account,
        message: 'Account deleted',
      })
  } catch (e) {
      next(e)
  }
}
export const abonarAccount= async (req,res,next)=>{
  try {
      const query = abonarOneAccount({ AccountsRepository })
      const account = await query(req.body)
      res.status(201).json({
        data: account,
        message: 'Account abonado',
      })
  } catch (e) {
      next(e)
  }
}
export const desembolsarAccount= async (req,res,next)=>{
  try {
      const query = desembolsarOneAccount({ AccountsRepository })
      const account = await query(req.body)
      if (typeof account == "string") {
        res.status(300).json({
          message: account,
        })
      }else{
        res.status(201).json({
          data: account,
          message: 'Account desembolsado',
        })
        
      }
     
  } catch (e) {
      next(e)
  }
}
export const transferirAccount= async (req,res,next)=>{
  try {
      const query = transferirOneAccount({ AccountsRepository })
      const account = await query(req.body)
      if (typeof account == "string") {
        res.status(300).json({
          message: account,
        })
      }else{
        res.status(201).json({
          data: account,
          message: 'Account transferido',
        })
        
      }
     
  } catch (e) {
      next(e)
  }
}
export const movimientosAccount= async (req,res,next)=>{
  try {
      const query = movimientosAllAccount({ AccountsRepository })
      const account = query(req.body)
      if (typeof account == "string") {
        res.status(300).json({
          message: account,
        })
      }else{
        res.status(201).json({
          data: account,
          message: 'Account transferido',
        })
        
      }
     
  } catch (e) {
      next(e)
  }
}



    