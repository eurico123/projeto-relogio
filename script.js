
var h = document.getElementById('horas')
var m = document.getElementById('minutos')
var s = document.getElementById('segundos')

const relogio = setInterval(function time() {

    let data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()
    let segundo = data.getSeconds()

    if (hora < 10) hora = '0' + hora

    if (minuto < 10) minuto = '0' + minuto

    if (segundo < 10) segundo = '0' + segundo

    h.textContent = hora
    m.textContent = minuto
    s.textContent = segundo

})
