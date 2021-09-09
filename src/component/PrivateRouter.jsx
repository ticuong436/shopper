import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

export default function PrivateRouter(prop) {
    let { login } = useSelector(store => store.authReducer)
    if (!login) {
        return <Route>
            <Redirect to='/login' />
        </Route>
    }
    return <Route {...prop} />
}