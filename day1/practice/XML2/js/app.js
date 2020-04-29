// http://www.omdbapi.com/?s=avengers&apikey=58ec2b29
// s and api 
let moviesList = document.getElementById("moviesList")
// OPTION 1
let request = new XMLHttpRequest()
// request.addEventListener("load", function() {

// })

// OPTION 2 
request.onload = function() {

    let result = JSON.parse(this.responseText)
    let liItems = result.Search.map((movie) => {
        return `<li>
                 <label>${movie.Title}</label>
                 <img src=${movie.Poster}/>
                </li>`
    })

    moviesList.innerHTML = liItems.join(" ")
    console.log(liItems)
    


}

request.open("GET", "http://www.omdbapi.com/?s=avengers&apikey=58ec2b29")
request.send()