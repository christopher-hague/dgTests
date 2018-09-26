const allVowels = (str) => {
    // your code here
    let vowels = "aeiou".split("")
    let result = []
    str.split("").forEach(char => {
      if(vowels.includes(char.toLowerCase())) {
          result.push(char)
      }
    })

    return result
}

exports._test = {
    allVowels: allVowels
}