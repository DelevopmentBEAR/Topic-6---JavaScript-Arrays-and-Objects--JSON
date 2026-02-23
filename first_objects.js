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

user.password = 'newpassword456'
console.log(user.password) // newpassword456

user['password'] = 'anotherpassword789'
console.log(user.password) // anotherpassword789

user.email = 'berit.haugen@mctc.edu'
console.log(user.email) // berit.haugen@mctc.edu

var user2 = {
    username: 'Sven',
    password: 'svenpassword',
    userid: 1,
    roles: ['admin', 'editor'], // roles value is an array
    contact: {                  // contact value is another object
        phone: '555-1234',
        office: '123 Main St'
    }
}

user2.userid = 2
console.log(user2) // { username: 'Sven', password: 'svenpassword', userid: 2, roles: [ 'admin', 'editor' ], contact: { phone: '555-1234', office: '123 Main St' } }

console.log('User2 roles: ' + user2.roles) // User2 roles: admin,editor
console.log('User2 roles: ' + user2['roles']) // User2 roles: admin,editor
console.log('User2 first role: ' + user2.roles[0]) // User2 first role: admin

// All of the user2's roles
console.log('All of user2\'s roles: ') 
user2.roles.forEach(function(role) {
    console.log(role)
})

user2.contact.office = '456 Elm St' // Change office
console.log('User2 contact office: ' + user2.contact.office) // User2 contact office: 456 Elm St

console.log('User2 phone number is: ' + user2.contact.phone) // User2 phone number is: 555-1234

// Add another attribute to the contact object - even though it doesn't exist yet
user2.contact.email = 'sven@company.com'
console.log(user2) // { username: 'Sven', password: 'svenpassword', userid: 2, roles: [ 'admin', 'editor' ], contact: { phone: '555-1234', office: '456 Elm St', email: 'sven@company.com' } }

let user3 = {
    name: 'Berit',
    email: 'berithaugen23@gmail.com',
    password: 'beritpassword',
    roles: ['software developer', 'server admin'],
    contact: {
        location: 'Minneapolis',
        phone: '555-6789'
    }, 
}
user3.salary = 75000
console.log(user3) // { name: 'Berit', email: 'berithaugen23@gmail.com', password: 'beritpassword', roles: [ 'software developer', 'server admin' ], contact: { location: 'Minneapolis', phone: '555-6789' }, salary: 75000 }

for (let name in user) {
    console.log(name, user[name])
}

console.log(user.username) // Berit
console.log(user['username']) // Berit