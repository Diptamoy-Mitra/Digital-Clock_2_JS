const hours=document.querySelector(".hours");
const minutes=document.querySelector(".minutes");
const seconds=document.querySelector(".seconds");
setInterval(()=>{
  var date=new Date();
  const newHours=date.getHours();
  const newMinutes=date.getMinutes();
  const newSeconds=date.getSeconds();

  hours.innerHTML=`${newHours-12} :`;
  minutes.innerHTML=`${newHours} :`;
  seconds.innerHTML=newSeconds;

  if(newMinutes<10){
    minutes.innerHTML=`0${newMinutes} :`;
  }
  if(newHours<10){
    hours.innerHTML=`0${newHours} :`;
  }
  if(newSeconds<10){
    seconds.innerHTML=`0${newSeconds}`;
  }
},1000);
