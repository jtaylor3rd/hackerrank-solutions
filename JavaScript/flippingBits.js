function processData (input) {
 	var i=0, list, listSize=0, BINARYDIGITS=32, binAry=[], ansAry=[], sum=0;

 	function parseInput () {
 		if (input) {
 			input = input.split("\n");

 			if (input) {
	 			listSize = input[0];
		 		list = input;
		 		list = list.slice(1);
		 	}
 		}
 	};

 	function convertIntToBit () {
 		var i=0, binStr="", integer, rem, res;

 		function doConvert (q, r) {
			var res;

			binStr += r+"";

 			if (q != 0) {
 				res = getQuotientAndRemainder(q, 2);
 				return doConvert(res.q, res.r);
 			}
 		};

 		function getQuotientAndRemainder (i, divisor) {
 			var resultAsStr, quotient, remainder;

 			resultAsStr	= (parseInt(i, 10)/divisor) + "";
 			quotient 	= resultAsStr.match(/[0-9]*/);
 			remainder 	= resultAsStr.match(/\.([0-9]*)/);

 			if (quotient && quotient.length > 0) {
 				quotient = quotient[0];
 			}

 			if (remainder && remainder.length > 0) {
 				remainder = remainder[1];
 			}

 			return {q:quotient, r:remainder ? 1:0};
 		};

 		for (i=0; i<listSize; i++) {
 			res = getQuotientAndRemainder(list[i], 2);
 			doConvert(res.q, res.r);
	 		addBitPadding();
 			binAry.push(binStr.split("").reverse().join(""));
 			binStr = "";
 		};

 		function addBitPadding () {
 			var binStrLength = binStr.length, i=0;

 			for (i=0; i<(BINARYDIGITS-binStrLength); i++) {
 				binStr += "0";
 			}
 		};
 	};

	function flipBits () {
		var binAryLength = binAry.length, i=0, p=0, curBinAsStr, curBinAsStrLength, curBit;

		for (i=0; i<binAryLength; i++) {
			curBinAsStr 		= binAry[i];
			curBinAsStr 		= curBinAsStr.split("");
			curBinAsStrLength 	= curBinAsStr.length;

			for (p=0; p<curBinAsStrLength; p++) {
				curBit = curBinAsStr[p];

				if (curBit == 0) {
					curBit = 1;
				} else {
					curBit = 0;
				}
				curBinAsStr[p] = curBit;
			}
			binAry[i] = curBinAsStr;
		}

		for (i=0; i<binAry.length; i++) {
			binAry[i] = binAry[i].join().replace(/,/g,'');
		}
	};

	function convertBitToInt () {
		var i=0, binAryLength = binAry.length, p=0, curBinStr, curBinStrLength;

		for (i=0; i<binAryLength; i++) {
			curBinStr 		= binAry[i];
			curBinStrLength = curBinStr.length;

			for (p=curBinStrLength; p>0; p--) {
				sum += parseInt(curBinStr[p-1], 10) * Math.pow(2, curBinStrLength-p);
			}
			ansAry.push(sum);
			sum = 0;
		}
	};

	function printAnswer () {
		var i=0;

		for (i=0; i<ansAry.length; i++) {
			console.log(ansAry[i]);
		}
	};

 	parseInput();
 	convertIntToBit();
 	flipBits(binAry);
 	convertBitToInt();
 	printAnswer();
};

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
