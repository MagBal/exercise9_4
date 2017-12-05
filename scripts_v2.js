var treeHeight = 10;
function drawTree(treeHeight) {
	for (var i = 0; i < treeHeight; i++) {
		var star = '';
		for (var j = i; j < treeHeight; j++) {
				star += ' ';
			}
			for (var k = 0; k < (2 * i + 1); k++) {
				star += '*';
			}
			console.log(star);
	}
}
drawTree(treeHeight);



