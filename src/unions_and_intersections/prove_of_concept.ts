(() => {
  type Mammal = 'lion' | 'tiger' | 'ornithorhynchus'
  type Oviparous = 'crocodile' | 'duck' | 'ornithorhynchus'
  type Union = Mammal | Oviparous // A u B
  type Intersection = Mammal & Oviparous // A n B

  const union: Union = '' // Check autocomplete
  const intersection: Intersection = '' // Check autocomplete
})()