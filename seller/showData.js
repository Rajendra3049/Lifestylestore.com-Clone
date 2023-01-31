import { nav } from "./componants/nav.js";

let navbar = document.getElementById("navbar");
navbar.innerHTML = nav;
let AddProduct = document.getElementById("AddProduct");
AddProduct.addEventListener("click", () => {
  window.location.href = "./seller.html";
});

let catagory1 = document.getElementById("Category");
catagory1.addEventListener("change", () => {
  getData();
});

const getData = async (cat) => {
  let catagory = document.getElementById("Category").value;

  let res = await fetch(
    `https://filthy-lime-glasses.cyclic.app/${catagory}`
  );
  let data = await res.json();
  console.log(data);
  console.log("AAAA");

  appendData(data);
};

getData("women");
let DataContainer = document.getElementById("DataContainer");

const appendData = (data) => {
  DataContainer.innerHTML = null;

  data.forEach((el) => {
    let div = document.createElement("div");
    div.className = "miniCart";
    let image = document.createElement("img");
    image.className = "image1";
    image.src = el.images[0];
    
    let name = document.createElement("p");
    name.innerText = el.name;
    name.className = "NameOfPro";
    let btn = document.createElement("button");
    btn.className = "btn";
    // console.log(el.id)
    btn.addEventListener("click",()=>{
        remove(el.id)
    })


    btn.innerText = "Remove";
    div.append(image, name, btn);
    DataContainer.append(div);
  });
};

const remove=async(id)=>{
    // console.log(id)

let catagory = document.getElementById("Category").value;
let res=await fetch(`https://filthy-lime-glasses.cyclic.app/${catagory}/${id}`,{
    method:'DELETE',
    headers:{
      'Content-Type':'application/json'
    }
})
// let data=await res.json()
// console.log(data)
getData()

}



