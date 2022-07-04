var data=JSON.parse(localStorage.getItem("cart_items"))||[]


function datac(data){
    document.querySelector("#cart").innerHTML=null
    var sum=0;
  
    data.map(function(el,index){
        let div=document.createElement("div")
        let name=document.createElement("p")
        let price=document.createElement("p")
        let image=document.createElement("img")
        let but=document.createElement("button")
        but.innerText="Remove"
        but.addEventListener("click",function(){
            removeproduct(el,index)
        })
        name.innerText=el.name;
        price.innerText=el.price;
        sum=sum+el.price;
        if(sum<price){
            alert("Insufficient Balance")
            
        }
        image.src=el.image;
        div.append(image,name,price,but)
        document.querySelector("#cart").append(div)
        document.querySelector("#cart_total").innerText=sum;
    })

}

datac(data)

function removeproduct(el,index){
    var data=JSON.parse(localStorage.getItem("cart_items"))
    data.splice(index,1)
    localStorage.setItem("cart_items",JSON.stringify(data))
    window.location.reload()
}