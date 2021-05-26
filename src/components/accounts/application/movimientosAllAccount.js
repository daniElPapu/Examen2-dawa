import MongoMovimientosRepository from '../infraestructure/MongoMovimientosRepository'
export default ({AccountsRepository})=>{
    let movimientosRepository=new  MongoMovimientosRepository()
    return async ({id})=>{
        let cuentas=await AccountsRepository.getByTitular({id})   
        let movimientos=[]  
        for ( let cuenta in cuentas){
            let numero = cuenta.numero
            movimientos.push(...await movimientosRepository.getByNumero({numero}))
        }
        return movimientos
        
        
    }
}