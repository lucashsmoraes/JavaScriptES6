import axios from 'axios'

class Api {
	static async getUserInfo(usename) {
		try {
			const response = await axios.get(`https://api.github.com/users/${usename}`)

			console.log(response.data)
		}catch (err) {
			console.warn("Erro na API")
		}
        
    }
}


// // Async/await
// const minhaPromise = () => new Promise((resolve, reject) => {
//     setTimeout(() => {resolve('Ok')}, 2000)
// })

// async function executaPromise() {
//     const response = await minhaPromise();
//     console.log(response)
// }

// executaPromise()

