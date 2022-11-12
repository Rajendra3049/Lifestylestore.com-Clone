let cartData=JSON.parse(localStorage.getItem("cart")) || []

let RJData=JSON.parse(localStorage.getItem("cart"))|| []
let cartLength=document.getElementById("cart_length")
cartLength.innerText=RJData.length


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
        img_empty.setAttribute("class","empty_img")
    img_empty.src="https://cdn.dribbble.com/users/1010436/screenshots/11302442/empty_cart.jpg"
    img_empty.onclick=()=>{
        img_empty.onclick=window.location.href="../index.html"
    }
    
    // img_empty.setAttribute("href","../index.html")
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

        let images_div=document.createElement("div")
            images_div.setAttribute("class","images_div")

            let img1=document.createElement("img")
                    img1.setAttribute("class","img1")
                    img1.src=e.images[1]
            let img2=document.createElement("img")
                    img2.setAttribute("class","img2")
                    img2.src=e.images[2]
            let img3=document.createElement("img")
                    img3.setAttribute("class","img3")
                    img3.src=e.images[3]
            let img4=document.createElement("img")
                    img4.setAttribute("class","img4")
                    img4.src=e.images[4]

            images_div.append(img1,img2,img3,img4)

            

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
        div2.append(name,price,images_div)

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
    console.log("invoked remove")
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
    
        window.location.reload()
}


// payment options

const paymnetOption=()=>{
    let option= document.getElementById("payment").value
    let show_div=document.getElementById("show_pay")
   if(option=="upi"){
        checkout_btn.removeAttribute("id")
        show_div.innerHTML=null
        checkout_btn.disabled=true
        
        let upi_img=document.createElement("img")
        upi_img.setAttribute("class","upi_img")
        upi_img.src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/batman-returns/logos/UPI.gif"


        let upi_input=document.createElement("input")
        upi_input.setAttribute("class","user_upi")
        upi_input.placeholder="Enter UPI Address"

        let upi_btn=document.createElement("button")
            upi_btn.setAttribute("class","upi_btn")

            upi_btn.innerText="Submit"
            upi_btn.addEventListener("click",checkout_product)

          

        show_div.append(upi_img,upi_input,upi_btn)
   }
   else if(option=="card"){
        show_div.innerHTML=null
        checkout_btn.disabled=true
        checkout_btn.removeAttribute("id")

        let card=document.createElement("div")
            card.setAttribute("class","card_div")
        let card_input_div=document.createElement("div")
            card_input_div.setAttribute("class","card_input_div")

        let card_img_div=document.createElement("div")
            card_img_div.setAttribute("class","card_img")

        let card_img=document.createElement("img")
            card_img.setAttribute("class","card_img")
            card_img.src="https://cdn-icons-png.flaticon.com/512/4305/4305369.png"

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

            card_input_div.append(card_input,cvv_input,exp_date,)
            card_img_div.append(card_img)


            card.append(card_input_div,card_img_div)
            show_div.append(card, card_btn)
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

// tial;
let count=0
let UserName=document.getElementById("username")
let login_btn=document.getElementById('login')
let logout_btn=document.getElementById('logout')


if(count==0){
    login_btn.innerHTML="Sign Up / Sign In"
}

let user=JSON.parse(localStorage.getItem("User_info"))
if(user){
    UserName.innerText=user
    logout_btn.innerText="Log Out"
    login.classList.add("login");
    count=1
    login_btn.innerText=null

}


logout_btn.addEventListener("click",logout)
function logout(){
    UserName.classList.add("username");
    login.classList.remove("login");
    UserName.innerText=null
    logout_btn.innerText=null
    localStorage.removeItem("User_info")
    login_btn.innerHTML="Sign Up / Sign In"
    count=0
}