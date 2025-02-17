let string = "";
const repeatString = (keyword, repeat) => {
  if (repeat < 0) {
    string = "ERROR";
  } else if (repeat === 0) {
    string = "";
  }

  for (let i = 1; i <= repeat; i++) {
    string = string + keyword;
  }
  return string;
};

// repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
