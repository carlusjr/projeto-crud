const bcrypt = require("bcrypt");

async function crypto( password ) {
  const hash = await bcrypt.hash(password, 10);
  return hash;
}

module.exports = { crypto };