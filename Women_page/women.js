// // ---------------------------------------impot--------------------------------------------
// import {navbar} from "../components2/nav.js"
// import {footer} from "../components2/footer.js"
// // ------------------------------------select all div--------------------------------------
// let nav_div=document.getElementById("navbar_RP")
// nav_div.innerHTML=navbar()

// let footer_div=document.getElementById("Footer_RP")
// footer_div.innerHTML=footer()

// -----------------------------------------carousel----------------------------------------
let carousel_array=["https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktop-1-07Nov2022.gif","https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktopp-2-07Nov2022.jpg","https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktopp-4-07Nov2022.jpg","https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner6-desktop-Women-08Nov2022.gif"]

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
    },5000)
}

carousel()