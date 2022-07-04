document.querySelector("form").addEventListener("submit", sendmyfun)

function sendmyfun(){
      event.preventDefault();
        function t(){
            setTimeout(function(){
                alert("Your order is confirmed")
            },0)
            setTimeout(function(){
                alert("Your order is being Packed")
            },3000)
            setTimeout(function(){
                alert("Your order is in transit")
            },8000)
            setTimeout(function(){
                alert("Your order is out for delivery")
            },10000)
            setTimeout(function(){
                alert("Your order is out for delivery")
            },12000)
        }
    t();
}