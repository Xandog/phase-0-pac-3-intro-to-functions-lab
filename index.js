function shout(string) {
    return string.toUpperCase();
} 

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(shout(string));
}

function logWhisper(string) {
    console.log(whisper(string));
}

function sayHiToGrandma(string) {
    if(string == 'hello') {
        return string = "I can't hear you!";
    }
    else if(string == 'HELLO') {
        return string = 'YES INDEED!';
    }
    else if(string == "I love you, Grandma.") {
        return string = "I love you, too.";
    }
}