const API_URL = 'http://localhost:3002/api'

const LogService = {
	createLog(log) {
		const request = {
			method: 'POST',
			body: JSON.stringify({ log: log }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/logs`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[LogService][createLog] ERROR: ', error)
			})
	},
	fetchLogs() {
		const request = {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/logs`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[LogService][createLog] ERROR: ', error)
			})
	}
}

export default LogService