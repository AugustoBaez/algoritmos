let contador = 0

for (let i = 512; i <= 4096; i++) {
    if (i % 5 === 0) {
        console.log(i)
        contador++
    }
}

console.log(`se encontraron ${contador} multiplos de 5`)