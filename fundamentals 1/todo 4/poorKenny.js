
function whatHappensToday() {
    const arr = ['volcanes', 'tsunamis', 'terremotos', 'ventiscas', 'meteoros']
    const rand = Math.floor(Math.random() * arr.length)
    console.log(rand)
    console.log("Que pasara hoy", arr[rand])
}
whatHappensToday()