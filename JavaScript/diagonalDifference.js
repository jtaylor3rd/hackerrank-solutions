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
    Start by calculating the point that both diagonals share. This led to 2 different cases:

    (odd)		(even)
    n = 3 		 n = 4

    x - x       x - - x
    - x -		- x x -
    x - x		- x x -
                x - - x

    With odd-dimensioned matrices, there is 1 coordinate point shared.
    With even-dimensioned matrices, there are 4 coordinate points shared.

    Tackle each case separately.

    odd-based matrices:
        1. The midpoint 'm' is calculated by the integer-part of the expression n/2 (3/2 = 1.5 => 1)
        2. The matrix can be split into two halfs (top/bottom)
            a.  The coordinates for the midpoint are [m][m]
        3. Grab the left/right diagonal values for the top half
            a.  The coordinates for each left-diagonal point are [m-i][m-i] (where 'i' is the ith row
                above the midpoint)
            b.  The coordinates for each right-diagonal point are [m-i][(n-1)-i] (where 1 is
                subtracted from the size of the matrix to account for zero-based numbering
                and 'i' is the ith row above the midpoint)
        4. Grab the left/right diagonal values for the bottom half
            a.  The coordinates for each left-diagonal point are [m+i][m+i] (where 'i' is the ith row
                above the midpoint)
            b.  The coordinates for each right-diagonal point are [m+i][m+1] (where 'i' is the ith
                row above the midpoint)

    even-based matrices:
        1. The midpoints are calculated by dividing the matrix size in half 'h2' (4/2 = 2 = h2) and
           that number being the index of the 2nd row of midpoints. The first row of midpoints is
           h2-1
            a.  The coordinates for the midpoints are:  row h2-1    : [h2-1][h2]
                                                        row h2 	    : [h2-1][h2]
        2. The matrix can be split into two halfs (top/bottom)
        3. Grab the left/right diagonal values for the top half
            a.  The coordinates for each left-diagonal point are [i][i] (where 'i' is the ith row
                above the midpoint and starts at i = h2-2)
            b.  The coordinates for each right-diagonal point are [i][(n-1)-i] (where 1 is
                subtracted from the size of the matrix to account for zero-based numbering
                and 'i' is the ith row above the midpoint)
        4. Grab the left/right diagonal values for the bottom half
            a.  The coordinates for each left-diagonal point are [i][n-1-i] (where 'i' is
                the ith row above the midpoint and starts at i = h2+1)
            b.  The coordinates for each right-diagonal point are [i][i] (where 'i' is the ith row
                above the midpoint)

    Once the diagonals are calculated, compute the absolute difference
 */
function main() {
    var n   = parseInt(readLine()),
        a   = [],
        d1  = [],
        d2  = [],
        m1  = 0,
        m1  = 0,
        i   = 0,
        nl;

    function calcDiagDiff () {
        /* need to account for zero-based numbering of the array indices when referencing */
        nl = n-1;

        for(a_i = 0; a_i < n; a_i++){
           a[a_i] = readLine().split(' ');
           a[a_i] = a[a_i].map(Number);
        }

        /* if the matrix has even dimensions, the midpoint will be the 2 center rows */
        if (n%2 == 0) {
            m1 = (n/2)-1;
            m2 = n/2;

            /* calculate midpoint */
            d1.push(a[m1][m1]);
            d2.push(a[m1][m2]);
            d1.push(a[m2][m2]);
            d2.push(a[m2][m1]);

            for (i=m1-1; i>=0; i--) {
                d1.unshift(a[i][i]);
                d2.unshift(a[i][nl-i]);
            }

            for (i=m2+1; i<n; i++) {
                d2.push(a[i][nl-i]);
                d1.push(a[i][i]);
            }
        } else if (n%2 !== 0) {
            m = Math.floor(n/2);

            /* calculate midpoint */
            d1.push(a[m][m]);
            d2.push(a[m][m]);

            for (i=m-1; i>=0; i--) {
                d1.unshift(a[i][i]);
                d2.unshift(a[i][nl-i]);
            }

            for (i=m+1; i<n; i++) {
                d2.push(a[i][nl-i]);
                d1.push(a[i][i]);
            }            
        }

        /* calculate abs diff */
        ld = d1.reduce(function(a,b){return a+b;});
        rd = d2.reduce(function(a,b){return a+b;});

        console.log(Math.abs(ld-rd));
    }
    
    calcDiagDiff();
}
