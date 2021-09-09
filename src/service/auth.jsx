import { api } from './config'
const Auth = {

    login(data) {
        return api.post('/login', data)
    },
    register(data) {
        return api.post('/register', data)

    },
    update(data) {
        return api.token().post('/update-profile', data)
    }





}
export default Auth