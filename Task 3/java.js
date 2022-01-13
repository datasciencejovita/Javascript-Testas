/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

var hidden = false


function getDataGithub(){
    fetch('https://api.github.com/users')
    .then((resp)=>  {
        return resp.json();
    })
    .then((data)=>{
        data.forEach((item,index) => {    
        let myH = document.createElement("h2");
        let myData = `${item.login}  ${item.url}`;
        myH.append(myData)
        document.querySelector("#output").append(myH);
        });
    }).catch((err)=>console.log(err));
    if (hidden = !hidden) {
           
        document.getElementById("btn").style.visibility = 'hidden'
      }
      else {
        document.getElementById("btn").style.visibility = 'visible'
      }
}


 