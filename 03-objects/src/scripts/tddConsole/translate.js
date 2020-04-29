translate = function (what, sourceLanguage, targetLanguage) {
    // environment
    let phrases = [
       {"lang": "en", "words": { "greet": "Hello", "farewell": "Goodbye"}},
       {"lang": "de", "words": { "greet": "Hallo", "farewell": "Auf wiedersehen"}},
       {"lang": "es", "words": { "greet": "Hola", "farewell": "Hasta luego"}},
       {"lang": "pt", "words": { "greet": "Olá", "farewell": "Tchau"}},
       {"lang": "it", "words": { "greet": "Ciao", "farewell": "Addio"}}
    ]

    // logic
    let result = null
    let keyWeNeed = null
    // console.log (what, language)
    for (somelanguage of phrases) {
       // console.log('Next language is', somelanguage)
       if (somelanguage.lang === sourceLanguage) {
          // console.log('Oh! I found my language', somelanguage)
          for (wordKey in somelanguage.words) {
             // console.log('Checking', somelanguage.words[wordKey], what)
             if (somelanguage.words[wordKey] === what) {
                // console.log('And here is the word')
                // console.log(somelanguage.words[wordKey])
                keyWeNeed = wordKey
                break
             }
          }
          // console.log("The word i'm looking for is", somelanguage.words[what])
          break
       } else {
          // console.log('Nope, that is not what I want')
       }
    }
    // now that we have the key, we can translate
    
    for (somelanguage of phrases) {
       if (somelanguage.lang === targetLanguage) {
          result = somelanguage.words[keyWeNeed]
          break
       }
    }
    return result
}