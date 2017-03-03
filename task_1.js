const isPalindrom = function palindrom (number) {
	let inverted = 0;
	let temp = number;
	
	while (temp != 0) {
		inverted = inverted * 10 + temp % 10;
		temp = parseInt(temp / 10);
	}
	if ( number === inverted) console.log("It's palindrom");
	else console.log("It's not palindrom");
};	

let number = 13431;
isPalindrom(number);