
const cards = document.querySelector('.cards')
let count = 0

const showCard = async () => {
    count++
    if(count <= 10){
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
                const data = await response.json()
                const div = await document.createElement('div')
                div.setAttribute('class', `card-${count}`)
                cards.append(div)
                div.innerHTML = `
                     <div>
                        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdomskazki.com%2Fskazki-o-zhivotnyh%2Ftancujushhaja-obezjana-chuo%2F&psig=AOvVaw3lck2Kld60g2k8pbS3SxYf&ust=1677939011209000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLjfvIj4v_0CFQAAAAAdAAAAABAH" alt="macaca">
                        <h2>${data.title}</h2>
                        <span>${data.body}</span>
                    </div>
                `
                showCard()

            }catch {
                console.warn('ERROR')
            }
    }
}

showCard()