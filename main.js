var dsTheTd = document.querySelectorAll(".td-scores");
var dsTheTr = document.querySelectorAll("#tblBody tr");
var dsDiem = [];

for (var i = 0; i < dsTheTd.length; i++) {
  dsDiem.push(dsTheTd[i].innerHTML * 1);
}

// nhận vào index và trả về tên tương ứng
function getName(viTri) {
  var theTr = dsTheTr[viTri];
  var dsTheTd = theTr.querySelectorAll("td");
  return dsTheTd[2].innerHTML;
}

// nhận vào index và trả về điểm tương ứng
function getScore(viTri) {
  var theTr = dsTheTr[viTri];
  var dsTheTd = theTr.querySelectorAll("td");
  return dsTheTd[3].innerHTML * 1;
}

function timSVGioiNhat() {
  var maxScore = dsDiem[0];
  for (var i = 0; i < dsDiem.length; i++) {
    if (dsDiem[i] > maxScore) {
      maxScore = dsDiem[i];
    }
  }
  var viTri = dsDiem.indexOf(maxScore);
  var ten = getName(viTri);
  var diem = getScore(viTri);
  var ketQua = "";
  return (ketQua = `Sinh viên giỏi nhất: ${ten} - Điểm: ${diem}`);
}

document.querySelector("#svGioiNhat").innerHTML = timSVGioiNhat();
