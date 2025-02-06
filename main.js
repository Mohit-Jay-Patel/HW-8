function sum_of_num(){
var n = document.getElementById("num").value;
var number = 0;
 for(var a = 0; a <=n; a++){
    number += a;
 }
document.getElementById('output').innerHTML ='The total value of this number is : ' + number;
}