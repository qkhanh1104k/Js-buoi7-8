var txtNum = [ ];

function addNum(){
    var inputNum = document.getElementById("txtNum").value*1
    txtNum.push(inputNum);
    document.getElementById("resultBt1").innerHTML = txtNum;
}

function calcSumNegative(arr){
    var sum = 0;
    for( var i = 0 ; i < arr.length; i++){
        if(txtNum[i]>0 ){
            sum += txtNum;
        }
    }
    document.getElementById("resBt2").innerHTML = sum;
}