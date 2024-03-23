// lấy danh sách thẻ td chứa điểm
var dsThetdDiem = document.querySelectorAll(".td-scores");

// tạo arr chứa danh sách điểm
var dsDiem = [];
for (var i = 0; i < dsThetdDiem.length; i++) {
  dsDiem.push(dsThetdDiem[i].innerHTML * 1);
}

// lấy danh sách thẻ tr
var dsThetr = document.querySelectorAll("#tblBody tr");

// nhập vào index và trả về tên tương ứng
function getName(viTri) {
  var dsTheTd = dsThetr[viTri].querySelectorAll("td");
  return dsTheTd[2].innerHTML;
}

// nhập vào index và trả về điểm tương ứng
function getScore(viTri) {
  var dsTheTd = dsThetr[viTri].querySelectorAll("td");
  return dsTheTd[3].innerHTML;
}

// tìm sv giỏi nhất
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
  document.querySelector("#svGioiNhat").innerHTML = `SV ${ten} - Điểm: ${diem}`;
}
timSVGioiNhat();

// tìm sv yếu nhất
function timSVYeuNhat() {
  var minScore = dsDiem[0];
  for (var i = 0; i < dsDiem.length; i++) {
    if (dsDiem[i] < minScore) {
      minScore = dsDiem[i];
    }
  }
  var viTri = dsDiem.indexOf(minScore);
  var ten = getName(viTri);
  var diem = getScore(viTri);
  document.querySelector("#svYeuNhat").innerHTML = `SV ${ten} - Điểm: ${diem}`;
}
timSVYeuNhat();

// đếm số sinh viên giỏi
var dsDiemGioi = dsDiem.filter(function (diem) {
  return diem >= 8;
});
var soSVGioi = dsDiemGioi.length;
document.querySelector("#soSVGioi").innerHTML = soSVGioi;

// danh sách điểm lớn hơn 5
var dsDiemHon5 = dsDiem.filter(function (diem) {
  return diem > 5;
});

// tìm sv điểm hơn 5
function svDiemHon5() {
  var message = "";
  for (var i = 0; i < dsDiemHon5.length; i++) {
    var viTri = dsDiem.indexOf(dsDiemHon5[i]);
    var ten = getName(viTri);
    message += `<p>- ${ten}</p>`;
  }
  return message;
}
document.querySelector("#dsDiemHon5").innerHTML = svDiemHon5();
console.log("dsDiem: ", dsDiem);

// danh sách điểm tăng dần
var dsDiemTangDan = dsDiem.slice().sort(function (a, b) {
  return a - b;
});

// sắp xếp điểm tăng dần
function sapXepDiem() {
  var message = "";
  for (var i = 0; i < dsDiemTangDan.length; i++) {
    var viTri = dsDiem.indexOf(dsDiemTangDan[i]);
    var ten = getName(viTri);
    var diem = getScore(viTri);
    message += `<p>- SV ${ten} - Điểm: ${diem}</p>`;
  }
  return message;
}
document.querySelector("#dtbTang").innerHTML = sapXepDiem();
