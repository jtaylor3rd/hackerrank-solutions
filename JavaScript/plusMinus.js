process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

/*
	Iterate through the array and for each element:
		- if positive, posNum++
		- if negative, negNum++
		- if zero, zeroNum++

	Once all array elements have been looked at, calculate the ratios by dividing all counter 
	variables by n where n is the size of the array.
 */
 function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);

    plusMinusZero(arr);
}


function plusMinusZero (arr) {
    var posNum = negNum = zeroNum = 0, i=0, arrLength, curEl, fracPos, fracNeg, fracZero;

    if (!arr.length) {
        console.log("Error : not an array - aborting.");
        return;
    }

    arrLength = arr.length;

    for (i; i < arrLength; i++) {
        curEl = arr[i];

        if (curEl > 0) {
            posNum++;
        } else if (curEl < 0) {
            negNum++;
        } else if (curEl == 0) {
            zeroNum++;
        }
    }

    fracPos     = posNum / arrLength;
    fracNeg     = negNum / arrLength;
    fracZero    = zeroNum / arrLength;

    console.log(fracPos);
    console.log(fracNeg);
    console.log(fracZero);
}
