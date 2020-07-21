// Code your solutions in this file
function writeCards(name){
  let messages;
  for(let i=0 ; i<name.lenghth() ;i++){
    
  messages.push(("thank you "+ name[i]));
  }
  return messages;
}

function countDown(num){
  let i = 0;
  while(num>i){
    consol.log(num);
    num--;
  }
}
