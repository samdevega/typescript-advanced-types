(() => {
type Cat = {
  name: string
  meow: () => void
}
type Dog = {
  name: string
  bark: () => void
}
type Person = {
  name: string
  speak: () => void
}
type Creature = Cat | Dog | Person

const isCat = (creature: Creature): creature is Cat => {
  return 'meow' in creature
}
const isDog = (creature: Creature): creature is Dog => {
  return 'bark' in creature
}
const isPerson = (creature: Creature): creature is Person => {
  return 'speak' in creature
}

function saySomething(creature: Creature): void {
  if (isCat(creature)) {
    creature.meow()
    return
  }
  if (isDog(creature)) {
    creature.bark()
    return
  }
  if (isPerson(creature)) {
    creature.speak()
    return
  }
  throw new Error('Creature case not implemented!')
}

})()