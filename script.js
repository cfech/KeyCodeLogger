//event listener for document
document.addEventListener("keyup", whatKey)

// vars for html elements 
var keyDiv = document.getElementById("keySpan")
var keyCodeDiv = document.getElementById("keyCodeSpan")
var historyDiv = document.getElementById("history")

//previous key clicked array 
var previousKC = []


// function to get the key code for key clicked 
function whatKey(e) {
    console.log(e.keyCode)
    console.log(e)
    console.log(e.key)

    var kc = e.keyCode
    var k = e.key

    //validation for spaces
    if (e.key === " ") {
        k = "Space"
    }

    // setting the html text content
    keyDiv.textContent = k
    keyCodeDiv.textContent = kc

    //building out key combo object for history 
    let keyCombo = {
        key: k,
        keyC: kc
    }

    // pushing the keyCombo to the array for further use
    previousKC.push(keyCombo)

    // calling the set history function
    setHistory(previousKC)
}


const setHistory = (array) => {
    // resetting the historyDiv
    historyDiv.textContent = ""

    //creating a list and adding a class
    var list = document.createElement("ol")
    list.classList.add("listStyle")

    //looping through our array of objects and setting the text content of previously clicked keys 
    for (let i = 0; i < array.length; i++) {
     

        let listItem = document.createElement("li")
        listItem.classList.add("listItemStyle")

        let key2 = JSON.stringify(array[i].key)
        let keyCode2 = JSON.stringify(array[i].keyC)

        listItem.textContent = `KEY: ${key2},  KEYCODE: ${keyCode2}`
        list.prepend(listItem)
    }

    // appending our list to the history div
    historyDiv.append(list)
}