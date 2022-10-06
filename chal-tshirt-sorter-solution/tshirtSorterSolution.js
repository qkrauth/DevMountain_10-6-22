// Write your solution below:

// Solution 1:
function tshirtSorter(str) {
  let small = ""
  let medium = ""
  let large = ""

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "s") {
      small += "s"
    } else if (str[i] === "m") {
      medium += "m"
    } else {
      large += "l"
    }
  }
  return small + medium + large
}
console.log(tshirtSorter("smlsmlsml"));

// Solution 2:
function tshirtSorter(str) {
  // splits the string into a array of characters
  // sorts the array (alphabetically automatiically)
  // reverses the now sorted array (which happens to give us the order we need)
  // rejoins the elements into a single string
  return str.split("").sort().reverse().join("")
}
console.log(tshirtSorter("smlsmlsml"));