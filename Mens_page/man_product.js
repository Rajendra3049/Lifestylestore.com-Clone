//--------------------------------------------- experiment area---------------------------





//-------------------------- api temporary data----------------------------
// 
let dataArray

const getData=async()=>{
      let res=await fetch(`https://pacific-spire-33801.herokuapp.com/men`)
      let actual_data=await res.json()
      dataArray=actual_data
      append_img(dataArray)
}
getData()

// ---------------import------------------------


// ------------------select div-----------------
let img_container=document.getElementById("main_container")


//----------------------------append function for main_container---------------------------

const append_img=(data)=>{
    data.forEach(function(e){
        let card=document.createElement("div")
        card.setAttribute("class","card_div")

        

        // carousel start
        let slideshow_div=document.createElement("div")
        slideshow_div.setAttribute("class","slideshow_div")

        slideshow_div.addEventListener("click",function(){
          detailsData(e)
        })
        const carousel=()=>{
 
            let image=document.createElement("img")
            image.setAttribute("class","carousel_img")
            image.src=e.images[0]
            slideshow_div.append(image)
        
            let i=1
            setInterval(function(){
                if(i==e.images.length){
                    i=0
                }
                image.src=e.images[i]
                
                slideshow_div.append(image)
        
                i++
            },4000)
        }
        carousel()
        // carousel end

        let card_bottomdiv=document.createElement("div")
        card_bottomdiv.setAttribute("class","card_bottombox")

        let price=document.createElement("p")
        price.innerText=`Rs. ${e.price}`
        price.setAttribute("class","price")

        let name=document.createElement("p")
        name.innerText=e.name
        name.setAttribute("class","name")

        let basket_btn=document.createElement("button")
        basket_btn.innerText="Add To Basket"
        basket_btn.setAttribute("class","basket_btn")

        basket_btn.addEventListener("click",function(){
            movetolocal(e)
            
        })


        card_bottomdiv.append(price,name)
        card.append(slideshow_div,card_bottomdiv,basket_btn)
        img_container.append(card)

    })
}


// -------------------Data store in local storage for cart-----------------------------
let cartData=JSON.parse(localStorage.getItem("cart")) || []

function movetolocal(data){
    console.log("In")
    cartData.push(data)
    localStorage.setItem("cart",JSON.stringify(cartData))
}


//----------------------------------- Data store in local storage for details page----------------------------

function detailsData(clikcData){
  console.log("in")
  localStorage.setItem("details_data",JSON.stringify(clikcData))
  window.location.href="m_details.html"
}


