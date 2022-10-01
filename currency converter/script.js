const currency = document.querySelectorAll(".currency");
const num = document.querySelector("#num");
const ans = document.querySelector("#ans");
const btn = document.querySelector(".btn");

fetch("https://api.frankfurter.app/currencies")
.then((data)=> data.json())
.then((data)=>{
    display(data);
})

function display(data){
    // console.log(Object.entries(data));

    const entries = Object.entries(data);
    for(let i =0; i<entries.length; i++){
        // console.log(i);
        currency[0].innerHTML += `<option value= ${entries[i][0]}> ${entries[i][0]} </option>`;
        currency[1].innerHTML += `<option value= ${entries[i][0]}> ${entries[i][0]} </option>`;
    }
}


btn.addEventListener("click",() =>{
    let currencyVal1 = currency[0].value;
    let currencyVal2 = currency[1].value;
    let Value = num.value;
    // console.log(Value);
    // console.log(currencyVal1);


    if(currencyVal1 !== currencyVal2){
        convert(currencyVal1, currencyVal2, Value);
    }else{
        ans.value = Value;
        alert("Both are Same!");
    }
})


function convert(currencyVal1, currencyVal2, Value){
    const host = "api.frankfurter.app";
    fetch(`https://${host}/latest?amount=${Value}&from=${currencyVal1}&to=${currencyVal2}`)
    .then((val)=>val.json())
    .then((val) =>{
        // console.log(val.rates);
        ans.value = Object.values(val.rates)[0];
    });
}



var myHeaders = new Headers();
myHeaders.append("x-access-token", "goldapi-5mkqkukoopwr4r-io");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch("https://www.goldapi.io/api/XAU/USD", requestOptions)
  .then((response) => response.text())
  .then((result) => document.write(result))
  .catch((error) => console.log("error", error));