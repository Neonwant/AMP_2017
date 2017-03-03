const fillArr = function fill (arr, min, max, length) {
	for (let i = 0; i < length; i++) 
		arr[i] = Math.floor(Math.random() * (max - min)) + min;
} 

const find_and_exchange = function find_exchange (arr) {
	let max = 0;

	for (let i = 1; i < arr.length; i++) {
		if (arr[max] < arr[i]) max = i;
	}
			
	console.log('Max element is ' + arr[max]);

	let temp = arr[arr.length - 1];
	arr[arr.length - 1] = arr[max];
	arr[max] = temp;
}

let arr = [],
	min = 0,
	max = 10,
	length = 14;
		

fillArr(arr, min, max, length);
find_and_exchange(arr);