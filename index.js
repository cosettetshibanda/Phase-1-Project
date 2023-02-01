// document.addEventListener("DOMContentLoaded", (event) => {
//     const form = document.getElementById("makeup-form")
//     form.addEventListener("submit", (event) => {
//         event.preventDefault()
//         fetch (`https://makeup-api.herokuapp.com/api/v1/products.json?q=${event.target[0].value}`)
//         .then(response => response.json())
//         .then(response => {
//             response.filter(object => console.log(object === `${event.target.search.value}`))
//         })
//     })
// })
// let fetchData = []
// document.addEventListener("DOMContentLoaded", () =>{
//     let fetchData = []
//     const form = document.getElementById("makeup-form")
//     form.addEventListener("submit", (event) => {
//         event.preventDefault() 
//         console.log(event.target[0].value)
//         fetch (`https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
//         .then((response) => response.json())
//        .then((data) => {
//        fetchData = data
//        fetchData.filter(object => console.log(object = `${event.target.search.value}`))
//        return []
//        })
//     })
// })


const cardTemplate = document.querySelector("[data-card-template]")
const cardContainer = document.querySelector("[data-cards-container]")
const search = document.querySelector("[data-search]")

let users = []

search.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
        const isVisible = user.brand.toLowerCase().includes(value) || user.name.toLowerCase().includes(value)
        user.element.classList.toggle("hide", !isVisible)
    })
})

fetch (`https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
         .then((response) => response.json())
         .then((data) => {
           users = data.map(user =>{
                const card = cardTemplate.content.cloneNode(true).children[0]
                const header = card.querySelector("[data-header]")
                const body = card.querySelector("[data-body]")
                const img = document.createElement("img")
                img.src = user.image_link
                card.append(img)
                header.textContent = user.name
                body.textContent = user.description
                console.log("user", user)
                cardContainer.append(card)
                return {name: user.name, description: user.description, element: card}
            })
         })