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
    - parse the dateCode from the string
    - split the string into hour, minute, seconds (without dateCode)
    - if the dateCode is "PM" add 12 to the hour
    - if the dateCode is "AM" and hour is 12 or 24, hour becomes 00
    - print time
 */
function main() {
    var time = readLine();

    length              = time.length;
    dateCode            = time.substr(-2);
    timeNoCodeAsAry     = time.substr(0, length-2).split(":");
    hour                = timeNoCodeAsAry[0];
    minute              = timeNoCodeAsAry[1];
    second              = timeNoCodeAsAry[2];
    
    if (dateCode == "PM" && hour != "12") {
        hour = parseInt(hour) + 12;
    } 
    
    if (dateCode == "AM" && hour == "12" || hour == 24) {
        hour = "00";
    }
       
    console.log(hour + ":" + minute + ":" + second);
}
