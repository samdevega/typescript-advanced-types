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


// Without generic
// Specific function per property
function sortUsersByName(users: User[]): User[] {
  const sorted = [ ...users ]
  sorted.sort((a, b) => {
    return a.name > b.name ? 1 : a.name < b.name ? -1 : 0
  })
  return sorted
}

console.log('sortUsersByName:', sortUsersByName(users))

// Using keyof
function sortUsersBy(users: User[], field: keyof User): User[] {
  const sorted = [ ...users ]
  sorted.sort((a, b) => {
    return a[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0
  })
  return sorted
}

console.log('sortUsersBy:', sortUsersBy(users, 'age')) // Check autocomplete

const products = [
  { id: 2, name: 'Potato', price: 3.20 },
  { id: 3, name: 'Cucumber', price: 4.10 },
  { id: 1, name: 'Onion', price: 5.00 },
]

function sortProductsBy(products: Product[], field: keyof Product): Product[] {
  const sorted = [ ...products ]
  sorted.sort((a, b) => {
    return a[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0
  })
  return sorted
}

console.log('sortProductsBy:', sortProductsBy(products, 'name')) // Check autocomplete


// With generic
function sortBy<T, K extends keyof T>(list: T[], field: K): T[] {
  const sorted = [ ...list ]
  sorted.sort((a, b) => {
    return a[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0
  })
  return sorted
}

console.log('sortBy:', sortBy(users, 'age')) // Check autocomplete
console.log('sortBy:', sortBy(products, 'price')) // Check autocomplete

function reverseBy<T, K extends keyof T>(list: T[], field: K): T[] {
  return sortBy(list, field).reverse()
}

console.log('reverseBy:', reverseBy(users, 'age')) // Check autocomplete
console.log('reverseBy:', reverseBy(products, 'price')) // Check autocomplete

})()