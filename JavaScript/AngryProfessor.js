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

function main() {
    var t = parseInt(readLine()),
        a, n, k, studentsOnTime;
    
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        n = parseInt(n_temp[0]);
        k = parseInt(n_temp[1]);
        a = readLine().split(' ');
        a = a.map(Number);
        
        shouldICancel();
    }

    function shouldICancel () {
        var i = 0,
            l = a.length;
        
        studentsOnTime = 0;
        
        for (i; i<l; i++) {
            if (a[i] <= 0) {
                studentsOnTime++;
            }
        }
        
        if (studentsOnTime >= k) {
            console.log("NO");
        } else {
            console.log("YES");
        }
    }
}

