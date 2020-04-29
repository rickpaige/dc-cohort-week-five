let movieList = document.getElementById("movieList")
let request = new XMLHttpRequest()

request.addEventListener("load", function() {
    let result = JSON.parse(this.responseText)
    
    let liItems = result.Search.map((movie) => {
        return `<li>
                 <label>${movie.Title}</label>
                 <img src=${movie.Poster}`
    })

    movieList.innerHTML = liItems.join(" ")
})



request.open("GET", "http://www.omdbapi.com/?s=avengers&apikey=58ec2b29")
request.send()