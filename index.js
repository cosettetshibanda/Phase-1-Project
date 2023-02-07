const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const glyphObject = {'♡':FULL_HEART,'♥':EMPTY_HEART}
const colorState = {"red":"","":"red"}

const productList = document.getElementById("productList")
productArray = []  

console.log(productArray)
const loadProducts = fetch (`https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
        .then((response) => response.json())
        .then((products) => 
         productArray = products.map((product) => {
            return renderProducts(product)
        }))

function renderProducts(product){  

    let h2 = document.createElement("h2")
    h2.innerText = product.name

    let p = document.createElement("p")
    p.innerText = product.description

    let img = document.createElement("img")
    img.setAttribute('src', product.image_link)
    img.addEventListener("mouseover", (e) => {
       let currHeight = img.clientHeight
       img.style.height = (currHeight + 150) + "px";
    })

    img.addEventListener("mouseout", (e) => {
        let currHeight = img.clientHeight
        img.style.height = (currHeight - 150) + "px"
    })

    let span = document.createElement("span")
    span.setAttribute('class', 'like-btn')
    span.setAttribute('id', 'like-glyph')
    span.innerText = '♡'
    span.addEventListener('click', (e) => {
        e.target.innerText = glyphObject[e.target.innerText]
        e.target.style.color = colorState[e.target.style.color]
    })

    let input = document.createElement("input")
    input.setAttribute('type', 'text')


    let btn2 = document.createElement("button")
    btn2.setAttribute('type', 'submit')
    btn2.setAttribute('id', 'submit')
    btn2.innerText = " submit"
    

    let form = document.createElement("form")
    form.setAttribute('id','form')
    form.innerText = "Comment: "
    form.append(input, btn2)
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        handleComment(`${product.name}` + " - " + e.target[0].value )
        alert("Comment moved to the bottom of the page. Link found at the top")
        return e.target[0].value = ''
    })

    let divCard = document.createElement('div')
    divCard.setAttribute('class', 'card')
    divCard.append(h2, img, p, span, form)
    productList.append(divCard)
}

function handleComment(comment){
    let p = document.createElement('p')
    p.textContent = comment
     document.getElementById('list').appendChild(p)
 }
