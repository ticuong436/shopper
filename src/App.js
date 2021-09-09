import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from "./redux"
import { MainLayout } from './layout/MainLayout'
import Home from './page/Home'
import Faq from './page/Faq'
import ShoppingCart from './page/ShoppingCart'
import OrderCompleted from './page/OrderCompleted'
import About from './page/About'
import Products from './page/Product'
import Shop from './page/Shop'
import ShoppingAndReturn from "./page/ShoppingAndReturn"
import StoreLocator from "./page/StoreLocator"
import ContactUs from './page/ContactUs'
import CommingSoon from './page/CommingSoon'
import Checked from './page/Checked'
import Page404 from "./page/Page404"
import Account from "./page/Account"
import Auth from './page/Auth'
import "./asset/css/custom.scss"
import text from './test/text'
import PrivateRouter from './component/PrivateRouter'
import TranslateProvider from './core/useTranslate'
import vi from './translate/vi.json'
let translate = {

  vn: vi
}
function App() {
  return (
    <TranslateProvider translate={translate}>
      <Provider store={store}>
        <BrowserRouter>
          <MainLayout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/faq" component={Faq} />
              <Route path="/shopping-cart" component={ShoppingCart} />
              <Route path="/order-completed" component={OrderCompleted} />
              <Route path="/faq" component={Faq} />
              <Route path="/about" component={About} />
              <Route path="/product/:slug?" component={Products} />
              <Route path="/catalog/:slug?" component={Shop} />
              <Route path="/shipping-and-return" component={ShoppingAndReturn} />
              <Route path="/store-locator" component={StoreLocator} />
              <Route path="/contact-us" component={ContactUs} />
              <Route path="/comming-soon" component={CommingSoon} />
              <Route path="/checked" component={Checked} />
              <Route path="/text" component={text} />
              <PrivateRouter path="/account" component={Account} />
              <Route path="/login" component={Auth} />
              <Route component={Page404} />
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </Provider>
    </TranslateProvider>
  )
}

export default App;
