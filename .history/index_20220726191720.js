var txtNum = [ ];
var inputNum = document.getElementById("txtNum").value*1
function addNum(){

    txtNum.push(inputNum);
    document.getElementById("resultBt1").innerHTML = txtNum;
}