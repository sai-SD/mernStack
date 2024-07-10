document.getElementById("i-input").addEventListener(
    "click", () => {
        window.location.href = "login.html"
    }
)

document.getElementById("cross-signin").addEventListener("click", () => {   
    clearInputs();
    // let x = "hii"
    // console.log(x);
    document.getElementById("span1").style.display = "none";
    // document.getElementById("signin").style.display = "none";
    window.location.href = "home.html";

})

document.getElementById("button").addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let pass = document.getElementById("pass").value;
    let email = document.getElementById("email").value;
    if (name === "" || pass === "" || email === "") {
        return;
    } else {
        // document.getElementById("span1").style.display = "none";
        let i;
        let j = 0;
        let obj = {
            username: name,
            email: email,
            password: pass
        }

        let signIn = JSON.parse(localStorage.getItem("signInData")) || [];
        // console.log(signIn);
        for (i = 0; i < signIn.length; i++) {
            if (signIn[i].username === `${name}`) {
                j = 1;
                break;
            } else {
                j = 0;
            }
        }
        if (j === 0) {
            signIn.push(obj)
            localStorage.setItem("signInData", JSON.stringify(signIn))
            clearInputs();
            window.location.href = "home.html"
            localStorage.setItem("signin","success")
        }else{
            document.getElementById("span1").style.display="block";
        }
        // console.log(signIn)

    }
})

function clearInputs() {
    let x = document.getElementsByTagName("input");
    for (let i = 0; i < x.length; i++) {
        x[i].value = "";
    }
}