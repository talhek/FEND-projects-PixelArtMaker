

// When size is submitted by the user, call makeGrid()
const submitButton = document.getElementById('submitInfo');
submitButton.addEventListener('click', function(event){
  event.preventDefault();
  makeGrid();
});


function makeGrid() {
  // Select size input
  var table_height = document.getElementById('inputHeight').value;
  var table_weight = document.getElementById('inputWeight').value;
  var table = document.getElementById("pixelCanvas");
  // Select color input

  //remove previous table size layout
  $("#pixelCanvas tr").remove();
  //create table with new user sizes
  createTable(table , table_height , table_weight);
  //allocate events per cells for painting
  paintCells();
}

function createTable(table , table_height, table_weight){
  for (let i = 0; i < table_height; i++){
    let tr = document.createElement('TR');
    table.appendChild(tr);

    for (let j = 0; j < table_weight ; j++){
      let td = document.createElement('TD');
      tr.appendChild(td);
    }
  }
}
function paintCells(){
  const allCells = document.getElementsByTagName ('td');
  //const allCells = document.querySelectorAll("#pixelCanvas td");
  for (let it = 0; it < allCells.length; it++){
    allCells[it].addEventListener('click', function(event){
      this.style.backgroundColor = document.getElementById('colorPicker').value;
    });
  }
}
