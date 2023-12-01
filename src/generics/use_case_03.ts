(() => {
type User = {
  age: number
  id: number
  name: string
}

type Product = {
  id: number
  name: string
  price: number
}

const users = [
  { id: 2, age: 8, name: 'John' },
  { id: 3, age: 24, name: 'Alex' },
  { id: 1, age: 30, name: 'Carol' },
]

const products = [
  { id: 2, name: 'Potato', price: 3.20 },
  { id: 3, name: 'Cucumber', price: 4.10 },
  { id: 1, name: 'Onion', price: 5.00 },
]


// Without generic. Specific class by list type
class UserQueue {
  private data: Array<User> = []
  push(item: User) { this.data.push(item) }
  pop(): User | undefined { return this.data.shift() }
}

const userQueueWithoutGeneric = new UserQueue()
users.forEach(user => userQueueWithoutGeneric.push(user))
console.log(userQueueWithoutGeneric.pop())

class ProductQueue {
  private data: Array<Product> = []
  push(item: Product) { this.data.push(item) }
  pop(): Product | undefined { return this.data.shift() }
}

const productQueueWithoutGeneric = new ProductQueue()
products.forEach(product => productQueueWithoutGeneric.push(product))
console.log(productQueueWithoutGeneric.pop())


// With generic
class Queue<T> {
  private data: Array<T> = []
  push(item: T) { this.data.push(item) }
  pop(): T | undefined { return this.data.shift() }
}

const userQueueWithGeneric: Queue<User> = new Queue()
users.forEach(user => userQueueWithGeneric.push(user))
console.log(userQueueWithGeneric.pop())

const productQueueWithGeneric: Queue<Product> = new Queue()
products.forEach(product => productQueueWithGeneric.push(product))
console.log(productQueueWithGeneric.pop())

})()