export default ({AccountsRepository})=>{
    return async ({id,numero,saldo,clave,titular})=>{
        const account ={
            id: id,
            numero: numero,
            saldo: saldo,
            clave: clave,
            titular: titular
        }
        return AccountsRepository.update({id, account})
    }
}
