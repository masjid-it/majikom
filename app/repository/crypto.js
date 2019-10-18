const crypto = require('crypto');

const hash = (text) => {
  return crypto
    .createHmac('sha256', process.env.KEY)
    .update(text)
    .digest('hex');
};

const compare = (text, hashed) => {
  return hash(text) === hashed;
};

module.exports = {
  hash,
  compare,
};
