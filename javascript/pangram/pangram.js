//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  if(typeof sentence !== "string" || sentence === '') {
    return false;
  }else {
    sentence = sentence.toLowerCase();
    var pattern = /([a-z])(?!.*\1)/g;
    var matchedPattern = sentence.match(pattern);
    return (matchedPattern.length === 26 ? true : false);

  }
  
};
