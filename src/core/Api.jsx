import { endpoint } from "../service/config";

export class Api {
    endpoint = ''
    useToken = false;
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    token() {
        this.useToken = true
        return this;

    }

    json(res) {
        if (res.status === 200) {
            return res.json()
        }
    }

    setUpHeader() {
        let header = {
            'Content-type': 'application/json'
        }
        if (this.useToken) {
            let token = JSON.parse(localStorage.getItem('token'))?.accessToken
            if (token) {
                header.Authorization = `Bearer ${token}`
            }
        }
        this.useToken = false
        return header;
    }
    async refreshToken() {
        let refreshToken = JSON.parse(localStorage.getItem('login'))?.token?.refreshToken
        if (refreshToken) {
            let res = await fetch(`${endpoint}/elearning/v4/refresh-token`, {
                method: 'POST',
                body: JSON.stringify({
                    refreshToken: refreshToken
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            console.log('refreshToken', res.data.accessToken);
            if (res?.data?.accessToken) {
                localStorage.setItem('token', JSON.stringify(res.data))
            }
        }
        return true
    }
    async request(url, options) {
        let response = await fetch(url, options)
        if (response.status === 200) {
            return response
        }
        if (response.status === 403) {
            await this.refreshToken()
            let token = JSON.parse(localStorage.getItem('token'))?.accessToken
            console.log('token moi', token);
            if (token) {
                options.headers.Authorization = `Bearer ${token}`
            }
            return fetch(url, options)
        }
        return new Promise((resolve, reject) => { })
    }
    get(url) {
        return this.request(this.endpoint + url, {
            method: 'GET'
        }).then(this.json)
    }
    post(url, data = {}) {
        let headers = this.setUpHeader()

        let body = JSON.stringify(data)
        return this.request(this.endpoint + url, {
            method: 'POST',
            headers,
            body
        }).then(this.json)

    }
    put(url, data = {}) {

        let headers = this.setUpHeader()

        let body = JSON.stringify(data)
        return this.request(this.endpoint + url, {
            method: 'PUT',
            headers,
            body
        }).then(this.json)

    }
    delete(url, data = {}) {
        let headers = this.setUpHeader()

        let body = JSON.stringify(data)
        return this.request(this.endpoint + url, {
            method: 'DELETE',
            headers,
            body
        }).then(this.json)

    }
}