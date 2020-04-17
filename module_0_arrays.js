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