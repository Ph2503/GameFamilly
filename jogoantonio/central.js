//localStorage.nome
//var jogador = document.getElementById('name').innerHTML = localStorage.nome
var contato = document.getElementById('contato')
var config= document.getElementById('config')
var sobre = document.getElementById('sobre')
var home = document.getElementById('home')


home.addEventListener('touchstart',inicia4)
home.addEventListener('touchend', termina4)
sobre.addEventListener('touchstart',inicia3)
sobre.addEventListener('touchend', termina3)
confg.addEventListener('touchstart',inicia2)
confg.addEventListener('touchend', termina2)
contato.addEventListener('touchstart', inicia1)
contato.addEventListener('touchend', termina1)
function inicia4() {
    location.href = 'home.html'
}
function termina4() {
    location.href = 'home.html'
}
function inicia3() {
    location.href = 'sobre.html'
}
function termina3() {
    location.href = 'sobre.html'
}
function inicia2() {
    location.href = 'config.html'
}
function termina2() {
    location.href = 'config.html'
}
function inicia1() {
    
    location.href = 'contato.html'
}
function termina1() {
    location.href = 'contato.html'
}
