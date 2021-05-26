export default ({PersonsRepository})=>{
    return async ({id,name,number})=>{
        const persona ={
            id: id,
            nombre: name,
            number: number
        }
        return PersonsRepository.update({id, persona})
    }
}
