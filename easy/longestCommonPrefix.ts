function longestCommonPrefix(strs: string[]): string {
    let firstWord = strs.sort((a, b) => {
          return a.length - b.length;
      })[0];
    for(let i=0; i < strs.length; i++) {
        const nextWord = strs[i];
        for(let j=0; j < nextWord.length; j++) {
            console.log(nextWord);
            if(firstWord[j] !== nextWord[j] ) {
                firstWord = firstWord.slice(0, j);
                break;
            }
        }
    }
    return firstWord;
};