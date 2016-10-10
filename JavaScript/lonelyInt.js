function processData(input) {
 function findLonelyInteger(input) {
 	var numOfInts, intAry = [], i=0, countHash = {}, countHashKeys, countHashLength, oddIntegerCount = 0, curIntCount = 0, lonelyInt;

	// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
	if (!Object.keys) {
	  Object.keys = (function() {
	    'use strict';
	    var hasOwnProperty = Object.prototype.hasOwnProperty,
	        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
	        dontEnums = [
	          'toString',
	          'toLocaleString',
	          'valueOf',
	          'hasOwnProperty',
	          'isPrototypeOf',
	          'propertyIsEnumerable',
	          'constructor'
	        ],
	        dontEnumsLength = dontEnums.length;

	    return function(obj) {
	      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
	        throw new TypeError('Object.keys called on non-object');
	      }

	      var result = [], prop, i;

	      for (prop in obj) {
	        if (hasOwnProperty.call(obj, prop)) {
	          result.push(prop);
	        }
	      }

	      if (hasDontEnumBug) {
	        for (i = 0; i < dontEnumsLength; i++) {
	          if (hasOwnProperty.call(obj, dontEnums[i])) {
	            result.push(dontEnums[i]);
	          }
	        }
	      }
	      return result;
	    };
	  }());
	}

 	if (input) {
 		input = input.split("\n");

 		if (input) {
	 		numOfInts = input[0]; 			
 		}
 	} else {
 		console.log("Error: input is empty");
 	}

 	if (numOfInts) {
 		intAry = input[1];

 		if (intAry) {
 			intAry = intAry.split(" ");

	 		for (i; i<numOfInts; i++) {
	 			if (countHash[intAry[i]]) {
	 				countHash[intAry[i]] += 1;
	 			} else {
	 				countHash[intAry[i]] = 1;
	 			}
	 		}

	 		countHashKeys = Object.keys(countHash);

	 		if (countHashKeys) {
	 			countHashLength = countHashKeys.length;
	 		}

	 		for (i=0; i<countHashLength; i++) {
	 			curIntCount = countHash.hasOwnProperty(countHashKeys[i]) ? countHash[countHashKeys[i]] : null;
	 			if (curIntCount && curIntCount % 2 !== 0) {
					if (oddIntegerCount < 2) {
		 				oddIntegerCount++;
		 				lonelyInt = countHashKeys[i];
					} else {
	 					console.log("Error: more than one integer occurs once in the array.")
	 				}
	 			}
	 		}
	 		console.log(lonelyInt);
 		}
 	} else {
 		console.log("Error: cannot determine number of integers in array");
 	}
 };
    
    findLonelyInteger(input);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
