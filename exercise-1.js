function sorting(arrNumber) {
  var arrNumber = arrNumber.sort()
  // console.log(arrNumber)
  return arrNumber
}
// console.log(sorting(arrNumber))
function getTotal(arrNumber) {
	var besar = arrNumber[arrNumber.length-1]
	var x = 0
	if(arrNumber == 0){
		return "''"
		// console.log('sera');
	}
	for(let i in arrNumber){
		if(arrNumber[i]===besar){
			x++
		}
	}
	return `angka paling besar adalah ${besar} dan jumlah kemunculan sebanyak ${x} kali`
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
