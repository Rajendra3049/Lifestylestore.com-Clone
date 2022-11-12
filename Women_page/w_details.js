let RJData=JSON.parse(localStorage.getItem("cart"))|| []
let cartLength=document.getElementById("cart_length")
cartLength.innerText=RJData.length
// -------------get data from local storage-----------------------

let productData=JSON.parse(localStorage.getItem("details_data")) || []

// -----access div----------
let product_div=document.getElementById("main_container")

const append_Data=(e)=>{

    let name=document.createElement("p")
        name.innerText=e.name
        name.setAttribute("class","name")

    let content_div=document.createElement("div")
        content_div.setAttribute("class","content")

    // div for all images
    let img_div=document.createElement("div")
        img_div.setAttribute("class","product_img")
    
    for(i=0;i<e.images.length;i++){
            let item_img=document.createElement("div")
            item_img.setAttribute("class",`item_img${i+1}`)

            let img=document.createElement("img")
                img.src=e.images[i]
    
            item_img.append(img)
        img_div.append(item_img)       
    }

    let details=document.createElement("div")
        details.setAttribute("class","details")

    // div for all details
    let details1_div=document.createElement("div")
    details1_div.setAttribute("class","details1_div")

    let price=document.createElement("p")
    price.innerText=`₹ ${e.price}`

    let msg1=document.createElement("p")
    msg1.innerText=`Free shipping on orders above INR ${e.price}`
    msg1.setAttribute("class","msg1")

    let size=document.createElement("p")
    size.innerText="Size"

    let size_div=document.createElement("div")
    // size btn
    let size1=document.createElement("button")
    size1.innerText="32"
    let size2=document.createElement("button")
    size2.innerText="34"
    let size3=document.createElement("button")
    size3.innerText="36"
    let size4=document.createElement("button")
    size4.innerText="38"
    let size5=document.createElement("button")
    size5.innerText="40"
    let size6=document.createElement("button")
    size6.innerText="42"
    let size7=document.createElement("button")
    size7.innerText="44"

    size_div.append(size1,size2,size3,size4,size5,size6,size7)

    // add to basket btn
    let basket_btn=document.createElement("button")
        basket_btn.innerText="ADD TO BASKET"
        basket_btn.setAttribute("class","basket_btn")

        // function
        basket_btn.addEventListener("click",function(){
            movetolocal(e)
            
        })

    details1_div.append(price,msg1,size,size_div,basket_btn)

    let hz_line1=document.createElement("hr")

    // details2 div
    let details2_div=document.createElement("div")

    // promotion div
    // let promotion_div=document.createElement("div")

    let promotion_heading=document.createElement("h4")
        promotion_heading.innerText="PROMOTION OFFER"
    
    let promotion_msg=document.createElement("p")
        promotion_msg.innerText="Shop for Rs. 2,999 & Get 12% Off. Code - SAVE12 | Shop for Rs. 1,999 & Get 8% Off. Code - SAVE8 Browse promotion"

    // promotion_div.append()

    details2_div.append(promotion_heading,promotion_msg)
   

    let hz_line2=document.createElement("hr")

    // details3 div
    let details3_div=document.createElement("div")
    details3_div.setAttribute("class","details3_div")

        let div1=document.createElement("div")
        div1.setAttribute("class","details3_div1")
            d1=document.createElement("div")
                let logo1=document.createElement("img")
                logo1.src="https://cdn-icons-png.flaticon.com/128/3222/3222657.png"
                d1.append(logo1)
            d2=document.createElement("div")
                let heading1=document.createElement("h3")
                heading1.innerText="Click & Collect"

                let p1=document.createElement("p")
                p1.innerText="Order this product now and collect it from a store of your choice."
                d2.append(heading1,p1)

            div1.append(d1,d2)

        let div2=document.createElement("div")
        div2.setAttribute("class","details3_div2")
                d11=document.createElement("div")
                    let logo2=document.createElement("img")
                    logo2.src="https://cdn-icons-png.flaticon.com/128/608/608283.png"
                d11.append(logo2)

                d22=document.createElement("div")
                    let p22=document.createElement("p")
                    p22.innerText="10 days easy return policy."
                d22.append(p22)
            div2.append(d11,d22)

        let div3=document.createElement("div")
        div3.setAttribute("class","details3_div3")
                d111=document.createElement("div")
                let logo3=document.createElement("img")
                logo3.src="https://cdn-icons-png.flaticon.com/128/747/747310.png"
                d111.append(logo3)
                d222=document.createElement("div")
                let heading111=document.createElement("h3")
                heading111.innerText="Pay in installments"

                let p111=document.createElement("p")
                p111.innerText="Pay in easy installments on orders of ₹ 3,000 or more. Available for select banks."
                d222.append(heading111,p111)

            div3.append(d111,d222)

        let div4=document.createElement("div")
        div4.setAttribute("class","details3_div4")
            d4=document.createElement("div")
                let logo4=document.createElement("img")
                logo4.src="https://cdn-icons-png.flaticon.com/128/411/411763.png"
            d4.append(logo4)

            d5=document.createElement("div")
                let heading1111=document.createElement("h4")
                heading1111.innerText="When will I receive my order?"

                let box=document.createElement("div")
                    let input=document.createElement("input")
                    let btn=document.createElement("button")
                    btn.innerText="Check"
                box.append(input,btn)

            d5.append(heading1111,box)

        div4.append(d4,d5)

    details3_div.append(div1,div2,div3,div4)

  
  let hz_line3=document.createElement("hr")

    // overview_div
    let overview_div=document.createElement("div")
    overview_div.setAttribute("class","overview")

        let overview_h=document.createElement("h4")
        overview_h.innerText="Overview"

        let overview_p=document.createElement("p")
        overview_p.innerText=e.Overview
    overview_div.append(overview_h,overview_p)

    let overview2=document.createElement("div")
    overview2.setAttribute("class","overview2")
    overview2.innerText=`Type : Straight
    Design : Printed
    Neckline : Notched Neck
    Length : Knee Length
    Sleeve Length : 3/4th Sleeves
    Fabric : Cotton Blend
    Care Instructions : Hand Wash
    Model Wears : Size S, has Height 5'7",Chest 33",and Waist 28"
    Country of Origin : India
    Manufactured By : Lifestyle Int Pvt Ltd, 77 Degree Town Centre, Building No. 3, West Wing, Off Hal Airport Road, Yamlur, Bangalore-560037
    Net Quantity : 1
    Top Hemline : Straight
    Top Length : Knee Length
    Occasion : Fashion
    Product : Kurta`
   
    details.append(details1_div,hz_line1,details2_div,hz_line2,details3_div,hz_line3,overview_div,overview2)

    content_div.append(img_div,details)
    product_div.append(name,content_div)
}
append_Data(productData)

// -------------------Data store in local storage for cart-----------------------------
let cartData=JSON.parse(localStorage.getItem("cart")) || []

function movetolocal(data){
    console.log("In")
    cartData.push(data)
    localStorage.setItem("cart",JSON.stringify(cartData))
    window.location.reload()
}