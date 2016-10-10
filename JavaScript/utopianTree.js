'use strict';


function processData (input) {
	var parse_fun, calculateTreeHeight, printAnswer,
		lines, testCases, cycles, TREE_STARTING_HEIGHT = 1, treeHeightAry=[], curTreeHeight=TREE_STARTING_HEIGHT;

	parse_fun = function (s) { return parseInt(s, 10); };

 	calculateTreeHeight = function () {
 		var i, curCycleLength, p;

 		for (i=0; i<testCases; i++) {
 			curCycleLength = cycles[i];

 			for (p=0; p<curCycleLength; p++) {
 				curTreeHeight = (p%2==0) ? (2*curTreeHeight) : curTreeHeight+1;
 			}
 			treeHeightAry.push(curTreeHeight);
 			curTreeHeight = TREE_STARTING_HEIGHT;
 		}
 	};

 	printAnswer = function () {
		var i;

		for (i=0; i<treeHeightAry.length; i++) {
			console.log(treeHeightAry[i]);
		}
 	};

	lines		= input.split('\n');
	testCases 	= parse_fun(lines.shift());
	cycles 		= lines.splice(0, testCases).map(parse_fun);

 	calculateTreeHeight();
 	printAnswer();
};

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) { _input += input; });
process.stdin.on("end", function () { processData(_input); });
