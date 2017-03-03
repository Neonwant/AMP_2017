const splitStr = function splitString (str) {
	let regExpFloatNumbers = /\d+\.\d/, 
		regExpIntNumbers = /\d+/,
		regExpString = /[a-zA-Z]+/;

	let strIntNumbers = '', 
		strFloatNumber = '', 
		strWords = '';

	let arr = str.split(" ");

	for (let i = 0; i < arr.length; i++) { // for words
		if (regExpString.test(arr[i])) {
			strWords += arr[i] + ' ';
			arr.splice(i, i + 1);
			i--;
		} 
		else if (regExpFloatNumbers.test(arr[i])) {
			strFloatNumber += arr[i] + ' ';
			arr.splice(i, i + 1);
			i--;
		}
		else if (regExpIntNumbers.test(arr[i])) {
			strIntNumbers += arr[i] + ' ';
			arr.splice(i, i + 1);
			i--;
		}
	}

	console.log('Integer numbers: ' + strIntNumbers);
	console.log('Float numbers: ' + strFloatNumber);
	console.log('Word(s): ' + strWords);
};

let str = '12 javascript 15.755 144 2.8 well';
splitStr(str);