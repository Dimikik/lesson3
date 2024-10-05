let person = {
    name: "Дмитрий",
    surname: "Глушков"
}
let div = document.querySelector('#div')
function render(){
    div.innerHTML = ''
    for(let key in person){
        div.innerHTML += key + ' | ' + person[key] + `<br>`
    }
}
render()
let window123 = document.querySelector('#window')
const add_btn = document.querySelector('#add')
const change_btn = document.querySelector('#change')
const delete_btn = document.querySelector('#delete')
add_btn.onclick = () =>{
    let key = prompt('Введите ключ')
    if (key == null || key == '' ){
        alert('Нельзя записать пустое значение')
        return 
    }
    else if (key in person) {
        alert('Такой ключ уже есть')
        return
    }
    let x = prompt('Введите значение')
    if (x == '' || x == null){
        alert('Нельзя записать пустое значение')
        return
    }
    person[key] = x
    render()
    
}
change_btn.onclick = () =>{
    let key = prompt('Введите ключ')
    if (key == '' || key == null) {
        alert('Нельзя записать пустое значение')
        return
    }
    if (person[key] != undefined){
        let x = prompt('Введите значение')
        if (x == '' || x == null) {
            alert('Нельзя записать пустое значение')
            return
        }
        person[key] = x
        render()
    }
    else{
        alert("Такого ключа не найдено")
    }
}
delete_btn.onclick = () =>{
    let key = prompt('Введите ключ')
    if (key == '' || key == null) {
        alert('Нельзя записать пустое значение')
        return
    }
    if (person[key] != undefined){
        delete person[key]
        render()
    }
    else{
        alert("Такого ключа не найдено")
    }
}