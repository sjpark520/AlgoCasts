// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
    debugger;
  }
  return reversed;
}

reverse("asdf");
module.exports = reverse;
