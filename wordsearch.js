const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = [];
  for (let l of horizontalJoin) {
    for (let i = 0; i < l.length; i++) {
      !verticalJoin[i] ? verticalJoin[i] = l[i] : verticalJoin[i] += l[i];
    }
    if (l.includes(word)) return true;
  }

  for (let el of verticalJoin) {
    if (el.includes(word)) return true;
  }
  
  return false;
};

module.exports = wordSearch;