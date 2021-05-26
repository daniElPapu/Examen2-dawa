export default ({AccountsRepository})=>{
    return async ({numero,clave})=>{
        let account = await AccountsRepository.getByNumero({numero})
        if(account.clave == clave){
            return account
        }else{
            return "Clave Incorrecta"
        }
    }
}