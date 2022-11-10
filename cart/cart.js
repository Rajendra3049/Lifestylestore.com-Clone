let cartData=JSON.parse(localStorage.getItem("cart")) || []

let product_div=document.getElementById("product_details")

let sum=0
for(i=0;i<cartData.length;i++){
    sum=sum+cartData[i].price
}
let totoal_price=document.getElementById('total_price')
    totoal_price.innerText=sum


const appendData=(data)=>{
    data.forEach(function(e,i){
        let card=document.createElement("div")
            card.setAttribute("class","cards")

        let div_box=document.createElement("div")
            div_box.setAttribute("class","div_box")

        let div1=document.createElement("div")
            div1.setAttribute("class","div1")

        let div2=document.createElement("div")
            div2.setAttribute("class","div2")


        let img=document.createElement("img")
            img.setAttribute("class","product_img")
            img.src=e.images[0]
        
        let name=document.createElement("p")
            name.setAttribute("class","product_name")
            name.innerText=e.name
        
        let price=document.createElement("p")
            price.setAttribute("class","product_price")
            price.innerText=`₹${e.price}`

        let qty=document.createElement("p")
            qty.setAttribute("class","qty")
            qty.innerText=`QTY${e.length}`
        
        let btn=document.createElement("button")
            btn.setAttribute("class","remove_btn")
            btn.innerText="Remove"
            btn.addEventListener("click",function(){
                removeItem(e,i)
            })


        div1.append(img)
        div2.append(name,price,qty)

        div_box.append(div1,div2)

        card.append(div_box,btn)

        product_div.append(card)
    })

    
}
appendData(cartData)


const removeItem=(element,index)=>{
    let data=JSON.parse(localStorage.getItem("cart"))
    let cartData= data.filter(function(e,i){
        return i!==index
    })

    localStorage.setItem("cart", JSON.stringify(cartData))
    product_div.innerHTML=null
    appendData(cartData)
    totoal_price.innerText=null
    sum=0
    for(i=0;i<cartData.length;i++){
        sum=sum+cartData[i].price
    }
    // console.log(sum)
    totoal_price.innerText=sum
}