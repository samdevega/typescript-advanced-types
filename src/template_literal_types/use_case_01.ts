type Getters<State> = {
  [K in keyof State & string as `get${Capitalize<K>}`]: () => State[K]
}

type Setters<State> = {
  [K in keyof State & string as `set${Capitalize<K>}`]: (value: State[K]) => void
}


// Use case
type Store<State> = Setters<State> & Getters<State>
type PersonState = {
  age: number
  name: string
}
type PersonStore = Store<PersonState>

declare const personStore: PersonStore
personStore.setAge(30)
personStore.setName('John')
console.log(personStore.getAge()) // 30
console.log(personStore.getName()) // 'John'