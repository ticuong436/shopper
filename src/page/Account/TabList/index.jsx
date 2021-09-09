import { useDispatch } from "react-redux";
import { Link, NavLink, useRouteMatch } from "react-router-dom";
import { LOGOUT } from "../../../redux/type";

export default function TabLst() {
  let { path } = useRouteMatch()
  let dispatch = useDispatch()
  function logout() {
    dispatch({
      type: LOGOUT,
    })

  }
  return (
    <nav className="mb-10 mb-md-0">
      <div className="list-group list-group-sm list-group-strong list-group-flush-x">
        <NavLink className="list-group-item list-group-item-action dropright-toggle " to='/account/account-orders'>
          Orders
                  </NavLink>
        <NavLink className="list-group-item list-group-item-action dropright-toggle " to="/account/account-wishlist">
          Widhlist
                  </NavLink>
        <NavLink className="list-group-item list-group-item-action dropright-toggle " exact to='/account'>
          Personal Info
                  </NavLink>
        <NavLink className="list-group-item list-group-item-action dropright-toggle " to="/account/account-address">
          Addresses
                  </NavLink>
        <NavLink className="list-group-item list-group-item-action dropright-toggle " to="/account/account-payment">
          Payment Methods
                  </NavLink>
        <NavLink className="list-group-item list-group-item-action dropright-toggle" to="/login" onClick={logout}>
          Logout
                  </NavLink>
      </div>
    </nav>
  )

}