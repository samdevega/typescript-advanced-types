(() => {
// GET: /users?page=1&limit=2
const userApiResponse = {
  "data": [
    { "email": "jane.doe@example.com", "name": "Doe, Jane" },
    { "email": "john.doe@example.com", "name": "Doe, John" },
  ],
  "total": 242,
  "page": 1,
  "limit": 2
}

// GET /books?page=1&limit=2
const bookApiResponse = {
  "data": [
    { "isbn": "3522128001", "title": "The NeverEnding Story", "author": "Ende, Michael" },
    { "isbn": "9780451524935", "title": "1984", "author": "Orwell, George" },
  ],
  "total": 3894,
  "page": 1,
  "limit": 2
}

type User = {
  email: string
  name: string
}
type Book = {
  isbn: string
  title: string
  author: string
}


// Without generics
type UserApiResponse = {
  data: User[]
  total: number
  page: number
  limit: number
}
type BookApiResponse = {
  data: Book[]
  total: number
  page: number
  limit: number
}

const typedUserApiResponseWithoutGeneric: UserApiResponse = userApiResponse
const typedBookApiResponseWithoutGeneric: BookApiResponse = bookApiResponse
console.log(typedUserApiResponseWithoutGeneric.data.at(0)?.name) // 'Doe, Jane'
console.log(typedBookApiResponseWithoutGeneric.data.at(1)?.author) // 'Orwell, George'


// With generics
type ApiResponse<T> = {
  data: T[]
  total: number
  page: number
  limit: number
}

const typedUserApiResponseWithGeneric: ApiResponse<User> = userApiResponse
const typedBookApiResponseWithGeneric: ApiResponse<Book> = bookApiResponse
console.log(typedUserApiResponseWithGeneric.data.at(0)?.name) // 'Doe, Jane'
console.log(typedBookApiResponseWithGeneric.data.at(1)?.author) // 'Orwell, George'

})()