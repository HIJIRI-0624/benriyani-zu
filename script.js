const button=document.getElementById("menuButton");
const menu=document.getElementById("menu");
button.onclick=function(){
  if(menu.style.display==="block"){
    menu.style.display="none";
  }else{
    menu.style.display="block";
  }
};
