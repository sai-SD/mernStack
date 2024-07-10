document.getElementById("add-cross").addEventListener("click",() =>{
    // document.getElementById("add-blog").style.display="none";
    clearInputs();
    window.location.href = "home.html"
})
// document.getElementById("log").style.display="none"
// document.getElementById("sign").style.display="none"
// document.getElementById("logout").style.display="block"





function clearInputs() {
    let x = document.getElementsByTagName("input");
    for (let i = 0; i < x.length; i++) {
        x[i].value = "";
    }
    document.getElementById("product").value="";

}

document.getElementById("add-submit").addEventListener("click", () => {
    let pname = document.getElementById("product").value;
    let image = document.getElementById("image").value;
    let price = document.getElementById("price").value;
    if (pname === "" || image === "" || price === "") {
        return;
    } else {
        // document.getElementById("span1").style.display = "none";
        let i;
        let j = 0;
        let obj = {
            product_name: pname,
            image: image,
            price: price
        }

        let product = JSON.parse(localStorage.getItem("productInfo")) || [];
        console.log(product);
        for (i = 0; i < product.length; i++) {
            if (product[i].product_name === `${pname}`) {
                j = 1;
                break;
            } else {
                j = 0;
            }
        }
        if (j === 0) {
            product.push(obj)
            localStorage.setItem("productInfo", JSON.stringify(product))
            clearInputs();
            // window.location.href = "home.html"
            localStorage.setItem("login","success")
        }
        // else{
        //     document.getElementById("span1").style.display="block";
        // }
        // console.log(signIn)

    }
})