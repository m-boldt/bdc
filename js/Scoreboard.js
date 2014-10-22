$(document).ready(function() {
	$("#add-score-p-1-btn").bind("tap", function() {
		UpdateScore('add-score-p-1', 'tbl-p-1');
		return false;
	})
	$("#add-score-p-2-btn").bind("tap", function() {
		UpdateScore('add-score-p-2', 'tbl-p-2');
		return false;
	})
	$("#add-pimmel-p-1-btn").bind("tap", function() {
		Pimmel("pimmel-p-1");
		return false;
	})	
	$("#add-pimmel-p-2-btn").bind("tap", function() {
		Pimmel("pimmel-p-2");
		return false;
	})	
	$("#undo-p-1-btn").bind("tap", function() {
		Undo('tbl-p-1');
		 return false;
	});
	$("#undo-p-2-btn").bind("tap", function() {
		Undo('tbl-p-2');
		return false;
	});
	$("#clear").bind("tap", function() {
		Clear();
		return false;
	});
	$("#add-score-p-1-btn").bind("click", function() {
		UpdateScore('add-score-p-1', 'tbl-p-1');
		return false;
	})
	$("#add-score-p-2-btn").bind("click", function() {
		UpdateScore('add-score-p-2', 'tbl-p-2');
		return false;
	})
	$("#add-pimmel-p-1-btn").bind("click", function() {
		Pimmel("pimmel-p-1");
		return false;
	})	
	$("#add-pimmel-p-2-btn").bind("click", function() {
		Pimmel("pimmel-p-2");
		return false;
	})	
	$("#undo-p-1-btn").bind("click", function() {
		Undo('tbl-p-1');
		 return false;
	});
	$("#undo-p-2-btn").bind("click", function() {
		Undo('tbl-p-2');
		return false;
	});
	$("#clear").bind("click", function() {
		Clear();
		return false;
	});
});

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

	$("#pimmel-p-1").html("");
	$("#pimmel-p-2").html("");
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