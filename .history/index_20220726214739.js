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
// ex2:đếm só dương
function calcCountNegative() {
  var sum = 0;
  for (var i = 0; i < txtNum.length; i++) {
    if (txtNum[i] > 0) {
      sum++;
    }
  }
  document.getElementById("resBt3").innerHTML = sum;
}
// ex3:tìm số nhỏ nhất
function calcTheSmallest() {
  var min = txtNum[0];
  for (var i = 1; i < txtNum.length; i++) {
    if (min > txtNum[i]) {
      min = txtNum[i];
    }
  }
  document.getElementById("resBt4").innerHTML = min;
}
// ex 4:tìm số dương nhỏ nhất
function calcTheSmallestNev() {
  var min = txtNum[0];
  for (var i = 1; i < txtNum.length; i++) {
    if (min > txtNum[i] && txtNum[i] > 0) {
      min = txtNum[i];
    }
  }
  document.getElementById("resBt5").innerHTML = min;
}

// ex5:Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
function checkEven(n) {
  var flag = 1;
  if (n % 2 == 0) {
    flag = 0;
  }
  return flag;
}
function findLastEven() {
  var num1;
  for (var i = txtNum.length - 1; i >= 0; i--) {
    //i= 5
    if (checkEven(txtNum[i]) == 1) {
      num1 = txtNum[i];
      return num1;
    } else {
      return -1;
    }
  }
  document.getElementById("resBt6").innerHTML = num1;
}

// ex6:Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
function swappedNum() {
  var k = +document.getElementById("txtNumBt6").value;
  var g = +document.getElementById("txtNumBt62").value;
  var num1 = txtNum[k];
  txtNum[k] = txtNum[g];
  txtNum[g] = num1;
  document.getElementById("resBt7").innerHTML = txtNum;

}
