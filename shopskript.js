let cart = []

function addToCart(title, price) {
    cart.push({productTitle: title, productPrice: price, productQuantity: 1})
    console.log(cart)
    //Etter å ha lagt inn et produkt; oppdater handlelistevisningen
    renderCart()
    //SÅ må vi oppdatere label mer antall prdukter
    document.querySelector("#cart .label").innerHTML = cart.length
}

function renderCart() {
    //Tom variabel for å bygge html for produkter
    let listHTML = ""
    //Gå gjennom cart arrayen, lag <li> for hvert produkt
    cart.map(prod => listHTML +=`<li>
        <span class="titel">${prod.productTitle}</span>
        <span class="price">${prod.productPrice}</span>
        <span class="quantity">${prod.productQuantity}</span>
        <button class="delete">X</button>
    </li>`)
    //Bruke en selector for å finne riktig <ul>, og skrive in listHTML: 
    document.querySelector("#cartviuw ul").innerHTML = listHTML
}

function toggleCart() {
    document.querySelector("#cartviuw").classList.toggle("hidden")
}