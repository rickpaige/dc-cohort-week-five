// HTTP REQUEST
    // - HEADERS - tell the server what we are sending and in which format
    // - BODY - tell server about content

// POST - https://island-bramble.glitch.me/orders
// Information that you are sending should be in JSON format
// name
// coffeeName
// total
// size 



// GET request can be run by typing out the url in the browser 
// GET - https://island-bramble.glitch.me/orders


let request = new XMLHttpRequest()

request.onload = function() {

}


request.open("POST", "https://island-bramble.glitch.me/orders")
// set the headers to JSON to indicate we are sending JSON
request.setRequestHeader("Content-Type", "application/json")

let order = {
    name: "Mary Doe",
    coffeeName: "Regular Hot Coffee",
    total: 2.0,
    size: "Large"
}

request.send(order)