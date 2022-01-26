
const strA = "a";
const strB = "123";

function zipStrings(word1, word2) {
  const w1 = new String(word1);
  const w2 = new String(word2);
  // Add you solution here
  let neueWort = "";

  const dist = w1.length + w2.length;

    for (let i = 0; i <= dist; i++) {

      if (w1[i] && w2[i]) neueWort = neueWort + w1[i].concat(w2[i]);
       
      else if (w1[i] && !w2[i]) neueWort = neueWort.concat(w1[i]);
      
      else if (!w1[i] && w2[i]) neueWort = neueWort.concat(w2[i]);

      else if(!w1 && !w2) return neueWort;
      // neueWort += w1[i] + w2[i];
    }
    return neueWort;
  }


console.log("Final text: ", zipStrings(strA, strB));