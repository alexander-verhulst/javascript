    //Objects 1

//Return the value of the property at the given key
function getProperty(obj,key){
    return obj[key];
  }
  
  var obj = {
    key: 'value'
  };
  
  var output = getProperty(obj,'key');
  console.log(output); //Returns value
  
  //Sets a new property on the given object with a value of true
  function addProperty(obj,key){
    obj[key] = true;
  }
  
  var myObj = {};
  addProperty(myObj, 'myProperty');
  console.log(myObj.myProperty); //Returns true
  
  //Remove the given key from the given object
  function removeProperty(obj,key){
    delete obj[key];
  }
  
  var obj = {
    name: 'Sam',
    age: 20
  };
  
  removeProperty(obj,'name');
  console.log(obj.name); //undefined
  
  
      //Objects 2
  
  //Using two other properties from the object, create a third property
  function addFullNameProperty(obj){
    var firstName = obj.firstName;
    var lastName = obj.lastName;
    var fullNameValue = firstName + " " + lastName;
    obj['fullName'] = fullNameValue;
  }
  
  var person = {
    firstName: 'Jade',
    lastName: 'Smith'
  };
  
  addFullNameProperty(person);
  console.log(person.fullName); //Jade Smith
  
  //Given two separate objects, set a new property of the 1st object, with the given key, and with a value of the entire 2nd object
  function addObjectProperty(obj1,key,obj2){
    obj1[key] = obj2;
  }
  
  var person1 = {
    name: 'Joe Blow',
    role: 'schlub'
  };
  
  var person2 = {
    name: 'Mr. Burns',
    role: 'supervisor'
  };
  
  addObjectProperty(person1, 'manager', person2);
  console.log(person1.manager); //{ name: 'Mr. Burns', role: 'supervisor' }
  
  //Given a person object and an age property, return whether given person is old enough to drive
  
  function isPersonOldEnoughToDrive(person){
    var age = person['age'];
    if(age >= 16){
      return true;
    } else {
      return false;
    }
  }
  
  var obj = {
    age: 16
  };
  
  var output = isPersonOldEnoughToDrive(obj);
  console.log('Is the person old enough to drive: ', output); //true
  
  //Given a person object and an age property, return whether give person is old enough to vote
  function isPersonOldEnoughToVote(person){
    var age = person['age'];
    if (age >= 18) {
      return true;
    } else {
      return false;
    }
  }
  
  var obj = {
    age: 19
  };
  
  var output = isPersonOldEnoughToVote(obj);
  console.log('Is the person old enough to vote: ', output); //true
  
  //Adding a separate array as the property of an object
  function addArrayProperty(obj,key,arr){
    obj[key] = arr;
  }
  
  var myObj = {};
  var myArray = [1,3];
  addArrayProperty(myObj, 'myProperty', myArray);
  console.log('The array is now a property of the object', myObj.myProperty);
  
  //Removes any properties whose values are numbers greather than the given number
  function removeNumbersLargerThan(num,obj){
    for (var key in obj ){
      var value = obj[key];
      if(typeof value === "number" && value > num){
        delete obj[key];
      }
    }
  }
  
  var obj = {
    a: 8,
    b: 2,
    c: 'montana'
  };
  removeNumbersLargerThan(5,obj);
  console.log(obj); //--> {b: 2, c: 'montana'};
  
  //Removes any properties whose values are numbers less than the given number
  
  function removeNumbersLessThan(num,obj){
    for (var key in obj){
      if(typeof obj[key] === "number" && obj[key] < num){
        delete obj[key];
      }
    }
  }
  
  var obj = {
    a: 8,
    b: 2,
    c: 'montana'
  };
  
  removeNumbersLessThan(5,obj);
  console.log(obj); //--> {a: 8, c: 'montana'}
  
  //Given a number and an objct, remove any properties on the object who strings are longer than the given number
  
  function removeStringValuesLongerThan(num,obj){
    for(var key in obj){
      if (typeof obj[key] === "string" && obj[key].length > num){
        delete obj[key];
      }
    }
  }
  
  var obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas'
  };
  
  removeStringValuesLongerThan(6,obj);
  console.log(obj); // {age: 20, location: 'Texas'}
  
  //Removes any properties whose values are even numbers. Return original object and don't create a clone
  
  function removeEvenValues(obj){
    for(var key in obj){
      if (typeof obj[key] === "number" && obj[key] % 2 === 0){
        delete obj[key];
      }
    }
  }
  
  var obj = {
    a: 2,
    b: 3,
    c: 4
  };
  
  removeEvenValues(obj);
  console.log(obj); //{b:3}
  
  //Returns how many properties the given object has
  function countNumberOfKeys(obj){
    var count = 0; 
    for(var key in obj){
      count+=1;
    }
    return count;
  }
  
  var obj = {
    a: 1,
    b: 2,
    c: 3
  };
  var output = countNumberOfKeys(obj);
  console.log(output); //--> 3
  
  //Removes any properties whose values are odd numbers
  function removeOddValues(obj){
    for (var key in obj){
      if(typeof obj[key] === "number" && obj[key] % 2 === 1){
        delete obj[key];
      }
    }
  }
  
  var obj = {
    a: 2,
    b: 3,
    c: 4
  };
  
  removeOddValues(obj);
  console.log(obj);//{a: 2, c: 4}
  
  //Returns an array containing all the elements of the array that equal to 10
  function getElementsThatEqual10AtProperty(obj,key){
    if(obj[key] === undefined){
      return [];
    }
    if(Array.isArray(obj[key]) === false){
      return [];
    }
    if (obj[key].length === 0){
      return [];
    }
    var result = [];
    for (var i = 0; i < obj[key].length; i++){
      if (obj[key][i] === 10){
        result.push(obj[key][i]);
      }
    }
    return result;
  }
  
  var obj = {
    key: [1000, 10, 50, 10]
  };
  
  var output = getElementsThatEqual10AtProperty(obj,'key');
  console.log(output); //[10,10]
  
  //Returns an array containing all the elements that are less than 100
  function getElementLessThan100AtProperty(obj,key){
    if (obj[key] === undefined) {
        return [];
    }
    if (Array.isArray(obj[key]) === false) {
        return [];
    }
    if (obj[key].length === 0) {
        return [];
    }
    var result = [];
    for (var i = 0; i < obj[key].length; i++){
        if (obj[key][i] < 100) {
            result.push(obj[key][i]);
        }
    }
    return result;
  }
  var obj = {
    key: [1000, 20, 50, 500]
  };
  var output = getElementLessThan100AtProperty(obj, 'key');
  console.log(output); // --> [20, 50]
  
  //Given an object and a key. Returns an array containing all elements within the array that are greater than 10
  function getElementsGreaterThan10AtProperty(obj,key){
    if (obj[key] === undefined){
      return [];
    }
    if(Array.isArray(obj[key]) === false){
      return [];
    }
    if(obj[key].length === 0){
      return [];
    }
    var myArray = [];
    for(var i = 0; i < obj[key].length; i++){
      if(obj[key][i] > 10){
        myArray.push(obj[key][i]);
      }
    }
    return myArray;
  }
  
  var obj = {
    key: [1,20,30]
  };
  
  var output = getElementsGreaterThan10AtProperty(obj,'key');
  console.log(output); //[20,30]
  
  //Given an object and a key, returns the first element of the array located at the given key
  function getFirstElementOfProperty(obj,key){
    if(obj.length === 0){
      return undefined;
    }
    if(Array.isArray(obj[key]) === false){
      return undefined;
    }
    if(obj[key] === 0){
      return undefined;
    }
    return obj[key][0];
  }
  
  var obj = {
    key: [1,2,4]
  };
  
  var output = getFirstElementOfProperty(obj,'key');
  console.log(output); //1
  
  //Given an object and a key, returns the nth element of an array located at the given key
  
  function getNthElementOfProperty(obj,key,n){
    if(obj.length === 0){
      return undefined;
    }
    if(obj[key] > n){
      return undefined;
    }
    if(Array.isArray(obj[key])=== false){
      return undefined;
    }
    if(obj[key] === 0){
      return undefined;
    }
    return obj[key][n];
  }
  
  var obj = {
    key: [1,2,6]
  };
  
  var output = getNthElementOfProperty(obj,'key',1);
  console.log(output); // 2
  
  //Given an object and a key, return last element of an array located at the given key
  
  function getLastElementOfProperty(obj,key){
    if(obj[key] === undefined){
      return undefined;
    }
    if(Array.isArray(obj[key]) === false){
      return undefined;
    }
    var lastElement = obj[key].length - 1;
    return obj[key][lastElement];
  }
  
  var obj = {
    key: [1,2,5]
  };
  
  var output = getLastElementOfProperty(obj,'key');
  console.log(output); // 5
  
  //Given an object and a key , returns an array containing all the odd length word elements of the array located at the given key
  
  function getOddLengthWordsAtProperty(obj,key){
    if(Array.isArray(obj[key]) === false){
      return [];
    }
    if (obj[key] === undefined){
      return [];
    }
    var oddLengthWords = [];
    for (var i = 0; i < obj[key].length; i++){
      if(obj[key][i].length % 2 === 1){
        oddLengthWords.push(obj[key][i]);
      }
    }
    return oddLengthWords;
  }
  
  var obj = {
    key: ['It', 'has', 'some', 'words']
  };
  
  var output = getOddLengthWordsAtProperty(obj,'key');
  console.log(output); //['has', 'words']
  
  //Given an object and a key, return the average of all the elements in the array located at the given key
  
  function getAverageOfElementsAtProperty(obj,key){
    if(Array.isArray(obj[key]) === false){
      return 0;
    }
    if(obj[key] === undefined) {
      return 0;
    }
    if(obj[key].length === 0){
      return 0;
    }
    var sum = 0;
    for (var i = 0; i < obj[key].length; i++){
      sum+=obj[key][i];
    }
    return sum/ obj[key].length;
  }
  
  var obj = {
    key: [1,2,3]
  };
  
  var output = getAverageOfElementsAtProperty(obj,'key');
  console.log(output); //2
  
  //Given an object and a key, returns an array containing all the even length word elements of the array located at the given key
  
  function getEvenLengthWordsAtProperty(obj,key){
    if(Array.isArray(obj[key]) === false){
      return [];
    }
    if (obj[key] === undefined){
      return [];
    }
    var evenArray = [];
    for (var i = 0; i < obj[key].length; i++){
      if(obj[key][i].length % 2 === 0){
        evenArray.push(obj[key][i]);
      }
    }
    return evenArray;
  }
  
  var obj = {
    key: ['a', 'long', 'game']
  };
  
  var output = getEvenLengthWordsAtProperty(obj,'key');
  console.log(output); // ['long', 'game']
  
  
  //Given an object and a key, return an array containing all the squared elements of the array at the given key
  
  function getSquaredElementsAtProperty(obj,key){
    if(Array.isArray(obj[key])=== false){
      return [];
    }
    if(obj[key] === 0){
      return [];
    }
    if(obj[key].length === 0){
      return [];
    }
    var squared = [];
    for (var i = 0; i < obj[key].length; i++){
      var squaredElement = obj[key][i] * obj[key][i];
      squared.push(squaredElement);
    }
    return squared;
  }
  
  var obj = {
    key: [2,1,5]
  };
  
  var output = getSquaredElementsAtProperty(obj,'key');
  console.log(output); //[4,1,25]
  
  //Given an object and a key, returns an array containing all the odd elements of the array located at the given key
  function getOddElementsAtProperty(obj,key){
    if(Array.isArray(obj[key]) === false){
      return [];
    } 
    if(obj[key] === undefined){
      return [];
    }
    if(obj[key].length === 0){
      return [];
    }
    var oddNumbers = [];
    for(var i = 0; i < obj[key].length; i++){
      if(obj[key][i] % 2 === 1){
        oddNumbers.push(obj[key][i]);
      }
    }
    return oddNumbers;
  }
  
  var obj = {
    key: [1,2,3,4,5]
  };
  
  var output = getOddElementsAtProperty(obj,'key');
  console.log(output); //[1,3,5]
  
  //Given an object and a key, returns an array containing all the even elements of the array located at the given key
  
  function getEvenElementsAtProperty(obj,key){
    if(Array.isArray(obj[key]) === false){
      return [];
    }
    if(obj[key] === undefined){
      return [];
    }
    if(obj[key].length === 0){
      return [];
    }
    var evenNumbers = [];
    for (var i = 0; i < obj[key].length; i++){
      if(obj[key][i] % 2 === 0){
        evenNumbers.push(obj[key][i]);
      }
    }
    return evenNumbers;
  }
  
  var obj = {
    key: [1000, 11, 50, 17]
  };
  
  var output = getEvenElementsAtProperty(obj,'key');
  console.log(output); //[1000,50]
  
  //Given an object and a key, return the smallest element in the array located at the given key
  function getSmallestElementAtProperty(obj,key){
    if(Array.isArray(obj[key]) === false){
      return undefined;
    }
    if(obj[key] === undefined){
      return undefined;
    }
    if(obj[key].length === 0){
      return undefined;
    }
    var smallestElement = obj[key][0];
    for (var i = 0; i < obj[key].length; i++){
      if(obj[key][i] < smallestElement){
        smallestElement = obj[key][i];
      }
    }
    return smallestElement;
  }
  
  var obj = {
    key: [2,1,5]
  };
  
  var output = getSmallestElementAtProperty(obj, 'key');
  console.log(output); // 1
  
  //Given an object and a key, return the largest element in the array located at the given key
  function getLargestElementAtProperty(obj,key){
  
    if(Array.isArray(obj[key])=== false){
    return undefined;
    }
    if(obj[key] === 0){
    return undefined;
    }
    if(obj[key].length === 0){
    return undefined;
    }
    var largeNumbers = obj[key][0];
    for(var i = 0; i < obj[key].length; i++){
    if(obj[key][i] > largeNumbers){
      largeNumbers = obj[key][i];
    }
    }
    return largeNumbers;
  }
  
  var obj = {
    key: [1,2,4]
  };
  
  var output = getLargestElementAtProperty(obj,'key');
  console.log(output); //4
  
  //Given a object and a key, return an array containing all but the last element of the array located at the given key.
  
  function getAllButLastElementOfProperty(obj,key){
    if(Array.isArray(obj[key]) === false){ //If property at the given key is not an array
      return [];
    }
    if(obj[key].length === 0){ //If the array is empty
      return [];
    }
    if(obj[key] === undefined){ //No property at the key
      return [];
    }
    obj[key].pop();
    return obj[key];
  }
  
  
  var obj = {
    key: [1,2,3]
  };
  
  var output = getAllButLastElementOfProperty(obj,'key');
  console.log(output); //[1,2]
  
  //Given a object, a key, and a numberical index. Return the value of the element at the given index of the array located within the given object at the given key
  
  function getElementOfArrayProperty(obj,key,index){
    if(Array.isArray(obj[key]) === false){
      return undefined;
    }
    if(obj[key] === 0){
      return undefined;
    }
    if(obj[key].length === 0){
      return undefined;
    }
    var specificElement = obj[key][0];
    for (var i = 0; i < obj[key].length; i++){
      if(obj[key][i] === obj[key][i]){
        specificElement = obj[key][index];
      }
    }
    return specificElement;
  }
  
  var obj = {
    key: ['Jamil', 'Albrey']
  };
  
  var output = getElementOfArrayProperty(obj, 'key', 0);
  console.log(output); //'Jamil'
  
  //Given an object and a key, return the product of all the elements in the array located at the given key
  
  function getProductOfAllElementsAtProperty(obj,key){
    if(Array.isArray(obj[key]) === false){
      return 0;
    }
    if(obj[key] === undefined){
      return 0;
    }
    if(obj[key].length === 0){
      return 0;
    }
    var product = 1; 
    for (var i  = 0; i < obj[key].length; i++){
      product *= obj[key][i];
    }
    return product;
  }
  
  var obj = {
    key: [1,2,3,4]
  };
  var output = getProductOfAllElementsAtProperty(obj,'key');
  console.log(output); //24
  
  //Given an object and a key, return the sum of all the elements in the array located at the given key
  
  function getSumOfAllElementsAtProperty(obj,key){
    if(obj[key] === undefined){
      return 0;
    }
    if(Array.isArray(obj[key])===false){
      return 0;
    }
    if(obj[key].length === 0){
      return 0;
    }
    var sum = 0;
    for(var i = 0; i < obj[key].length; i++){
      sum+=obj[key][i];
    }
    return sum;
  }
  
  var obj = {
    key: [4,1,8]
  };
  
  var output = getSumOfAllElementsAtProperty(obj,'key');
  console.log(output); //13

  //Given a object, use a function to return an array that is made up of the object's keys. Do not use the Object.keys to solve. 

function getAllKeys(obj){
  var keys = [];
  for (var key in obj){
    keys.push(key);
  }
  return keys;
}

var obj1 = {
  name: 'Sam',
  age: 25,
  hasPets: true
};

var result1 = getAllKeys(obj1);
console.log(result1);

var obj2 = {
  a: 'a',
  number: 11,
  hungry: true,
  grammyWins: 1
};

var result2 = getAllKeys(obj2);
console.log(result2);

//Given a object, use a function to return an array that is made up of the object's values. Do not use the Object.values to solve. 

function listAllValues(obj){
  var values = [];
  for (var key in obj){
    values.push(obj[key]);
  }
  return values;
}


var obj1 = {
  name: 'Krysten',
  age: 33,
  hasPets: false
};

var result1 = listAllValues(obj1);
console.log(result1);

var obj2 = {
  a: 'a',
  number: 11,
  hungry: true,
  grammyWins: 1
};

var result2 = listAllValues(obj2);
console.log(result2);


//Write a function that converts an object literal into an array of arrays:

function convertObjectToArray(obj){
  var container = [];
  for (var key in obj){
    var innerArray = [key, obj[key]];
    container.push(innerArray);
  }
  return container;
}

var input = {
  name: 'Holly', 
  age: 35,
  role: 'producer'
};

var result1 = convertObjectToArray(input);
console.log(result1);







