// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(name){
    let answer=[]
    for (let i = 0; i<name.length; i++){
        answer.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
        debugger;
    }
    return answer;
}
function countDown(){
    var countdown = 10;
   while (countdown > -1 ){
    console.log(countdown--);
}
}
