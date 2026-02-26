
HoleMIrDieDatenVomInternet = function() {
    return ["Max", "Moritz", "Ben", "Kat"]
}

let names = HoleMIrDieDatenVomInternet()

let lengthOfNames = names.length

for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log("----------------")
names.forEach((name) => {
    console.log(name);
})



