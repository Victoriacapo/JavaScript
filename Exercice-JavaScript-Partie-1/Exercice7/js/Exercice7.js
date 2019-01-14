function AddMultSous() {
  var Pointure = prompt("Pointure");
  var Annee = prompt("Annee de naissance");
  var Resultat = ((((Pointure*2)+5)*50)-Annee) +1766;
  return alert(Resultat)
}
