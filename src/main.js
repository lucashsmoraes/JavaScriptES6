import axios from 'axios'

class Api {
    static async getUserInfo(usename) {
        const response = await axios.get(`https://api.github.com/users/${usename}`)

        console.log(response.data)
    }
}

Api.getUserInfo('lucashsmoraes')


// // Async/await
// const minhaPromise = () => new Promise((resolve, reject) => {
//     setTimeout(() => {resolve('Ok')}, 2000)
// })

// async function executaPromise() {
//     const response = await minhaPromise();
//     console.log(response)
// }

// executaPromise()

