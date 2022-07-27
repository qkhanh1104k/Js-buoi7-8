var txtNum = [ ];

function addNum(){
    var inputNum = document.getElementById("txtNum").value*1
    txtNum.push(inputNum);
    document.getElementById("resultBt1").innerHTML = txtNum;
}