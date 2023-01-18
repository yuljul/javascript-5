let object = {}



let name = prompt('Имя пользователя')
let age = +prompt('Возраст')

for(let i = 1; i < 10;i++) {
    let name = prompt('Имя пользователя');
    let age = +prompt('Возраст')


    object[i] = {
        name: name,
        age: age,
    }
    console.log(`Пользователь ${i}`);
    console.log(`Ваше имя ${object[i].name}`);
    console.log(`Ваш возраст ${object[i].age}`);


}

console.log(object);






let menu = receipt()


let order = 'Вы заказали '
let delivery = 9000


for(let key in menu) {

    order = `${order} ${key}`
    for(let newkey in menu[key]) {

        order = newkey == 'info' ? `${order} ${menu[key][newkey]}` : order;
        delivery = newkey =='price' ? delivery + menu[key][newkey] : delivery;
    }
}

console.log(`${order} | Стоимость заказа ${delivery}cумм`);


