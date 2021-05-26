export default ({AccountsRepository})=>{
    return async ({id})=>{
        return AccountsRepository.getOne({id})
    }
}