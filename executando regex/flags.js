// g - global busca em todo o codigo
// i - ignore case iginora maiusculas e minusculas


const texto = 'Carlos assinou o abaixo-assinado'
console.log(texto.match(/c|ad/ig))
console.log(texto.match(/c|ad/i))
console.log(texto.match(/c|ad/g))