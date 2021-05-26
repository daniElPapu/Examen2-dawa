import MongoLib from '../../../lib/mongo'

class MongoAccountsRepository { // implement an interface
  constructor () {
    // super()
    this.collection = 'accounts'
    this.mongoDB = new MongoLib()
  }

  async add (account) {
    const id = await this.mongoDB.create(this.collection, account)
    return { id, ...account }
  }

  async update ({ id, account }) {
    return this.mongoDB.update(this.collection, id, account)
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
}

export default MongoAccountsRepository