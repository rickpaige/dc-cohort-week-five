// http://www.omdbapi.com/?s=superman&apikey=58ec2b29

// create new XML request
let request = new XMLHttpRequest()

// hook event listener 
request.addEventListener("load", function() {
    
    // this is an XMLHTTPrequest object
    console.log(this.responseText)

    // JSON.parse is going to convert valid JSON string to a JS object
    let result = JSON.parse(this.responseText)
     console.log(result)

    for(let index = 0; index < result.Search.length; index++) {
        console.log(result.Search[index].Year)
    }
    
    
})

// setting up type of request
request.open("GET", "http://www.omdbapi.com/?s=ironman&apikey=58ec2b29")

// send request
request.send()