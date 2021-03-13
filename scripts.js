// Task #1
let item1 = prompt("Enter the first grocery item:")
let quantity1 = Number(prompt(`How many ${item1} would you like?`))
let item2 = prompt("Enter the second grocery item:")
let quantity2 = Number(prompt(`How many ${item2} would you like?`))
let item3 = prompt("Enter the third grocery item:")
let quantity3 = Number(prompt(`How many ${item3} would you like?`))

console.log('Shopping List:')
console.log(`${quantity1} ${item1}
${quantity2} ${item2}
${quantity3} ${item3}`)
console.log(`Total number of items: ${quantity1+quantity2+quantity3}`)


// Task #2
let tongueTwister = "How much wood would a woodchuck chuck, if the woodchuck could chuck wood?";
let pangram = "The quick brown fox jumps over the lazy dog.";
let anotherPangram = "The five boxing wizards jump quickly.";

let tongueTwisterLowered = tongueTwister.toLowerCase()
console.log(tongueTwisterLowered)

let index = pangram.indexOf("fox")
console.log(pangram.charAt(index).toUpperCase())

console.log(anotherPangram[10])