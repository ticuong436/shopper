import { Route, Switch, useRouteMatch } from "react-router";
import AccountAddress from "./AccountAddress"
import AccountAddressEdit from "./AccountAddressEdit"
import AccountInfor from "./AccountInfor"
import AccountOder from "./AccountOrder"
import AccountOrders from "./AccountOrders";
import AccountPayment from "./AccountPayment";
import AccountPaymentEdit from "./AccountPaymentEdit"
import AccountWidhlist from "./AccountWidhlist/index,";




export default function Acount() {
    let { path } = useRouteMatch()
    return (
        <>
            <Switch>
                <Route path={`${path}/account-address`} component={AccountAddress} />
                <Route path={`${path}/account-address-edit`} component={AccountAddressEdit} />
                <Route path={`${path}/account-infor`} component={AccountInfor} />
                <Route path={`${path}/account-order`} component={AccountOder} />
                <Route path={`${path}/account-orders`} component={AccountOrders} />
                <Route path={`${path}/account-payment`} component={AccountPayment} />
                <Route path={`${path}/account-payment-edit`} component={AccountPaymentEdit} />
                <Route path={`${path}/account-wishlist`} component={AccountWidhlist} />
                <Route exact path={`${path}/`} component={AccountInfor} />
            </Switch>
        </>
    )

}