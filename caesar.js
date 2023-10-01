const clamp = function(beginning, end, offset) {
  const range = end - beginning;
  return e => {
    if (e === 32) return e; //special case for space

    const offsetNum = (e + offset);
    
    if (offsetNum > end) {
      return beginning + (offsetNum - end);
    }

    if (offsetNum < beginning) {
      return end - (beginning - offsetNum);
    }

    return offsetNum;
  };
}

const toCodePointArray = function(plaintext) {
  const newArray = [];
  for (let i = 0; i < plaintext.length; i++) {
    newArray.push(plaintext.codePointAt(i));
  }
  return newArray;
}

const simpleClamp = function(offset) {
  return e => {
    if (e === 32) return e;

    const adjusted = e + offset;

    if (adjusted > 122) return 98 + (124 - adjusted);
    if (adjusted < 97)  return 123 - (97 - adjusted);

    return adjusted;
  }
}

const encrypt = function(plaintext, key) {
  // IMPLEMENT ME
  const codePoints = toCodePointArray(plaintext);
  const offsetCodePoints = codePoints.map(simpleClamp(key));
  //console.log(offsetCodePoints);
  const encrypted = String.fromCodePoint(...offsetCodePoints);
  console.log(encrypted);
  return encrypted;
};

module.exports = { encrypt };