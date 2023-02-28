const block = document.querySelector('.block')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')
const h2 = document.querySelector('h2')
const span = document.querySelector('span')
const h3 = document.querySelector('h3')
let count = 1

btnNext.onclick = () => {
    count++
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            if (count <= 200) {

                h2.innerText = `${data.title}`
                span.innerText = `${data.id}`
                h3.innerText = `${data.completed}`
            } else {
                count = 200
                console.log('Error')
            }
        })
}

btnPrev.onclick = () => {
    count--
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            if (count >= 1) {
                h2.innerText = `${data.title}`
                span.innerText = `${data.id}`
                h3.innerText = `${data.completed}`
            } else {
                h2.innerText = ``
                span.innerText = ``
                h3.innerText = ``
                console.log('Error')
                count = 0
            }
        })
}


function log() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((par) => {
            console.log(par)
        })
}

log()