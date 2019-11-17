function totalDigitRekursif(angka) {
var str = angka.toString().split('')
if(str.length === 1){
	return Number(str[0])
}else{
	// str.shift()
	// console.log(str.shift());
	return Number(str.shift()) + totalDigitRekursif(Number(str.join('')))
}
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5