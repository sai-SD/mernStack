let x = document.querySelectorAll(".nav-item")
x[0].addEventListener("click",() => {
    window.location.href="home.html"
})
x[2].addEventListener("click",() => {
    window.location.href="addProd.html"
})

document.getElementById("log").addEventListener("click", () => {
    window.location.href = "login.html"
})
document.getElementById("sign").addEventListener("click", () => {
    window.location.href = "signup.html"
})
let z = document.querySelector("#add");
let y =  localStorage.getItem("login")
if(y === 'success'){
    let text = document.getElementById("logout");
    // text.innerHTML="Log Out";
    text.style.display="block";
    document.getElementById("log").style.display="none";
    z.style.display="block";
    document.getElementById("sign").style.display="none";
    localStorage.setItem("login","unsucess")
}
let s =  localStorage.getItem("signin")
// console.log(s)
if(s === 'success'){
    let text = document.getElementById("logout");
    // text.innerHTML="Log Out";
    text.style.display="block";
    document.getElementById("log").style.display="none";
    z.style.display="block";
    document.getElementById("sign").style.display="none"
    localStorage.setItem("signin","unsucess")
}

document.getElementById("logout").addEventListener("click", () => {
    window.location.href = "home.html"
    z.style.display="none";
    document.getElementById("logout").style.display="none"
})

document.addEventListener('DOMContentLoaded', () => {
    let product = JSON.parse(localStorage.getItem("productInfo")) || []
    console.log(product);
    for(let i=0;i<product.length;i++){
        let pname=product[i].product_name
        let image=product[i].image
        let price=product[i].price
        addProductToContainer(pname,image,price)
    }
})



function addProductToContainer(pname,image,price) {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    const productItemDiv = document.createElement('div');
    productItemDiv.className = 'product-item';

    const productImgDiv = document.createElement('div');
    productImgDiv.className = 'product-img';
    
    const productImg = document.createElement('img');
    productImg.src = image;
    productImg.alt = 'product';

    productImgDiv.appendChild(productImg);

    const productDescDiv = document.createElement('div');
    productDescDiv.className = 'product-desc';
    productDescDiv.innerText = pname;

    const priceDiv = document.createElement('div');
    priceDiv.className = 'price';
    priceDiv.innerText =price;

    productItemDiv.appendChild(productImgDiv);
    productItemDiv.appendChild(productDescDiv);
    productItemDiv.appendChild(priceDiv);

    productDiv.appendChild(productItemDiv);
    const productsContainer = document.querySelector('.main');
    productsContainer.appendChild(productDiv);

}


