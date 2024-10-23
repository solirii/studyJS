let title
let screens
let screenPrice
let adaptive
let fullPrice
let rollBack = 10
let servicePercentPrice
let allServicePrices
let service1
let service2

const isNumber = function (num) {
    return !isNaN(parseFloat(num) && isFinite(num))
}

const isString = function () {
    return isNaN('')
}

const asking = function () {
    title = prompt('Как называется ваш проект?')
    screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные')

    do {
        screenPrice = prompt('Сколько будет стоить данная работа?')
    }
    while (!isNumber(screenPrice))

    adaptive = confirm('Нужен ли адаптив на сайте?')
}

const getAllServicePrices = function () {
    let sum = 0
    for (let i = 0; i < 2; i++) {
        let price = 0

        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?')
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?')
        }

        do {
            price = prompt('Сколько это будет стоить?')
        } while (!isNumber(price))

        sum += +price
    }

    return sum

}

const showTypeof = function (variable) {
    console.log(variable, typeof variable)

}

function getFullPrice() {
    return +screenPrice + allServicePrices
}

const getTitle = function () {
    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase()
}

function getServicePercentPrices() {
    return Math.ceil(fullPrice - (fullPrice * (rollBack / 100)))
}

switch (true) {
    case fullPrice >= 30000:
        console.log('Даем скидку в 10%');
        break
    case fullPrice >= 15000 && fullPrice < 30000:
        console.log('Даем скидку в 5%');
        break
    case fullPrice < 15000 && fullPrice > 0:
        console.log('Скидка не предусмотрена');
        break
    case fullPrice <= 0:
        console.log('Что то пошло не так');
        break

}

asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrices()
title = getTitle()

showTypeof(title)
showTypeof(screenPrice)
showTypeof(adaptive)

console.log('allServicePrices', allServicePrices)

console.log(typeof title)
console.log(typeof screenPrice)
console.log(typeof adaptive)

console.log(screens.length)
console.log(servicePercentPrice)

console.log('Стоимость верстки экранов' + " " + screenPrice + " " + 'рублей/ долларов/гривен/юани')
console.log('Стоимость разработки сайта' + ' ' + fullPrice + ' ' + 'рублей/ долларов/гривен/юани')
