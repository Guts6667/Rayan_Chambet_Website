let menu = document.getElementById("menu");
 let btnMenu = document.getElementById("btnMenu");

 btnMenu.onclick = function() {

  if(menu.style.display !== "none"){
     menu.style.display = "none";
  }
  else{
     menu.style.display = "flex";
  }

 };