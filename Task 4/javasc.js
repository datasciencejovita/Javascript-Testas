/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atÄ—jus į tinkamai kreipsis į cars.json failą
ir atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Informacija apie automobilį (brand) (jo kortelę) bei turi
bent minimalų stilių;
-------------------------------------------------------------------------- */

//const ENDPOINT = 'cars.json';


const selections= document.getElementById("selections");
const models = document.getElementById("models");
const getPost = async () => {
    const response = await fetch ("cars.json");
    //console.log(response);
    const data = response.json();
    return data;

};


function getDataFromJson(){
    fetch('./cars.json')
    .then((resp)=>  {
        return resp.json();
    })
    .then((data)=>{
        data.forEach((item) => {    
            const newOption = document.createElement("option");
     
            newOption.value = item.brand;
            newOption.text = item.brand;
            selections.appendChild(newOption);
  

        });
    }).catch((err)=>console.log(err));
    }

getDataFromJson();




