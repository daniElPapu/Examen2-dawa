import express from 'express'
import { validationHandler} from '../utils/middlewares/validationHandler'
import { getAccounts, newAccount ,getAccount, deleteAccount, updateAccount} from '../components/accounts/controller'
import { createAccountSchema, getAllAccountsSchema , accountIdSchema } from '../components/accounts/domain/account'

const router = express.Router()

router.get(
    '/api/accounts',
    validationHandler(getAllAccountsSchema),
    getAccounts
)
router.get(
    '/api/accounts/:id', 
    validationHandler(accountIdSchema,"params"),
    getAccount
)
router.post(
    '/api/accounts/update/:id', 
    validationHandler(accountIdSchema,"params"),
    updateAccount
)
router.get(
    '/api/accounts/delete/:id', 
    validationHandler(accountIdSchema,"params"),
    deleteAccount
)

router.post (
    '/api/accounts', 
    validationHandler(createAccountSchema),
    newAccount
)

export default router