const multiply = function mult (a, b) {
	if (a >= b && b > 0) {
		return (a + multiply(a, b - 1));
	}
	else if (a < b && a > 0) {
		return (b + multiply(a - 1, b));
	}
	else {
		if (a > b) return b;
		else return a;
	}
}

let a = 6, 
	b = 8;

console.log('Multiply is ' + multiply(a, b));
