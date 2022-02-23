const stringLength = (string) => {
  const count = string.length;
  if (count === 0) {
    throw new Error("sting can't be empty");
  } else if (count > 11) {
    throw new Error("sting can't be longer than 10 characters");
  } else {
    return count;
  }
};

module.exports = stringLength;
