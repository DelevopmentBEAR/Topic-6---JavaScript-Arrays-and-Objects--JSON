// Create an object - contains properties
// Properties are name: value pairs
let user = {username: 'Berit', password: 'password123'}

console.log(user.username) // Berit
console.log(user['username']) // Berit
console.log(user.password) // password123
console.log(user['password']) // password123

let whatProperty = 'password'
console.log(user[whatProperty]) // password123

let usernameProperty = 'username'
console.log(user[usernameProperty]) // Berit