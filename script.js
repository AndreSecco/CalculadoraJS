// Inserir numero no campo
function reply_click(clicked_id) {
    window.document.querySelector('input#campo1').value += clicked_id
}
// Limpar números
function limpar() {
    window.document.querySelector('input#campo1').value = ''
    window.document.querySelector('input#res').value = ''
}
// Evento Apagar
function apagar() {
    var campo_apagar =  window.document.querySelector('input#campo1').value
    var campo_apagado = campo_apagar.slice(0, -1);
    document.querySelector('input#campo1').value = campo_apagado
}
//Evento para calcular
var campo = document.querySelector('input#campo1')
const ig = document.querySelector('button#igual')

ig.addEventListener("click", function () {
    if(campo.value == ''){
        alert('Insira algum valor no campo')
    }else{
        document.getElementById("res").value = eval(campo.value)
    
        var result = document.getElementById("res").value
        // Engraçadinho
       /* if(result < 100){
            alert("É serio que você precisou da calculadora para essa conta? kkk")
        }*/
    }
    
})
