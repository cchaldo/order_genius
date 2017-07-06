// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/


var tab = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
var commands = ["Initializing...",
    "!Initialized.",
    "Are you ready for some delicious food?",
    "!You better be!",
    "I am the Order Genius.",
    ""];

var user = " OG$ ";
var lineBeginning = "~"+user;

document.onreadystatechange = function() {
    if (document.readyState === 'complete') {
        main();
    }
};

const lineTime = 1700;
const charTime = 80;
var content;
var printedNewLine;
var time = -1200;

function main(){
    line(lineBeginning, 0);

    for(var i=0; i<commands.length; i++){
        if(commands[i].indexOf('!') == 0){
            content = commands[i].substr(1)+'<br>\n';
            line(content, time);
            printedNewLine = false;
        } else{
            content = commands[i];
            printChars(content, time+lineTime);
            time += (content.length*charTime)+lineTime;
            printedNewLine = true;

            if(content.indexOf('cd') == 0){
                lineBeginning = content.substr(3)+user;
            }
        }

        if(commands[i+1].indexOf('!') != 0){
            line(lineBeginning, (printedNewLine) ? time : time);
        }
    }
}

function line(content, t) {
    setTimeout(function(){
        document.getElementById("console").innerHTML += content;
    }, t);
}

function printChars(content, t){
    for(var j=0; j<content.length; j++){
        char(content.substr(j,1), t+(j*charTime))
    }
    char('<br>', t+(content.length*charTime));
}

function char(char, t) {
    setTimeout(function(){
        document.getElementById("console").innerHTML += char;
    }, t);
}