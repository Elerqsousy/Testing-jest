const capitalize = (string) => {
  const loweredString = string.toLowerCase();
  return string.charAt(0).toUpperCase() + loweredString.slice(1);
};

module.exports = capitalize;