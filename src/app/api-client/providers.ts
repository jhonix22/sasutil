import { Provider } from 'apptypes.api'

export const providers: {[index: string]: Provider} = {
	'sas': {
		'base': 'https://api.sizmek.com/rest',
		'reqHeaders': {
			'content-type': 'application/json'
		}
	},
	'msqb': {
		'base': 'http://10.10.1.149:8100',
		'reqHeaders': {
			'content-type': 'application/json'
		}
	}
}
