//Robustly named variables

var person = {
    name: 'Nick',
    favoriteLanguage: 'Ruby',
    experienceInYears: 16
  };
  
  var personAlternate = {
    'name': 'Nick',
    'favoriteLanguage': 'Ruby',
    'experienceInYears': 16
  };
  
  console.log('person:', person);
  console.log('personAlternate:', personAlternate);
  
  //Function that takes no parameters, and returns a newly created object

  function createObject(){
    var result = {};
    return result; 
  }
  
  var resultObject = createObject();
  console.log('Should be an object:', typeof resultObject); //object
  console.log('Should not be an array:', Array.isArray(resultObject)); //false
  
  //Accessing a property in an object

  var object = {
    a: 1,
    b: 2,
    c: 3
  };
  
  var valueAtB_bracket = object['b'];
  var valueAtB_dot = object.b;
  console.log('Using bracket notation:', valueAtB_bracket);
  console.log('Using dot notation:', valueAtB_dot);
  
  //Function to access a property in an object

  function accessAProperty(object,key){
    var result = object[key];
    return result;
  }
  
  var resultValue = accessAProperty({machine: 'Computer', type: 'Macbook', ram: '2 GHz'}, 'ram');
  console.log('Should be "2GHz":', resultValue); //2 GHz
  
  //Reassigning a property's value in an object

  var object = {
    firstMonth: 'January',
    secondMonth: 'March',
    thirdMonth: 'March'
  };
  console.log('Before reassignment:', object);
  object['secondMonth'] = 'February';
  console.log('After reassignment:', object);
  
  //Reassigning a property's value in an object

  function reassignAProperty(object,key,newValue){
    object[key] = newValue;
    return object;
  }
  
  var resultObject = reassignAProperty({name: 'Ramses', favoriteFood: 'chicken', type: 'dog'}, 'favoriteFood', 'goose');
  console.log('Should replace "chicken" with "goose":', resultObject);
  
  //Removing a property from an object

  var object = {
    abs: 1,
    baq: 2,
    cio: 'mistake',
    dec: 3
  };
  
  delete object.cio;
  console.log('Object with property removed:', object);
  
  
  var lunchOrders = {
    jubal: 'Turkey Sandwhich',
    christof: 'Falafel',
    spec1: 'Processor Speed',
    wali: 'Gyro'
  };
  var keyOfPropertyToBeRemoved = 'spec1';
  delete lunchOrders[keyOfPropertyToBeRemoved];
  console.log('List of lunch orders with incorrect property removed:', lunchOrders);
  
  //Function that takes two parameters, and removes the property located at the input key from the object, and returns the object
  
  function removeAProperty(object,key){
    delete object[key];
    return object;
  }
  
  var resultObject1 = removeAProperty({q:9,r:10,text:'bad entry'}, 'text');
  console.log('should log {q:9,r:10}:', resultObject1);
  
  var resultObject2 = removeAProperty({first: 'one', second: 'two', why: 452, third: 'three'}, 'why');
  console.log('should log {first: "one", second: "two", third: "three"}:', resultObject2);
  
  //Checking if a property is present within an object

  var object = {
    a: 1,
    b: 2,
    c: 3
  };
  
  console.log('Value for a key that is not present:', object['x']); //undefined
  console.log('Value at "x" is undefined?:', object['x'] === undefined); //true
  console.log('Value at "b" is defined?:', object['b'] !== undefined); //true
  
  var birthdayPlan = {
    activity: 'Watching TV marathon',
    food: 'Enough for maybe 1 or 2 people',
    goingOut: false
  };
  
  var reservations = birthdayPlan.reservations;
  console.log('Undefined because they do not need reservations:', reservations);
  console.log('Reservations are undefined?:', reservations === undefined); //true
  console.log('Activity is defined?:', birthdayPlan.activity !== undefined); //true
  
  //Function to check if property is present in an object

  function isPropertyPresent(object,key){
    var isPresent = object[key] !== undefined;
    return isPresent;
  }
  
  var object1 = {
    a: 1,
    b: 2
  };
  
  var key1 = 'c';
  var result1 = isPropertyPresent(object1, key1);
  console.log('Should log false:', result1);
  
  var object2 = {
    'size': 'M',
    'color': 'green',
    'cut': 'tapered',
    'price': 30
  };
  
  var key2 = 'cut';
  var result2 = isPropertyPresent(object2, key2);
  console.log('Should log true:', result2);
  
  //Determining if a value is an object

  var obj = {
    a: 1, 
    b: 3, 
    c: 5
  };
  
  console.log('Value is an object and not any array:', typeof obj === "object" && !Array.isArray(obj));
  
  var playground = {
    location: 'city park',
    swings: true,
    hours: '8am - 10pm'
  };
  
  var playgroundIsObject = typeof playground === "object";
  var playgroundIsNotAnArray = !Array.isArray(playground);
  var playGroundIsObjectAndNotAnArray = playgroundIsObject && playgroundIsNotAnArray;
  console.log('Playground value is an object and not an array:', playGroundIsObjectAndNotAnArray );
  
  //Determining if a value is a object 
  
  function isAnObject(input){
    var isObject = typeof input === "object";
    var isNotAnArray = !Array.isArray(input);
    var isObjectAndNotAnArray = isObject && isNotAnArray;
    return isObjectAndNotAnArray;
  }
  
  var resultBoolean1 = isAnObject([1,2,3]);
  console.log('Should log false:', resultBoolean1);
  
  var resultBoolean2 = isAnObject({name: 'Tom', friend: 'Jerry'});
  console.log('Should log true:',  resultBoolean2);
  
  //Generating an array of all keys in an object
  
  var arrayOfKeys = Object.keys({a:1, b:2, c:3});
  console.log('An array containing the keys:', arrayOfKeys); //['a','b','c']
  
  var address = {
    number: 123,
    street: 'Fake St.',
    city: 'Springfield',
    state: 'QX',
    zipcode: 99999
  };
  
  var keysInAddress = Object.keys(address);
  console.log('An array of the address object\'s keys:', keysInAddress);
  
  //Generating an array of all keys in an object
  
  function getAllKeys(obj){
    var keys = Object.keys(obj);
    return keys;
  }
  
  var resultKeys = getAllKeys({firstScore: 12, secondScore: 34, thirdScore: 28});
  console.log('Should log ["firstScore", "secondScore", "thirdScore"]:', resultKeys);
  
  //Generating an array of all values in an object
  
  var arrayOfValues = Object.values({a:1,b:2,c:3});
  console.log('An array containing the values:', arrayOfValues);
  
  var address = {
    number: 123,
    street: 'Fake St.',
    city: 'Springfield',
    state: 'QX',
    zipcode: 99999
  };
  
  var valuesInAddress = Object.values(address);
  console.log('An array of the address object\'s values:', valuesInAddress);
  
  //Generating an array of all values in an object
  
  function getAllValues(obj){
    var values = Object.values(obj);
    return values;
  }
  
  var resultValues = ({firstScore: 12, secondScore: 34, thirdScore: 28 });
  console.log('Should log [12,34,28]:', resultValues);
  