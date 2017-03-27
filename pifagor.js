// pad.js


function generatePad(parent){
var table = document.createElement("table");
	table.setAttribute("style", "width:600px;");
	var i, j;

	for (var i = 1; i <=9; i++) {
		var tr = document.createElement("tr");

for (var j = 1;j <=9;j++) {
			var td = document.createElement("td");
			tr.appendChild(td);			
			td.innerText = i * j;
			if( i * j % 2 == 1){
			td.style.backgroundColor = 'white';
			td.style.fontFamily = "Courier";
			td.style.fontSize = "xx-large";
			td.style.marginLeft = "10px";
			td.style.textAlign = "center";
			}
			
			else{
			td.style.backgroundColor = 'yellow';
			td.style.fontFamily = "Courier";
			td.style.fontSize = "xx-large";
			td.style.marginLeft = "10px";
			td.style.textAlign = "center";
			}

			if( i == j){
			td.style.backgroundColor = 'blue';
			td.style.fontFamily = "Courier";
			td.style.fontSize = "xx-large";
			td.style.fontWeight = "bold";
			td.style.marginLeft = "10px";
			td.style.textAlign = "center";
			}
			
			
				
		}
		table.appendChild(tr);
	}
	parent.appendChild(table);
}