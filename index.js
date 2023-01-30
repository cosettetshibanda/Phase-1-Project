document.addEventListener("DOMContentLoaded", (event) => {
    const form = document.getElementById("makeup-form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        fetch (`https://makeup-api.herokuapp.com/api/v1/products.json?q=${event.target[0].value}`)
        .then(response => response.json())
        .then(response => console.log("response", response))
    })
})
// let fetchData = [])
// document.addEventListener("DOMContentLoaded", () =>{
//     const form = document.getElementById("makeup-form")
//     form.addEventListener("submit", (event) => {
//         event.preventDefault() 
//         console.log(event.target[0].value)
//         fetch (`https://makeup-api.herokuapp.com/api/v1/products.json`)
//         .then((response) => response.json())
//        .then((data) => {
//        fetchData = data
//        fetchData.filter(object => console.log(object = `${event.target.search.value}`))
//        })
//     })
// })