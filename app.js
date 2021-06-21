function inp(){
document.getElementById('input').value=""
}
function num (a){
document.getElementById('input').value +=a
}
function result (){
    var answer = document.getElementById('input')
    answer.value=eval(answer.value)
}