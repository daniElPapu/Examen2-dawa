export default ({AccountsRepository})=>{
    return async ({id})=>{
        return AccountsRepository.delete({id})
    }
}