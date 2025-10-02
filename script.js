// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    const grid = document.getElementById("grid");

    const newRow = grid.insertRow();

    let colCount = numCols;
    if(colCount == 0){
        colCount = 1;
        numCols = 1;
    }

    for(let i = 0; i < colCount; i++){
        const newCell = newRow.insertCell();
        newCell.onclick = function(){
            this.style.backgroundColor = colorSelected;
        };
    }
    numRows++;
    console.log("Row Added. Total: ${numRows} rows, ${numCols] col");
}

// Add a column
function addC() {
    const grid = document.getElementById("grid");
    const rows = grid.rows;
    //if zero rows
    if(rows.length == 0){
        addR();
        return;
    }

    //add cell to each row
    for(let i = 0; i < rows.length; i++){
        const newCell = rows[i].insertCell();
        newCell.onclick = function(){
            this.style.backgroundColor = colorSelected;
        };
    }
    numCols++;
    console.log("Col Added. Total: ${numRows} rows, ${numCols} cols");


}

// Remove a row
function removeR() {
    const grid = document.getElementById("grid");

    if(numRows > 0){
        grid.deleteRow(-1);
        numRows--;
    }
    //if row was last row
    if(numRows == 0){
        numCols = 0;
    }
    console.log("Removed row. Total: ${numRows} rows, ${numCols} cols");

}

// Remove a column
function removeC() {
    const grid = document.getElementById("grid");
    const rows = grid.rows;

    if(numCols > 0){
        for(let i = 0; i < rows.length; i++){
            rows[i].deleteCell(-1);
        }
        numCols--;

        //if col was the last col
        if(numCols == 0 && rows.length > 0){
            while(rows.length > 0){
                grid.deleteRow(-1);
            }
            numRows = 0;
        }
    }
    console.log("Remove column. Total: ${numRows} rows, ${numCols} cols")
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    const grid = document.getElementById("grid");
    const cells = grid.getElementsByTagName("td");

    for(let cell of cells){
        if(cell.style.backgroundColor == "" ||
            cell.style.backgroundColor == "white" ||
            cell.style.backgroundColor == "#ffffff" ||
            cell.style.backgroundColor == "rgb(255, 255, 255)"){
                cell.style.backgroundColor = colorSelected;
            }

        
    }

}

// Fill all cells
function fillAll(){
    const grid = document.getElementById("grid");
    const cells = grid.getElementsByTagName("td");

    for(let cell of cells){
        cell.style.backgroundColor = colorSelected;
    }
}

// Clear all cells
function clearAll(){
    const grid = document.getElementById("grid");
    const cells = grid.getElementsByTagName("td");

    for(let cell of cells){
        cell.style.backgroundColor = "white";
    }
}