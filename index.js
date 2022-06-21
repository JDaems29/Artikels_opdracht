"use strict";

//hoofd programma
let naam = prompt("Naam van artikel (typ stop om te stoppen)");
if (naam !== "stop") {
  const artikelen = vraagArtikelen(naam);
  const gevondenArtikelen = artikelZoeker(artikelen);
  toonArrays(gevondenArtikelen);
  const getallen = vraagPrijzen();
  const gefilterdePrijzen = filterPrijzen(getallen, artikelen);
  for (const item of gefilterdePrijzen) {
    console.log(item.naam, item.verkoopprijs);
  }
  const gemiddelde = berekenGemiddelde(gefilterdePrijzen);
  console.log(`De gemiddelde verkoopprijs is ${gemiddelde}`);
} else {
  console.log("Programma gestopt");
}

//vraag input
function vraagArtikelen(naam) {
  const artikelen = [];
  while (naam !== "stop") {
    artikelen.push({
      naam: naam,
      aankoopprijs: Number(prompt(`Aankoopprijs van ${naam}`)),
      verkoopprijs: Number(prompt(`Verkoopprijs van ${naam}`)),
    });
    naam = prompt("Naam van artikel (typ stop om te stoppen)");
  }
  return artikelen;
}

//check als er artikelen zijn met het woord in de naam
function artikelZoeker(artikelen) {
  const woord = prompt("geef een woord");
  const gevondenArtikelen = [];
  for (let artikel of artikelen) {
    if (artikel.naam.includes(woord) === true) {
      gevondenArtikelen.push(artikel.naam);
    }
  }
  return gevondenArtikelen;
}

//vraag de 2 prijzen aan de gebruiker
function vraagPrijzen() {
  const getal1 = Number(prompt("Eerste getal"));
  let getal2 = Number(prompt("Tweede getal"));
  while (getal2 < getal1) {
    getal2 = Number(
      prompt(`Getal 2 moet groter zijn dan ${getal1}, probeer opnieuw.`)
    );
  }
  const getallen = [];
  getallen.push(getal1, getal2);
  return getallen;
}

//toon artikelen die tussen 2 getallen liggen
function filterPrijzen(getallen, artikelen) {
  const juistePrijs = artikelen.filter(
    (artikel) =>
      artikel.verkoopprijs >= getallen[0] && artikel.verkoopprijs <= getallen[1]
  );
  return juistePrijs;
}

//bereken gemiddelde verkoopprijs
function berekenGemiddelde(array) {
  const gemiddelde =
    array.reduce((som, getal) => som + getal.verkoopprijs, 0) / array.length;
  return gemiddelde.toFixed(2);
}

//functie voor het loggen van arrays
function toonArrays(array) {
  for (let element of array) {
    console.log(element);
  }
}
