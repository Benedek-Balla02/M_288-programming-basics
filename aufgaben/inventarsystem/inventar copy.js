let shop_inventar = ["Schwert", "Schild", "Heiltrank"]
 
let spieler = {
    name: "Held",
    leben: 100,
    gold: 50,
    rucksack: []
}
 


 
function kaufeItem(item) {
 
    if (!shop_inventar.includes(item)) {
 
        console.log("Das Item " + item + " gibt es nicht im Shop.")
 
    } else if (spieler.gold < 10) {
 
        console.log("Du hast zu wenig Gold.")
 
    } else {
 
        spieler.rucksack.push(item)
        spieler.gold -= 10
 
        console.log(item + " wurde gekauft!")
 
    }
 
}
 kaufeItem("Schwert")
 kaufeItem("Schwert")
 kaufeItem("Schwert")

 const spielerInventar = document.getElementById("spielerInventar");

let spielerItems = "";

spielerInventar.append("Gold:" + spieler.gold);
spielerInventar.append("Rucksack: " + spielerItems);
