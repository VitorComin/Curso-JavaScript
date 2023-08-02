let valores = [8, 1, 2, 5, 4, 6]

/*
for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(valores[pos])
}