// function addRow(){
//     var myTable = document.getElementById("my-table")
//     var myRow = myTable.insertRow();
//     var cell1 = myRow.insertCell();
//     var cell2 = myRow.insertCell();
//     cell1.innerHTML = ("Row 3, cell 1");
//     cell2.innerHTML = ("Row 3, cell 1");
// }

var div = document.getElementById("my-table")
var table = document.createElement('table')
table.className = "my-border"
function getPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {

    
    var Row = document.createElement('tr')
    var header = ['id','title','body']
    Row.className="my-border"
    for (var i=0;i<header.length;i++){
        var th = document.createElement('th')
        th.className="my-border"
        th.textContent = header[i]
        Row.appendChild(th);
    }
    table.appendChild(Row);
    
    for (var i =0;i<data.length;i++){
        var Row = document.createElement('tr')
        var idCell = document.createElement('td')
        idCell.className="id-cell"
        idCell.textContent = data[i].id
        Row.appendChild(idCell)
        var titleCell = document.createElement('td')
        titleCell.textContent = data[i].title
        titleCell.className="my-border"
        Row.appendChild(titleCell)
        var bodyCell = document.createElement('td')
        bodyCell.textContent = data[i].body
        bodyCell.className="my-border"
        Row.appendChild(bodyCell)
        table.appendChild(Row)
    }
    
    


})
div.appendChild(table)
}