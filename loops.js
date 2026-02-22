let birds = ['Owl', 'Robin', 'Eagle']
console.log(birds) // [ 'Owl', 'Robin', 'Eagle' ]

// The forEach method is a more concise and readable way to iterate over an array compared to a traditional for loop. 
// It abstracts away the index management and allows you to focus on the logic you want to apply to each element in the array.
birds.forEach(function(bird, index) {
  console.log(index, bird.toUpperCase())
})
// 0 OWL
// 1 ROBIN
// 2 EAGLE

console.log('-----------') // Separator for clarity

// Classic for loop in Java, C, and other languages
for (let i = 0; i < birds.length; i++) {
    let bird = birds[i]
  console.log(i, bird.toLowerCase())
}
// 0 owl
// 1 robin
// 2 eagle

// Either way works, but the forEach method is often preferred in JavaScript for its simplicity and readability.

console.log('-----------') // Separator for clarity

// A while loop to double a number and display it
// Stop when a number exceeds 100 is reached
let maxVal = 100;
let num = 1;
while (num <= maxVal) {
    num *= 2; // Double the number
  console.log('Number =', num);
  
}
// Number = 2
// Number = 4
// Number = 8
// Number = 16
// Number = 32
// Number = 64

console.log('-----------') // Separator for clarity

let text = 'hello world';

let stringLength = text.length; // Length is a property

let shout = text.toUpperCase(); // These are methods - convert to uppercase

let whisper = text.toLowerCase(); // Convert to lowercase

let whereIsW = text.indexOf('w'); // Index of first matching character or -1 if not found

let whereIsZ = text.indexOf('z'); // -1 because 'z' is not found

let whisperAndShout = whisper.concat(shout); // Combine the two strings

// Another example of replacing text in a string. 
let classText = 'The classes are itec 1150, itec 1250, and itec 2560.';

let replaced = classText.replace('itec', 'ITEC'); // Replace first occurrence of 'itec' with 'ITEC'
console.log('Only the first instance is replaced: ' + replaced) // The classes are ITEC 1150, itec 1250, and itec 2560.

let replacedAll = classText.replace(/itec/g, 'ITEC'); // Replace all occurrences of 'itec' with 'ITEC' using a regular expression
console.log('All instances replaced: ' + replacedAll) // The classes are ITEC 1150, ITEC 1250, and ITEC 2560.

console.log('-----------') // Separator for clarity

let replace0 = text.replace('o', '0'); // Replace first occurrence of 'o' with '0'
                                    // See reference for more info on this, can also do global
                                    // and more complex replacements with regular expressions.

let replaceAll0 = text.replace(/o/g, '0'); // Replace all occurrences of 'o' with '0'

let removeWhitespace = text.trim(); // Remove whitespace from both ends of the string

console.log ('Original text: ' + text) // Original text: hello world
console.log ('Text length: ' + stringLength) // Text length: 11
console.log ('Shout: ' + shout) // Shout: HELLO WORLD
console.log ('Whisper: ' + whisper) // Whisper: hello world
console.log ('Index of "w": ' + whereIsW) // Index of "w": 6
console.log ('Index of "z": ' + whereIsZ) // Index of "z": -1
console.log ('Whisper and Shout: ' + whisperAndShout) // Whisper and Shout: hello worldHELLO WORLD
console.log ('Replace first "o" with "0": ' + replace0) // Replace first "o" with "0": hell0 world
console.log ('Replace all "o" with "0": ' + replaceAll0) // Replace all "o" with "0": hell0 w0rld
console.log ('Remove whitespace: ' + removeWhitespace) // Remove whitespace: hello world

console.log('-----------') // Separator for clarity