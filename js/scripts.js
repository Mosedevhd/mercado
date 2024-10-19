
const searchForm = document.querySelector(`.search-form`)
const productList= document.querySelector(`.product-list`)


searchForm.addEventListener(`submit`, async function(event){
    
       event.preventDefault()
       const inputValue = event.target[0].value
            
       const data = await fetch( `https://api.mercadolibre.com/sites/MLB/search?q=${inputValue}`)
       const products = (await data.json()).results.slice(0, 12) 
       
       displayItems(products)
       

})

function displayItems(products) {
    productList.innerHTML = products.map( product => `
    
        <div class="product-card">
             <img src="${ product.thumbnail.replace(/\w\.jpg/gi, `W.jpg`)}" alt="${product.title}">
             <h3>${product.title}</h3>
             <p class="price "> Preço:${product.price.toLocaleString(`pt-br`,{style: "currency", currency: "AOA"}) }</p>
             <p><a href="./html/compra.html"> Comprar </a> </p>
        </div>
    
    ` ,
    ).join(``)
}

