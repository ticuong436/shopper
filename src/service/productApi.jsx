import { api, endpoint } from './config'

const ProductApi = {
    catalog(page) {
        return fetch(`${endpoint}/product${page ? `?${page}` : ''}`).then(res => res.json())
    },
    detail(slug) {
        return fetch(`${endpoint}/product?slug=${slug}`, {
            method: 'GET',
        }).then(res => res.json())
    },
    categories() {
        return fetch(`${endpoint}/categories`, {
            method: 'GET',
        }).then(res => res.json())
    },
    search: (keyword = '') => {
        return fetch(`${endpoint}/product?search=${keyword}`).then(res => res.json())
    },
}
export default ProductApi