import { endpoint } from '../services/config';

class Api {
	useToken = false;

	constructor(useToken, accessToken) {
		this.useToken = useToken;
	}

	useToken() {
		this.useToken = true;
		return this;
	}

	json(res) {
		if (res.status === 200) {
			return res.json();
		}

		return new Promise((resolve, reject) => {});
	}

	_header() {
		let header = {
			'Content-Type': 'application/json',
		};

		if (this.useToken) {
			let currentToken = JSON.parse(localStorage.getItem('user'))?.token?.accessToken;

			if (currentToken) {
				header.Authorization = `Bearer ${currentToken}`;
			}
		}

		this.useToken = false;
		return header;
	}

	async refreshToken() {
		let user = JSON.parse(localStorage.getItem('user'));
		let refreshToken = user?.token?.refreshToken;

		if (refreshToken) {
			let res = await fetch(`${endpoint}/elearning/v4/refresh-token`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					refreshToken: refreshToken,
				}),
			}).then((result) => result.json());

			let newAccessToken = res?.data?.accessToken;
			if (newAccessToken) {
				user.token = { ...user.token, accessToken: newAccessToken };
				localStorage.setItem('user', JSON.stringify(user));
				return newAccessToken;
			}
		}
		return false;
	}

	async request(url, options) {
		let res = await fetch(url, options);

		if (res.status === 200) {
			return res;
		}

		if (res.status === 403) {
			let newToken = await this.refreshToken();

			if (newToken) {
				options.headers.Authorization = `Bearer ${newToken}`;
				return fetch(url, options);
			}
		}

		return new Promise((resolve, reject) => {});
	}

	get(url) {
		let headers = this._header();

		return this.request(`${endpoint}${url}`, {
			headers,
		});
	}
	post(url, data = {}) {
		let headers = this._header();
		let body = JSON.stringify(data);

		return this.request(`${endpoint}${url}`, {
			method: 'POST',
			headers,
			body,
		}).then(this.json);
	}
	put(url, data = {}) {
		let headers = this._header();
		let body = JSON.stringify(data);

		return this.request(`${endpoint}${url}`, {
			method: 'PUT',
			headers,
			body,
		}).then(this.json);
	}
	delete(url) {
		let headers = this._setupHeader();
		return this.request(`${endpoint}${url}`, { method: 'DELETE', headers }).then(this.json);
	}
}

export default new Api();
