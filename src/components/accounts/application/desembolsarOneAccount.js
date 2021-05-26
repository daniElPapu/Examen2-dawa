import MongoMovimientosRepository from '../infraestructure/MongoMovimientosRepository'
export default ({AccountsRepository})=>{
    let movimientosRepository=new  MongoMovimientosRepository()
    return async ({numero,retiro,clave})=>{
        const account = await AccountsRepository.getByNumero({numero})
        if (account){
            if(account.saldo > retiro){
                if(account.clave == clave){
                    account.saldo -= retiro
                    let id = account._id
                    let movimiento ={
                        numero: numero,
                        tipo:"desembolso",
                        cantidad: retiro,
                        fecha: Date.now()
                    }
                    movimientosRepository.add(movimiento)
                    return AccountsRepository.update({id, account})
                }else{
                    return "Clave Incorrecta"
                } 
            }
            else{
                return "Saldo Insuficiente"
            }        
        }else{
            return "Número de cuenta Inválida"
        }
        
        
    }
}
