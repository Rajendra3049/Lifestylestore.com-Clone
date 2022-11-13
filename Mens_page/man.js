// ---------------------------------------impot--------------------------------------------
let RJData=JSON.parse(localStorage.getItem("cart"))|| []
let cartLength=document.getElementById("cart_length")
cartLength.innerText=RJData.length
// ------------------------------------select all div--------------------------------------


// -----------------------------------------carousel----------------------------------------
let carousel_array=["https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Men_Desktop-1-07Nov2022.gif","https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner5-desktop-MEN-07Nov2022.jpg","https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_MEN_Desktop-4-07Nov2022.jpg","https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_MEN_Desktop-3-07Nov2022.jpg",
"https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_MEN_Desktop-2-07Nov2022.jpg",
"https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner6-desktop-MEN-07Nov2022.jpg"]

const carousel=()=>{
    let slideshow_div=document.getElementById("carousel")
    let image=document.createElement("img")
    image.src=carousel_array[0]
    slideshow_div.append(image)

    let i=1
    setInterval(function(){
        if(i==carousel_array.length){
            i=0
        }
        image.src=carousel_array[i]
        image.setAttribute("class","carousel_img")
        slideshow_div.append(image)

        i++
    },6000)
}

carousel()



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