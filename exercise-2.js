function changeVocals (str) {
var x = str.split('')
var vokal = 'aiueoAIUEO'
var huruf = 'abefijopuvABEFIJOPUV'
var tampung=[]
var indeks;
	for(let i=0; i<x.length;i++){
		for(let j=0;j<vokal.length;j++){
			if(x[i]===vokal[j]){
				indeks = huruf.indexOf(x[i])+1
				x[i]=huruf[indeks]
			}
		}tampung.push(x[i])
	}
return tampung
}
// changeVocals('Sergei Dragunov')
// changeVocals('Alexei')
// changeVocals('Dimitri Wahyudiputra')

function reverseWord (str) {
	var str = str.reverse()
	return str
}
// console.log(reverseWord(['S','E','R']))

function setLowerUpperCase (str) {
var set=[]
  for(let i=0;i<str.length;i++){
  	if(str[i]===str[i].toUpperCase()){
  		set.push(str[i].toLowerCase())
  	}else{
  		set.push(str[i].toUpperCase())
  	}
  }
  return set
}
// console.log(setLowerUpperCase(['S','E','R','a','f']));

function removeSpaces (str) {
  var space = str.join('').replace(/\s/g,'');  
  return space
}
// console.log(removeSpaces(['S','E','R',' ','a','f']));

function passwordGenerator (name) {
var gantiVokal = changeVocals (name)
var kebalik = reverseWord (gantiVokal)
var besarKecil = setLowerUpperCase (kebalik)
var spasi = removeSpaces (besarKecil)
	if(spasi.length<5){
		return 'Minimal karakter yang diinputkan adalah 5 karakter'
	}
return spasi
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'