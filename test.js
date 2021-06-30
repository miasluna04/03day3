const myName = "Mia"

console.log('Hello ' + myName)


function isDrinkingAge(age) {
    if (age < 21) {
        return console.log('Not Drinking Age')
    } else {
        return console.log('Legal Drinking Age')
    }

}

let userAge = 19
isDrinkingAge(userAge)