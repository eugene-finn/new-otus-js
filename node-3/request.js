const http = require('http')

let i = 0
const total = parseInt(process.argv[2], 10) || 10
const type = process.argv[3] || 'sequence'

const sendRequest = () => new Promise((resolve, reject) => {
  i++
  const req = http.request({
    port: 8000
  }, (res) => {
    resolve(i)
  })

  req.on('error', (e) => {
    console.error(`problem with ${i}: ${e}`)
    reject(i)
  })

  req.end()
})

async function sendAllSequential() {
  let j = 0
  while (j++ < total) {
    const index = await sendRequest()
  }
}

async function sendAllParallel() {
  await Promise.all(
    new Array(total)
    .fill(true)
    .map(sendRequest)
  )
}

(
  type === 'sequence' ?
  sendAllSequential :
  sendAllParallel
)()
.then(() => {
    console.log(`Fine on ${total} in ${type}`)
  })
  .catch((e) => {
    console.error(new Error(`Could not handle so much requests in ${type}`))
    console.error(j)
    console.error(e)
  })



// function request(requestQuantity, typeofRequest) {
//   if (typeofRequest === async) {
//     return requestQuantity
//   } else {
//     return requestQuantity
//   }
// }

// отправлять могу с помощью require('http')

// Создать скрипт `request`, принимающий на вход
// - количество запросов `N`
// - тип запросов - параллельный или последовательный

// Скрипт `request` должен отправлять `N` последовательных или параллельных 
// `HTTP` запросов к локальному серверу`server`


// https://ru.code-maven.com/argv-raw-command-line-arguments-in-nodejs

/*
Eugene[7: 46 AM]
По умолчанию Node.js предоставляет объект process, содержащий элемент argv, который является массивом всех значений, полученных из командной строки

Eugene[7: 48 AM]
Функция parseInt() принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления.

Yuriy Dvorzhetskiy[7: 49 AM]
Предполагается, что скрипт script.js будет вызываться вот так:
  `node script.js 10 sequence`

элемент имя файла, 10 запросов, или по умолчанию 10

Yuriy Dvorzhetskiy[8: 01 AM]
parseInt(process.argv[2], 10) - ну это мы распарсили строку в десятичной системе,
  parseInt(process.argv[2], 10) || 10 - это занчение по умолчанию, если такого занчения нет

Eugene[8: 02 AM]
и type это третье значение

Yuriy Dvorzhetskiy[8: 03 AM]
``
`node script.js 10 sequence
0    1         2  3`
``
а потому что argv[2] - это строчка
ЧТобы потом использовать его как число мы его парсим

Yuriy Dvorzhetskiy[8: 07 AM]
азхахах))) Ну можете)
`node script.js 0xFF sequence`
можете написать)

Eugene[8: 15 AM]
потом создаем промис, счетчик i++, который делает запрос на 8000 порту и ответ i для этого запроса

Yuriy Dvorzhetskiy[8: 15 AM]
Угу) Это для последовтельного запуска
НИже для паралельной)

Eugene[8: 34 AM]
const total = parseInt(process.argv[2], 10)
parseInt он 10 из командной строки переделает в 10 типа number для ноды ? а если без parseInt то нода будет думать что 10 это строка?

*/