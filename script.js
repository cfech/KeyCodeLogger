
document.addEventListener("keyup", whatKey)

var keyDiv = document.getElementById("keySpan")
var keyCodeDiv = document.getElementById("keyCodeSpan")
var historyDiv = document.getElementById("history")
var previousKC = []


function whatKey(e) {
    console.log(e.keyCode)
    console.log(e)
    console.log(e.key)

    var kc = e.keyCode
    var k = e.key



    keyDiv.textContent = k
    keyCodeDiv.textContent = kc

    let keyCombo = {
        key: k,
        keyC: kc
    }

    console.log("looking not for meta: ", keyCombo.key)
    previousKC.push(keyCombo)
    console.log("whatKey -> previousKC", previousKC)
    setHistory(previousKC)


}

const setHistory = (array) => {
    historyDiv.textContent = ""
    var list = document.createElement("ol")
    list.classList.add("listStyle")
    // list.textContent=  ""
    for (let i = 0; i<array.length; i++ ){
        let listItem = document.createElement("li")
        listItem.classList.add("listItemStyle")
        let key2 = JSON.stringify(array[i].key)
        let keyCode2 = JSON.stringify(array[i].keyC)
        console.log("setHistory -> keyCode2", keyCode2)
        console.log("setHistory -> key2", key2)
        console.log("KEYYYYY",JSON.stringify(array[i].key))
        listItem.textContent = `KEY: ${key2}, KEYCODE: ${keyCode2}`
        list.prepend(listItem)
    }
    // console.log(list)
    console.log(historyDiv)
    historyDiv.append(list)

}