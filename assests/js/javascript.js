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
let bd = document.getElementsByTagName("body")[0];
cross.addEventListener('click',function(){
    console.log("click");

   if(logincontainer.style.opacity == "1"){
    logincontainer.style.opacity = "0"; 
    bd.style.overflow="";     
      }else{
        logincontainer.style.opacity = "1"; 
        bd.style.overflow="hidden";  
      }
});

loginbtn.addEventListener('click',function(){

   if(logincontainer.style.opacity == "0"){
    logincontainer.style.opacity = "1";
    bd.style.overflow="hidden";  
    //body.classList.add("over");   
      }else{
        logincontainer.style.opacity = "0";
        bd.style.overflow="";
       // body.classList.remove("over");  
      }
      
});
let navjs = document.getElementById("navjs");
var textjs = document.getElementsByClassName("textjs");

window.addEventListener("scroll", ()=>{
  if(window.pageYOffset>100){
    navjs.style.backgroundColor = "#FF6700";
    for (var i = 0; i < textjs.length; i++) {
      textjs[i].style.color="white";
    }
  }else{
    navjs.style.backgroundColor = "white";
    for (var i = 0; i < textjs.length; i++) {
      textjs[i].style.color="black";
    }
  }

});

