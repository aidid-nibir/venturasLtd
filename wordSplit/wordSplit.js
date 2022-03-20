
function WordSplit(strArr) {
    let wordToCompare = strArr[0]
    let stringDictionary = strArr[1]
    let singleStrings = stringDictionary.split(',')
    let answerWords = ""

    singleStrings.map((firstWord) => {
        let splitMainWordArray = wordToCompare.split(firstWord)
        if (splitMainWordArray.length > 0) {
            splitMainWordArray.map((word) => {
                let joinedWord = firstWord + word
                let reversedWord = [joinedWord].reverse().toString()
                if (joinedWord === wordToCompare || reversedWord === wordToCompare) {
                    answerWords = "" + firstWord + ", " + word + ""
                } else {
                    return 'Not Possible'
                }
            })
        }
    })
    return answerWords
}
console.log(WordSplit(["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]));