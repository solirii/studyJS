let title = 'Название проекта';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 46;
let rollBack = 74;
let fullPrice = 1500;
let adaptive = true;

console.log(typeof title, typeof fullPrice, typeof adaptive)
console.log(screens.length)
console.log('Стоимость верстки экранов' + " " + screenPrice + " " + 'рублей/ долларов/гривен/юани')

console.log('Стоимость разработки сайта' + ' ' + fullPrice + ' ' + 'рублей/ долларов/гривен/юани')

console.log(screens.toLowerCase().split())

console.log(fullPrice * rollBack / 100)