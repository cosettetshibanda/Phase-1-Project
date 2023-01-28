document.addEventListener("DOMContentLoaded", (event) => {
    const form = document.getElementById("makeup-form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        fetch (`https://makeup-api.herokuapp.com/api/v1/products.json${event.target.search.value}`)
        .then((response) => response.text())
        .then((data) => console.log(data));
    })
})
