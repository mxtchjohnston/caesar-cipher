const toCodePointArray = function(plaintext) {
  const newArray = [];
  for (let i = 0; i < plaintext.length; i++) {
    newArray.push(plaintext.codePointAt(i));
  }
  return newArray;
}

const clamp = function(beginning, end, offset) {
  const range = end - beginning;
  return e => {
    if (e === 32) return e; //special case for space

    const offsetNum = (e + offset);
    if (offset + e > end) {
      return beginning + (offsetNum % range);
    }

    if (offset + e < beginning) {
      return end + (offset % range);
    }

    return offsetNum;
  };
} 

const encrypt = function(plaintext, key) {
  // IMPLEMENT ME
  const codePoints = toCodePointArray(plaintext);
  const offsetCodePoints = codePoints.map(clamp(97, 122, key));
  //console.log(offsetCodePoints);
  const encrypted = String.fromCodePoint(...offsetCodePoints);
  console.log(encrypted);
  return encrypted;
};

module.exports = { encrypt };