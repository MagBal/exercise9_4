var n = 10;
function drawTree(n) {
	for (var i=0; i<n; i++) {
  		var star = '';
  		for (var j=i; j<n; j++) {
     		star += ' ';
      	}
      	for (k=0; k<(2*i+1); k++) {
      		star += '*'
      	}
      	console.log(star);
   	}
}
drawTree(n);



