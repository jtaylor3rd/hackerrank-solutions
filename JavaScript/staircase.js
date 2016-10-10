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
    - setup a loop for each row of steps
        - start with a null string
        - each row represents n-i spaces and i steps
            - setup a for loop to add n-i spaces to a string
            - setup a for loop to add i steps to a string
        - print a line break after each row
    - print string    
 */
function main() {
    var n = parseInt(readLine());

    function printStep (n) {
        var diff, str="";
        
        for (var i=1; i<=n; i++) {
            diff = n-i;
            
            for (var p=0; p<diff; p++) {
                str += " ";
            }
            
            for (var j=i; j>0; j--) {
                str += "#"
            }
            str += "\n";
        }
        console.log(str);
    }
    
    printStep(n);
}
