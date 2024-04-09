const bcrypt = require("bcrypt");

const hashPass = async (txt) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(txt, 10, (err, hash) => {
      if (err) {
        reject(err);
      } else {
        resolve(hash);
      }
    });
  });
};

const authHash = async (txt, hash) => {
  try {
    const result = await new Promise((resolve, reject) => {
      bcrypt.compare(txt, hash, function (err, result) {
        if (err) {
          reject("Incorrect Password");
        } else {
          resolve(result); // Resolve with the result of comparison
        }
      });
    });

    return result; // Return the result from the promise
  } catch (error) {
    throw error; // Throw any errors that occur during the comparison
  }
};

module.exports = { hashPass, authHash };
