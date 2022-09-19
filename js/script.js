// Mostrar tabela
function toggleTable() {
    var myTable = document.getElementById("table-sel");
    myTable.style.display = (myTable.style.display == "table") ? "none" : "table";
}

// Fixar header
window.onscroll = function() {myFunction()};

// Pegar header
var header = document.getElementById("header");

// offset navbar
var sticky = header.offsetTop;

// Adicionar e remover de acordo com scroll "sticky"
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} 