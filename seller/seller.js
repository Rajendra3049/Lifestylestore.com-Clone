let addImage = document.getElementById("add_img");
addImage.addEventListener("click", () => {
  createinput();
});
let container = document.getElementById("Container");
let count = 0;
const createinput = () => {
  let inp = document.createElement("input");
  inp.id = `inpcount${count}`;
  count++;
  container.append(inp);
};

let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  newData();
});
const newData = () => {
  let img_ARR = [];
  let catagory = document.getElementById("Category").value;
  let name = document.getElementById("name").value;
  let Price = document.getElementById("Price").value;
  let Discription = document.getElementById("Discription").value;
  let image = document.getElementById("img_url").value;


console.log
  
  img_ARR.push(image);

  for (let i = 0; i < count; i++) {
   let  IMG_URL = document.getElementById(`inpcount${i}`).value;
    IMG_URL.placeholder = "Image"
    
    img_ARR.push(IMG_URL);
  }
  // console.log(img_ARR);

  let objectData = {
    name: name,
    price: Price,
    Overview:Discription,
    images:img_ARR
  };
  // console.log(catagory)
let type_of_data="women";
if(catagory=="Women"){
  type_of_data="Women"
}else if(catagory=="Men"){
  type_of_data="men"
}
if(catagory==""||name==""||Price==""||Discription==""){
  alert("Fill all information")
}else{

  ADD_DATA_TO_S(objectData,type_of_data)
}
  // console.log(objectData)
};


const ADD_DATA_TO_S=async(data,location)=>{
// console.log("AAAA")
     let res = await fetch(`https://pacific-spire-33801.herokuapp.com/${location}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers:{
        'Content-Type':'application/json'
      },
    });
    let myData = await res.json();
    alert("New Product Added")
  // console.log(myData);

 




}




import{nav} from "./componants/nav.js"


let navbar=document.getElementById("navbar")
navbar.innerHTML=nav


let ShowProduct=document.getElementById("ShowProduct")
ShowProduct.addEventListener("click",()=>{
  window.location.href="./showData.html"
})




