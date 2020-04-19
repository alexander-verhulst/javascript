      //Introduction

      var fruits = ['oranges', 'bananas', 'apples'];
      var scores = [98, 85, 91, 78, 82];
      
      var firstFruit = fruits[0];
      var thirdScore = scores[2];
      
      console.log('firstFruit:', firstFruit); //oranges
      console.log('thirdScore:', thirdScore); //91
      
      //=====================================================
      //Function that takes in array parameter and returns it
      //======================================================
      
      function returnArray(array){
        return array;
      }
      
      var fruits = ['oranges', 'bananas', 'apples'];
      var resultArray = returnArray(fruits);
      console.log('resultArray:', resultArray); //['oranges', 'bananas', 'apples']
      
      //=====================================================
      /*Function that takes in array parameter and index
        returns element value
      */
      //======================================================
      
      function returnAnElement(array,index){
        return array[index];
      }
      
      var scores = [98,85,91,78,82];
      var position = 3;
      var positionElement = returnAnElement(scores,position);
      console.log('positionElement:', positionElement); //78
      
      
      //=====================================================
      /*Function that takes in no parameters, creates an array
      and returns it
      */
      //======================================================
      
      function createAndReturnAnArray(){
        var newArray = ['some', 'elements', 4,5];
        return newArray;
      }
      
      var resultArray = createAndReturnAnArray();
      console.log('resultArray:', resultArray); //['some', 'elements', 4,5];
      
      //=====================================================
      /*Function that takes an array parameter and returns it
      */
      //======================================================
      
      function returnArray(array){
        return array;
      }
      
      //=====================================================
      /*Function that takes an array and a number and return
      the element located within that specific index
      */
      //======================================================
      
      function returnAnElement(array,index){
        return array[index];
      }
      
      
      //=====================================================
      /*Function that takes in no parameters, creates an array
      and returns it
      */
      //======================================================
      
      function createAndReturnAnArray(){
        var newArray = [];
        return newArray;
      }
      
      
      //=====================================================
      /*Creating and veryifying arrays
      */
      //======================================================

      function createArray(){
          var result = [];
          return result;
      }

      var resultArray = createArray();
      console.log('Should be an array:', Array.isArray(resultArray));

       //=====================================================
      /*Accessing elements within arrays
      */
      //======================================================

      var array = [1,2,3,4];
      var secondElement = array[1];
      console.log('secondElement: ', secondElement); //2

//=====================================================
/*Accessing elements within array
*/
//======================================================

function accessAnElement(array,index){
  var result = array[index];
  return result;
}

var resultElement = accessAnElement(['Computer', 'Mouse', 'Ethernet Cable'], 1);
console.log('Should be "Mouse": ', resultElement); //mouse

//=====================================================
/*Reassing an element in a array
*/
//======================================================

var array = ['Janurary', 'February', 'March'];
console.log('Before reassignment: ', array);

array[1] = 'February';
console.log('After reassignment: ', array);


//=====================================================
/*Reassigning an element of array with variables
*/
//======================================================

var marvelHeroes = ['Iron Man', 'Captain America', 'Thor', 'Batman'];
console.log('Before Reassignment:', marvelHeroes);

var indexToCorrect = 3;
var marvelHeroToBeAdded = 'Scarlet Witch';

marvelHeroes[indexToCorrect] = marvelHeroToBeAdded;
console.log('After reassignment:', marvelHeroes);

//=====================================================
/*Reassigning an element in an array function
*/
//======================================================

function reassignAnElement(array,index,newValue){
  array[index] = newValue;
  return array;
}

var resultArray = reassignAnElement(['desk', 'lamp', 'chewtoy'], 2, 'textbook');
console.log('Should replace "chewtoy" with "textbook":', resultArray);


//=====================================================
/*Getting length of the array
*/
//======================================================

var lengthOfArray = [1,2,3,4].length; 
console.log('Using "length" property to get length of array: ', lengthOfArray);

//=====================================================
/*Getting length of array with variables
*/
//======================================================

var names = ["Alex", "Marisa", "Mom", "Dad"];
var lengthOfNamesArray = names.length;
console.log('The length of the names array is:', lengthOfNamesArray);

//=====================================================
/*Get length of array function 
*/
//======================================================

function getArrayLength(array){
  var length = array.length;
  return length;
}

var resultLength1 = getArrayLength([1,3,4,5,6]);
console.log('Should log 5:', resultLength1);

var resultLength2 = getArrayLength(['a', 'b', 'c','d']);
console.log('Should log 4:', resultLength2);


//=====================================================
/*Accessing last element of an array **
*/
//======================================================

var lastElement = [1,2,3,4,5][[1,2,3,4,5].length - 1];
console.log('Last element:', lastElement);


//=====================================================
/*Accessing last element with variables
*/
//======================================================

var numberSequence = [1,2,3,4,5];
var lastIndex = numberSequence.length - 1; //4
var lastElement = numberSequence[lastIndex]; //5
console.log('LastElement:', lastElement); //5

//=====================================================
/*Accessing last element within array function
*/
//======================================================

function getLastElement(array){
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}

var resultElement1 = getLastElement([1,2,'buckle', 'my', 'shoe']);
console.log('Should log shoe:', resultElement1);

var resultLastElement2 = getLastElement([3,4,"shut", "the", "door"]);
console.log("Should log door:", resultLastElement2);

//=====================================================
/*Adding an element to the back of an array
*/
//======================================================

var array = [1,2,3,4];
array.push(5);
console.log('Array with newly added element:', array);


//=====================================================
/*Adding an element to the back of an array with variables
*/
//======================================================

var messages = ["Hey", "Hello", "Bye", "Thanks"];
var newMessage = "Lol";
messages.push(newMessage);
console.log("List with the new message added:", messages);

//=====================================================
/*Adding element to back of array function 
*/
//======================================================

function applyPush(array,element){
  array.push(element);
  return array;
}

var resultArray1 = applyPush([1, 17, 29], 34);
console.log('New array: ', resultArray1);

var resultArray2 = applyPush(['abc','def'], 'ghi');
console.log('New array: ', resultArray2);

//=====================================================
/*Removing an element from back of array
*/
//======================================================

var array = [1,2,3,4];
var elementPopped = array.pop();
console.log('Array with removed element', array);
console.log('Element removed:', elementPopped);

//=====================================================
/*Removing element from back with variables
*/
//======================================================

var weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Sunday'];
var dayPopped = weekdays.pop();
console.log('Week days with last element removed: ', weekdays);
console.log('Element removed:', dayPopped);

//=====================================================
/*Removing element from back of array function 
*/
//======================================================

function applyPop(array){
  var popped = array.pop();
  return popped;
}

var resultElement1 = applyPop([1,54,129]);
console.log('Should log 129:', resultElement1);

var resultElement2 = applyPop(['islands', 'tree', 'pacific']);
console.log('Should log pacific:', resultElement2);

//=====================================================
/*Adding an element to the front of an array
*/
//======================================================

var array = [2,3,4];
array.unshift(1);
console.log('Array with newly added element:', array);

//=====================================================
/*Adding element to front of array with variables
*/
//======================================================

var places = ["Second", "Third", "Fourth"];
var firstPlace = "First";
places.unshift(firstPlace);
console.log('List of new added places:', places);

//=====================================================
/*Adding an element to front of array function
*/
//======================================================

function applyUnshift(array,element){
  array.unshift(element);
  return array; 
}

var resultArray1 = applyUnshift([7,9,4], 1);
console.log('New element added:', resultArray1);

var resultArray2 = applyUnshift(['ef', 'hi'], 'bc');
console.log('New element added:', resultArray2);


//=====================================================
/*Removing an element from the front of an array
*/
//======================================================

var array = [1,2,3,4];
var elementShifted = array.shift();
console.log('Array with element removed:', array);
console.log('Element removed:', elementShifted);


//=====================================================
/*Removing an element from the front of an array with variables
*/
//======================================================

var activities = ['running', 'hiking', 'dancing', 'singing'];
var activityShifted = activities.shift();
console.log('Actitivies with first element removed: ', activities);
console.log('Element removed:', activityShifted);

//=====================================================
/*Removing an element from the front of an array function 
*/
//======================================================

function applyShift(array){
  var shifted = array.shift();
  return shifted;
}

var resultElement1 = applyShift([1,171,129]);
console.log('Should log 1: ', resultElement1);

var resultElement2 = applyShift(['islands', 'sand', 'pacific']);
console.log('Should log islands ', resultElement2);

//=====================================================
/*Adding an element in gerneral (.splice(a))
*/
//======================================================

var array = [1,2,4];
array.splice(2,0,3); //(Index, 0, newItem)
console.log('Array with new added element:', array);


//=====================================================
/*Adding in element with variables
*/
//======================================================

var alphabeticallyOrderedItems = ['Bacon', 'Eggs', 'Yogurt'];
var newItem = 'Suasage';
var indexOfNewItem = 2;
alphabeticallyOrderedItems.splice(indexOfNewItem, 0, newItem);
console.log('List with new items added: ',alphabeticallyOrderedItems);


//=====================================================
/*Adding an elements to array with splice function 
*/
//======================================================

function addAnElementInGeneral(array,index, element){
  array.splice(index,0,element);
  return array;
}

var resultArray1 = addAnElementInGeneral([7,9,10],1,8);
console.log('Should log [7,8,9,10]:', resultArray1);

var resultArray2 = addAnElementInGeneral(['q', 'r', 't'], 2, 's');
console.log('Should log [q, r, s, t]:', resultArray2);

//=====================================================
/*Removing an element from array with splice
*/
//======================================================

var array = [1,2,'mistake', 3];
array.splice(2,1); // (index, 1)
console.log('Array with element removed:', array);

var lunchItems = ['Turkey Sandwhich', 'Falafel', 'Processor Speed', 'Ham'];
var indexOfItemToBeRemoved = 2;
lunchItems.splice(indexOfItemToBeRemoved, 1);
console.log('List of items: ', lunchItems);

//=====================================================
/*Removing an element from array with splice function 
*/
//======================================================

function removeAnElementInGeneral(array,index){
  array.splice(index, 1);
  return array;
}

var resultArray1 = removeAnElementInGeneral([8,9,10, 'bad entry', 11], 3);
console.log('Should log [8,9,10,11]:', resultArray1);

var resultArray2 = removeAnElementInGeneral(['one', 'two', 452, 'three'], 2);
console.log('Should log [one, two, three]: ', resultArray2);

//=====================================================
/*Replacing multiple elements in array with splice 
*/
//======================================================

var array = [1, 2, 3, 'mistake1', 'mistake2', 6];
array.splice(3, 2, 4, 5);
console.log('New array: ', array);

var lunchItems = ['Turkey', 'Falafel', 'Paella', 'PC', 'RAM', 'Gyro' ];
var indexOfFirstItemToBeRemoved = 3;
var numberOfItemsToRemove = 2; 
var itemToBeAdded1 = 'Fish Taco';
var itemToBeAdded2 = 'Pizza';

lunchItems.splice(indexOfFirstItemToBeRemoved, numberOfItemsToRemove, itemToBeAdded1, itemToBeAdded2);
console.log('List after splicing: ', lunchItems);

//=====================================================
/*Using splice to remove and add an element
*/
//======================================================

function applySplice(array, index, item1, item2){
  array.splice(index, 2, item1, item2);
  return array;
}

var resultArray1 = applySplice([8,9,10, 'bad entry1', 'bad entry2', 13], 3, 11, 12);
console.log('Should log [8,9,10,11,12,13]:', resultArray1);

var resultArray2 = applySplice(['one', 'two', 23, 34, 'five'], 2, 'three', 'four');
console.log('Should log [one, two, three, four, five]:', resultArray2);


//=====================================================
/* Determining if a value is an array
*/
//======================================================

var array = [1,2,3];
console.log('Input is an array: ', Array.isArray(array));

var holidays = ['Xmas', 'Memorial Day', 'Easter', 'Holi'];
var isHolidaysAnArray = Array.isArray(holidays);
console.log('Holidays is an array: ', isHolidaysAnArray);

//=====================================================
/* Determining if a value is an array function 
*/
//======================================================

function isAnArray(input){
  var result = Array.isArray(input);
  return result;
}

var resultBoolean1 = isAnArray([1,2,3]);
console.log('Should log true:', resultBoolean1);

//=====================================================
/* Slicing a portion of an array (and making a copy)
*/
//======================================================

var array = ['a', 'b', 'c', 'd', 'e'];
var sliceOfArray = array.slice(0,2); //['a', 'b' ]
console.log('Slicing a portion of an array from index 0 and stopping at index before 2: ', sliceOfArray);

var array = ['a', 'b', 'c', 'd', 'e'];
var sliceOfArray2 = array.slice(2,5); //array.slice(2); OR array.slice(2, array.length);
console.log('Slicing a portion from index 2 to the end of the array:', sliceOfArray2); //['c', 'd', 'e']
console.log('Slicing the array does not affect the original array:', array); //[a,b,c,d,e]

var altitudeAlongHikingTrail = [20, 70, 110, 170, 120, 40];
var todaysHike = altitudeAlongHikingTrail.slice(1,4);

console.log('Altitudes for today\'s hike:', todaysHike); // [70, 110, 170 ]
console.log('Original altitudes along trail is not affected by slice:', altitudeAlongHikingTrail); //[ 20, 70, 110, 170, 120, 40 ]

var originalListOfVegetables = ['squash', 'bell pepper', 'artichoke', 'cucumber'];
var copyOfListOfVegetables = originalListOfVegetables.slice();
console.log('Copy of the array: ', originalListOfVegetables);


//=====================================================
/* Slicing a portion of the array function 
*/
//======================================================

function applySlice(array, start, end){
  var sliceOfArray = array.slice(start,end);
  return sliceOfArray;
}

var array1 = ['Q', 'u', 'e', 'u', 'e'];
var resultOfSlice1 = applySlice(array1, 1, 4);
console.log('Should log [ u, e, u]:', resultOfSlice1);

var array2 = [0,1,2,3,4,5,6,7,8,9,10];
var resultOfSlice2 = applySlice(array2, 2, 8);
console.log('Should log [2,3,4,5,6,7]: ', resultOfSlice2);


//=====================================================
/* Using slice to make a copy
*/
//======================================================

function makeACopy(array){
    var copyOfArray = array.slice();
    return copyOfArray; 
}

var array1 =  ['A', 'B', 'C'];
var resultCopy1 = makeACopy(array1);
console.log('A copy of the array:', resultCopy1);

var array2 = [1,2,3];
var resultCopy2 = makeACopy(array2);
console.log('Copy of the array:', resultCopy2);


//=====================================================
/* Adding the contents of an array to another array
*/
//======================================================

var array1 = [1,2,3];
var array2 = ['a', 'b', 'c'];
var array3 = ['do', 're', 'mi'];

var resultOfConcat1 = array1.concat(array2);
console.log('Concatting array1 and array2 together: ', resultOfConcat1); //[ 1, 2, 3, 'a', 'b', 'c' ]
//Array 1 and array 2 are unaffected by concatting
var resultOfConcat2 = resultOfConcat1.concat(array3);
console.log('Concatting array 3 to the previous result:', resultOfConcat2); //  1,    2,    3,  'a',  'b',  'c', 'do', 're', 'mi'

var breakfastItems = ['bacon', 'eggs', 'coffee', 'pancakes'];
var lunchItems = ['falafel', 'gyro', 'pad thai', 'sandwich'];
var dinnerItems = ['skirt steak', 'pork chops', 'lasagne', 'lamb shank'];

var brunchItems = breakfastItems.concat(lunchItems);
console.log('Items for brunch:', brunchItems);

var happyHourItems = lunchItems.concat(dinnerItems);
console.log('Items for happy hour:', happyHourItems);

var entireMenu = breakfastItems.concat(lunchItems, dinnerItems);
console.log('Entire menu of items:', entireMenu);


//=====================================================
/* Adding the contents of an array to another array function 
*/
//======================================================

function applyConcat(array1, array2){
  var concattedArray = array1.concat(array2);
  return concattedArray;
}

var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];
var resultConcat1 = applyConcat(array1, array2);
console.log('Should log [a,b,c,d,e,f]: ', resultConcat1);

var array3 = [1,2,3];
var array4 = [4,5,6];
var resultConcat2 = applyConcat(array3,array4);
console.log(resultConcat2);


//=====================================================
/* Transforming an array into a string
*/
//======================================================

var joinedOnNothing = ["a", "b", "c"].join();
console.log('Joined with no argument supplied and comma still present:', joinedOnNothing); // a,b,c

var joinedOnEmptyString = ["a", "b", "c"].join("");
console.log('Joined on empty string and no separation of elements:', joinedOnEmptyString); //abc

var joinedOnAString = ["a", "b", "c"].join("-");
console.log('Joined on a string and letters separated by a dash:', joinedOnAString); // a-b-c

var listOfCountingSequence = [1,2,3,4,5];
var countingSequence = listOfCountingSequence.join();
console.log('Counting sequence and commas still present.', countingSequence); //1,2,3,4,5

var lettersInWord = ['M', 'e', 'r', 'g', 'e', 's', 'o','r','t'];
var joiner = "";
var joinedWord = lettersInWord.join(joiner);
console.log('Word after joining on empty string:', joinedWord); //Mergesort

var wordsInSentence = ['I', 'am', 'learning', 'to', 'code'];
var joiner = ' ';
var joinedSentence = wordsInSentence.join(joiner);
console.log('Sentence after joining on a space:', joinedSentence); //I am learning to code


//=====================================================
/* Transforming an array into a string function 
*/
//======================================================

function applyJoin(arrayOfStrings, string){
  var joinedString = arrayOfStrings.join(string);
  return joinedString;
}

var resultString1 = applyJoin(['first', 'second', 'third'], '--');
console.log('Should log joined string:', resultString1); //first--second--third

var resultString2 = applyJoin(['git', 'commit'], ' ');
console.log('Should also log joined string:', resultString2); //git commit


//=====================================================
/* Transforming a string into a array
*/
//======================================================

var splitOnNothing = "abc".split();
console.log('Split with no argument supplied:', splitOnNothing); // ['abc']

var splitOnEmptyString = "abc".split("");
console.log('Split on an empty string:', splitOnEmptyString); // ['a', 'b', 'c']

var splitOnAString = "a-b-c".split("-");
console.log('Split on a string', splitOnAString); //['a', 'b', 'c']

var generateID = 'a1d8b5q9';
var arrayVersionOfId = generateID.split();
console.log('Array with one ID:', arrayVersionOfId); // [ 'a1d8b5q9' ]

var word = 'Networking';
var separator = ' ';
var lettersInWord = word.split(separator);
console.log('Letters in word:', lettersInWord);  // [ 'Networking' ]

var sentence = 'Approaching the end of operators and methods';
var separtor = ' ';
var wordsInSentence = sentence.split(separator);
console.log('Words in a sentence', wordsInSentence); //[ 'Approaching', 'the', 'end', 'of', 'operators', 'and', 'methods' ]

//=====================================================
/* Transforming a string into an array function 
*/
//======================================================

function applySplit(stringToBeSplit, splitter){
  var splitString = stringToBeSplit.split(splitter);
  return splitString;
}

var resultArray1 = applySplit('first--second--third', '--');
console.log('Should log split string:', resultArray1); //[ 'first', 'second', 'third' ]

var resultArray2 = applySplit('git push origin master', ' ');
console.log('Should log split string:', resultArray2); //[ 'git', 'push', 'origin', 'master' ]

//=====================================================
/* Determining if a value is an array
*/
//======================================================

var indexOfElement1 = ['a', 'b', 'c', 'd', 'e'].indexOf('c');
console.log('Index where element is first found:', indexOfElement1); //2

//=====================================================
/* Determining if a value is an array
*/
//======================================================

var indexOfElement = [1,2,3,1,5,9].indexOf(1,2);
console.log('Index where element is found after index 2:', indexOfElement); //3

var ingredients = ['butter', 'sugar', 'flour', 'chocolate chips'];
var searchIngredient = 'flour';
var indexOfIngredient = ingredients.indexOf(searchIngredient);
console.log('Index where ingredient is found:', indexOfIngredient); //2

//=====================================================
/* Search for an element beginning after a certain index in an array
*/
//======================================================

var workOrders = ['installation', 'repair', 'SYSTEM RESET', 'maintenance', 'repair'];
var indexOfSystemReset = workOrders.indexOf('SYSTEM RESET');
var indexOfFirstRepairAfterReset = workOrders.indexOf('repair', indexOfSystemReset + 1);
console.log('Index of first repair order after reset:', indexOfFirstRepairAfterReset); //4


//=====================================================
/* Applying indexOf method to an array
*/
//======================================================

function applyIndexOfToArray(array,element){
  var index = array.indexOf(element);
  return index;
}

var array1 = ['Quick', 'sort', 'is', 'wild'];
var element1 = 'sort';
var resultIndex1 = applyIndexOfToArray(array1, element1);
console.log('Should log 1:', resultIndex1);

var array2 = ['size', 'color', 'cut', 'price'];
var element2 = 'style';
var resultIndex2 = applyIndexOfToArray(array2, element2);
console.log('Should log -1:', resultIndex2);
          
      

