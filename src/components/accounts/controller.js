import  MongoAccountsRepository  from './infraestructure/MongoAccountsRepository'
import getAllAccounts from './application/getAllAccounts'
import createAccount from './application/createAccount'
import getOneAccount from './application/getOneAccount'
import editAccount from './application/editAccount'
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


    