process.stdin.resume();
process.stdin.setEncoding('ascii');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
    __input_stdin += data;
});
/*
 * Complete the function below.
 * 1. find A, B
 * 2. compute A xor B, store results in collection
 * 3. iterate through collection of results to find largest value
 */
function maxXor(l, r) {
	var getA, getB, doXor, getMaxXor,
		A=[],B=[], xorResultList=[];

	getA = function () {
		var i;

		for (i=l; i<=r; i++) {
			A.push(i);
		}
	};

	getB = function () {
		B = A;
	};

	doXor = function () {
		var len = A.length, i, p, xorResult;

		for (i=0; i<len; i++) {
			for (p=0; p<len; p++) {			
				if (B[p] >= A[i]) {
					xorResult = A[i] ^ B[p];	
					xorResultList.push(xorResult);
				}
			}
		}
	};

	getMaxXor = function () {
		var i, len = xorResultList.length, biggest;

		biggest = xorResultList[0];

		for (i=0; i<len; i++) {
			if (xorResultList[i] > biggest) {
				biggest = xorResultList[i];
			}
		}
		return biggest;
	};

	getA();
	getB();
	doXor();
	return getMaxXor();
};

process.stdin.on('end', function () {
    __input_stdin_array = __input_stdin.split("\n");
    var res;
    var _l = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
    __input_currentline += 1;
    
    var _r = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
    __input_currentline += 1;
    
    res = maxXor(_l, _r);
    process.stdout.write(""+res);
    
});