/**
 * Erstellt einen Array aus Namen, dann gebt alle Namen in dem Array aus.
 */

HoleMirDieDatenVomInternet = function(){
    return ["Thierry", "Fabio", "Bafio", "Janis"]
  }
   
  let names = HoleMirDieDatenVomInternet()
   
   
  for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }