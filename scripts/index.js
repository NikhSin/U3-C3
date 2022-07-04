let  url=`https://grocery-masai.herokuapp.com/items`

fetch(url)
.then(function(res){
   return res.json()

}).then(function(data){
    itemstore(data.data)
    console.log(data.data)
})
.catch(function(err){
    console.log(err)
})





function itemstore(data){
    
    data.map(function(el){
    let div=document.createElement("div")
    let name=document.createElement("p")
   
    let price=document.createElement("p")
   
    let image=document.createElement("img")
    
    let but=document.createElement("button")
    but.innerText="Add_to_cart"
    but.setAttribute("class","add_to_cart")
    but.addEventListener("click", function(){
        storeproduct(el)
    })
         name.innerText=el.name
         price=innerText=el.price;
         image.src=el.image;
       div.append(price,image,name,but)
       document.querySelector("#groceries").append(div)

    })
}

let arr=JSON.parse(localStorage.getItem("cart_items"))||[]

function storeproduct(el){
    arr.push(el)
    localStorage.setItem("cart_items",JSON.stringify(arr))

  


    
}
