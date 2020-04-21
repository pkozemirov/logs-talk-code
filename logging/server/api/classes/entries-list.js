class EntriesList {
  constructor () {
    this.list = []
  }

  add (entry) {
    entry.id = this.getNextId()
    this.list.push(entry)
    return entry
  }

  get () {
    return this.list
  }

  remove (id) {
    const entry = this.list.find(({ id: entryId }) => id === entryId)
    const index = this.list.indexOf(entry)
    this.list.splice(index, 1)
  }

  getNextId () {
    const nextId = (
      this.list.length &&
      Math.max(...this.list.map(({ id }) => Number(id)))
    ) + 1
    return nextId.toString()
  }
}

module.exports = EntriesList
