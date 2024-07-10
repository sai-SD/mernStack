document.getElementById("i-input").addEventListener(
    "click",() => {
        window.location.href = "signup.html"
    }
)

document.getElementById("cross-login").addEventListener("click",() =>{
    // document.getElementById("login").style.display="none";
    clearInputs();
    document.getElementById("span1").style.display="none";
    document.getElementById("span2").style.display="none";
    // document.getElementById("content").style.display="block";
    window.location.href = "home.html"
})

document.getElementById("btn").addEventListener("click",() => {
    // e.preventDefault();
    let name = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if(name === "" || pass === ""){
        return;
    }else{
        let j=2;
        // document.getElementById("span2").style.display="none";
        // document.getElementById("span").style.display="none";
        // 
        let logInData = JSON.parse(localStorage.getItem("signInData")) || []
        for(let i = 0;i<logInData.length;i++){
            if(logInData[i].username === `${name}`){
               if(logInData[i].password === `${pass}`){
                    j = 0;
                    break;
                }else{
                    j=1;
                }
            }
        }
        console.log(j);
        if(j === 0){
            clearInputs();
            window.location.href = "home.html"
            localStorage.setItem("login","success")
        }
        else if(j === 2){
            document.getElementById("span").style.display="block";
            document.getElementById("span2").style.display="none";
        }else{
            document.getElementById("span2").style.display="block";
            document.getElementById("span").style.display="none";
        }
        
    }
})


function clearInputs() {
    let x = document.getElementsByTagName("input");
    for (let i = 0; i < x.length; i++) {
        x[i].value = "";
    }
}