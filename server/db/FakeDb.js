class FakeDB {
  create(collection, body) {
    this[collection].push(body)
  }
  knights = []
}

export const fakeDb = new FakeDB()