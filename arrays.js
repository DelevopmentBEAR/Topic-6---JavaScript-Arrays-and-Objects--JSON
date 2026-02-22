let animals = ['Duck', 'Bear', 'Squirrel']
console.log(animals) // [ 'Duck', 'Bear', 'Squirrel' ]

// Access elements by index
console.log(animals[0]) // Duck
let first_animal = animals[0] // first_animal is now 'Duck'

// Modify elements by index
animals[2] = 'Mouse' // Change the value at index 2 to 'Mouse'
console.log(animals) // [ 'Duck', 'Bear', 'Mouse' ]

console.log('-----------') // Separator for clarity

// Array vairable (like a list in Python)
let quiz_scores = [100, 78, 93, 81, 100, 99]
console.log(quiz_scores) // [ 100, 78, 93, 81, 100, 99 ]

// Will crash with mixed type array, but can be done if needed. Not recommended.

// Another array. Cab mix types if needed, but usually not recommended.
// let my_array = [5, 6, 'cake', 1234.124, text, true]

//print whole array
//console.log(my_array) // [ 5, 6, 'cake', 1234.124, 'hello world', true ]

// Read individual elements by index
// console.log(my_array[0]) // 5
// console.log(my_array[2]) // cake
// console.log(my_array[4]) // hello world

// Modify elements by index
// my_array[1] = 42 // Change the value at index 1 to 42
// my_array[4] = 'pizza' // Change the value at index 4 to 'pizza'
// console.log(my_array) // [ 5, 42, 'cake', 1234.124, 'pizza', true ]

console.log('-----------') // Separator for clarity

let new_animals = ['Lion', 'Tiger', 'Cheetah']
console.log(new_animals) // [ 'Lion', 'Tiger', 'Cheetah' ]
console.log(new_animals[1]) // Tiger
console.log(new_animals[1000]) // undefined - index out of bounds, no error but returns undefined

new_animals[6] = 'Giraffe' // Add a new element at index 6, creates empty slots at index 3, 4, and 5
console.log(new_animals) // [ 'Lion', 'Tiger', 'Cheetah', <3 empty items>, 'Giraffe' ]
console.log(new_animals[5]) // undefined - empty slot

new_animals[1] = 'Zebra' // Modify existing element at index 1
console.log(new_animals) // [ 'Lion', 'Zebra', 'Cheetah', <3 empty items>, 'Giraffe' ]

new_animals.push('Elephant') // Add a new element to the end of the array
console.log(new_animals) // [ 'Lion', 'Zebra', 'Cheetah', <3 empty items>, 'Giraffe', 'Elephant' ]

new_animals.unshift('Deer') // Add a new element to the beginning of the array
console.log(new_animals) // [ 'Deer', 'Lion', 'Zebra', 'Cheetah', <3 empty items>, 'Giraffe', 'Elephant' ]

new_animals.shift() // Remove the first element of the array
console.log(new_animals) // [ 'Lion', 'Zebra', 'Cheetah', <3 empty items>, 'Giraffe', 'Elephant' ]

new_animals.pop() // Remove the last element of the array
console.log(new_animals) // [ 'Lion', 'Zebra', 'Cheetah', <3 empty items>, 'Giraffe' ]

new_animals.reverse() // Reverse the order of the array
console.log(new_animals) // [ 'Giraffe', <3 empty items>, 'Cheetah', 'Zebra', 'Lion' ]

new_animals.sort() // Sort the array in place (alphabetically for strings)
console.log(new_animals) // [ 'Cheetah', 'Giraffe', 'Lion', 'Zebra', <3 empty items> ]

new_animals[3] = 'Panda' // Add a new element at index 3, fills in one of the empty slots
new_animals[4] = 'Koala' // Add a new element at index 4, fills in another empty slot
new_animals[5] = 'Monkey' // Add a new element at index 5, fills in the last empty slot
new_animals[6] = 'Elephant' // Add a new element at index 6, adds to the end of the array
console.log(new_animals) // [ 'Cheetah', 'Giraffe', 'Lion', 'Panda', 'Koala', 'Monkey' ]

let numberOfAnimals = new_animals.length // Get the length of the array
console.log('Number of animals:', numberOfAnimals) // Number of animals: 5 (empty slots are counted in length)

console.log(new_animals.indexOf('Panda')) // 3 - index of the first occurrence of 'Panda'
console.log(new_animals.indexOf('Elephant')) // 6 - index of the first occurrence of 'Elephant'
console.log(new_animals.indexOf('Dragon')) // -1 - 'Dragon' is not found in the array

if (new_animals.indexOf('Panda') == -1) {
    console.log('Panda is not in the array!')
} else {
    console.log('Panda is in the array.')
}
// Panda is in the array!

if (new_animals.indexOf('Dragon') == -1) {
    console.log('Dragon is not in the array!')
}
// Dragon is not in the array!

console.log(new_animals.join(', ')) // Join the array elements into a string separated by ', '
// Cheetah, Giraffe, Lion, Panda, Koala, Monkey, Elephant

new_animals.forEach(function(animal, index) {
  console.log(index, animal.toUpperCase())
})
// 0 CHEETAH
// 1 GIRAFFE
// 2 LION
// 3 PANDA
// 4 KOALA
// 5 MONKEY
// 6 ELEPHANT

new_animals.forEach(function(animal, index) {
  console.log('Animal number ' + index + ': ' + 'Length: ' + animal.length)
})  
// Animal number 0: Length: 7
// Animal number 1: Length: 8
// Animal number 2: Length: 4
// Animal number 3: Length: 5
// Animal number 4: Length: 5
// Animal number 5: Length: 6
// Animal number 6: Length: 8

// The forEach method is a higher-order function that takes a callback function and executes it once for each element in the array.
new_animals.push('Alligator') // Add a new element to the end of the array
console.log(new_animals) // [ 'Cheetah', 'Giraffe', 'Lion', 'Panda', 'Koala', 'Monkey', 'Elephant', 'Alligator' ]

let animalNameLength = []
new_animals.forEach(function(animal) {
  animalNameLength.push(animal.length) // Add the length of each animal name to the animalNameLength array
})
console.log(animalNameLength) // [ 7, 8, 4, 5, 5, 6, 8, 9 ]

// The map method creates a new array by applying a function to each element of the original array.
animalNumbers = new_animals.map(function(animal) {
  return animal.length
})

console.log(animalNumbers) // [ 7, 8, 4, 5, 5, 6, 8, 9 ] 


console.log('-----------') // Separator for clarity