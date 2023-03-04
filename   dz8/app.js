//первое задание

const URL = 'https://jsonplaceholder.typicode.com/photos'
const wrapper = document.querySelector('.wrapper')

const showImg = async (url) => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        data.slice(0, 200).forEach(item => {
            const block = document.createElement('div')
            block.setAttribute('class', 'block')
            block.innerHTML =`
                <img src="${item.url}" alt="тут должа быть картинка">
            `
            wrapper.append(block)
        })
    } catch {
        console.log('ERROR')
    } finally {
        console.log('FINALLY')
    }
}
showImg(URL)

// второе задание

const buttons = document.querySelectorAll('.news')
let count = 1;

const h2 = document.querySelector('h2'),
    span = document.querySelector('span'),
    h3 = document.querySelector('h3')


buttons.forEach(item => {
    item.addEventListener('click', async (e) => {
        if (e.target.textContent === 'следущая' && count <= 200) {
            try {
                count++
                const urlNew = `https://jsonplaceholder.typicode.com/posts/${count}`
                const response = await fetch(urlNew)
                const data = await response.json()

                h2.innerText = `${data.title}`
                span.innerHTML = `<img src="https://i.ytimg.com/vi/v62Pu6BxsuM/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-DoACuAiKAgwIABABGGUgZShlMA8=&rs=AOn4CLAMFD4m6PLmgLJ2FYMpaLgHoOh3HA" alt="">`
                h3.innerText = `${data.body}`
            } catch {
                console.log('ERROR')
            } finally {
                console.log('FINALLY')
            }
        } else if (e.target.textContent === 'прошлая' && count >= 2) {
            try {
                count--
                const urlNew = `https://jsonplaceholder.typicode.com/posts/${count}`
                const response = await fetch(urlNew)
                const data = await response.json()

                h2.innerText = `${data.title}`
                span.innerHTML = `<img src="https://i.ytimg.com/vi/v62Pu6BxsuM/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-DoACuAiKAgwIABABGGUgZShlMA8=&rs=AOn4CLAMFD4m6PLmgLJ2FYMpaLgHoOh3HA" alt="">`
                h3.innerText = `${data.body}`

            } catch {
                console.log('ERROR')
            } finally {
                console.log('FINALLY')
            }
        }
    })
})