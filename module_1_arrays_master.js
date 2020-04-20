
//=====================================================
/*Write a function that when given an array and an integer, 
  returns the element at the given location
*/
//======================================================

function getNthElement(array,n){
    return array[n];
  }
  
  var random = getNthElement([1,2,3,4,5], 2); //3
  console.log(random);
  
  //=====================================================
  /*Write a function that returns the first element of array
  */
  //======================================================
  
  function getFirstElement(array){
    return array[0];
  }
  
  var firstElement = getFirstElement([1,2,3,4]);
  console.log(firstElement); //1
  
  //=====================================================
  /*Write a function that returns the last element of an array
  */
  //======================================================
  
  function getLastElement(array){
    var lastElement = array.length - 1;
    return array[lastElement];
  }
  
  var output = getLastElement([1,2,3,4]);
  console.log(output); //4
  
  //=====================================================
  /*Write a function that adds an element to the front
    of an array and returns the array
  */
  //======================================================
  
  function addToFront(arr,element){
    arr.unshift(element);
    return arr;
  }
  
  var output = addToFront([1,2],0);
  console.log(output); //[0,1,2]
  
  //=====================================================
  /*Write a function that adds an element to the back
    of an array
  */
  //======================================================
  
  function addToBack(arr, element){
    arr.push(element);
    return arr;
  }
  
  var output = addToBack([1,2],3);
  console.log(output); //[1,2,3]
  
  //=====================================================
  /*Write a function that takes two arrays and joins them
  */
  //======================================================
  
  function joinArrays(arr1,arr2){
    var finalArray = arr1.concat(arr2);
    return finalArray;
  }
  
  var output = joinArrays([1,2], [3,4]);
  console.log(output); //[1,2,3,4,]
  
  
  //=====================================================
  /*Write a function that when given an array and index,
    returns a new array with all the elements after, but
    not including the given index
  */
  //======================================================
  
  function getElementAfter(array,n){
    var result = [];
    for(var i = n + 1; i < array.length; i++){
      result.push(array[i]);
    }
    return result;
  }
  
  var output = getElementAfter(['a', 'b', 'c', 'd', 'e'],2);
  console.log(output); //['d', 'e']
  
  
  //=====================================================
  /*Write a function that when given an array and index,
    returns an array with all the elements up until, but not
    including, the element at the given index
  */
  //======================================================
  
  function getElementsUpTo(array,n){
   return array.slice(0,n);
  
  }
  
  var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'],3);
  console.log(output); //[ 'a', 'b', 'c' ]
  
  //=====================================================
  /*Write a function that when given an array, returns an
    array with all the elements but the first
  */
  //======================================================
  
  function getAllElementsButFirst(array){
    return array.slice(1);
  }
  
  var input = [1,2,3,4];
  var output = getAllElementsButFirst(input);
  console.log(output); //[ 2, 3, 4 ]
  
  //=====================================================
  /*Write a function that when given an array, returns an
    array with all the elements but the last
  */
  //======================================================
  
  function getAllElementsButLast(array){
    var lastIndex = array.length - 1;
    return array.slice(0,lastIndex);
  }
  
  var input = [1,2,3,4];
  var output = getAllElementsButLast(input);
  console.log(output); //[ 1, 2, 3 ]
  
  //=====================================================
  /*Write a function that when given an array, returns an
    array with its first element removed
  */
  //======================================================
  
  
  function removeFromFront(arr){
    arr.shift();
    return arr;
  }
  
  var output = removeFromFront([1,2,3]);
  console.log(output); //[2,3]
  
  
  //=====================================================
  /*Write a function that when given an array, returns an
    array with its last element removed
  */
  //======================================================
  
  
  function removeFromBack(arr){
    arr.pop();
    return arr;
  }
  
  var output = removeFromBack([1,2,3]);
  console.log(output); //[1,2]
  
  //=====================================================
  /*Write a function that when given an array, returns a 
    new array containing all but the last element of the 
    given array
  */
  //======================================================
  
  function removeFromBackOfNew(arr){
    var copyOfArr = arr.slice();
    copyOfArr.pop();
    return copyOfArr;
  }
  
  var arr = [1,2,3];
  var output = removeFromBackOfNew(arr);
  console.log(output); //[1,2]
  console.log(arr); //[1,2,3]
  
  //=====================================================
  /*Write a function that when given an array, returns an
    a new array without the first element
  */
  //======================================================
  
  function removeFromFrontOfNew(arr){
    var copyOfArr = arr.slice();
    copyOfArr.shift();
    return copyOfArr;
  }
  
  var arr = [1,2,3];
  var output = removeFromFrontOfNew(arr);
  console.log(output);  //[2,3]
  console.log(arr); // [1,2,3]
  
  //=====================================================
  /*Write a function that when given a string and a character,
    returns the number of times a given character is in the
    string
  */
  //======================================================
  
  function countCharacter(str,char){
    var count = 0; 
    for (var i = 0; i < str.length; i++){
      if(str[i] === char){
        count++;
      }
    }
    return count;
  }
  
  var output = countCharacter('I am a hacker','a');
  console.log(output); //3
  
  //=====================================================
  /*Write a function that when given a word, returns an array
    containing every character in the word
  */
  //======================================================
  
  function getAllLetters(str){
    if(str === ""){
      return [];
    }
  
    var splitted = str.split("");
    return splitted;
  }
  
  var output = getAllLetters('Radagast');
  console.log(output); //['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
  
  //=====================================================
  /*Write a function that when given a sentence, returns
    an array containing every word in the sentence
  */
  //======================================================
  
  function getAllWords(str){
    if (str === ""){
      return [];
    }
  
    var splitted = str.split(" ");
    return splitted;
  
  }
  
  var output = getAllWords("Alex the dude");
  console.log(output); //[ 'Alex', 'the', 'dude' ]
  
  //=====================================================
  /*Write a function that when given a sentence with double
    spaces, returns the sentence with double spaces converted
    to single spaces
  */
  //======================================================
  
  function convertDoubleSpaceToSingle(str){
    var split = str.split('  ');
    var joined = split.join(' ');
    return joined;
  }
  
  var output = convertDoubleSpaceToSingle("string  with  double  spaces");
  console.log(output); //string with double spaces
  
  //=====================================================
  /*Given three arrays, return an array with the elements of 
    combined
  */
  //======================================================
  
  function joinThreeArrays(arr1,arr2,arr3){
    var concatted = arr1.concat(arr2,arr3);
    return concatted;
  }
  
  var output = joinThreeArrays([1,2],[3,4],[5,6]);
  console.log(output); //[ 1, 2, 3, 4, 5, 6 ]
  
  
  //=====================================================
  /*Given an array an element, creates a NEW array with 
    the new elemetnt added to the front
  */
  //======================================================
  
  function addToFrontOfNew(arr,element){
    var copyOfArr = arr.slice();
    copyOfArr.unshift(element);
    return copyOfArr;
  }
  
  var input = [1,2];
  var output = addToFrontOfNew(input,3);
  console.log('New array:', output); //[3,1,2]
  console.log('Old array:' ,input); //[1,2]
  
  //=====================================================
  /*Given an array an element, creates a clone of the given 
    array, and adds an element to the end
  */
  //======================================================
  
  function addToBackOfNew(arr,element){
    var copy = arr.slice();
    copy.push(element);
    return copy;
  }
  
  var input = [1,2];
  var output = addToBackOfNew(input,3);
  console.log('Old array:', input);
  console.log('New array:',output);
  
  //=====================================================
  /*Given an array and an index, returns an array with all 
    the elements but the nth
  */
  //======================================================
  
  function getAllElementsButNth(array,n){
    var result = [];
    for (var i = 0; i < array.length; i++){
        if ( i == n){
          continue;
        }
        result.push(array[i]);
    }
    return result;
  }
  
  
  var output = getAllElementsButNth(['a','b','c'],1);
  console.log(output); //['a', 'c']
  
  //=====================================================
  /*Given an array of strings, returns an array containing
    only the elements whose lengths are odd numbers
  */
  //======================================================
  
  function filterOddLengthWords(arr){
    if (arr.length === 0){
      return [];
    }
    var oddNumbers = [];
    for (var i = 0; i < arr.length; i++){
        if(arr[i].length % 2 === 1){
          oddNumbers.push(arr[i]);
        }
    }
    return oddNumbers;
  }
  
  var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
  console.log(output); //[ 'there', 'now' ]
  
  
  //=====================================================
  /*Given an array of strings, returns an array containing
    only the elements whose lengths are even numbers
  */
  //======================================================
  
  function filterEvenLengthWords(words){
    if(words.length === 0){
      return [];
    }
    var evenWords = [];
    for (var i = 0; i < words.length; i++){
      if (words[i].length % 2 === 0){
        evenWords.push(words[i]);
      }
    }
    return evenWords;
  }
  
  var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
  console.log(output); //[ 'word', 'word' ]
  
  //=====================================================
  /*Given an array, return the length of the longest string
    in the given array
  */
  //======================================================
  
  function getLengthOfLongestElement(arr){
    if(arr.length === 0){
      return 0;
    }
    var longestWord = arr[0];
    for( var i = 0; i < arr.length; i++){
      if (arr[i].length > longestWord.length){
        longestWord = arr[i];
      }
    }
    return longestWord.length;
  }
  
  var output = getLengthOfLongestElement(['one', 'two','three']);
  console.log(output); //5
  
  //=====================================================
  /*Given an array of numbers, return a new array where
    each element is the square of the element of the given 
    array
  */
  //======================================================
  
  function squareElements(arr){
    var squaredArray = [];
    for (var i = 0; i < arr.length; i++){
      var squared = arr[i] * arr[i];
      squaredArray.push(squared);
    }
    return squaredArray;
  }
  
  var output = squareElements([1,2,3]);
  console.log(output); //[1,4,9]
  
  //=====================================================
  /*Given an array of numbers, return a new array containing 
    only the odd numbers of the given array
  */
  //======================================================
  
  function filterOddElements(arr){
     var oddElementsOnly = [];
     for (var i = 0; i < arr.length; i++){
       if(arr[i] % 2 === 1){
         oddElementsOnly.push(arr[i]);
       }
     }
     return oddElementsOnly;
  }
  
  var output = filterOddElements([1,2,3,4,5]);
  console.log(output);//[1,3,5]
  
  //=====================================================
  /*Given an array of numbers, return the product of all 
    the elements in the given array
  */
  //======================================================
  
  function computeProductOfAllElements(arr){
    if (arr.length === 0){
      return 0;
    }
    var product = 1;
    for (var i = 0; i < arr.length; i++){
      product *= arr[i];
    }
    return product;
  }
  
  var output = computeProductOfAllElements([2,5,6]);
  console.log(output); //60
  
  //=====================================================
  /*Given an array of numbers, return an array containing
    only the even numbers of the given array
  */
  //======================================================
  
  function filterEvenElements(arr){
    var evenElements = [];
  
    for (var i = 0; i < arr.length; i++){
      if (arr[i] % 2 === 0){
        evenElements.push(arr[i]);
      }
    }
    return evenElements;
  
  }
  
  var output = filterEvenElements([2,3,4,5,6]);
  console.log(output); //[2,4,6]
  
  //=====================================================
  /*Given an array, return the length of the shortest string
    in the given array
  */
  //======================================================
  
  
  function getLengthOfShortestElement(arr){
    if(arr.length === 0){
      return 0;
    }
    var shortestElement = arr[0];
    for (var i = 0; i < arr.length; i++){
      if (arr[i].length < shortestElement.length){
        shortestElement = arr[i];
      }
    }
    return shortestElement.length;
  }
  
  var output = getLengthOfShortestElement(['one', 'two', 'three']);
  console.log(output);
  
  //=====================================================
  /*Given an array, return the longest string in the given
    array
  */
  //======================================================
  
  function getLongestElement(arr){
    if (arr.length === 0){
      return "";
    }
    var longestString = arr[0];
    for (var i = 0; i < arr.length; i++){
      if (arr[i].length > longestString.length){
        longestString = arr[i];
      }
    }
    return longestString;
  }
  
  var output = getLongestElement(['one', 'two', 'three']);
  console.log(output); //three
  
  //=====================================================
  /*Given an array of numbers, return the smallest number
    within the given array
  */
  //======================================================
  
  function findSmallestElement(arr){
    if(arr.length === 0){
      return 0;
    }
    var smallestElement = arr[0];
    for (var i = 0; i < arr.length; i++){
      if (arr[i] < smallestElement){
        smallestElement = arr[i];
      }
    }
    return smallestElement;
  }
  
  var output = findSmallestElement([4,1,9,10]);
  console.log(output);
  
  //=====================================================
  /*Given an array, returns the shortest string within the
    array. If there are ties. Return the first element to 
    appear.
  */
  //======================================================
  
  
  function findShortestElement(arr){
    if (arr.length === 0){
      return "";
    }
    var shortestString = arr[0];
    for (var i = 1; i < arr.length; i++){
      if(arr[i].length < shortestString.length){
        shortestString = arr[i];
      }
      if(arr[i].length === shortestString.length){
        return shortestString;
      }
      return shortestString;
    }
  }
  
  var output = findShortestElement(['a', 'two', 'three']);
  console.log(output); //a
  
  
  //=====================================================
  /*Given an array of numbers, return the largest element
  */
  //======================================================
  
  function getLargestElement(arr){
    if (arr.length === 0){
      return 0;
    }
    var largestElement = arr[0];
    for (var i = 1; i < arr.length; i++){
      if(arr[i] > largestElement){
        largestElement = arr[i];
      }
    }
    return largestElement;
  }
  
  var output = getLargestElement([5,2,8,3]);
  console.log(output); //8
  
  //=====================================================
  /*Given an array of numbers, return the sum of all the 
    elements in the given array
  */
  //======================================================
  
  function computeSumOfAllElements(arr){
    var sum = 0; 
    for (var i = 0; i < arr.length; i++){
      sum+=arr[i];
    }
    return sum;
  }
  
  var output = computeSumOfAllElements([1,2,3]);
  console.log(output); //6
  
  //=====================================================
  /*Given an array of arrays, returns a single array
    containing the elements of the nested arrays
  */
  //======================================================
  
  
  function joinArrayOfArrays(arr){
    var newArray = [];
    for (var i = 0; i < arr.length; i++){
      newArray = newArray.concat(arr[i]);
    }
    return newArray;
  }
  
  var output = joinArrayOfArrays(
    [
      [1,4], 
      [true,false], 
      ['x', 'y']
    ]);
  
  console.log(output); //[ 1, 4, true, false, 'x', 'y' ]
  
  //=====================================================
  /*Given an array, return the shortest string among the 
    mixed element array
  */
  //======================================================
  
  function findShortestWordAmongMixedElements(arr){
    if(arr.length === 0){
      return "";
    }
    var strings = [];
    for (var i = 0; i < arr.length; i++){
      if (typeof arr[i] === "string"){
        strings.push(arr[i]);
      }
    }
    if (strings.length === 0){
      return "";
    }
    var shortest = strings[0];
    for (var i = 1; i < strings.length; i++){
      if (strings[i].length < shortest.length){
        shortest = strings[i];
      }
    }
    return shortest;
  }
  
  var output = findShortestWordAmongMixedElements([4,'two', 2, 'three']);
  console.log(output); //'two'

  