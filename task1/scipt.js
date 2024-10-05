let Person = {
    name: "Андрей Кин",
    age: 29
}
let p1 = document.querySelector('#p1')
let p2 = document.querySelector('#p2')
p1.innerHTML += Person.name;
p2.innerHTML += Person.age;