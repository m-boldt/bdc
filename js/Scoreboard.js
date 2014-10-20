
function Clear() {
	$("table#tbl-p-1 tr").each(function(index, item) {
		if(index > 0) {
			$(item).remove();
		}
	});
	$("table#tbl-p-2 tr").each(function(index, item) {
		if(index > 0) {
			$(item).remove();
		}
	});

	$("input[type=text]").each(function(index, item) {
		$(item).val("");
	}); 
}

function Pimmel(wrapperID) {
	var wrapper = $("#" + wrapperID);
	if(wrapper.find("img").size() == 5) {
		return;	
	}
	
	var pimmel = $("<img src='./img/p.png' />");
	wrapper.append(pimmel);		
}

function UpdateScore(textboxID, tableID) {

	var textbox = $("#" + textboxID);
	var val = Number.parseInt(textbox.val());
	textbox.val("");


	if(val <= 0 || isNaN(val)) {
		return;
	}

	var tbl = $("#" + tableID);

	var newRow = tbl.find("tr").last().clone();
	var indexCol = newRow.find("td").first();

	var index = Number.parseInt(indexCol.html());
	indexCol.html(index + 1);

	var scoreCol = newRow.find("td").last();
	var score = Number.parseInt(scoreCol.html());
	scoreCol.html(score - val);

	if((score - val) < 0) {
		return;		
	}

	if((score - val) === 0) {
		tbl.addClass("winner");
	}

	tbl.append(newRow);
}

function Undo(tableID) {
	var tbl = $("#" + tableID);
	if(tbl.find("tr").size() <= 1) {
		return;
	}
	tbl.find("tr").last().remove();
}