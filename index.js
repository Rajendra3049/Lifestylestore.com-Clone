console.log("index.js is connected");

let RJData=JSON.parse(localStorage.getItem("cart"))|| []
let cartLength=document.getElementById("cart_length")
cartLength.innerText=RJData.length

let dataArray
const getData=async()=>{
    let searchinput=document.getElementById("query")
    let searchquery=searchinput.value

    let res=await fetch(`https://pacific-spire-33801.herokuapp.com/${searchquery}`)
    let actual_data=await res.json()
    dataArray=actual_data
    append_img(dataArray)

}


let img_container=document.getElementById("main_container")

const append_img=(data)=>{
    
    img_container.innerHTML=null
    data.forEach(function(e){
        let card=document.createElement("div")
        card.setAttribute("class","card_div")

        
        
        // carousel start
        let slideshow_div=document.createElement("div")
        slideshow_div.setAttribute("class","slideshow_div")

        slideshow_div.addEventListener("click",function(){
            detailsData(e)
          })
        
            let image=document.createElement("img")
            image.setAttribute("class","carousel_img")
            image.src=e.images[0]
            slideshow_div.append(image)
        
           
       

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



// async function searchmovies(){
//     let searchInput=document.getElementById("search")
//     let searchquery=searchInput.value
//     // console.log(searchquery)

//     try{
//         let response = await fetch(` https://www.omdbapi.com/?s=${searchquery}&page=1&apikey=a1e75813`)
//         let data= await response.json()
//         let actualData=data.Search

//     //    console.log(actualData)

//         appendMovies(actualData)
//     }
//     catch{
//         console.log("error")
//     }
// }

let searchbtn=document.getElementById("query")

searchbtn.addEventListener("input",debounce)

let id
function debounce(){
    console.log("In")
    if(id)
    clearTimeout(id)
    
    id=setTimeout(function(){
        getData()
    },1000)
}

function detailsData(clikcData){
    console.log("in")
    localStorage.setItem("details_data",JSON.stringify(clikcData))
    window.location.href="/Mens_page/m_details.html"
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