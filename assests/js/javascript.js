let btn = document.getElementById("nav-btn");
let head = document.getElementById("res-head");
let nav = document.getElementsByClassName("open")
btn.addEventListener('click',function(){
     console.log("click");
    // if(btn.innerHTML=='open'){
    //  head.style.display = "block";
    //  btn.innerHTML='Close';
        
    // }else{
    //  btn.innerHTML='open';

    //     head.style.display='none';
    // }
    if(head.style.display == "none"){
        head.style.display = "block";           
       }else{
           head.style.display='none';
       }
});

let totop = document.getElementById("to-top");

window.addEventListener("scroll", ()=>{
    if(window.pageYOffset>100){
        totop.classList.add("active");
    }else{
        totop.classList.remove("active");
    }
});

let logincontainer = document.getElementById("login_container");
let loginbtn = document.getElementById("loginbtn");
let cross = document.getElementById("cross");

cross.addEventListener('click',function(){
    console.log("click");

   if(logincontainer.style.opacity == "1"){
    logincontainer.style.opacity = "0";           
      }else{
        logincontainer.style.opacity = "1";   
      }
});

loginbtn.addEventListener('click',function(){
    console.log("click");

   if(logincontainer.style.opacity == "0"){
    logincontainer.style.opacity = "1";           
      }else{
        logincontainer.style.opacity = "0";   
      }

      Window.addEventListener('scroll', function(){
        window.scrollTo(0,0);
      })
      
});
