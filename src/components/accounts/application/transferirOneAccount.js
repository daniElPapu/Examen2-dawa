import MongoMovimientosRepository from '../infraestructure/MongoMovimientosRepository'
export default ({AccountsRepository})=>{
    let movimientosRepository=new  MongoMovimientosRepository()
    return async ({numero,numeroDestino,cantidad,clave})=>{
        const account = await AccountsRepository.getByNumero({numero})
        const accountDestino = await AccountsRepository.getByNumero({numeroDestino})
        if (account && accountDestino && accountDestino != account){
            if(account.saldo > cantidad){
                if(account.clave == clave){
                    account.saldo -= cantidad
                    accountDestino.saldo += cantidad
                    let id = account._id
                    let idDestino = accountDestino._id
                    let movimiento ={
                        numero: numero,
                        numeroDestino: numeroDestino,
                        tipo:"transferencia",
                        cantidad: cantidad,
                        fecha: Date.now()
                    }
                    movimientosRepository.add(movimiento)
                    AccountsRepository.update({idDestino,accountDestino})
                    return AccountsRepository.update({id, account})
                }else{
                    return "Clave Incorrecta"
                } 
            }
            else{
                return "Saldo Insuficiente"
            }        
        }else{
            return "Alguna de los Números de cuenta es Inválida o Iguales"
        }
        
        
    }
}
