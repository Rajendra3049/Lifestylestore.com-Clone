let cartData=JSON.parse(localStorage.getItem("cart"))

let cartLength=document.getElementById("cart_length")

cartLength.innerText=cartData.length
