 setInterval(() => {
    let date = new Date()
    let relogio = document.getElementById('relogio')
    relogio.innerHTML = 
    date.getHours() + ":" +
    date.getMinutes() + ":" +
    date.getSeconds()
 }, 1000)



