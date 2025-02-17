const reverseString = function (string) {
  let stringToArr = string.split("");

  stringToArr.reverse();

  return stringToArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
