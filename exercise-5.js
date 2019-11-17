function kaliTerusRekursif(angka) {
  var arr = angka.toString().split('')
  if(arr.length === 1){
  	return Number(arr[0])
  }else{
  	return Number(arr.shift()) * kaliTerusRekursif(Number(arr.join('')))
  }

}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 36
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 120
console.log(kaliTerusRekursif(1231)); // 6

/* kaliterusrekursif(66)
str =['6','6']
Number(str.shift())= 6; return 6*/