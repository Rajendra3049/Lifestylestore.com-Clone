let cartData=JSON.parse(localStorage.getItem("cart")) || []



let product_div=document.getElementById("product_details")

let checkout_btn=document.querySelector(".checkout")

checkout_btn.disabled=true

let sum=0
for(i=0;i<cartData.length;i++){
    sum=sum+cartData[i].price
}
let totoal_price=document.getElementById('total_price')
    totoal_price.innerText=`₹ ${sum}`


const emptyAppend=()=>{
    console.in
    let empty_div=document.createElement("div")
        empty_div.setAttribute("class","empty")

    let img_empty=document.createElement("img")
    img_empty.src="https://cdn.dribbble.com/users/1010436/screenshots/11302442/empty_cart.jpg"
    empty_div.append(img_empty)
    product_div.append(empty_div)
}



const appendData=(data)=>{
    product_div.innerHTML=null
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

        // let qty=document.createElement("p")
        //     qty.setAttribute("class","qty")
        //     qty.innerText=`QTY${e.length}`
        
        let btn=document.createElement("button")
            btn.setAttribute("class","remove_btn")
            btn.innerText="Remove"
            btn.addEventListener("click",function(){
                removeItem(e,i)
            })


        div1.append(img)
        div2.append(name,price)

        div_box.append(div1,div2)

        card.append(div_box,btn)

        product_div.append(card)
    })

    
}
// appendData(cartData)

if(cartData.length==0){
    emptyAppend()
}else{
    appendData(cartData)
}


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
    totoal_price.innerText=`₹ ${sum}`
    if(cartData.length==0){
        window.location.reload()
    }
}


// payment options

const paymnetOption=()=>{
    let option= document.getElementById("payment").value
    let show_div=document.getElementById("show_pay")
   if(option=="upi"){
        checkout_btn.removeAttribute("id")
        show_div.innerHTML=null
        checkout_btn.disabled=true
        
        let upi_input=document.createElement("input")
        upi_input.setAttribute("class","user_upi")
        upi_input.placeholder="Enter UPI Address"
        upi_input.required

        let upi_btn=document.createElement("button")
            upi_btn.setAttribute("class","upi_btn")

            upi_btn.innerText="Submit"
            upi_btn.addEventListener("click",checkout_product)

        show_div.append(upi_input,upi_btn)
   }
   else if(option=="card"){
        show_div.innerHTML=null
        checkout_btn.disabled=true
        checkout_btn.removeAttribute("id")
        let card_input=document.createElement("input")
            card_input.setAttribute("class","card_input")
            card_input.type="number"
            card_input.placeholder="1234-5678-9123"
            card_input.required

        let cvv_input=document.createElement("input")
            cvv_input.setAttribute("class","cvv_input")
            cvv_input.type="number"
            cvv_input.maxLength="3"
            cvv_input.placeholder="000"
            cvv_input.required

        let exp_date=document.createElement("input")
            exp_date.type="date"
            exp_date.setAttribute("class","exp_date")
            exp_date.required

        let card_btn=document.createElement("button")
            card_btn.setAttribute("class","card_btn")
            card_btn.innerText="Submit"
            card_btn.addEventListener("click",checkout_product)
            show_div.append(card_input,cvv_input,exp_date, card_btn)
   }
   else if(option=="cash"){
        show_div.innerHTML=null
        checkout_btn.disabled=true
        checkout_btn.removeAttribute("id")
        let cash_btn=document.createElement("button")
            cash_btn.setAttribute("class","cash_btn")
            cash_btn.innerText="Submit"
            cash_btn.addEventListener("click",checkout_product)
        show_div.append(cash_btn)
   }

   
}

let pay=document.getElementById("payment")
pay.addEventListener("change",paymnetOption)

const checkout_product=()=>{
    checkout_btn.id="checkout2"
    checkout_btn.disabled=false
   
}

let popup = document.getElementById("popup");
checkout_btn.addEventListener("click",openPopup)

let ok_btn=document.getElementById('ok_btn')
ok_btn.addEventListener("click",closePopup)



function openPopup(){
    localStorage.removeItem("cart")
    popup.classList.add("open-popup");
    
}
function closePopup(){
    popup.classList.remove("open-popup");
    window.location.reload()
}