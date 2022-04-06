/*
1) Chiedere il numero di Km da percorrere
2) Chiedere l'età
3) Definire prezzo biglietto totale
4) Applicare sconti per Minorenni e over 65
*/

const askDistance = prompt("Quanti Chilometri dovrai percorrere?");
const askAge = prompt("Quanti anni hai?")


if(askAge < 18){
  travelPrice = (askDistance * 0.21 - (20*0.21  / 100))
} else if (askAge > 64){
  travelPrice = (askDistance * 0.21 - (40*0.21  / 100))
}else {
  travelPrice = (askDistance*0.21)
}



//Riduzione totale dei numeri a 2 decimali
const decimalTwo = travelPrice.toFixed(2)

const outputStr = `
Lei deve percorrere ${askDistance} Km <br>
E ha ${askAge} anni <br>
Il Prezzo che andrà a pagare è ${decimalTwo} €

`

document.getElementById("price").innerHTML = outputStr
