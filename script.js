const button=document.getElementById("menuButton");
const menu=document.getElementById("menu");
button.onclick=function(){
  if(menu.style.display==="block"){
    menu.style.display="none";
  }else{
    menu.style.display="block";
  }
};

const fixedCall = document.getElementById("fixedCall");

window.addEventListener("scroll", function () {

    if (window.scrollY > 180) {
        fixedCall.style.top = "0";
    } else {
        fixedCall.style.top = "-60px";
    }

});
