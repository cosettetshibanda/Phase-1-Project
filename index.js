//     const form = document.getElementById("makeup-form")
//     let products = []
//     form.addEventListener("submit", (event) => {
//         event.preventDefault()
//         fetch (`https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline?=${event.target[0].value}`)
//         .then(response => response.json())
//         .then(response => {
//             products = products.map(product =>{
//                 console.log("product", product)
//         })
//     })
// })


// search.addEventListener("input", (e) => {
//     const value = e.target.value.toLowerCase()
//     users.forEach(user => {
//         const isVisible = user.name.toLowerCase().includes(value) || user.description.toLowerCase().includes(value)
//         user.element.classList.toggle("hide", !isVisible)
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


// const cardTemplate = document.querySelector("[data-card-template]")
// const cardContainer = document.querySelector("[data-cards-container]")
// const search = document.querySelector("[data-search]")
// const rating = document.getElementsByClassName("rating")
// const form = document.getElementById("form")

// const star = Object.entries(rating)

// let users = []

// const newNode = document.importNode(cardTemplate.content, true)




// rating.forEach((star, index1) => {
//     star.addEventListener("click", () => {
//         console.log("click")
//     })
// })

// for(const star in rating){
//     star.addEventListener("click", (e) => {
//         console.log(e)
//     })
// }

// search.addEventListener("input", (e) => {
//     const value = e.target.value.toLowerCase()
//     users.forEach(user => {
//         const isVisible = user.name.toLowerCase().includes(value) || user.description.toLowerCase().includes(value)
//         user.element.classList.toggle("hide", !isVisible)
//     })
// })

// fetch (`https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
//          .then((response) => response.json())
//          .then((data) => {
//            users = data.map(user =>{
//                 const card = cardTemplate.content.cloneNode(true).children[0]
//                 const header = card.querySelector("[data-header]")
//                 const body = card.querySelector("[data-body]")
//                 const img = document.createElement("img")
//                 img.src = user.image_link
//                 card.append(img)
//                 header.textContent = user.name
//                 body.textContent = user.description
//                 console.log("user", user)
//                 cardContainer.append(card)
//                 return {name: user.name, description: user.description, element: card}
//             })
//          })

// console.log(form)
// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     handleComment(e.target.comment_input.value)
//  })

// function handleComment(comment){
//     let p = document.createElement('p')
//     p.textContent = comment
//     document.querySelector('#list').appendChild(p)
// }

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const glyphObject = {'♡':FULL_HEART,'♥':EMPTY_HEART}
const colorState = {"red":"","":"red"}

// let likeButtons = document.getElementsByClassName("like-glyph")
// console.log(likeButtons)
// console.log(form)
 


// function clickListener(){
//     document.addEventListener("click", (event) => console.log(event.target))
// }
// Array.from(likeButtons).forEach(function(like){
//     console.log(like)
// })
 
// for(like of likeButtons) {
//     like.addEventListener("click", () => {
//         newNode.querySelectorAll(likeButtons)
//         console.log("You found me")
//     })
// }
// for (like of likeButtons){
//     like.addEventListener("click", (e) => {
//     e.target.innerText = glyphObject[e.target.innerText]
//     e.target.style.color = colorState[e.target.style.color]
//     })
// }

// function mimicServerCall(url="http://mimicServer.example.com", config={}) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       let isRandomFailure = Math.random() < .2
//       if (isRandomFailure) {
//         reject("Random server error. Try again.");
//       } else {
//         resolve("Pretend remote server notified of action!");
//       }
//     }, 300);
//   });
// }


// star.forEach((star, index1) => {
//     star.addEventListener("click", () => {
//         console.log("clicked")
//     })



const productList = document.getElementById("productList")
const searchBar = document.getElementById("searchBar")

let productArray = []

// searchBar.addEventListener("input", (e) => {
//     const value = e.target.value.toLowerCase()
//     productArray.forEach(product => {
//          const isVisible = product.name.toLowerCase().includes(value) || product.description.toLowerCase().includes(value)
//          console.log(isVisible)
         
// console.log(product)
//          product.divCard.classList.toggle("hide", !isVisible)
//            })
// })

const loadProducts = fetch (`https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
        .then((response) => response.json())
        .then((data) => {
          displayProducts(data)
        })

const displayProducts = (products) =>{
    productArray = products
    const htmlString = products
    .map((product) => {
     return renderProducts(product)
    //     return `
    //     <li class="product">
    //         <h2>${product.name}</h2>
    //         <p>Description: ${product.description}"</p>
    //         <img src="${product.image_link}"></img>
    //         <footer>
    //                     <ul>
    //                       <li class="like">Like! <span class="like-glyph">&#x2661;</span></li>
    //                     </ul>
    //                     <form id="form" onsubmit= "() => console.log("hi")">
    //                         <label for="comments">Comment:</label>
    //                         <input type='text' name="comment" id="comment_input" cols="30" rows="10">
    //                         </br>
    //                         <button type="submit" id='submit'>submit</button>
    //                     </form>
    //                     <div id='list' class='comments'></div>
    //                   </footer>
    //     </li>`
    // })
    // .join('')
    // productList.innerHTML = htmlString
})
}

// console.log(form)
// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//   handleComment(e.target.comment_input.value)
//    })
 
function handleComment(comment){
     let p = document.createElement('p')
     p.textContent = comment
      document.querySelector('#list').appendChild(p)
  }



function renderProducts(product){
    let h2 = document.createElement("h2")
    h2.innerText = product.name

    let p = document.createElement("p")
    p.innerText = product.description

    let img = document.createElement("img")
    img.setAttribute('src', product.image_link)
    

    let span = document.createElement("span")
    span.setAttribute('class', 'like-btn')
    span.setAttribute('id', 'like-glyph')
    span.innerText = '♡'
    span.addEventListener('click', (e) => {
        e.target.innerText = glyphObject[e.target.innerText]
        e.target.style.color = colorState[e.target.style.color]
    })

    let div = document.createElement("div")
    div.setAttribute('id', 'list')
    div.setAttribute('class', 'comments')

    // let label = document.createElement("label")
    // label.setAttribute('for','comments')

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
        handleComment(e.target[0].value)
    })


    let divCard = document.createElement('div')
    divCard.setAttribute('class', 'card')
    divCard.append(h2, img, p, span, form, div)
    productList.append(divCard)
 

    console.log(divCard.classList)

    searchBar.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase()
        productArray.forEach(product => {
             const isVisible = product.name.toLowerCase().includes(value) || product.description.toLowerCase().includes(value)
            // //  divCard.classList.toggle("hide", !isVisible)
             if(false){
                return ('hide')
             }
             else{}
        })
     })
}


