const returnFirstTwoDrivers = function(array){
  newArr = [];
  newArr.push(array[0], array[1]);
  return newArr;
};// Code your solution in this file!

const returnLastTwoDrivers = function(array){
  newArr = [];
  lastIndex = array.length - 1;
  secondToLast = array.length -2;
  newArr.push(array[secondToLast], array[lastIndex]);
  return newArr;
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(num) {
  return function mp(fare) {
    return num * fare;
  }
}

const fareDoubler = function mp(fare) {
    return fare * 2;
  }

  const fareTripler = function mp(fare) {
      return fare * 3;
    }

function fetchSpecifiedDrivers(array, returnFirstTwoDrivers){
  return returnFirstTwoDrivers(array);
}
