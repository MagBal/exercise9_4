var n = 10;
function drawTree(n) {
	for (var i=1; i<=n; i++) {
		var star = '';
		for (var j=i; j<n; j++) {
			star += ' ';
		}
		for (var k=1; k<=i; k++) {
			if (k==1) {
				star += '*';
			} else {
				star += ' *';
			}
		}
		console.log(star);
	}
}
drawTree(n);



