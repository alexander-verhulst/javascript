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
  
  