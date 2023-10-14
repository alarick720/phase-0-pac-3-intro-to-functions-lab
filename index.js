
function shout(string) {
    // todo 
    return string.toUpperCase();
    
}

console.log (shout('right'))


function whisper(string) { 
    return string.toLowerCase()
}
console.log (whisper('NIGHT'))

function logShout(string) { 
    //todo 
   console.log(string.toUpperCase())
}

function logWhisper(string) {
    //todo
    console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string) {
    //todo
    if(string===string.toLowerCase()){
        return "I can't hear you!" 
    }
    if (string===string.toUpperCase()) {
    return "YES INDEED!"    
    }
    if("Let's have dinner together!"===string) {

    
        return "I would love to!"}
    
}




