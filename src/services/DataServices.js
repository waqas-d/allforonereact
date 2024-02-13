// This is the first fetch for saying hello
const sayHello = async (userName) => {
    const promise = await fetch(`https://dadwallforonebuildapi.azurewebsites.net/SayHello/GetSayHelloResult/${userName}`);
    const data = await promise.text();
    return data;
}

export { sayHello };

// This is the second fetch for adding numbers
const addingNumbers = async (firstNum, secondNum) => {
    const promise = await fetch(`https://dadwallforonebuildapi.azurewebsites.net/Adding/GetAddingResult/${firstNum}/${secondNum}`);
    const data = await promise.text();
    return data;
}

export { addingNumbers };

// This is the third fetch for asking questions
const askingQuestions = async (firstInput, secondInput) => {
    const promise = await fetch(`https://dadwallforonebuildapi.azurewebsites.net/AskingQuestions/GetAskingQuestionsResult/${firstInput}/${secondInput}`);
    const data = await promise.text();
    return data;
}

export { askingQuestions };

// This is the fourth fetch for greater or less
const greaterOrLess = async (firstNumStatement, secondNumStatement) => {
    const promise = await fetch(`https://dadwallforonebuildapi.azurewebsites.net/GreaterOrLess/GetGreaterOrLessResult/${firstNumStatement}/${secondNumStatement}`);
    const data = await promise.text();
    return data;
}

export { greaterOrLess };

// This is fifth fetch for madlib
const madLib = async (fullName, verbEndingWithS, favoriteSport, pronounHeOrShe, verb, adverb, preposition, timeWokeUp, anotherPronoun, verbPastTense) => {
    const promise = await fetch(`https://dadwallforonebuildapi.azurewebsites.net/MadLib/GetMadLibResult/${fullName}/${verbEndingWithS}/${favoriteSport}/${pronounHeOrShe}/${verb}/${adverb}/${preposition}/${timeWokeUp}/${anotherPronoun}/${verbPastTense}`);
    const data = await promise.text();
    return data;
}

export { madLib };

// This is the sixth fetch for odd or even
const oddOrEven = async (oddEvenNum) => {
    const promise = await fetch(`https://dadwallforonebuildapi.azurewebsites.net/OddOrEven/GetOddOrEvenResult/${oddEvenNum}`);
    const data = await promise.text();
    return data;
}

export { oddOrEven };

// This is the seventh fetch for reverseit alpha numeric
const reverseItAlphaNumeric = async (userRevNumsLetts) => {
    const promise = await fetch(`https://dadwallforonebuildapi.azurewebsites.net/ReverseItAlphaNumeric/GetReverseItAlphaNumericResult/${userRevNumsLetts}`);
    const data = await promise.text();
    return data;
}

export { reverseItAlphaNumeric };

// This is the eighth fetch for reverseit numbers only
const reverseItNumbersOnly = async (userRevNums) => {
    const promise = await fetch(`https://dadwallforonebuildapi.azurewebsites.net/ReverseItNumbersOnly/GetReverseItNumbersOnlyResult/${userRevNums}`);
    const data = await promise.text();
    return data;
}

export { reverseItNumbersOnly };

// This is the ninth fetch for magic 8 ball
const magic8Ball = async (magic8BallInput) => {
    const promise = await fetch(`https://dadwallforonebuildapi.azurewebsites.net/Magic8Ball/GetMagic8BallResult/${magic8BallInput}`);
    const data = await promise.text();
    return data;
}

export { magic8Ball };

// This is the tenth fetch for restaurant picker
const restaurantPicker = async (userInput) => {
    const promise = await fetch(`https://dadwallforonebuildapi.azurewebsites.net/RestaurantPicker/GetRestaurantPickerResult/${userInput}`);
    const data = await promise.text();
    return data;
}

export { restaurantPicker };
