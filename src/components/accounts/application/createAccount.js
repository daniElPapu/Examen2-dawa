export default ({AccountsRepository})=>{
    return async ({numero,saldo,clave,titular})=>{
        const nuevaCuenta ={
            numero: numero,
            saldo: saldo,
            clave: clave,
            titular: titular
        }
        return AccountsRepository.add(nuevaCuenta)
        
    }
}
