var txtNum = [];
function addNum() {
  var inputNum = document.getElementById("txtNum").value * 1;
  txtNum.push(inputNum);
  document.getElementById("resultBt1").innerHTML = txtNum;
}
// ex1:tính tổng số dương
function calcSumNegative() {
  var sum = 0;
  for (var i = 0; i < txtNum.length; i++) {
    if (txtNum[i] > 0) {
      sum += txtNum[i];
    }
  }
  document.getElementById("resBt2").innerHTML = sum;
}
// ex2:tđếm só dương
function calcCountNegative() {
  var sum = 0;
  for (var i = 0; i < txtNum.length; i++) {
    if (txtNum[i] > 0) {
      sum++;
    }
  }
  document.getElementById("resBt3").innerHTML = sum;
}
