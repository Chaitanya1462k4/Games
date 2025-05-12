let api = `https://v6.exchangerate-api.com/v6/01469cc72b84afb45e2a4ebe/latest/USD`;
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
let fromcurr=document.querySelector(".from select");
let tocurr=document.querySelector(".to select");


for(let select of dropdowns){
  for(let currcode in countryList){
    let newoption= document.createElement("option");
    newoption.innerText=currcode;
    newoption.value=currcode;
   
    if(select.name==="from" && currcode==="USD")
    {
      newoption.selected="selected";
    }  
    else if(select.name==="to" && currcode==="INR")
    {
      newoption.selected="selected";
    }
     select.append(newoption);

}
select.addEventListener("change",(evt)=>{
  updateflag(evt.target);
});
}
const updateExchangerate = async()=>{
  let amount=document.querySelector(".amount input");
  let amtval=amount.value;
  if(amtval===""||amtval<1){
    amtval=1;
    amount.value="1";
  }
  let response= await fetch(api);
 let data= await response.json();
 console.log(data);
let fromExchange = data.conversion_rates[fromcurr.value];
let toExchange = data.conversion_rates[tocurr.value];
const convertedAmount = (amtval / fromExchange) * toExchange;
let msg = document.querySelector(".msg");
msg.innerText = `${amtval}${fromcurr.value} = ${convertedAmount.toFixed(2)}${tocurr.value}`;

}

const updateflag=(element)=>{
  currcode = element.value;
  let countrycode=countryList[currcode];
  let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
  let img= element.parentElement.querySelector("img");
  img.src=newsrc;
}

btn.addEventListener("click",async (evt)=>{
  evt.preventDefault();
  updateExchangerate();
});

window.addEventListener("load",()=>{
updateExchangerate();
});