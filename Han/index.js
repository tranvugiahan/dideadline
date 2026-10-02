var a = prompt("nhap a");
var b = prompt("nhap b");
function devided(a, b){
    if(a %b == 0){
        console.log('a chia het cho b' +' '+ a % b);
    }else
        console.log('a  0 chia het cho b' + ' '+ a % b);
}
devided(a, b);