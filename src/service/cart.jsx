import { api } from "./config"

const Cart = {

    order: (data) => {
        return api.token().post('/ecommerce/v1/order', data)
    },
}
export default Cart