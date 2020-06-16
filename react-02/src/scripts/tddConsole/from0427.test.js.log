test('From 0427', () => {

    const song = [
    "a partridge in a pear tree",
    "two turtle doves",
    "three French hens",
    "four calling birds",
    "five golden rings",
    "six geese a-laying",
    "seven swans a-swimming",
    "eight maids a-milking",
    "nine ladies dancing",
    "ten lords a-leaping",
    "eleven pipers piping",
    "twelve drummers drumming"
    ]
    expect(song[0]).toBe["a partridge in a pear tree"];
    expect(song[11]).toBe["twelve drummers drumming"];

    let names = ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "George", "Hotel"];
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

    let word = "CAB";

    function spellOut (value) {
        let result = "";
        for (let i=0; i < value.length; i++) {
            let letter = value[i];
            testOutput[testOutputLine++] = "My letter is " + letter;
            let index = letters.findIndex ( element => element === letter );
            testOutput[testOutputLine++] = "Index of this letter is " + index;
            let word = names[index];
            testOutput[testOutputLine++] = "Word is " + word;
            result = result + word + " ";
        }
        return result;
    }

    let testOutput = [];
    let testOutputLine = 0;
    
    // let spellResult = spellOut ("CAB");
    let spellResult = spellOut (word);
    
    expect(testOutput[0]).toBe("My letter is C");
    expect(testOutput[1]).toBe("Index of this letter is 2");
    expect(testOutput[2]).toBe("Word is Charlie");
    expect(testOutput[3]).toBe("My letter is A");
    expect(testOutput[4]).toBe("Index of this letter is 0");
    expect(testOutput[5]).toBe("Word is Alpha");
    expect(testOutput[6]).toBe("My letter is B");
    expect(testOutput[7]).toBe("Index of this letter is 1");
    expect(testOutput[8]).toBe("Word is Bravo");
    
    expect(spellResult).toBe("Charlie Alpha Bravo ");
    
    // Remove the G word to show risk of using arrays in future updates and
    // human error
    
    names = ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Hotel"];
    
    testOutput = [];
    testOutputLine = 0;
    
    spellResult = spellOut ("GEF");
    
    // Results expected would be "George Echo Foxtrot"
    // expect(spellResult).toBe("George Echo Foxtrot ");
    // But actually receive
    
    expect(spellResult).toBe("Hotel Echo Foxtrot ");
    
    // arrays should be same length
    // expect(names.length === letters.length).toBeTruthy();
    // But actually receive
    
    expect(names.length === letters.length).toBeFalsy();
    
    names.push("George");
    
    // "George" added back in but in wrong order.
    // Not all tests would detect the error as following are true
    // and accurate, but still an error.
    
    expect(names.length === letters.length).toBeTruthy();
    expect(names.includes("George")).toBeTruthy();
    expect(letters.includes("G")).toBeTruthy();
    
    testOutput = [];
    testOutputLine = 0;
    
    spellResult = spellOut ("GHEC");
    
    // Results expected would be "George Hotel Echo Charlie"
    // expect(spellResult).toBe("George Hotel Echo Charlie");
    // But actually receive
    
    expect(spellResult).toBe("Hotel George Echo Charlie ");

    expect(testOutput[0]).toBe("My letter is G");
    expect(testOutput[1]).toBe("Index of this letter is 6");
    expect(testOutput[2]).toBe("Word is Hotel");
    expect(testOutput[3]).toBe("My letter is H");
    expect(testOutput[4]).toBe("Index of this letter is 7");
    expect(testOutput[5]).toBe("Word is George");

    let superAlphabet = { 
        "A": "Alpha", "B": "Bravo", "C": "Charlie", "D": "Delta", 
        "E": "Echo", "F": "Foxtrot", "G": "George", "H":"Hotel"}

    // Dictionary key : value pairs

    expect(superAlphabet).toEqual({ 
        "A": "Alpha", "B": "Bravo", "C": "Charlie", "D": "Delta", 
        "E": "Echo", "F": "Foxtrot", "G": "George", "H":"Hotel"});

    expect(superAlphabet["A"]).toBe("Alpha");
    expect(superAlphabet.A).toBe("Alpha");
    
    // case sensitive so lower case results undefined
    
    expect(superAlphabet.a).toBeUndefined();

    let requiredKey = "F";
    expect(superAlphabet[requiredKey]).toBe("Foxtrot");
    
    // The following are invalid references and will
    // result in errors: Syntax or result in undefined.
    //
    // expect(superAlphabet[0]).toBe("Alpha");
    // expect(superAlphabet.requiredKey).toBe("Foxtrot");
    
    expect(superAlphabet[0]).toBeUndefined();

    // Better to use a dictionary within an array, mostly so you can use
    // all the functions available for array.

    let ultraAlphabet = [
        {"Letter": "A", "Word": "Alpha"},
        {"Letter": "B", "Word": "Bravo"}, 
        {"Letter": "C", "Word": "Charlie"}, 
        {"Letter": "D", "Word": "Delta"}, 
        {"Letter": "E", "Word": "Echo"}, 
        {"Letter": "F", "Word": "Foxtrot"}, 
        {"Letter": "G", "Word": "Golf"}, 
        {"Letter": "H", "Word": "Hotel"}];
        
    expect(ultraAlphabet.length).toBe(8);
    expect(ultraAlphabet[0]).toEqual({"Letter": "A", "Word": "Alpha"});
    expect(ultraAlphabet[7]).toEqual({"Letter": "H", "Word": "Hotel"});
        
    ultraAlphabet = [
        {"Letter": "A", "Word": "Alpha", "GermanWord": "Anton"},
        {"Letter": "B", "Word": "Bravo", "GermanWord": "Berta"}, 
        {"Letter": "C", "Word": "Charlie", "GermanWord": "Cäsar"}, 
        {"Letter": "D", "Word": "Delta", "GermanWord": "Dora"}, 
        {"Letter": "E", "Word": "Echo", "GermanWord": "Emil"}, 
        {"Letter": "F", "Word": "Foxtrot", "GermanWord": "Friedrich"}, 
        {"Letter": "G", "Word": "Golf", "GermanWord": "Gustav"}, 
        {"Letter": "H", "Word": "Hotel", "GermanWord": "Heinrich"}];

    expect(ultraAlphabet[0]).toEqual({"Letter": "A", "Word": "Alpha", "GermanWord": "Anton"});

    // Equivalent Dictionary multi-level without arrays.

    let superAltAlphabet = {
        "A": {"English": "Alpha", "German": "Anton"},
        "B": {"English": "Bravo", "German": "Berta"}, 
        "C": {"English": "Charlie", "German": "Cäsar"}, 
        "D": {"English": "Delta", "German": "Dora"}, 
        "E": {"English": "Echo", "German": "Emil"}, 
        "F": {"English": "Foxtrot", "German": "Friedrich"}, 
        "G": {"English": "Golf", "German": "Gustav"}, 
        "H": {"English": "Hotel", "German": "Heinrich"}}

    expect(superAltAlphabet["A"]).toEqual({"English": "Alpha", "German": "Anton"});
    expect(superAltAlphabet.A.English).toBe("Alpha");
    expect(superAltAlphabet.A.German).toBe("Anton");
    
    expect(superAltAlphabet[requiredKey].German).toBe("Friedrich");

    let languageKey = "German";
    expect(superAltAlphabet[requiredKey][languageKey]).toBe("Friedrich");

    //

    let germanNames = ["Anton", "Ärger", "Berta", "Cäsar", "Charlotte", "Dora", "Emil", "Friedrich", "Gustav", "Heinrich"];
    
    function spellOutGerman (value) {
        let result = "";
        for (let i=0; i < value.length; i++) {
            let letter = value[i];
            testOutput[testOutputLine++] = "My letter is " + letter;
            let index = letters.findIndex ( element => element === letter );
            testOutput[testOutputLine++] = "Index of this letter is " + index;
            let word = germanNames[index];
            testOutput[testOutputLine++] = "Word is " + word;
            result = result + word + " ";
        }
        return result;
    }
    
    testOutput = [];
    testOutputLine = 0;

    spellResult = spellOutGerman("CAB");
    
    // Results expected would be "Cäsar Anton Berta"
    // expect(spellResult).toBe("Cäsar Anton Berta");
    // But actually receive due to human error in keeping
    // lists. Using dictionaries it easier to see and 
    // visualize that the relationship to the key is
    // correct
    
    expect(spellResult).toBe("Berta Anton Ärger ");

    expect(testOutput[0]).toBe("My letter is C");
    expect(testOutput[1]).toBe("Index of this letter is 2");
    expect(testOutput[2]).toBe("Word is Berta");
    expect(testOutput[3]).toBe("My letter is A");
    expect(testOutput[4]).toBe("Index of this letter is 0");
    expect(testOutput[5]).toBe("Word is Anton");
    expect(testOutput[6]).toBe("My letter is B");
    expect(testOutput[7]).toBe("Index of this letter is 1");
    expect(testOutput[8]).toBe("Word is Ärger");
    
    testOutput = [];
    testOutputLine = 0;
    
    for (const letter of letters) {testOutput[testOutputLine++] = letter}
    
    expect(testOutput).toEqual(["A", "B", "C", "D", "E", "F", "G", "H"]);
    
    testOutput = [];
    testOutputLine = 0;
    
    letters.forEach (function (letter) {testOutput[testOutputLine++] = letter});
    
    expect(testOutput).toEqual(["A", "B", "C", "D", "E", "F", "G", "H"]);
    
    testOutput = [];
    testOutputLine = 0;
    
    for (const letterIndex in letters) {testOutput[testOutputLine++] = letterIndex}
    
    expect(testOutput).toEqual(["0", "1", "2", "3", "4", "5", "6", "7"]);
    
    testOutput = [];
    testOutputLine = 0;
    
    for (const letterIndex in letters) {testOutput[testOutputLine++] = letters[letterIndex]}
    
    expect(testOutput).toEqual(["A", "B", "C", "D", "E", "F", "G", "H"]);
    
    // Cannot do the following equivalent with dictionaries:
    //
    // for (const letter of superAlphabet) {testOutput[testOutputLine++] = letter}
    // superAlphabet.forEach (function (letter) {testOutput[testOutputLine++] = letter});
    //
    // Following works. But returns undefined 8 times, but probably undefined because
    // of console.log.
    //
    // for (const letterIndex in superAlphabet) {testOutput[testOutputLine++] = letters[letterIndex]}
    
    testOutput = [];
    testOutputLine = 0;
    
    for (const something in superAlphabet) {testOutput[testOutputLine++] = something}
    
    expect(testOutput).toEqual(["A", "B", "C", "D", "E", "F", "G", "H"]);

    testOutput = [];
    testOutputLine = 0;
    
    for (const something in superAlphabet) {testOutput[testOutputLine++] = superAlphabet[something]}
    
    expect(testOutput).toEqual(["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "George", "Hotel"]);

    superAlphabet.something = "What are you trying to do?";

    expect(superAlphabet.something).toBe("What are you trying to do?");
    expect(superAlphabet["something"]).toBe("What are you trying to do?");

    testOutput = [];
    testOutputLine = 0;
    
    // Code executes but is incorrect result. Showing confusion between variable 
    // "something" and key reference of ".something", and how it is not best way
    // to reference the dictionary

    for (const something in superAlphabet) {testOutput[testOutputLine++] = superAlphabet.something}
    
    expect(testOutput[0]).toEqual("What are you trying to do?");
    expect(testOutput[1]).toEqual("What are you trying to do?");
    expect(testOutput[2]).toEqual("What are you trying to do?");
    expect(testOutput[3]).toEqual("What are you trying to do?");
    expect(testOutput[4]).toEqual("What are you trying to do?");
    expect(testOutput[5]).toEqual("What are you trying to do?");
    expect(testOutput[6]).toEqual("What are you trying to do?");
    expect(testOutput[7]).toEqual("What are you trying to do?");
    expect(testOutput[8]).toEqual("What are you trying to do?");
    expect(testOutput[9]).toBeUndefined();

    testOutput = [];
    testOutputLine = 0;
    
    for (const something in superAlphabet) {testOutput[testOutputLine++] = superAlphabet[something]}
    
    expect(testOutput).toEqual(["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "George", 
        "Hotel", "What are you trying to do?"]);

    // Note human error in not fixing order of "Hotel" and "George" for demo of spellOut of "CAFE".
    // It works because those letters are not being used for that call to spellOut. Not to critisize
    // Roman, rather to enforce and support his message that arrays present that potential for human 
    // error, compared to using dictionaries.

    expect(names).toEqual(["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Hotel", "George"]);
    expect(letters).toEqual(["A", "B", "C", "D", "E", "F", "G", "H"]);

    testOutput = [];
    testOutputLine = 0;

    expect(spellOut("CAFE")).toBe("Charlie Alpha Foxtrot Echo ");

    testOutput = [];
    testOutputLine = 0;
    
    // Demonstrates ease of going between languages, but also human error potential
    // since German word array was adjusted early for different demonstration.
    
    expect(spellOutGerman("CAFE")).toBe("Berta Anton Dora Charlotte ");
    
    function spellOutDict (letter, dict) {
        let result = "";
        for (const key in dict) {
            testOutput[testOutputLine++] = "My key is " + key;
            if (key === letter) {
                result = dict[key];
            }
        }
        return result;
    }

    testOutput = [];
    testOutputLine = 0;

    spellResult = spellOutDict("F", superAlphabet);

    expect(spellResult).toBe("Foxtrot");

    expect(testOutput[0]).toBe("My key is A");
    expect(testOutput[1]).toBe("My key is B");
    expect(testOutput[2]).toBe("My key is C");
    expect(testOutput[3]).toBe("My key is D");
    expect(testOutput[4]).toBe("My key is E");
    expect(testOutput[5]).toBe("My key is F");
    expect(testOutput[6]).toBe("My key is G");
    expect(testOutput[7]).toBe("My key is H");
    expect(testOutput[8]).toBe("My key is something");

    let spell = function (letter, dict) {
        let result = "";
        testOutput[testOutputLine++] = "I am trying to find " +  letter;
        for (const key in dict) {
            testOutput[testOutputLine++] = "My key is " + key;
            if (key === letter) {
                testOutput[testOutputLine++] = "I found the right key! " + key;
                result = dict[key];
            }
        }
        return result;
    }

    
    testOutput = [];
    testOutputLine = 0;

    spellResult = spell("F", superAlphabet);

    expect(spellResult).toBe("Foxtrot");

    expect(testOutput[0]).toBe("I am trying to find F");
    expect(testOutput[1]).toBe("My key is A");
    expect(testOutput[2]).toBe("My key is B");
    expect(testOutput[3]).toBe("My key is C");
    expect(testOutput[4]).toBe("My key is D");
    expect(testOutput[5]).toBe("My key is E");
    expect(testOutput[6]).toBe("My key is F");
    expect(testOutput[7]).toBe("I found the right key! F");
    expect(testOutput[8]).toBe("My key is G");
    expect(testOutput[9]).toBe("My key is H");
    expect(testOutput[10]).toBe("My key is something");

    testOutput = [];
    testOutputLine = 0;

    for (const something of ultraAlphabet) testOutput[testOutputLine++] = something;

    expect(testOutput[0]).toEqual({"Letter": "A", "Word": "Alpha", "GermanWord": "Anton"});
    expect(testOutput[7]).toEqual({"Letter": "H", "Word": "Hotel", "GermanWord": "Heinrich"});

    testOutput = [];
    testOutputLine = 0;

    for (const something in ultraAlphabet) testOutput[testOutputLine++] = something;
    
    expect(testOutput).toEqual(["0", "1", "2", "3", "4", "5", "6", "7"]);
    
    expect(ultraAlphabet[0]).toEqual({"Letter": "A", "Word": "Alpha", "GermanWord": "Anton"});
    expect(ultraAlphabet[0].Letter).toBe("A");
    expect(ultraAlphabet[0].Word).toBe("Alpha");
    expect(ultraAlphabet[0].GermanWord).toBe("Anton");
    
    testOutput = [];
    testOutputLine = 0;
    
    for (const something of ultraAlphabet) testOutput[testOutputLine++] = something.Letter;
    
    expect(testOutput).toEqual(["A", "B", "C", "D", "E", "F", "G", "H"]);
    
    testOutput = [];
    testOutputLine = 0;
    
    for (const something of ultraAlphabet) testOutput[testOutputLine++] = something.Word;
    
    expect(testOutput).toEqual(["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel"]);

    testOutput = [];
    testOutputLine = 0;
    
    for (const something of ultraAlphabet) testOutput[testOutputLine++] = something.GermanWord;
    
    expect(testOutput).toEqual(["Anton", "Berta", "Cäsar", "Dora", "Emil", "Friedrich", "Gustav", "Heinrich"]);
    
    let language = "Word";
    
    testOutput = [];
    testOutputLine = 0;
    
    for (const something of ultraAlphabet) testOutput[testOutputLine++] = something[language];
    
    expect(testOutput).toEqual(["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel"]);
    
    language = "GermanWord";
    
    testOutput = [];
    testOutputLine = 0;
    
    for (const something of ultraAlphabet) testOutput[testOutputLine++] = something[language];
    
    expect(testOutput).toEqual(["Anton", "Berta", "Cäsar", "Dora", "Emil", "Friedrich", "Gustav", "Heinrich"]);

    // Break

    let phrases = [
        {"lang": "en", "words": {"greet": "Hello", "farewell": "Goodbye"}}, 
        {"lang": "de", "words": {"greet": "Hallo", "farewell": "Auf wierdersehen"}},
        {"lang": "es", "words": {"greet": "Hola", "farewell": "Hasta luego"}},
        {"lang": "pt", "words": {"greet": "Olá", "farewell": "Tchau"}},
        {"lang": "it", "words": {"greet": "Ciao", "farewell": "Addio"}}
    ]

    testOutput = [];
    testOutputLine = 0;

    for (const something in phrases) testOutput[testOutputLine++] = something;
    
    expect(testOutput).toEqual(["0", "1", "2", "3", "4"]);

    testOutput = [];
    testOutputLine = 0;

    for (const something in phrases[0]) testOutput[testOutputLine++] = something;
    
    expect(testOutput).toEqual(["lang", "words"]);
    
    testOutput = [];
    testOutputLine = 0;
    
    for (const something of phrases) testOutput[testOutputLine++] = something;
    
    expect(testOutput[0]).toEqual({"lang": "en", "words": {"greet": "Hello", "farewell": "Goodbye"}});
    expect(testOutput[1]).toEqual({"lang": "de", "words": {"greet": "Hallo", "farewell": "Auf wierdersehen"}});
    expect(testOutput[2]).toEqual({"lang": "es", "words": {"greet": "Hola", "farewell": "Hasta luego"}});
    expect(testOutput[3]).toEqual({"lang": "pt", "words": {"greet": "Olá", "farewell": "Tchau"}});
    expect(testOutput[4]).toEqual({"lang": "it", "words": {"greet": "Ciao", "farewell": "Addio"}});
    
    testOutput = [];
    testOutputLine = 0;
    
    for (const something of phrases) testOutput[testOutputLine++] = something.lang;
    
    expect(testOutput).toEqual(["en", "de", "es", "pt", "it"]);
    
    testOutput = [];
    testOutputLine = 0;
    
    for (const something of phrases) testOutput[testOutputLine++] = something.words;
    
    expect(testOutput[0]).toEqual({"greet": "Hello", "farewell": "Goodbye"});
    expect(testOutput[1]).toEqual({"greet": "Hallo", "farewell": "Auf wierdersehen"});
    expect(testOutput[2]).toEqual({"greet": "Hola", "farewell": "Hasta luego"});
    expect(testOutput[3]).toEqual({"greet": "Olá", "farewell": "Tchau"});
    expect(testOutput[4]).toEqual({"greet": "Ciao", "farewell": "Addio"});
    
    testOutput = [];
    testOutputLine = 0;
    
    for (const something of phrases) testOutput[testOutputLine++] = something.words.greet;

    expect(testOutput).toEqual(["Hello", "Hallo", "Hola", "Olá", "Ciao"]);

    expect(phrases[4].words.farewell).toBe("Addio");

    let utter = function (what, language) {
        testOutput[testOutputLine++] = what + " " + language}
    
    testOutput = [];
    testOutputLine = 0;
        
    utter ("greet", "it");
    
    expect(testOutput[0]).toBe("greet it");
        
    utter = function (what, language) {

        const phrases = [
            {"lang": "en", "words": {"greet": "Hello", "farewell": "Goodbye"}}, 
            {"lang": "de", "words": {"greet": "Hallo", "farewell": "Auf wierdersehen"}},
            {"lang": "es", "words": {"greet": "Hola", "farewell": "Hasta luego"}},
            {"lang": "pt", "words": {"greet": "Olá", "farewell": "Tchau"}},
            {"lang": "it", "words": {"greet": "Ciao", "farewell": "Addio"}}
        ]

        testOutput[testOutputLine++] = what + " " + language;
        for (const someLanguage of phrases) {
            testOutput[testOutputLine++] = "Next language is " + someLanguage;
            if (someLanguage.lang === language) {
                testOutput[testOutputLine++] = "Oh! I found my language! " + someLanguage;
            } else {
                testOutput[testOutputLine++] = "Nope, that is not what I want ";
            }
        }
    }

    testOutput = [];
    testOutputLine = 0;
        
    utter ("whatever", "en");
    
    expect(testOutput[0]).toBe("whatever en");
    expect(testOutput[1]).toBe("Next language is [object Object]");
    expect(testOutput[2]).toBe("Oh! I found my language! [object Object]");
    expect(testOutput[3]).toBe("Next language is [object Object]");
    expect(testOutput[4]).toBe("Nope, that is not what I want ");
    expect(testOutput[9]).toBe("Next language is [object Object]");
    expect(testOutput[10]).toBe("Nope, that is not what I want ");

    testOutput = [];
    testOutputLine = 0;
        
    utter ("whatever", "it");
    
    expect(testOutput[0]).toBe("whatever it");
    expect(testOutput[1]).toBe("Next language is [object Object]");
    expect(testOutput[2]).toBe("Nope, that is not what I want ");
    expect(testOutput[3]).toBe("Next language is [object Object]");
    expect(testOutput[4]).toBe("Nope, that is not what I want ");
    expect(testOutput[9]).toBe("Next language is [object Object]");
    expect(testOutput[10]).toBe("Oh! I found my language! [object Object]");

    utter = function (what, language) {

        const phrases = [
            {"lang": "en", "words": {"greet": "Hello", "farewell": "Goodbye"}}, 
            {"lang": "de", "words": {"greet": "Hallo", "farewell": "Auf wierdersehen"}},
            {"lang": "es", "words": {"greet": "Hola", "farewell": "Hasta luego"}},
            {"lang": "pt", "words": {"greet": "Olá", "farewell": "Tchau"}},
            {"lang": "it", "words": {"greet": "Ciao", "farewell": "Addio"}}
        ]

        testOutput[testOutputLine++] = what + " " + language;
        for (const someLanguage of phrases) {
            testOutput[testOutputLine++] = "Next language is " + someLanguage;
            if (someLanguage.lang === language) {
                testOutput[testOutputLine++] = "Oh! I found my language! " + someLanguage;
                break;
            } else {
                testOutput[testOutputLine++] = "Nope, that is not what I want ";
            }
        }
    }

    testOutput = [];
    testOutputLine = 0;
        
    utter ("whatever", "en");
    
    expect(testOutput[0]).toBe("whatever en");
    expect(testOutput[1]).toBe("Next language is [object Object]");
    expect(testOutput[2]).toBe("Oh! I found my language! [object Object]");
    expect(testOutput[3]).toBeUndefined();

    utter = function (what, language) {

        const phrases = [
            {"lang": "en", "words": {"greet": "Hello", "farewell": "Goodbye"}}, 
            {"lang": "de", "words": {"greet": "Hallo", "farewell": "Auf wierdersehen"}},
            {"lang": "es", "words": {"greet": "Hola", "farewell": "Hasta luego"}},
            {"lang": "pt", "words": {"greet": "Olá", "farewell": "Tchau"}},
            {"lang": "it", "words": {"greet": "Ciao", "farewell": "Addio"}}
        ]

        testOutput[testOutputLine++] = what + " " + language;
        for (const someLanguage of phrases) {
            testOutput[testOutputLine++] = "Next language is " + someLanguage;
            if (someLanguage.lang === language) {
                testOutput[testOutputLine++] = "Oh! I found my language! " + someLanguage;
                testOutput[testOutputLine++] = "My words are " + someLanguage.words;
                break;
            } else {
                testOutput[testOutputLine++] = "Nope, that is not what I want ";
            }
        }
    }
    
    testOutput = [];
    testOutputLine = 0;
        
    utter ("whatever", "pt");
    
    expect(testOutput[0]).toBe("whatever pt");
    expect(testOutput[1]).toBe("Next language is [object Object]");
    expect(testOutput[2]).toBe("Nope, that is not what I want ");
    expect(testOutput[3]).toBe("Next language is [object Object]");
    expect(testOutput[4]).toBe("Nope, that is not what I want ");
    expect(testOutput[5]).toBe("Next language is [object Object]");
    expect(testOutput[6]).toBe("Nope, that is not what I want ");
    expect(testOutput[7]).toBe("Next language is [object Object]");
    expect(testOutput[8]).toBe("Oh! I found my language! [object Object]");
    expect(testOutput[9]).toBe("My words are [object Object]");
    expect(testOutput[10]).toBeUndefined();

    utter = function (what, language) {

        const phrases = [
            {"lang": "en", "words": {"greet": "Hello", "farewell": "Goodbye"}}, 
            {"lang": "de", "words": {"greet": "Hallo", "farewell": "Auf wierdersehen"}},
            {"lang": "es", "words": {"greet": "Hola", "farewell": "Hasta luego"}},
            {"lang": "pt", "words": {"greet": "Olá", "farewell": "Tchau"}},
            {"lang": "it", "words": {"greet": "Ciao", "farewell": "Addio"}}
        ]

        testOutput[testOutputLine++] = what + " " + language;
        for (const someLanguage of phrases) {
            testOutput[testOutputLine++] = "Next language is " + someLanguage;
            if (someLanguage.lang === language) {
                testOutput[testOutputLine++] = "Oh! I found my language! " + someLanguage;
                testOutput[testOutputLine++] = "The word I am looking for is " + someLanguage.words[what];
                break;
            } else {
                testOutput[testOutputLine++] = "Nope, that is not what I want ";
            }
        }
    }
        
    testOutput = [];
    testOutputLine = 0;
        
    utter ("greet", "pt");
    
    expect(testOutput[0]).toBe("greet pt");
    expect(testOutput[1]).toBe("Next language is [object Object]");
    expect(testOutput[2]).toBe("Nope, that is not what I want ");
    expect(testOutput[3]).toBe("Next language is [object Object]");
    expect(testOutput[4]).toBe("Nope, that is not what I want ");
    expect(testOutput[5]).toBe("Next language is [object Object]");
    expect(testOutput[6]).toBe("Nope, that is not what I want ");
    expect(testOutput[7]).toBe("Next language is [object Object]");
    expect(testOutput[8]).toBe("Oh! I found my language! [object Object]");
    expect(testOutput[9]).toBe("The word I am looking for is Olá");
    expect(testOutput[10]).toBeUndefined();

    utter = function (what, language) {

        // Environment
        const phrases = [
            {"lang": "en", "words": {"greet": "Hello", "farewell": "Goodbye"}}, 
            {"lang": "de", "words": {"greet": "Hallo", "farewell": "Auf wierdersehen"}},
            {"lang": "es", "words": {"greet": "Hola", "farewell": "Hasta luego"}},
            {"lang": "pt", "words": {"greet": "Olá", "farewell": "Tchau"}},
            {"lang": "it", "words": {"greet": "Ciao", "farewell": "Addio"}}
        ]

        // Logic

        // null is better because indicates it was processed and not found. undefined is more doesn't exist.
        // perhaps "" might indicate same for strings

        let result = null;
        testOutput[testOutputLine++] = what + " " + language;
        for (const someLanguage of phrases) {
            testOutput[testOutputLine++] = "Next language is " + someLanguage;
            if (someLanguage.lang === language) {
                testOutput[testOutputLine++] = "Oh! I found my language! " + someLanguage;
                testOutput[testOutputLine++] = "The word I am looking for is " + someLanguage.words[what];
                result = someLanguage.words[what];
                break;
            } else {
                testOutput[testOutputLine++] = "Nope, that is not what I want ";
            }
        }
        return result;
    }
            
    testOutput = [];
    testOutputLine = 0;
        
    let utterResult = utter ("greet", "pt");
    
    expect (utterResult).toBe("Olá");
            
    testOutput = [];
    testOutputLine = 0;
        
    utterResult = utter ("farewell", "it");
    
    expect (utterResult).toBe("Addio");

    utter = function (what, language) {

        // Environment
        const phrases = [
            {"lang": "en", "words": {"greet": "Hello", "farewell": "Goodbye"}}, 
            {"lang": "de", "words": {"greet": "Hallo", "farewell": "Auf wierdersehen"}},
            {"lang": "es", "words": {"greet": "Hola", "farewell": "Hasta luego"}},
            {"lang": "pt", "words": {"greet": "Olá", "farewell": "Tchau"}},
            {"lang": "it", "words": {"greet": "Ciao", "farewell": "Addio"}}
        ]

        // Logic

        // null is better because indicates it was processed and not found. undefined is more doesn't exist.
        // perhaps "" might indicate same for strings

        let result = null;
        // testOutput[testOutputLine++] = what + " " + language;
        for (const someLanguage of phrases) {
            // testOutput[testOutputLine++] = "Next language is " + someLanguage;
            if (someLanguage.lang === language) {
                // testOutput[testOutputLine++] = "Oh! I found my language! " + someLanguage;
                // testOutput[testOutputLine++] = "The word I am looking for is " + someLanguage.words[what];
                result = someLanguage.words[what];
                break;
            } else {
                // testOutput[testOutputLine++] = "Nope, that is not what I want ";
            }
        }
        return result;
    }

    expect (utter("greet", "de") + ", Klaus").toBe("Hallo, Klaus");
    expect (utter("greet", "it") + ", Giovanni").toBe("Ciao, Giovanni");
    expect (utter("farewell", "pt") + ", Joao").toBe("Tchau, Joao");

    phrases = [
        {"lang": "en", "words": {"greet": "Hello", "farewell": "Goodbye"},
            "action": function(name) {return name + " buddy"}}, 
        {"lang": "de", "words": {"greet": "Hallo", "farewell": "Auf wierdersehen"}, "action": ""},
        {"lang": "es", "words": {"greet": "Hola", "farewell": "Hasta luego"}, "action": ""},
        {"lang": "pt", "words": {"greet": "Olá", "farewell": "Tchau"}, "action": ""},
        {"lang": "it", "words": {"greet": "Ciao", "farewell": "Addio"}, "action": ""}
    ]

    // Note: Could not get expect to work for phrases[0] or phrases[0].action

    expect(phrases.length).toBe(5);
    // expect(phrases[0]).toEqual({"lang": "en", "words": {"greet": "Hello", "farewell": "Goodbye"},
            // "action": function(name) {return name + " buddy"}});
    expect(phrases[0].words).toEqual({"greet": "Hello", "farewell": "Goodbye"});
    // expect(phrases[0].action).toEqual([Function action]);

    expect(phrases[0].action("John")).toBe("John buddy");

    let translate = function (what, sourceLanguage, targetLanguage) {
        // environment
        let phrases = [
           {"lang": "en", "words": { "greet": "Hello", "farewell": "Goodbye"}},
           {"lang": "de", "words": { "greet": "Hallo", "farewell": "Auf wiedersehen"}},
           {"lang": "es", "words": { "greet": "Hola", "farewell": "Hasta luego"}},
           {"lang": "pt", "words": { "greet": "Olá", "farewell": "Tchau"}},
           {"lang": "it", "words": { "greet": "Ciao", "farewell": "Addio"}}
        ];
    
        // logic
        let result = null;
        // console.log (what, language)
        for (const somelanguage of phrases) {
            // console.log('Next language is', somelanguage)
            if (somelanguage.lang === sourceLanguage) {
                testOutput[testOutputLine++] = 'Oh! I found my language' + somelanguage;
                // console.log("The word i'm looking for is", somelanguage.words[what])
                break;
            } else {
                // console.log('Nope, that is not what I want')
            }
        }
        return result;
    }

    testOutput = [];
    testOutputLine = 0;

    let translateResult = translate('', 'en', '');

    expect(testOutput[0]).toBe("Oh! I found my language[object Object]");

    translate = function (what, sourceLanguage, targetLanguage) {
        // environment
        let phrases = [
           {"lang": "en", "words": { "greet": "Hello", "farewell": "Goodbye"}},
           {"lang": "de", "words": { "greet": "Hallo", "farewell": "Auf wiedersehen"}},
           {"lang": "es", "words": { "greet": "Hola", "farewell": "Hasta luego"}},
           {"lang": "pt", "words": { "greet": "Olá", "farewell": "Tchau"}},
           {"lang": "it", "words": { "greet": "Ciao", "farewell": "Addio"}}
        ];
    
        // logic
        let result = null;
        // console.log (what, language)
        for (const somelanguage of phrases) {
            // console.log('Next language is', somelanguage)
            if (somelanguage.lang === sourceLanguage) {
                testOutput[testOutputLine++] = 'Oh! I found my language' + somelanguage;
                testOutput[testOutputLine++] = 'And my words are';
                for (word in somelanguage.words) {
                    testOutput[testOutputLine++] = word;
                }
                // console.log("The word i'm looking for is", somelanguage.words[what])
                break;
            } else {
                // console.log('Nope, that is not what I want')
            }
        }
        return result;
    }
    
    testOutput = [];
    testOutputLine = 0;

    translateResult = translate('', 'en', '');

    expect(testOutput[0]).toBe("Oh! I found my language[object Object]");
    expect(testOutput[1]).toBe("And my words are");
    expect(testOutput[2]).toBe("greet");
    expect(testOutput[3]).toBe("farewell");

    translate = function (what, sourceLanguage, targetLanguage) {
        // environment
        let phrases = [
           {"lang": "en", "words": { "greet": "Hello", "farewell": "Goodbye"}},
           {"lang": "de", "words": { "greet": "Hallo", "farewell": "Auf wiedersehen"}},
           {"lang": "es", "words": { "greet": "Hola", "farewell": "Hasta luego"}},
           {"lang": "pt", "words": { "greet": "Olá", "farewell": "Tchau"}},
           {"lang": "it", "words": { "greet": "Ciao", "farewell": "Addio"}}
        ];
    
        // logic
        let result = null;
        // console.log (what, language)
        for (const somelanguage of phrases) {
            // console.log('Next language is', somelanguage)
            if (somelanguage.lang === sourceLanguage) {
                testOutput[testOutputLine++] = 'Oh! I found my language' + somelanguage;
                testOutput[testOutputLine++] = 'And my words are';
                for (word in somelanguage.words) {
                    testOutput[testOutputLine++] = word + " " + somelanguage.words[word];
                }
                // console.log("The word i'm looking for is", somelanguage.words[what])
                break;
            } else {
                // console.log('Nope, that is not what I want')
            }
        }
        return result;
    }

    testOutput = [];
    testOutputLine = 0;

    translateResult = translate('', 'pt', '');

    expect(testOutput[0]).toBe("Oh! I found my language[object Object]");
    expect(testOutput[1]).toBe("And my words are");
    expect(testOutput[2]).toBe("greet Olá");
    expect(testOutput[3]).toBe("farewell Tchau");

    translate = function (what, sourceLanguage, targetLanguage) {
        // environment
        let phrases = [
           {"lang": "en", "words": { "greet": "Hello", "farewell": "Goodbye"}},
           {"lang": "de", "words": { "greet": "Hallo", "farewell": "Auf wiedersehen"}},
           {"lang": "es", "words": { "greet": "Hola", "farewell": "Hasta luego"}},
           {"lang": "pt", "words": { "greet": "Olá", "farewell": "Tchau"}},
           {"lang": "it", "words": { "greet": "Ciao", "farewell": "Addio"}}
        ];
    
        // logic
        let result = null;
        // console.log (what, language)
        for (const somelanguage of phrases) {
            // console.log('Next language is', somelanguage)
            if (somelanguage.lang === sourceLanguage) {
                testOutput[testOutputLine++] = 'Oh! I found my language' + somelanguage;
                for (word in somelanguage.words) {
                    if (somelanguage.words[word] === what) {
                        testOutput[testOutputLine++] = 'And here is the word';
                        testOutput[testOutputLine++] = word + " " + somelanguage.words[word];
                     }
                }
                // console.log("The word i'm looking for is", somelanguage.words[what])
                break;
            } else {
                // console.log('Nope, that is not what I want')
            }
        }
        return result;
    }

    testOutput = [];
    testOutputLine = 0;

    translateResult = translate('Olá', 'pt', '');

    expect(testOutput[0]).toBe("Oh! I found my language[object Object]");
    expect(testOutput[1]).toBe("And here is the word");
    expect(testOutput[2]).toBe("greet Olá");

    translate = function (what, sourceLanguage, targetLanguage) {
        // environment
        let phrases = [
           {"lang": "en", "words": { "greet": "Hello", "farewell": "Goodbye"}},
           {"lang": "de", "words": { "greet": "Hallo", "farewell": "Auf wiedersehen"}},
           {"lang": "es", "words": { "greet": "Hola", "farewell": "Hasta luego"}},
           {"lang": "pt", "words": { "greet": "Olá", "farewell": "Tchau"}},
           {"lang": "it", "words": { "greet": "Ciao", "farewell": "Addio"}}
        ];
    
        // logic
        let result = null;
        // console.log (what, language)
        for (const somelanguage of phrases) {
            // console.log('Next language is', somelanguage)
            if (somelanguage.lang === sourceLanguage) {
                testOutput[testOutputLine++] = 'Oh! I found my language' + somelanguage;
                for (const wordKey in somelanguage.words) {
                    if (somelanguage.words[wordKey] === what) {
                        testOutput[testOutputLine++] = 'And here is the word';
                        testOutput[testOutputLine++] = somelanguage.words[wordKey];
                     }
                }
                // console.log("The word i'm looking for is", somelanguage.words[what])
                break;
            } else {
                // console.log('Nope, that is not what I want')
            }
        }
        return result;
    }

    testOutput = [];
    testOutputLine = 0;

    translateResult = translate('Hallo', 'de', '');

    expect(testOutput[0]).toBe("Oh! I found my language[object Object]");
    expect(testOutput[1]).toBe("And here is the word");
    expect(testOutput[2]).toBe("Hallo");

    translate = function (what, sourceLanguage, targetLanguage) {
        // environment
        let phrases = [
           {"lang": "en", "words": { "greet": "Hello", "farewell": "Goodbye"}},
           {"lang": "de", "words": { "greet": "Hallo", "farewell": "Auf wiedersehen"}},
           {"lang": "es", "words": { "greet": "Hola", "farewell": "Hasta luego"}},
           {"lang": "pt", "words": { "greet": "Olá", "farewell": "Tchau"}},
           {"lang": "it", "words": { "greet": "Ciao", "farewell": "Addio"}}
        ];
    
        // logic
        let result = null;
        let keyWeNeed = null;
        // console.log (what, language)
        for (const somelanguage of phrases) {
            // console.log('Next language is', somelanguage)
            if (somelanguage.lang === sourceLanguage) {
                testOutput[testOutputLine++] = 'Oh! I found my language' + somelanguage;
                for (const wordKey in somelanguage.words) {
                    if (somelanguage.words[wordKey] === what) {
                        testOutput[testOutputLine++] = 'And here is the word';
                        testOutput[testOutputLine++] = somelanguage.words[wordKey];
                        keyWeNeed = wordKey;
                        break;
                     }
                }
                // console.log("The word i'm looking for is", somelanguage.words[what])
                break;
            } else {
                // console.log('Nope, that is not what I want')
            }
        }
        result = keyWeNeed;
        return result;
    }

    testOutput = [];
    testOutputLine = 0;

    translateResult = translate('Hallo', 'de', '');

    expect (translateResult).toBe("greet");

    expect(testOutput[0]).toBe("Oh! I found my language[object Object]");
    expect(testOutput[1]).toBe("And here is the word");
    expect(testOutput[2]).toBe("Hallo");

    translate = function (what, sourceLanguage, targetLanguage) {
        // environment
        let phrases = [
           {"lang": "en", "words": { "greet": "Hello", "farewell": "Goodbye"}},
           {"lang": "de", "words": { "greet": "Hallo", "farewell": "Auf wiedersehen"}},
           {"lang": "es", "words": { "greet": "Hola", "farewell": "Hasta luego"}},
           {"lang": "pt", "words": { "greet": "Olá", "farewell": "Tchau"}},
           {"lang": "it", "words": { "greet": "Ciao", "farewell": "Addio"}}
        ];
    
        // logic
        let result = null;
        let keyWeNeed = null;
        // console.log (what, language)
        for (const somelanguage of phrases) {
            // console.log('Next language is', somelanguage)
            if (somelanguage.lang === sourceLanguage) {
                testOutput[testOutputLine++] = 'Oh! I found my language' + somelanguage;
                for (const wordKey in somelanguage.words) {
                    if (somelanguage.words[wordKey] === what) {
                        testOutput[testOutputLine++] = 'And here is the word';
                        testOutput[testOutputLine++] = somelanguage.words[wordKey];
                        keyWeNeed = wordKey;
                        break;
                     }
                }
                // console.log("The word i'm looking for is", somelanguage.words[what])
                break;
            } else {
                // console.log('Nope, that is not what I want')
            }
        }
        // now that we have the key, we can translate

        for (const somelanguage of phrases) {
            if (somelanguage.lang === targetLanguage) {
                result = somelanguage.words[keyWeNeed];
                break;
            }

        }
        return result;
    }

    testOutput = [];
    testOutputLine = 0;

    translateResult = translate('Hallo', 'de', 'en');

    expect (translateResult).toBe("Hello");

    expect(testOutput[0]).toBe("Oh! I found my language[object Object]");
    expect(testOutput[1]).toBe("And here is the word");
    expect(testOutput[2]).toBe("Hallo");

    testOutput = [];
    testOutputLine = 0;

    translateResult = translate('Hasta luego', 'es', 'it');

    expect (translateResult).toBe("Addio");

    expect(testOutput[0]).toBe("Oh! I found my language[object Object]");
    expect(testOutput[1]).toBe("And here is the word");
    expect(testOutput[2]).toBe("Hasta luego");

    translate = function (what, sourceLanguage, targetLanguage) {
        // environment
        let phrases = [
           {"lang": "en", "words": { "greet": "Hello", "farewell": "Goodbye"}},
           {"lang": "de", "words": { "greet": "Hallo", "farewell": "Auf wiedersehen"}},
           {"lang": "es", "words": { "greet": "Hola", "farewell": "Hasta luego"}},
           {"lang": "pt", "words": { "greet": "Olá", "farewell": "Tchau"}},
           {"lang": "it", "words": { "greet": "Ciao", "farewell": "Addio"}}
        ];
    
        // logic
        let result = null;
        let keyWeNeed = null;
        // console.log (what, language)
        for (const somelanguage of phrases) {
            // console.log('Next language is', somelanguage)
            if (somelanguage.lang === sourceLanguage) {
                // testOutput[testOutputLine++] = 'Oh! I found my language' + somelanguage;
                for (const wordKey in somelanguage.words) {
                    if (somelanguage.words[wordKey] === what) {
                        // testOutput[testOutputLine++] = 'And here is the word';
                        // testOutput[testOutputLine++] = somelanguage.words[wordKey];
                        keyWeNeed = wordKey;
                        break;
                     }
                }
                // console.log("The word i'm looking for is", somelanguage.words[what])
                break;
            } else {
                // console.log('Nope, that is not what I want')
            }
        }
        // now that we have the key, we can translate

        for (const somelanguage of phrases) {
            if (somelanguage.lang === targetLanguage) {
                result = somelanguage.words[keyWeNeed];
                break;
            }

        }
        return result;
    }

    translateResult = translate('Hello', 'en', 'pt');
    expect (translateResult).toBe("Olá");
    
});
