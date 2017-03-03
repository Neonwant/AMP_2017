const Pi = function pi () {
	let max = 7, 
		An = 0, 
		n = 1,
		i = 3;

	while (i <= max) {
		An += (Math.pow(-1, n + 1) * 4) / (2 * n - 1);
		
		if (An.toFixed(i) == Math.PI.toFixed(i)) {
			console.log(n + ' count of terms has value of PI with ' + i + ' decimal digits');
			i += 2;
		}

		n++;
	}
}

Pi();