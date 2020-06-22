
document.addEventListener("keyup", whatKey)

var keyDiv = document.getElementById("keySpan")
var keyCodeDiv = document.getElementById("keyCodeSpan")

function whatKey (e){
    console.log(e.keyCode)
    console.log(e)
    console.log(e.key)
    var kc = e.keyCode
    var k = e.key
    keyDiv.textContent = k
    keyCodeDiv.textContent = kc
    
}