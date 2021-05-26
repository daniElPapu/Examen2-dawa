export default ({AccountsRepository})=>{
    return async ()=>{
        return AccountsRepository.getAll();
    }
}