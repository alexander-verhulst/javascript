//Module_0_Objects

//Object with boolean values
var booleanObj = {
    isObject: true,
    isString: false
  };
  
  //Object with number values
  var numbersObj = {
    count: 4,
    remaining: 7
  };
  
  //Object with string values
  var stringsObj = {
    name: 'Daisy', 
    currentTitle: 'pupper', 
    futurePosition: 'doggo'
  };
  
  //Accessing a value of a property with dot notation
  var stringsObj1 = {
    name: 'Alex', 
    currentTitle: 'unemployed', 
    futurePosition: 'CEO'
  };
  
  var valueOfName = stringsObj1.name;
  console.log('Accessed using dot notation: ', valueOfName);
  
  var valueOfCurrentTitle = stringsObj1.currentTitle;
  console.log('Accessed using dot notation: ', valueOfCurrentTitle);
  
  var valueOfFuturePosition = stringsObj1.futurePosition; 
  console.log('Accessed using dot notation: ', valueOfFuturePosition);
  
  //Accessing a value of a property with bracket notation
  var dogObject = {
    bella: 'Beagle',
    moose: 'German Shepard',
    lucky: 'Lab Mix'
  };
  
  var breedOfBella = dogObject['bella'];
  console.log(breedOfBella);
  
  var breedOfMoose = dogObject['moose'];
  console.log(breedOfMoose);
  
  var breedOfLucky = dogObject['lucky'];
  console.log(breedOfLucky);
  
  //Objects can be empty
  var emptyObj = {};
  
  //Using the typeof operator
  console.log('Typeof undefined:', typeof undefined); //undefined
  console.log('Typeof true: ', typeof true); //boolean
  console.log('Typeof 9: ', typeof 9); //number
  console.log('Typeof 4.0: ', typeof 4.0);  //number
  console.log('Typeof string: ', typeof 'Hello'); //string
  
  //Using typeof on Arrays
  console.log('Typeof an array:', typeof [3,4,5]); //object
  console.log('Typeof an object:', typeof {a:1}); //object
  
  //Using Array.isArray method 
  console.log('Is an array?', Array.isArray([3,4,5])); //true
  console.log('Is an array?', Array.isArray({a:1})); //false
  
  //Takes an object parameter and returns it
  function returnObject(object){
    return object;
  }
  
  var user = {
    id: 4,
    name: 'Robert Solomon', 
    occupation: 'Mathmetician'
  };
  
  var resultObject = returnObject(user);
  console.log('resultObject:', resultObject); //{ id: 4, name: 'Robert Solomon', occupation: 'Mathmetician' }
  
  //Takes in object, and a key, and returns the value located at the inputted key **
  
  function returnAValue(obj,key){
    return obj[key];
  }
  
  var computer = {
    name: "MacBook Pro",
    version: "10.14.6",
    processor: "2 GHz Intel Core i7",
    memory_gb: 8
  };
  
  var nameOfKey = "version";
  var valueAtKey = returnAValue(computer, nameOfKey);
  console.log('valueAtKey:', valueAtKey); //10.14.6
  
  //Function that takes no parameters, creates an object, and returns object
  function createAndReturnAnObject(){
    var newObj = {a: 1, b: 2};
    return newObj;
  }
  
  var resultObj2 = createAndReturnAnObject();
  console.log('resultObject:', resultObj2);
  
  //Creating a function that returns the type of the argument passed through
  function getType(param){
    return typeof param;
  }
  
  var numType = getType(56);
  console.log('numType:', numType); //number
  
  var stringType = getType('serial number');
  console.log('stringType:', stringType); //string
  
  var undefinedType = getType();
  console.log('undefinedType:', undefinedType); //undefined
  
  //Function that returns true if the argument is an Array, and false if it is not
  function determineIsAnArray(input){
    var isAnArray = Array.isArray(input);
    return isAnArray;
  }
  
  var affirmative = determineIsAnArray([1,2,3]);
  console.log('Affirmative:', affirmative);
  
  var negative = determineIsAnArray({a:1});
  console.log('Negative:', negative);
  
  //Function that takes in an object parameter, and returns it
  function returnObject(object){
    return object;
  }
  
  //Function that takes in an object and a string (key), and returns the value of the property located within the object at the given string key
  function returnAValue(obj,key){
    return obj[key];
  }
  
  //Function that returns the type of arguments the function has been called with (assume the argument will be scalar - not a collection)
  function getType(param){
    return typeof param;
  }
  
  //Function that returns true if the argument is an Array, and false if it is not
  function determineIsAnArray(input){
    var isAnArray = Array.isArray(input);
    return isAnArray;
  }
  
  
  