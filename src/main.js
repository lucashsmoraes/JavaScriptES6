import axios from 'axios'

class App {
	constructor() {
		this.repositories = [];

		this.formEl = document.getElementById('repo-form');

		this.registerHandlers();
	}

	registerHandlers() {
		this.formEl.onsubmit = event => this.addRepository(event)
	}

	addRepository(event) {
		event.preventDefault()

		this.repositories.push({
			name:'Lucas Moraes',
			description: 'descrição',
			avatar_url: 'https://avatars1.githubusercontent.com/u/32342356?v=4',
			html_url: 'https://github.com/lucashsmoraes/JavaScriptES6'
		})
	}
}

new App()



