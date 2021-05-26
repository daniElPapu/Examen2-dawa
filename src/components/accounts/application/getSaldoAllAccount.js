export default ({AccountsRepository})=>{
    return async ({id})=>{
        let cuentas=await AccountsRepository.getByTitular({id})  
        let saldos =[] 
        for ( let cuenta in cuentas){
           saldos.push({numero:cuenta.numero,saldo:cuenta.saldo})
        }
        return saldos
    }
}