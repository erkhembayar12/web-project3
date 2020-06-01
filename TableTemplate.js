    
function TableTemplate(){
}
TableTemplate.fillIn = function(id,dict,colName){
    /*console.log(id);
    console.log(dict);
    console.log(colName);*/
    
    
    
    var table = document.getElementById(id);
    var header = table.rows.item(0);


    
var match =false;
var colNum;
var numCols = header.cells.length;
var j;
var template;
console.log(numCols);

//header
for(j=0;j<numCols;j++){
    var currColName = header.cells.item(j).innerHTML;
    console.log("prev:",currColName);
    
    template = new Cs142TemplateProcessor(currColName);
    console.log("next:",template);
    

    var filledCurrColName= template.fillIn(dict);
    if(filledCurrColName===colName){
        match = true;
        colNum =j;
    }
    header.cells.item(j).innerHTML = filledCurrColName;
}
var numRows = table.rows.length;
console.log(numRows);
var i;
var currCell;
var filledCurrCell;

//table 3
if(!colName){
    for(i=1;i<numRows; i++){
        for(j=0;j<numCols;j++){
            currCell = table.rows.item(i).cells.item(j);
            template = new Cs142TemplateProcessor(currCell.innerHTML);
            filledCurrCell = template.fillIn(dict);
            currCell.innerHTML = filledCurrCell;
           
        }
    }
    return;
}
if(match === false){
    return;
}

//table1 and 2
if(colName){
    for(i=1;i<numRows;i++){
        currCell = table.rows.item(i).cells.item(colNum);
        template = new Cs142TemplateProcessor(currCell.innerHTML);
        filledCurrCell = template.fillIn(dict);
        currCell.innerHTML = filledCurrCell;
       
    }
    return;
 }
};
