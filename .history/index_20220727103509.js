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
function findLastEven() {
  var num1 = 0;
  for (var i = txtNum.length - 1; i >= 0; i--) {
    //i= 5
    if (txtNum[i] % 2 == 0) {
      num1 = txtNum[i];
      break;
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
// ex7:Sắp xếp mảng theo thứ tự tăng dần.

function rangeMoveUp() {
  for (var k = txtNum.length - 1; k >= 0; k--) {
    var isSwapped = false;
    for (var i = 0; i < k; i++) {
      if (txtNum[i] > txtNum[i + 1]) {
        var temp = txtNum[i];
        txtNum[i] = txtNum[i + 1];
        txtNum[i + 1] = temp;
        isSwapped = true;
      }
    }
    if (isSwapped === false) {
      document.getElementById("resBt8").innerHTML = txtNum;
      return;
    }
  }
  document.getElementById("resBt8").innerHTML = txtNum;
}
// ex8;Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.
function findFirst() {}
// ex9:Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
var arrInt = [];
function pushNum() {
  var inputNum = document.getElementById("txtNumBt9").value * 1;
  arrInt.push(inputNum);
  document.getElementById("resBt10").innerHTML = arrInt;
}
function countInt() {
  var sum = 0;
  for (var i = 0; i < arrInt.length; i++) {
    if (Number.isInteger(arrInt[i]) === true) {
      sum++;
    }
  }
  document.getElementById("resBt101").innerHTML = sum;
}
// ex10: So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
function comparisonsNum() {
  var sumNeg = 0;
  var sumPos = 0;
  for (var i = 0; i < txtNum.length; i++) {
    if (txtNum[i] > 0) {
      sumPos++;
    } else {
      sumNeg++;
    }
  }
  if (sumNeg === sumPos) {
    document.getElementById("resBt11").innerHTML = "Số âm = số dương ";
  } else if (sumNeg > sumPos) {
    document.getElementById("resBt11").innerHTML = "Số âm > số dương ";
  } else {
    document.getElementById("resBt11").innerHTML = "Số âm < số dương ";
  }
}
