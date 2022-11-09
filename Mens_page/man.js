// ---------------------------------------impot--------------------------------------------

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