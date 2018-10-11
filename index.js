// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
	var newArray = [];
	newArray.push(array[0]);
	newArray.push(array[1]);
	return newArray;
}

const returnLastTwoDrivers = (array) => {
	var newArray = array.slice(-2)
	return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplyValue) {
	return function (value) {
		return multiplyValue * value; 
	};
};

function fareDoubler(value){
	return value * 2;
}


function fareTripler(value){
	return value * 3;
}

function fetchSpecifiedDrivers(arrayOfDrivers, whichDrivers) {
	return whichDrivers(arrayOfDrivers);
	
}