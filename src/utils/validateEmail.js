export function validateEmail(email) {
   var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
 };

function formatProjName(name){
  return name.includes('-') 
  ? 
  name.split('-').map(string => string[0].toUpperCase() + string.slice(1)).join(' ')
   : 
  name[0].toUpperCase() + name.slice(1);

 }

console.log(formatProjName('note-taker'));