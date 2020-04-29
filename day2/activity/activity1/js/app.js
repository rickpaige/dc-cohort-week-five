let userInfo = document.getElementById("userInfo")
let request = new XMLHttpRequest()

request.addEventListener("load", function() {
    let response = JSON.parse(this.responseText)
    console.log(this.responseText)

    let users = response.map((users) => {
        return `<li>
                    <label> ${users.name} | ${users.username} | ${users.address.street} | ${users.address.geo.lat}  | ${users.address.geo.lng}</label>        
                </li>`
    })
    userInfo.innerHTML = users.join (" ")
    console.log(users)
})







request.open("GET", "https://jsonplaceholder.typicode.com/users")
request.send()