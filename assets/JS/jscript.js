var keylist="abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*(){}+_-=[]<>?/\"|~`:;'.,"
var temp=''

function generatepass(plength) {
    temp=''
    for (i=0; i<plength;i++)
       temp+=keylist.charAt(Math.floor(Math.random()*keylist.length))
       return temp
   }
   if (document.getElementById(symbols).checked == false) {

   }

function populateform(enterlength) {
    document.pgenerate.output.value = generatepass(enterlength)
 }

 