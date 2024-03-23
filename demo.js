// lấy danh sách thẻ td chứa điềm
var dsTheTd = document.querySelectorAll(".td-scores");
var dsDiem = [];
for (i = 0; i < dsTheTd.length; i++) {
  dsDiem.push(dsTheTd[i].innerHTML * 1);
}

// tìm điểm lớn nhất, nhỏ nhất trong danh sách điểm
var maxScore = dsDiem[0];
for (i = 0; i < dsDiem.length; i++) {
  if (dsDiem[i] > maxScore) {
    maxScore = dsDiem[i];
  }
}

var minScore = dsDiem[0];
for (i = 0; i < dsDiem.length; i++) {
  if (dsDiem[i] < minScore) {
    minScore = dsDiem[i];
  }
}

// lấy họ tên của 1 thẻ tr bất kì
var dsTheTr = document.querySelectorAll("#tblBody tr");
console.log(dsTheTr);

var theTr = dsTheTr[3];

var list = theTr.querySelectorAll("td");
console.log("Tên: ", list[2].innerHTML);
console.log("Điểm: ", list[3].innerHTML);
