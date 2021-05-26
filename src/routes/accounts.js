import express from 'express'
import { validationHandler} from '../utils/middlewares/validationHandler'
import { getAccounts, newAccount ,getAccount, deleteAccount, updateAccount, abonarAccount,desembolsarAccount,transferirAccount,movimientosAccount,getSaldoAccount} from '../components/accounts/controller'
import { createAccountSchema, getAllAccountsSchema , accountIdSchema ,abonarAccountSchema,desembolsarAccountSchema, transferirAccountSchema,saldoAccountSchema} from '../components/accounts/domain/account'

const router = express.Router()

router.get(
    '/api/accounts',
    validationHandler(getAllAccountsSchema),
    getAccounts
)
router.post (
    '/api/abonar', 
    validationHandler(abonarAccountSchema),
    abonarAccount
)
router.post (
    '/api/desembolsar', 
    validationHandler(desembolsarAccountSchema),
    desembolsarAccount
)
router.post (
    '/api/transferir', 
    validationHandler(transferirAccountSchema),
    transferirAccount
)
router.post (
    '/api/movimientos', 
    validationHandler(accountIdSchema),
    movimientosAccount
)
router.get(
    '/api/accounts/:id', 
    validationHandler(accountIdSchema,"params"),
    getAccount
)
router.get(
    '/api/saldo/account', 
    validationHandler(saldoAccountSchema),
    getSaldoAccount
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