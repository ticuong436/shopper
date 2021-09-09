import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router"
import useFormValidate from "../../hook/useFormValidate"
import Login from "./component/login"
import Register from "./component/register"

export default function Auth() {
    let { login } = useSelector(store => store.authReducer)
    if (login) {
        return <Redirect to="/account" />
    }
    return (
        <section className="py-12">
            <div className="container">
                <div className="row">
                    <Login />
                    <Register />

                </div>
            </div>
        </section>
    )

}