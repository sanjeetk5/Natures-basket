let i = 0;
let x;



let data = [
  "https://d1z88p83zuviay.cloudfront.net/BannerImages/b7641ce5-fd86-485f-bc27-e6c486afc951_1320x376.jpg",
  "https://d1z88p83zuviay.cloudfront.net/BannerImages/56d58540-9be6-436e-9046-3a75e7f3928b_1320x376.jpg",
  "https://d1z88p83zuviay.cloudfront.net/BannerImages/30c36f71-c01f-41eb-bbbb-a56a1f438c39_1320x376.jpg",
  "https://d1z88p83zuviay.cloudfront.net/BannerImages/a5ad3541-5426-47e1-b33c-0360c5e28c35_1320x376.jpg",
  "https://d1z88p83zuviay.cloudfront.net/BannerImages/8f6ba871-ab4e-4f01-b71c-c913dfb63f11_1320x376.jpg",
];



function displaytable(data) {
  document.getElementById("display").innerHTML = "";
  //console.log(data[i])
  let image = document.createElement("img");
  image.src = data[i];
  document.getElementById("display").append(image);
}
displaytable(data);

x = setInterval(() => {
  i++;
  if (i > data.length - 1) {
    i = 0;
  }
  displaytable(data);
}, 3000);



 let j = 0;
 let y;

let array = [
  "https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_pastaBlog_banner.jpg",
  "https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_paneerBlog_banner.jpg",
  "https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_1320x355-blog2.jpg",
];

function ds(array) {
  document.getElementById("sixth").innerHTML = "";
  //console.log(data[i])
  let images = document.createElement("img");
  images.src = array[j];
  document.getElementById("sixth").append(images);
}
ds(array);

y = setInterval(() => {
  j++;
  if (j > array.length - 1) {
    j = 0;
  }
  ds(array);
}, 3000);


let bag = []

let url = "https://6369fed4c07d8f936d901d30.mockapi.io/products?page=1&limit=4"

async function getdata(){
  try{
    let res = await fetch(url);
    let out = await res.json()

    bag = out
    console.log(out)
    dp(out)
  }catch(err){
    alert(err);
  }
}
getdata()


function dp(out){
   document.querySelector("#Seventh").innerHTML = "";
  out.forEach(element => {
    let div = document.createElement("div");

   

    let img = document.createElement("img")
    img.src = element.avatar

    let name = document.createElement("p")
    name.innerText = element.name

    let piece = document.createElement("p")
    piece.innerText = "1"

    let mrp = document.createElement("p")
    mrp.innerText ="Mrp"+ " " + "Rs" + "-" + element.price

    let button = document.createElement("button")
    button.innerText = "ADD"
    button.addEventListener("click", function () {
      let arr = JSON.parse(localStorage.getItem("cart")) || [];

      arr.push(element);

      let a = localStorage.setItem("cart", JSON.stringify(arr));
    });

    div.append(img , name , piece , mrp , button)

    document.querySelector("#Seventh").append(div)
  });
}


let s = 0;
let p;

let logo = [
  "https://d1z88p83zuviay.cloudfront.net/Images/lexlusif.jpg",
  "https://d1z88p83zuviay.cloudfront.net/Images/healthy.jpg",
  "https://d1z88p83zuviay.cloudfront.net/Images/cambay-tiger.jpg",
  "https://d1z88p83zuviay.cloudfront.net/Images/real-thai.jpg",
  "https://d1z88p83zuviay.cloudfront.net/Images/ceres.jpg"
]


function df(logo) {
  document.getElementById("tenth").innerHTML = "";
  //console.log(data[i])
  let ima = document.createElement("img");
  ima.src = logo[s];
  document.getElementById("tenth").append(ima);
}
df(logo);

p = setInterval(() => {
  s++;
  if (s > logo.length - 1) {
    s = 0;
  }
  df(logo);
}, 3000);


let button = document.getElementById("reg")

button.addEventListener("click" , function(){
  location.href = "mobile.html"
})

let car = document.getElementById("cart")
car.addEventListener("click" , function(){
  location.href = "cart.html"
})
