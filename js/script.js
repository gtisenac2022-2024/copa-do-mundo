// Mostrar tabela
function toggleTable() {
    var myTable = document.getElementById("table-sel");
    var myTable2 = document.getElementById("player-table-A")
    myTable.style.display = (myTable.style.display == "table") ? "none" : "table";
    myTable2.style.display = (myTable2.style.display == "table") ? "none" : "table";
}

function toggleTable2() {
  var myTable = document.getElementById("table-sel-B");
  var myTable2 = document.getElementById("player-table-B")
  myTable.style.display = (myTable.style.display == "table") ? "none" : "table";
  myTable2.style.display = (myTable2.style.display == "table") ? "none" : "table";
}

function toggleTable3() {
  var myTable = document.getElementById("table-sel-C");
  var myTable2 = document.getElementById("player-table-C")
  myTable.style.display = (myTable.style.display == "table") ? "none" : "table";
  myTable2.style.display = (myTable2.style.display == "table") ? "none" : "table";
}