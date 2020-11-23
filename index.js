let unko = "Let me know!";
console.log(unko)
const inoki = ["いーち", "にーい", "さーん", "だー"]
 let index = 0;
//while(index < inoki.length){
    //console.log(inoki[index]);
    //index++;
//}
//if(inoki.length > 5){
    //console.log("ボンバイエ");
//}
//else {
    //console.log("盆場！！");
//}
const test = (arg) => {
    if(inoki.length > arg){
        console.log("ボンバイエ");
    } else {
        console.log("盆場！！");
    }
};
test(3);
const pikachu = {
    color:"yellow",
    size:"small",
    smell: "rose",
    gotoilet: () =>{
        console.log('うんこ');
    }
};
console.log(pikachu.gotoilet);
document.getElementsByTagName("button")[0].addEventListener("click", () =>{
    window.alert('正解');
});
document.getElementsByTagName("button")[1].addEventListener("click", () =>{
    window.alert('違うよ～ん');
});
document.getElementsByTagName("button")[2].addEventListener("click", () =>{
    window.alert('違うよ～ん');
});
document.getElementsByTagName("button")[3].addEventListener("click", () =>{
    window.alert('違うよ～ん');
});