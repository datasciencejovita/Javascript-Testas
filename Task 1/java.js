/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */


function functions(){
    formule1();
    formule2();
    formule3();
  }

function formule1(kg) {
    document.getElementById("outputsvarai").innerHTML = (document.getElementById('kilograms').value/ 2.2046).toFixed(2);
  }

  function formule2(kg) {
    document.getElementById("outputgramai").innerHTML = (document.getElementById('kilograms').value/ 0.0010000);
  }

  function formule3(kg) {
    document.getElementById("outputuncijos").innerHTML = (document.getElementById('kilograms').value/ 35.274).toFixed(2);
  }
