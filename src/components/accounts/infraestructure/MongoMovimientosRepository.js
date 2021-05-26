import MongoLib from '../../../lib/mongo'

class MongoMovimientosRepository { // implement an interface
  constructor () {
    // super()
    this.collection = 'movimientos'
    this.mongoDB = new MongoLib()
  }

  async add (movimientos) {
    const id = await this.mongoDB.create(this.collection, movimientos)
    return { id, ...movimientos }
  }

  async update ({ id, movimientos }) {
    return this.mongoDB.update(this.collection, id, movimientos)
  }

  async delete ({ id }) {
    return this.mongoDB.delete(this.collection, id)
  }

  async getAll () {
    return await this.mongoDB.getAll(this.collection)
  }
  async getOne ({id}) {
    return await this.mongoDB.get(this.collection,id)
  }
  async getByNumero ({numero}) {
    return await this.mongoDB.getAll(this.collection,null,{numero})
  }
}

export default MongoMovimientosRepository