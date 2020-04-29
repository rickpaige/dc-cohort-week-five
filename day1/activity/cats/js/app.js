let catFacts = document.getElementById("catFacts")

let request = new XMLHttpRequest()

request.addEventListener("load", function() {
    console.log(this.responseText)

    let result = JSON.parse(this.responseText)

  


    for(index = 0; index < result.all.length; index++) {
        if(result.all[index].user) {
        console.log(result.all[index].text)
        console.log(result.all[index].user.name.first)
        console.log(result.all[index].user.name.last)
    }}


    let liItems = result.all.map((facts) => {
        if(facts.user) {
        return `<li>
                 <label>${facts.text}</label>
                 <label>${facts.user.name.first}, ${facts.user.name.last}</label>
                </li>`
    }})

    catFacts.innerHTML = liItems.join(" ")
})


request.open("GET", "https://cat-fact.herokuapp.com/facts")
request.send()