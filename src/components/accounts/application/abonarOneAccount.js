import MongoMovimientosRepository from '../infraestructure/MongoMovimientosRepository'
export default ({AccountsRepository})=>{
    let movimientosRepository= new MongoMovimientosRepository()
    return async ({numero,abono})=>{
        const account = await AccountsRepository.getByNumero({numero})
        account.saldo += abono
        let id = account._id
        let movimiento ={
            numero: numero,
            tipo:"abono",
            cantidad: abono,
            fecha: Date.now()
        }
        movimientosRepository.add(movimiento)
        return AccountsRepository.update({id, account})
    }
}
