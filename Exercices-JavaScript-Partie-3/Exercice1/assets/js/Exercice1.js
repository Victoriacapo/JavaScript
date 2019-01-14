document.getElementById("image1").addEventListener("onmouseover", bordured);
document.getElementById("image1").addEventListener("onmouseout", bordure0);

function bordured(){
  document.getElementById("image1").style.border="3px solid red";
};

function bordure0(){
  document.getElementById("image1").style.border="";
};
